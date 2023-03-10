import moment from 'moment';
import paralidate from 'paralidate';
import {
	Op,
} from 'sequelize';

function paging(filters) {
	let options = {};
	if (filters.perPage && !isNaN(filters.perPage)) {
		options.limit = filters.perPage > 100 ? 100 : filters.perPage * 1;
		if (filters.full == "true") {
			options.limit = filters.perPage * 1;
		}
	} else {
		options.limit = 20; //default 20 items perPage
	}
	if (filters.page > 0) {
		options.offset = (filters.page - 1) * options.limit;
	} else {
		options.offset = 0;
	}
	return options;
}

const checkPager = paralidate({
	page: {
		type: 'int',
		required: false
	},
	perPage: {
		type: 'int',
		required: false
	}
}, {
	box: 'query',
	outputType: 'json'
})

function filterFromToCreated(created_from, created_to, where) {

	if (created_from) {
		let dateFrom = new Date(created_from + ' 00:00:00');
		if (dateFrom != 'Invalid Date') {
			where.created_at = {
				[Op.gte]: dateFrom
			};
		}
	}
	if (created_to) {
		let dateTo = new Date(created_to + ' 23:59:59');
		if (dateTo != 'Invalid Date') {
			where.created_at = {
				[Op.lte]: dateTo
			};
		}
	}
	if (created_from && created_to) {
		let dateFrom = new Date(created_from + ' 00:00:00');
		let dateTo = new Date(created_to + ' 23:59:59');
		if (dateFrom != 'Invalid Date' && dateTo != 'Invalid Date') {
			where.created_at = {
				[Op.between]: [dateFrom, dateTo]
			}
		}
	}
	return where;
}

function renderErr(where, ctx, status, field, type, check_type) {
	ctx.status = status;
	if (status == 404) {
		ctx.body = [{
			type: where,
			message: "Not Found",
			code: "Not Found",
			field: field
		}]
	}
	if (status == 409) {
		ctx.body = [{
			type: where,
			message: "Duplicated",
			code: "Conflict",
			field: field,
			data: type
		}]
	}
	if (status == 403) {
		ctx.body = [{
			type: where,
			message: field || "Permission",
			code: "Permission",
		}]
	}
	if (status == 500) {
		ctx.body = [{
			type: where,
			message: "Internal Server Error",
			code: "Internal",
			field: field
		}]
	}
	if (status == 400) {
		let code = "invalid";
		let message = "shoud be a :" + check_type;
		let field_sent = field
		if (type == 2) {
			code = "missing_field";
			message = "required";
		}
		ctx.body = [{
			type: where,
			message: message,
			code: code || '',
			field: field_sent,
		}]
	}

	return ctx;
}

function renderLogInfoMember(
	flagDate,
	member_id,
	column,
	old_data,
	new_data,
	type_creator,
	creator_info,
	reason,
	desc,

) {
	let data = {
		member_id: member_id || null,
		column: column || null,
		old_data: old_data || null,
		new_data: new_data || null,
		type_creator: type_creator || null,
		creator_info: creator_info || null,
		reason: reason || null,
		desc: desc || null

	}
	if (flagDate) {
		data.created_at = moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
	}
	return data
}

function renderLogInfoUser(
	flagDate,
	user_id,
	column,
	old_data,
	new_data,
	type_creator,
	creator_info,
	reason,
	desc,

) {
	let data = {
		user_id: user_id || null,
		column: column || null,
		old_data: old_data || null,
		new_data: new_data || null,
		type_creator: type_creator || null,
		creator_info: creator_info || null,
		reason: reason || null,
		desc: desc || null

	}
	if (flagDate) {
		data.created_at = moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
	}
	return data
}

function renderLog(
	column,
	old_data,
	new_data,
	type_creator,
	creator_info,
	reason,
	desc,

) {
	let data = {
		column: column || null,
		old_data: old_data || null,
		new_data: new_data || null,
		type_creator: type_creator || null,
		creator_id: creator_info ? creator_info.id : null,
		creator_info: creator_info || null,
		reason: reason || null,
		desc: desc || null,
		created_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")

	}
	return data
}

function renderLogModel(
	column,
	old_data,
	new_data,
	type_creator,
	creator_info,
	reason,
	desc,

) {
	let data = {
		column: column || null,
		old_data: old_data || null,
		new_data: new_data || null,
		type_creator: type_creator || null,
		creator_id: creator_info ? creator_info.id : null,
		creator_info: creator_info || null,
		reason: reason || null,
		desc: desc || null,

	}
	return data
}
export {
	renderErr,
	paging,
	checkPager,
	filterFromToCreated,
	renderLogInfoMember,
	renderLogInfoUser,
	renderLog,
	renderLogModel
}