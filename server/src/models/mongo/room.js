import * as mongoose from 'mongoose'
const {
    Schema
} = mongoose

const MemberSchema = new Schema({
    user_id: {
        type: String
    }
}, {
    timestamps: true
})
const RoomSchema = new Schema({
    members: {
        type: [MemberSchema]
    },
    name: {
        type: String,
        required: false,
        default: null
    }
}, {
    timestamps: true
})

export default mongoose.model("Room", RoomSchema)