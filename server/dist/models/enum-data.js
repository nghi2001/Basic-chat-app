"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var Enum = /*#__PURE__*/(0, _createClass2["default"])(function Enum() {
  (0, _classCallCheck2["default"])(this, Enum);
  // Ngôn ngử mặc định
  this.LANG_VI = {
    value: "vi",
    des: "Việt nam"
  };
  // Giới tính
  this.GENDER_MALE = {
    value: 1,
    des: "Nam"
  };
  this.GENDER_FEMALE = {
    value: 2,
    des: "Nữ"
  };
  this.GENDERS = [this.GENDER_MALE, this.GENDER_FEMALE];
  // Loại người dùng ghi logs
  this.RENDER_LOG_TYPE_CREATOR_MEMBER = {
    value: 1,
    des: "Member"
  };
  this.RENDER_LOG_TYPE_CREATOR_USER = {
    value: 2,
    des: "User"
  };
  this.RENDER_LOG_TYPE_CREATOR_SYSTEM = {
    value: 3,
    des: "System"
  };
  this.Product = enumProduct();
  this.ProductGroup = enumProductGroup();
  this.BadWord = enumBadWord();
  this.StickerGroup = enumStickerGroup();
  this.Sticker = enumSticker();
  this.MediaFileLibrary = enumMediaFileLibrary();
  this.MediaLibrary = enumMediaLibrary();
  this.SMSLog = enumSMSLog();
  this.BookCategoryLog = enumBookCategoryLog();
  this.BookCategory = enumBookCategory();
  this.BookChapter = enumBookChapter();
  this.BooksLog = enumBooksLog();
  this.BooksToObject = enumBooksToObject();
  this.Book = enumBook();
  this.CommentLogs = enumCommentLogs();
  this.Comment = enumComment();
  this.Emotion = enumEmotion();
  this.LanguageLog = enumLanguageLog();
  this.Language = enumLanguage();
  this.MemberLevel = enumMemberLevel();
  this.MemberLogs = enumMemberLogs();
  this.Member = enumMember();
  this.NewsCategoryLog = enumNewsCategoryLog();
  this.NewsCategory = enumNewsCategory();
  this.Location = enumLocation();
  this.NewLog = enumNewLog();
  this.NewsToObject = enumNewsToObject();
  this.News = enumNews();
  this.QuestionToObject = enumQuestionToObject();
  this.Question = enumQuestion();
  this.SurveyResult = enumSurveyResult();
  this.SurveyToObject = enumSurveyToObject();
  this.SystemConfigLog = enumSystemConfigLog();
  this.SystemConfig = enumSystemConfig();
  this.TranslateKeyLog = enumTranslateKeyLog();
  this.TranslateKey = enumTranslateKey();
  this.TranslateLanguageLog = enumTranslateLanguageLog();
  this.TranslateLanguage = enumTranslateLanguage();
  this.TranslateModuleLog = enumTranslateModuleLog();
  this.TranslateModule = enumTranslateModule();
  this.UserLog = enumUserLog();
  this.UserType = enumUserType();
  this.User = enumUser();
  this.Order = enumOrder();
  this.MemberDelivery = enumMemberDelivery();
  this.Survey = enumSurvey();
  this.BMIDetail = enumBMIDetail();
  this.BMIType = enumBMIType();
  this.BMIResult = enumBMIResult();
}); // Sản phẩm
function enumProduct() {
  var data = {};
  // Loại
  data.TYPE_SINGLE = {
    value: 1,
    des: "Đơn"
  };
  data.TYPE_COMBO = {
    value: 2,
    des: "Combo"
  };
  data.TYPES = [data.TYPE_SINGLE, data.TYPE_COMBO];
  // Trạng thái
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Chưa hoạt động"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
// Nhóm Sản phẩm
function enumProductGroup() {
  var data = {};
  // Loại
  data.TYPE_DEFAULT = {
    value: 1,
    des: "Mặc định"
  };
  data.TYPE_CUSTOME = {
    value: 2,
    des: "Tùy chỉnh"
  };
  data.TYPES = [data.TYPE_DEFAULT, data.TYPE_CUSTOME];
  // Trạng thái
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Chưa hoạt động"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  data.CODE_BO_SAN_PHAM = {
    value: "PC_BO_SAN_PHAM",
    des: "Bộ sản phẩm Cà Phê Thiền"
  };
  data.CODE_SAN_PHAM = {
    value: "PC_SAN_PHAM",
    des: "Sản phẩm sử dụng trong quá trình Thiền"
  };
  data.CODE_CONG_CU_DUNG_CU_HO_TRO = {
    value: "PC_CONG_CU_DUNG_CU_HO_TRO",
    des: "Công cụ, dụng cụ hỗ trợ quá trình Thiền"
  };
  data.CODE_GOC_TINH_THUC = {
    value: "PC_GOC_TINH_THUC",
    des: "Góc tỉnh thức"
  };
  data.CODES = [data.CODE_BO_SAN_PHAM, data.CODE_SAN_PHAM, data.CODE_CONG_CU_DUNG_CU_HO_TRO, data.CODE_GOC_TINH_THUC];
  return data;
}
// Từ cấm
function enumBadWord() {
  var data = {};
  // Trạng thái
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
function enumStickerGroup() {
  var data = {};
  data.TYPE_DEFAULT = {
    value: 1,
    des: "Mặc định"
  };
  data.TYPES = [data.TYPE_DEFAULT];
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}

// Thư viện
function enumMediaLibrary() {
  var data = {};
  // Trạng thái
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Ngưng hoạt động"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  data.LC_BOOK = {
    value: "LC_BOOK",
    des: "Book"
  };
  data.LC_VIDEO = {
    value: "LC_VIDEO",
    des: "Video"
  };
  data.LC_AUDIO = {
    value: "LC_AUDIO",
    des: "Audio"
  };
  data.LC_OTHER = {
    value: "LC_OTHER",
    des: "Tài liệu khác"
  };
  data.LIBRARY_CODE = [data.LC_BOOK, data.LC_VIDEO, data.LC_AUDIO, data.LC_OTHER];
  return data;
}
function enumSticker() {
  var data = {};
  data.TYPE_DEFAULT = {
    value: 1,
    des: "Mặc định"
  };
  data.TYPES = [data.TYPE_DEFAULT];
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Đang hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Chưa hoạt động"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
// Document
function enumMediaFileLibrary() {
  var data = {};
  // Trạng thái
  data.STATUS_PENDING = {
    value: 1,
    des: "Chờ kiểm duyệt"
  };
  data.STATUS_APPROVED = {
    value: 2,
    des: "Đã kiểm duyệt"
  };
  data.STATUS_DISAPPROVED = {
    value: -2,
    des: "Từ chối kiểm duyệt"
  };
  data.STATUS_PAUSED = {
    value: 3,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_PENDING, data.STATUS_APPROVED, data.STATUS_DISAPPROVED, data.STATUS_PAUSED];
  return data;
}
function enumSMSLog() {
  var data = {};
  data.TYPE_SUCCESS = {
    value: 1,
    des: "Thành công"
  };
  data.TYPE_ERROR_SERVER = {
    value: -1,
    des: "Lỗi hệ thống"
  };
  data.TYPE_ERROR_SMS = {
    value: -2,
    des: "Lỗi bên thứ 3"
  };
  data.TYPES = [data.TYPE_SUCCESS, data.TYPE_ERROR_SERVER, data.TYPE_ERROR_SMS];
  return data;
}
function enumBookCategoryLog() {
  var data = {};
  data.TYPE_DEFAULT = {
    value: 1,
    des: "Mặc định"
  };
  data.TYPES = [data.TYPE_DEFAULT];
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}

// news-Logs
function enumNewLog() {
  var data = {};
  data.TYPE_DEFAULT = {
    value: 1,
    des: "Mặc định"
  };
  data.TYPES = [data.TYPE_DEFAULT];
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
function enumBookCategory() {
  var data = {};
  data.TYPE_DEFAULT = {
    value: 1,
    des: "Mặc định"
  };
  data.TYPE_CUSTOM = {
    value: 2,
    des: "Tùy chỉnh"
  };
  data.TYPES = [data.TYPE_DEFAULT, data.TYPE_CUSTOM];
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];

  // Thiền
  data.CATEGORY_CODE_THIEN = {
    value: "BC_THIEN",
    des: "Thiền cà phê"
  };
  data.CATEGORY_CODE_SUB_THIEN = {
    parent_code: "BC_THIEN",
    value: "BC_SUB_THIEN",
    des: "Thiền cà phê",
    render_type: "news"
  };
  // Khai phá
  data.CATEGORY_CODE_KHAI_PHA = {
    value: "BC_KHAI_PHA",
    des: "Khai phá"
  };
  data.CATEGORY_CODE_SUB_BAI_THIEN_CA_PHE = {
    parent_code: "BC_KHAI_PHA",
    value: "BC_SUB_BAI_THIEN_CA_PHE",
    des: "Bài thiền cà phê",
    render_type: "news"
  };
  data.CATEGORY_CODE_SUB_HUONG_DAN_AN_UONG_THUC_DUONG = {
    parent_code: "BC_KHAI_PHA",
    value: "BC_SUB_HUONG_DAN_AN_UONG_THUC_DUONG",
    des: "Hướng dẫn ăn uống thực dưỡng",
    render_type: "news"
  };
  data.CATEGORY_CODE_SUB_SACH_DOI_DOI = {
    parent_code: "BC_KHAI_PHA",
    value: "BC_SUB_SACH_DOI_DOI",
    des: "5 đầu sách đổi đời",
    render_type: "book"
  };

  // Thăng hoa
  data.CATEGORY_CODE_THANG_HOA = {
    value: "BC_THANG_HOA",
    des: "Thăng hoa cùng thiền cà phê"
  };
  data.CATEGORY_CODE_SUB_REN_THAN = {
    parent_code: "BC_THANG_HOA",
    value: "BC_SUB_REN_THAN",
    des: "Rèn thân",
    render_type: "category"
  };
  data.CATEGORY_CODE_SUB_DUONG_TAM = {
    parent_code: "BC_THANG_HOA",
    value: "BC_SUB_DUONG_TAM",
    des: "Dưỡng tâm",
    render_type: "news"
  };
  data.CATEGORY_CODE_SUB_LUYEN_TRI_PHIM = {
    parent_code: "BC_THANG_HOA",
    value: "BC_SUB_LUYEN_TRI_PHIM",
    des: "Luyện trí(Tủ phim)",
    render_type: "news"
  };
  data.CATEGORY_CODE_SUB_LUYEN_TRI_SACH = {
    parent_code: "BC_THANG_HOA",
    value: "BC_SUB_LUYEN_TRI_SACH",
    des: "Luyện trí(Tủ sách)",
    render_type: "book"
  };
  // Khai mở
  data.CATEGORY_CODE_KHAI_MO = {
    value: "BC_KHAI_MO",
    des: "Khai mở thân tâm trí"
  };
  data.CATEGORY_CODE_SUB_TU_PHIM_DOI_DOI = {
    parent_code: "BC_KHAI_MO",
    value: "BC_SUB_TU_PHIM_DOI_DOI",
    des: "Tủ phim đổi đời",
    render_type: "news"
  };
  data.CATEGORY_CODE_SUB_HUONG_DAN_PHA_CHE = {
    parent_code: "BC_KHAI_MO",
    value: "BC_SUB_HUONG_DAN_PHA_CHE",
    des: "Hướng dẫn pha cà phê",
    render_type: "news"
  };
  data.CATEGORY_CODE_SUB_NHAC_THIEN = {
    parent_code: "BC_KHAI_MO",
    value: "BC_SUB_NHAC_THIEN",
    des: "Nhạc Thiền",
    render_type: "news"
  };
  data.CATEGORY_CODE_SUB_TAI_LIEU_KHAC = {
    parent_code: "BC_KHAI_MO",
    value: "BC_SUB_TAI_LIEU_KHAC",
    des: "Tài liệu khác",
    render_type: "news"
  };
  data.CATEGORY_CODE_SUB_TU_SACH_NEN_TANG = {
    parent_code: "BC_KHAI_MO",
    value: "BC_SUB_TU_SACH_NEN_TANG",
    des: "Tủ sách nền tảng",
    render_type: "book"
  };
  data.CATEGORY_CODES = [
  // Thiền
  data.CATEGORY_CODE_THIEN, data.CATEGORY_CODE_SUB_THIEN,
  // Khai phá
  data.CATEGORY_CODE_KHAI_PHA, data.CATEGORY_CODE_SUB_BAI_THIEN_CA_PHE, data.CATEGORY_CODE_SUB_HUONG_DAN_AN_UONG_THUC_DUONG, data.CATEGORY_CODE_SUB_SACH_DOI_DOI,
  // Thăng hoa
  data.CATEGORY_CODE_THANG_HOA, data.CATEGORY_CODE_SUB_REN_THAN, data.CATEGORY_CODE_SUB_DUONG_TAM, data.CATEGORY_CODE_SUB_LUYEN_TRI_SACH, data.CATEGORY_CODE_SUB_LUYEN_TRI_PHIM,
  // Khai mở
  data.CATEGORY_CODE_KHAI_MO, data.CATEGORY_CODE_SUB_TU_PHIM_DOI_DOI, data.CATEGORY_CODE_SUB_HUONG_DAN_PHA_CHE, data.CATEGORY_CODE_SUB_NHAC_THIEN, data.CATEGORY_CODE_SUB_TAI_LIEU_KHAC, data.CATEGORY_CODE_SUB_TU_SACH_NEN_TANG];
  return data;
}
function enumBookChapter() {
  var data = {};
  data.TYPE_DEFAULT = {
    value: 1,
    des: "Mặc định"
  };
  data.TYPES = [data.TYPE_DEFAULT];
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
function enumBooksLog() {
  var data = {};
  data.TYPE_DEFAULT = {
    value: 1,
    des: "Mặc định"
  };
  data.TYPES = [data.TYPE_DEFAULT];
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
function enumBooksToObject() {
  var data = {};
  data.TYPE_PRODUCT = {
    value: 1,
    des: "Sản phẩm liên quan"
  };
  data.TYPES = [data.TYPE_PRODUCT];
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
function enumNewsToObject() {
  var data = {};
  data.TYPE_PRODUCT = {
    value: 1,
    des: "Sản phẩm liên quan"
  };
  data.TYPES = [data.TYPE_PRODUCT];
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
function enumBook() {
  var data = {};
  data.TYPE_DEFAULT = {
    value: 1,
    des: "Mặc định"
  };
  data.TYPES = [data.TYPE_DEFAULT];
  data.STATUS_NEW = {
    value: 1,
    des: "Mới tạo"
  };
  data.STATUS_ACTIVE = {
    value: 2,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -2,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_NEW, data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  data.COMMENT_STATUS_OPEN = {
    value: 1,
    des: "Mở"
  };
  data.COMMENT_STATUS_CLOSE = {
    value: -1,
    des: "Đóng"
  };
  data.COMMENT_STATUES = [data.COMMENT_STATUS_OPEN, data.COMMENT_STATUS_CLOSE];
  return data;
}
function enumNews() {
  var data = {};
  data.TYPE_DEFAULT = {
    value: 1,
    des: "Mặc định"
  };
  data.TYPES = [data.TYPE_DEFAULT];
  data.STATUS_NEW = {
    value: 1,
    des: "Mới tạo"
  };
  data.STATUS_ACTIVE = {
    value: 2,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -2,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_NEW, data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  data.COMMENT_STATUS_OPEN = {
    value: 1,
    des: "Mở"
  };
  data.COMMENT_STATUS_CLOSE = {
    value: -1,
    des: "Đóng"
  };
  data.COMMENT_STATUES = [data.COMMENT_STATUS_OPEN, data.COMMENT_STATUS_CLOSE];
  return data;
}
function enumCommentLogs() {
  var data = {};
  data.TYPE_EDIT = {
    value: 1,
    des: "Cập nhật thông tin"
  };
  return data;
}
function enumComment() {
  var data = {};
  data.MODEL_CODE_NEWS = {
    value: "C_NEWS",
    des: "Bài viết"
  };
  data.MODEL_CODES = [data.MODEL_CODE_NEWS];
  data.STATUS_WARNING = {
    value: -1,
    des: "Cảnh báo"
  };
  data.STATUS_ACTIVE = {
    value: 2,
    des: "Hiển thị"
  };
  data.STATUS_INACTIVE = {
    value: -2,
    des: "Khóa"
  };
  data.STATUSES = [data.STATUS_WARNING, data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
function enumEmotion() {
  var data = {};
  data.MODEL_CODE_NEWS = {
    value: "C_NEWS",
    des: "Bài viết"
  };
  data.MODEL_CODES = [data.MODEL_CODE_NEWS];
  // interacted
  data.STATUS_INTERRACTED = {
    value: 1,
    des: "Đã tương tác"
  };
  data.STATUS_UNINTERRACTED = {
    value: -1,
    des: "Hủy tương tác"
  };
  data.STATUSES = [data.STATUS_INTERRACTED, data.STATUS_UNINTERRACTED];
  data.TYPE_LIKE = {
    value: 1,
    des: "like"
  };
  data.TYPES = [data.TYPE_LIKE];
  return data;
}
function enumLanguageLog() {
  var data = {};
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
function enumQuestionToObject() {
  var data = {};
  data.TYPE_ANSWER_SELECT = {
    value: 1,
    des: "Đáp án chọn"
  };
  data.TYPE_ANSWER_INPUT = {
    value: 2,
    des: "Đáp án nhập"
  };
  data.TYPE_ANSWERS = [data.TYPE_ANSWER_SELECT, data.TYPE_ANSWER_INPUT];
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
function enumQuestion() {
  var data = {};
  data.TYPE_SURVEY = {
    value: 1,
    des: "Khảo sát"
  };
  data.TYPES = [data.TYPE_SURVEY];
  data.ANSWER_TYPE_ONE = {
    value: 1,
    des: "Một đáp án"
  };
  data.ANSWER_TYPE_MULTIPLE = {
    value: 2,
    des: "Nhiều đáp án"
  };
  data.ANSWER_TYPES = [data.ANSWER_TYPE_ONE, data.ANSWER_TYPE_MULTIPLE];
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
function enumLanguage() {
  var data = {};
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Đang hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm Ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
function enumSurveyResult() {
  var data = {};
  data.TYPE_SURVEY = {
    value: 1,
    des: "Khảo sát"
  };
  data.TYPES = [data.TYPE_SURVEY];
  data.STATUS_NEW = {
    value: 1,
    des: "Mới tạo"
  };
  data.STATUS_ACTIVE = {
    value: 2,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -2,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
function enumSurveyToObject() {
  var data = {};
  data.TYPE_QUESTION = {
    value: 1,
    des: "Câu hỏi"
  };
  data.TYPES = [data.TYPE_QUESTION];
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
function enumSystemConfigLog() {
  var data = {};
  data.APP_VERSION_IOS = {
    id: 1,
    value: "Ios"
  };
  data.APP_VERSION_ANDROID = {
    id: 2,
    value: "Android"
  };
  data.STATUS_ACTIVE = {
    id: 1,
    value: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    id: -1,
    value: "Tạm ngưng"
  };
  return data;
}
function enumSystemConfig() {
  var data = {};
  data.APP_VERSION_IOS = {
    value: 1,
    des: "iOs"
  };
  data.APP_VERSION_ANDROID = {
    value: 2,
    des: "Android"
  };
  data.APP_VERSIONS = [data.APP_VERSION_IOS, data.APP_VERSION_ANDROID];
  data.APP_VERSION_REQUIRED_TRUE = {
    value: true,
    des: "Có"
  };
  data.APP_VERSION_REQUIRED_FALSE = {
    value: false,
    des: "Không"
  };
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
function enumTranslateKeyLog() {
  var data = {};
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
function enumTranslateKey() {
  var data = {};
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Đang hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  data.TYPE_BUTTON = {
    value: 1,
    des: "Button"
  };
  data.TYPE_TEXT = {
    value: 2,
    des: "Text"
  };
  data.TYPES = [data.TYPE_BUTTON, data.TYPE_TEXT];
  return data;
}
function enumTranslateLanguageLog() {
  var data = {};
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
function enumTranslateLanguage() {
  var data = {};
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Đang hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm Ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
function enumLocation() {
  var data = {};
  data.TYPE_WARD = {
    value: 1,
    des: "Phường Xã"
  };
  data.TYPE_DISTRICT = {
    value: 2,
    des: "Quận huyện"
  };
  data.TYPE_CITY_PROVINCE = {
    value: 3,
    des: "Tỉnh thành phố"
  };
  data.TYPE_COUNTRY = {
    value: 4,
    des: "Quốc gia"
  };
  return data;
}
function enumMemberLevel() {
  var data = {};
  data.TYPE_DEFAUL = {
    value: 1,
    des: "Mặc định"
  };
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
function enumTranslateModuleLog() {
  var data = {};
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
function enumTranslateModule() {
  var data = {};
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Đang hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm Ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
function enumUserLog() {
  var data = {};
  data.TYPE_EDIT = {
    value: 1,
    des: "Cập nhật thông tin"
  };
  data.TYPE_LOG_IN_OUT = {
    value: 2,
    des: "Lịch sủ đăng nhập , đăng xuất"
  };
  return data;
}
function enumUserType() {
  var data = {};
  data.TYPE_DEFAUL = {
    value: 1,
    des: "Mặc định"
  };
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
function enumMemberLogs() {
  var data = {};
  data.TYPE_EDIT = {
    value: 1,
    des: "Cập nhật thông tin"
  };
  data.TYPE_LOG_IN_OUT = {
    value: 2,
    des: "Lịch sủ đăng nhập , đăng xuất"
  };
  return data;
}
function enumMember() {
  var data = {};
  data.STATUS_NEW = {
    value: 1,
    des: "Mới kích hoạt"
  };
  data.STATUS_ACTIVE = {
    value: 2,
    des: "Đang hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -2,
    des: "Tạm Ngưng"
  };
  data.STATUSES = [data.STATUS_NEW, data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  data.LOGIN_STATUS_ON = {
    value: 1,
    des: "Online"
  };
  data.LOGIN_STATUS_OFF = {
    value: -1,
    des: "Offline"
  };
  data.TYPE_DEFAULT = {
    value: 1,
    des: "Default"
  };
  data.ATTRIBUTES_ACTIVE_PHONE = {
    value: "phone",
    des: "Kích hoạt bởi số điện thoại"
  };
  data.ATTRIBUTES_ACTIVE_EMAIL = {
    value: "email",
    des: "Kích hoạt bởi email"
  };
  return data;
}
function enumUser() {
  var data = {};
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  data.LOGIN_STATUS_ON = {
    value: 1,
    des: "Online"
  };
  data.LOGIN_STATUS_OFF = {
    value: -1,
    des: "Offline"
  };
  data.TYPE_DEFAULT = {
    value: 1,
    des: "Default"
  };
  return data;
}
function enumNewsCategoryLog() {
  var data = {};
  data.TYPE_DEFAULT = {
    value: 1,
    des: "Mặc định"
  };
  data.TYPES = [data.TYPE_DEFAULT];
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}
// Giỏ hàng
function enumOrder() {
  var data = {};
  // Trạng thái
  data.STATUS_NEW = {
    value: 1,
    des: "Mới tạo"
  };
  data.STATUS_CONFIRM = {
    value: 2,
    des: "Đã xác nhận"
  };
  data.STATUS_CANCEL = {
    value: -2,
    des: "Hủy"
  };
  data.STATUS_PICKED_UP = {
    value: 3,
    des: "Kho đã tiếp nhận"
  };
  data.STATUS_PROCESSING = {
    value: 4,
    des: "Chuẩn bị đơn hàng"
  };
  data.STATUS_DELIVERING = {
    value: 5,
    des: "Đang vận chuyển"
  };
  data.STATUS_DONE = {
    value: 6,
    des: "Giao hàng thành công"
  };
  data.STATUSES = [data.STATUS_NEW, data.STATUS_CONFIRM, data.STATUS_PICKED_UP, data.STATUS_PROCESSING, data.STATUS_DELIVERING, data.STATUS_DONE];
  // Loại Thanh toán
  data.PAY_TYPE_MONEY = {
    value: 1,
    des: "Tiền mặt"
  };
  data.PAY_TYPE_VNPAY = {
    value: 2,
    des: "VN Pay"
  };
  data.PAY_TYPE = [data.PAY_TYPE_MONEY, data.PAY_TYPE_VNPAY];
  // Loại
  data.TYPE_DEFAULT = {
    value: 1,
    des: "Mặc định"
  };
  data.TYPES = [data.TYPE_DEFAULT];
  return data;
}
// Địa chỉ giao hàng
function enumMemberDelivery() {
  var data = {};
  // Trạng thái
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  // Loại
  data.TYPE_HOUSE = {
    value: 1,
    des: "Nhà"
  };
  data.TYPE_OFFICE = {
    value: 2,
    des: "Văn phòng"
  };
  data.TYPES = [data.TYPE_HOUSE, data.TYPE_OFFICE];
  // Là mặc đĩnh
  data.IS_DEFAULT = {
    value: 1,
    des: "Địa chỉ nhận hàng mặc định"
  };
  data.IS_NOT_DEFAULT = {
    value: -1,
    des: "Địa chỉ nhận hàng bình thường"
  };
  data.DEFAULT = [data.IS_DEFAULT, data.IS_NOT_DEFAULT];
  return data;
}
function enumNewsCategory() {
  var data = {};
  data.TYPE_DEFAULT = {
    value: 1,
    des: "Mặc định"
  };
  data.TYPE_CUSTOM = {
    value: 2,
    des: "Tùy chỉnh"
  };
  data.TYPES = [data.TYPE_DEFAULT, data.TYPE_CUSTOM];
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Đang hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Chưa hoạt động"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];

  // Thiền
  data.CATEGORY_CODE_THIEN = {
    value: "NC_THIEN",
    des: "Thiền cà phê"
  };
  data.CATEGORY_CODE_SUB_THIEN = {
    parent_code: "NC_THIEN",
    value: "NC_SUB_THIEN",
    des: "Thiền cà phê",
    render_type: "news"
  };
  // Khai phá
  data.CATEGORY_CODE_KHAI_PHA = {
    value: "NC_KHAI_PHA",
    des: "Khai phá"
  };
  data.CATEGORY_CODE_SUB_BAI_THIEN_CA_PHE = {
    parent_code: "NC_KHAI_PHA",
    value: "NC_SUB_BAI_THIEN_CA_PHE",
    des: "Bài thiền cà phê",
    render_type: "news"
  };
  data.CATEGORY_CODE_SUB_HUONG_DAN_AN_UONG_THUC_DUONG = {
    parent_code: "NC_KHAI_PHA",
    value: "NC_SUB_HUONG_DAN_AN_UONG_THUC_DUONG",
    des: "Hướng dẫn ăn uống thực dưỡng",
    render_type: "news"
  };
  data.CATEGORY_CODE_SUB_SACH_DOI_DOI = {
    parent_code: "NC_KHAI_PHA",
    value: "NC_SUB_SACH_DOI_DOI",
    des: "5 đầu sách đổi đời",
    render_type: "book"
  };

  // Thăng hoa
  data.CATEGORY_CODE_THANG_HOA = {
    value: "NC_THANG_HOA",
    des: "Thăng hoa cùng thiền cà phê"
  };
  data.CATEGORY_CODE_SUB_REN_THAN = {
    parent_code: "NC_THANG_HOA",
    value: "NC_SUB_REN_THAN",
    des: "Rèn thân",
    render_type: "category"
  };
  data.CATEGORY_CODE_SUB_DUONG_TAM = {
    parent_code: "NC_THANG_HOA",
    value: "NC_SUB_DUONG_TAM",
    des: "Dưỡng tâm",
    render_type: "news"
  };
  data.CATEGORY_CODE_SUB_LUYEN_TRI_PHIM = {
    parent_code: "NC_THANG_HOA",
    value: "NC_SUB_LUYEN_TRI_PHIM",
    des: "Luyện trí (Tủ phim)",
    render_type: "news"
  };
  data.CATEGORY_CODE_SUB_LUYEN_TRI_SACH = {
    parent_code: "NC_THANG_HOA",
    value: "NC_SUB_LUYEN_TRI_SACH",
    des: "Luyện trí (Tủ sách)",
    render_type: "book"
  };
  // Khai mở
  data.CATEGORY_CODE_KHAI_MO = {
    value: "NC_KHAI_MO",
    des: "Khai mở thân tâm trí"
  };
  data.CATEGORY_CODE_SUB_TU_PHIM_DOI_DOI = {
    parent_code: "NC_KHAI_MO",
    value: "NC_SUB_TU_PHIM_DOI_DOI",
    des: "Tủ phim đổi đời",
    render_type: "news"
  };
  data.CATEGORY_CODE_SUB_HUONG_DAN_PHA_CHE = {
    parent_code: "NC_KHAI_MO",
    value: "NC_SUB_HUONG_DAN_PHA_CHE",
    des: "Hướng dẫn pha cà phê",
    render_type: "news"
  };
  data.CATEGORY_CODE_SUB_NHAC_THIEN = {
    parent_code: "NC_KHAI_MO",
    value: "NC_SUB_NHAC_THIEN",
    des: "Nhạc Thiền",
    render_type: "news"
  };
  data.CATEGORY_CODE_SUB_TAI_LIEU_KHAC = {
    parent_code: "NC_KHAI_MO",
    value: "NC_SUB_TAI_LIEU_KHAC",
    des: "Tài liệu khác",
    render_type: "news"
  };
  data.CATEGORY_CODES = [
  // Thiền
  data.CATEGORY_CODE_THIEN, data.CATEGORY_CODE_SUB_THIEN,
  // Khai phá
  data.CATEGORY_CODE_KHAI_PHA, data.CATEGORY_CODE_SUB_BAI_THIEN_CA_PHE, data.CATEGORY_CODE_SUB_HUONG_DAN_AN_UONG_THUC_DUONG, data.CATEGORY_CODE_SUB_SACH_DOI_DOI,
  // Thăng hoa
  data.CATEGORY_CODE_THANG_HOA, data.CATEGORY_CODE_SUB_REN_THAN, data.CATEGORY_CODE_SUB_DUONG_TAM, data.CATEGORY_CODE_SUB_LUYEN_TRI_SACH, data.CATEGORY_CODE_SUB_LUYEN_TRI_PHIM,
  // Khai mở
  data.CATEGORY_CODE_KHAI_MO, data.CATEGORY_CODE_SUB_TU_PHIM_DOI_DOI, data.CATEGORY_CODE_SUB_HUONG_DAN_PHA_CHE, data.CATEGORY_CODE_SUB_NHAC_THIEN, data.CATEGORY_CODE_SUB_TAI_LIEU_KHAC];
  return data;
}
function enumSurvey() {
  var data = {};
  data.TYPE_SURVEY = {
    value: 1,
    des: "Khảo sát"
  };
  data.TYPES = [data.TYPE_SURVEY];
  data.STATUS_NEW = {
    value: 1,
    des: "Mới tạo"
  };
  data.STATUS_ACTIVE = {
    value: 2,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -2,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  return data;
}

// Chi tiết BMI
function enumBMIDetail() {
  var data = {};
  // Trạng thái
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  // Loại hiển thị
  data.RENDER_TYPE_DEFAULT = {
    value: 1,
    des: "Mặc định"
  };
  data.RENDER_TYPE_CUSTOM = {
    value: 2,
    des: "Tùy chỉnh"
  };
  data.TYPES = [data.RENDER_TYPE_DEFAULT, data.RENDER_TYPE_CUSTOM];
  return data;
}
// Loại BMI
function enumBMIType() {
  var data = {};
  // Trạng thái
  data.STATUS_ACTIVE = {
    value: 1,
    des: "Hoạt động"
  };
  data.STATUS_INACTIVE = {
    value: -1,
    des: "Tạm ngưng"
  };
  data.STATUSES = [data.STATUS_ACTIVE, data.STATUS_INACTIVE];
  // Loại hiển thị
  data.RENDER_TYPE_DEFAULT = {
    value: 1,
    des: "Mặc định"
  };
  data.RENDER_TYPE_CUSTOM = {
    value: 2,
    des: "Tùy chỉnh"
  };
  data.TYPES = [data.RENDER_TYPE_DEFAULT, data.RENDER_TYPE_CUSTOM];
  data.CONDITION_FROM_GREATER_THAN = {
    value: 1,
    des: "Lớn hơn",
    render: ">"
  };
  data.CONDITION_FROM_GREATER_THAN_EQUAL = {
    value: 2,
    des: "Lớn hơn hoặc bằng",
    render: ">="
  };
  data.CONDITION_TO_LESS_THAN = {
    value: 1,
    des: "Nhỏ hơn",
    render: "<"
  };
  data.CONDITION_TO_LESS_THAN_EQUAL = {
    value: 2,
    des: "Nhỏ hơn hoặc bằng",
    render: "<="
  };
  data.CONDITION_FROM = [data.CONDITION_FROM_GREATER_THAN, data.CONDITION_FROM_GREATER_THAN_EQUAL];
  data.CONDITION_TO = [data.CONDITION_TO_LESS_THAN, data.CONDITION_TO_LESS_THAN_EQUAL];
  data.CODE_BMI_UNDERWEIGHT = {
    value: "Thiếu cầ",
    code: "BMI_UNDERWEIGHT"
  };
  data.CODE_BMI_HEALTHY = {
    value: "Bình thường",
    code: "BMI_HEALTHY"
  };
  data.BMI_OVERWEIGHT = {
    value: "Thừa cân",
    code: "BMI_OVERWEIGHT"
  };
  return data;
}
// BMIResult
function enumBMIResult() {
  var data = {};
  data.TYPE_DAY = {
    value: 1,
    des: "Ngày"
  };
  data.TYPE_OF_DAY = {
    value: 2,
    des: "Trong Ngày"
  };
  data.STATUS_NEW = {
    value: 1,
    des: "Mới tạo"
  };
  data.STATUS_UPDATED = {
    value: -1,
    des: "Đã cập nhật"
  };
  data.STATUSES = [data.STATUS_NEW, data.STATUS_UPDATED];
  return data;
}
var _default = new Enum();
exports["default"] = _default;