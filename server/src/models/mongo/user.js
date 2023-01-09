import * as mongoose from 'mongoose'
const {
    Schema
} = mongoose

const UserSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    }
}, {
    timestamps: true
})

export default mongoose.model("User", UserSchema)