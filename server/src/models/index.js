import Enum from './enum-data';
import Member from './member';
import MemberPoint from './member-point';
import MemberLog from './member-logs';
import MemberLevel from './member-level';

import User from './user';
import UserType from './user-type';
import UserLog from './user-log';

import Question from './question'
import QuestionToObject from './question-to-object'
import Survey from './survey'
import SurveyToObject from './survey-to-object'
import SurveyResult from './survey-result'

import News from './news'
import NewsCategory from './news-category';
import NewsToObject from './news-to-objects';
import NewsLog from './news-logs';
import NewsCategoryLog from './news-category-logs';

import Comment from './comment'
import CommentLogs from "./comment-logs"
import Emotion from './emotion';

import Location from './location';

import SystemConfig from './system-config';
import SystemConfigLog from './system-config-log';

import Language from './language';
import LanguageLog from './language-log';
import TranslateKey from './translate-key';
import TranslateKeyLog from './translate-key-log';
import TranslateModule from './translate-module';
import TranslateModuleLog from './translate-module-log';
import TranslateLanguage from './translate-language';
import TranslateLanguageLog from './translate-language-log';

import Book from './book';
import BookChapter from './book-chapter';
import BookCategory from './book-category';
import BookToObject from './book-to-object';
import BookLog from './book-log';
import BookCategoryLog from './book-category-log';

import BMIResult from './bmi-result';
import BMIDetail from './bmi-detail';
import BMIType from './bmi-type';
import BMIDetailLog from './bmi-detail-log';

import ProductGroup from './product-group';
import ProductGroupLog from './product-group-log';
import Product from './product';
import ProductLog from './product-log';

import BadWord from './bad-word';

import StickerGroup from './sticker-group';
import Sticker from './sticker';
import StickerGroupLog from './sticker-group-log';
import StickerLog from './sticker-log';

import DB from './db';

import MediaFileLibrary from './media-file-library';
import MediaLibrary from './media-library';
import MediaFileLibraryLog from './media-file-library-log';

import Order from './order';
import OrderDetail from './order_detail';
import OrderLog from './order-log';
import MemberDelivery from './member-delivery';
import MemberDeliveryLog from './member-delivery-log';

import SMSLog from './sms-log';
import MediaLibraryLog from './media-library-log'
import MediaFile from './mediafile';


// -- User
User.belongsTo(UserType, {
    as: "user_type_info",
    foreignKey: 'type_id',
    sourceKey: 'id'
});
// -- Member
Member.hasOne(MemberPoint, {
    as: "point_info",
    foreignKey: 'member_id',
    targetKey: 'member_id'
});
Member.belongsTo(Location, {
    as: "city_info",
    foreignKey: 'city_id',
    sourceKey: 'id'
});
Member.belongsTo(Location, {
    as: "district_info",
    foreignKey: 'district_id',
    sourceKey: 'id'
});
Member.belongsTo(Location, {
    as: "ward_info",
    foreignKey: 'ward_id',
    sourceKey: 'id'
});
Member.belongsTo(MemberLevel, {
    as: "level_info",
    foreignKey: 'level_id',
    sourceKey: 'id'
});

// -- Survey
SurveyToObject.belongsTo(Question, {
    as: "question_info",
    foreignKey: 'obj_id',
    sourceKey: 'id'
});
Survey.hasMany(SurveyToObject, {
    as: "question",
    foreignKey: "survey_id",
    sourceKey: 'id',
    scope: {
        status: Enum.SurveyToObject.STATUS_ACTIVE.value
    }
});
Survey.hasMany(SurveyResult, {
    as: "survey_results",
    foreignKey: "survey_id",
    sourceKey: 'id'
});

// -- Question
Question.hasMany(QuestionToObject, {
    as: "answers",
    foreignKey: "question_id",
    sourceKey: 'id',
    scope: {
        status: Enum.QuestionToObject.STATUS_ACTIVE.value
    }
});

// -- News category
NewsCategory.hasMany(NewsCategory, {
    as: "childs",
    foreignKey: 'parent_id',
    sourceKey: 'id'
})

// -- News
News.belongsTo(NewsCategory, {
    as: "category_info",
    foreignKey: 'category_id',
    sourceKey: 'id'
});
// -- NewsToObject
NewsToObject.belongsTo(Product, {
    as: "product_info",
    foreignKey: 'obj_id',
    sourceKey: 'id'
});
// -- Emotion
Emotion.belongsTo(Member, {
    as: "member_info",
    foreignKey: "member_id",
    sourceKey: 'id'
})

// -- Book category
BookCategory.hasMany(BookCategory, {
    as: "childs",
    foreignKey: 'parent_id',
    sourceKey: 'id'
})

// -- Book
Book.belongsTo(BookCategory, {
    as: "category_info",
    foreignKey: 'category_id',
    sourceKey: 'id'
});
Book.hasMany(BookChapter, {
    as: "chapters",
    foreignKey: 'book_id',
    sourceKey: 'id',
    scope: {
        status: Enum.BookChapter.STATUS_ACTIVE.value
    }
});
//-- Product

Product.belongsTo(ProductGroup, {
    as: "group_info",
    foreignKey: 'group_id',
    sourceKey: 'id'
});
//-- Document
MediaFileLibrary.belongsTo(MediaLibrary, {
    as: "library_info",
    foreignKey: 'library_id',
    sourceKey: 'id'
});

// -- Emotion
Emotion.belongsTo(Member, {
    as: "member",
    foreignKey: "member_id",
    sourceKey: 'id'
})

//-- Sticker
Sticker.belongsTo(StickerGroup, {
    as: "group_info",
    foreignKey: "sticker_group_id",
    sourceKey: "id"
})
//-- MemberDelivery

MemberDelivery.belongsTo(Location, {
    as: "city_info",
    foreignKey: 'city_id',
    sourceKey: 'id'
})
MemberDelivery.belongsTo(Location, {
    as: "district_info",
    foreignKey: 'district_id',
    sourceKey: 'id'
})
MemberDelivery.belongsTo(Location, {
    as: "ward_info",
    foreignKey: 'ward_id',
    sourceKey: 'id'
})
//--- Order

OrderDetail.belongsTo(Order, {
    as: "order_info",
    foreignKey: 'order_id',
    sourceKey: 'id'
})
Order.hasMany(OrderDetail, {
    as: "order_info",
    foreignKey: 'order_id',
    sourceKey: 'id'
})
//--- BMIDetail

BMIDetail.hasMany(BMIType, {
    as: "types",
    foreignKey: 'bmi_detail_id',
    sourceKey: 'id'
})
//-- BMIType
BMIType.belongsTo(BMIDetail, {
    as: "bmi_detail_info",
    foreignKey: "bmi_detail_id",
    sourceKey: "id"
})
export {
    Member,
    MemberPoint,
    MemberLog,
    MemberLevel,

    User,
    UserLog,
    UserType,

    Question,
    QuestionToObject,
    Survey,
    SurveyToObject,
    SurveyResult,

    News,
    NewsCategory,
    NewsToObject,
    NewsLog,
    NewsCategoryLog,
    Comment,
    CommentLogs,

    Book,
    BookChapter,
    BookCategory,
    BookToObject,
    BookLog,
    BookCategoryLog,

    SystemConfig,
    SystemConfigLog,

    Language,
    LanguageLog,
    TranslateKey,
    TranslateKeyLog,
    TranslateModule,
    TranslateModuleLog,
    TranslateLanguage,
    TranslateLanguageLog,

    BMIResult,
    BMIDetail,
    BMIType,
    BMIDetailLog,
    Emotion,

    BadWord,

    MediaFileLibrary,
    MediaLibrary,
    MediaFileLibraryLog,
    MediaLibraryLog,

    Order,
    OrderDetail,
    OrderLog,
    MemberDelivery,
    MemberDeliveryLog,

    ProductGroup,
    ProductGroupLog,
    Product,
    ProductLog,

    StickerGroup,
    Sticker,
    StickerGroupLog,
    StickerLog,

    SMSLog,

    Location,
    Enum,
    DB,
    MediaFile
}