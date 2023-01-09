import jwt from 'jsonwebtoken';
import {
	cfg
} from '../config';
import User from '../models/mongo/user';
import {
	readFileAsync
} from '../services/file';

async function verifyTokenSocket(socket, next) {
	const token = socket.handshake.auth.token;
	if(token != "null"){
		const pubCert = await readFileAsync(cfg('JWT_PUBLIC_KEY'), String);
		const data = jwt.verify(token, pubCert, {
			algorithms: "ES256"
		});
		socket.handshake.user = data;
		next()
	} else {
		console.log('-----------------FALSE');
		socket.disconnect(true)
	}
}
async function verifyToken(ctx, next) {
	let tokenInQuery = ctx.request.query.token;
	if (ctx.header && !ctx.header.authorization) {
		ctx.header.authorization = ""
	}
	let parts = null;
	if (tokenInQuery) {
		parts = ['Bearer', tokenInQuery];
	} else {
		parts = ctx.request.header.authorization.split(' ');
	}
	if (parts.length === 2) {
		const scheme = parts[0];
		const credentials = parts[1];
		if (/^Bearer$/i.test(scheme)) {
			const pubCert = await readFileAsync(cfg('JWT_PUBLIC_KEY'), String);
			try {
				const trustedData = jwt.verify(credentials, pubCert, {
					algorithms: 'ES256'
				});
				let user = await User.findById(trustedData.id);
				if (!user) {
					ctx.throw(401, 'Authentication Error');
				}
				ctx.state = {
					user: trustedData
				}
			} catch (err) {
				ctx.throw(401, 'Authentication Error');
			}
		} else {
			ctx.throw(401, 'Bad Authorization header format. Format is "Authorization: Bearer <token>"');
		}
	} else {
		ctx.throw(401, 'Bad Authorization header format. Format is "Authorization: Bearer <token>"');
	}
	await next();
}

export {
	verifyToken,
	verifyTokenSocket
};