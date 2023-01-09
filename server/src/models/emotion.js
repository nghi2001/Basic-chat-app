import DB from './db';
import Sequelize, {
    Op
} from 'sequelize';
import _ from 'lodash';
import {
    Enum,
    Member
} from '.'

const Emotion = DB.define('Emotion', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    status: {
        type: Sequelize.INTEGER,
        defaultValue: Enum.Emotion.STATUS_INTERRACTED.value,
        des: "Trạng thái"
    },
    type: {
        type: Sequelize.INTEGER,
        defaultValue: Enum.Emotion.TYPE_LIKE.value,
        des: "Loại tương tác"
    },
    member_id: {
        type: Sequelize.INTEGER,
        des: "Id thành viên"
    },
    model_code: {
        type: Sequelize.STRING,
        des: "Mã đối tượng"
    },
    obj_id: {
        type: Sequelize.INTEGER,
        des: "Id đối tượng"
    },
    meta: {
        type: Sequelize.JSONB,
        defaultValue: {},
        allowNull: true,
        des: "Thông tin thêm"
    }
}, {
    tableName: 'emotions',
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    deletedAt: 'deleted_at',
    underscored: true,
    timestamps: true
});
//#region enum

function renderInclude() {
    return [{
        model: Member,
        as: "member_info",
        attributes: [
            "id",
            "name",
        ]
    }]
}

function renderIncludeList() {
    return [{
        model: Member,
        as: "member_info",
        attributes: []
    }]
}

Emotion.getOne = async (id) => {
    let condition = {}
    condition.id = DB.where(DB.literal(`("Emotion"."id")::TEXT`), {
        [Op.eq]: id
    })
    let data = await Emotion.findOne({
        include: renderInclude(),
        where: condition
    });
    return data || null;
}
Emotion.getList = async (filter, pager) => {

    let where = filter || {};
    let data = await Emotion.findAll(_.assign({
        where: where,
        include: renderIncludeList(),
        order: [
            ["created_at", "DESC"]
        ],
        attributes: [
            [DB.literal(`"member_info"."id"`), "member_id"],
            [DB.literal(`"member_info"."name"`), "member_name"],
            [DB.literal(`"member_info"."images"->'avatar'`), "member_avatar"],
        ],
        raw: true,
        logging: false
    }, pager));

    let total = await Emotion.count({
        where: where
    });
    data = JSON.parse(JSON.stringify(data, null, " "));

    return {
        total: total,
        data: data
    };
}
export default Emotion;