import mongoose from 'mongoose';
import {
    cfg
} from '../../config'
console.log(`mongodb://${cfg("DB_HOST")}:${cfg("DB_PORT")}/chat`);
mongoose.connect(`mongodb://${cfg("DB_HOST")}:${cfg("DB_PORT")}/chat`)
    .then(() => {
        console.log("db connected");
    })
    .catch(err => console.log(err))

export default mongoose