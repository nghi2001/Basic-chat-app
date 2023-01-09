import * as mongoose from 'mongoose'
const {
    Schema
} = mongoose

const MessageSchema = new Schema({
    room_id: {
        type: Schema.Types.ObjectId,
        ref: "Room"
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    message: {
        type: String
    }
}, {
    timestamps: true
})

export default mongoose.model("Message", MessageSchema)