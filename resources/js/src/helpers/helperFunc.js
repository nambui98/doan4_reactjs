import notification from "../components/notification";

const helperFunc = {
  fomatDateTime: m => {
    return "DD/MM/YYYY HH:mm:ss";
  },
  minutesOfDay: m => {
    return m.minutes() + m.hours() * 60;
  },
  convertNumber: number => {
    if (!isNaN(number)) {
      return number.toFixed(0).replace(/./g, function (c, i, a) {
        return i && c !== "," && (a.length - i) % 3 === 0 ? "," + c : c;
      });
    } else {
      return 0;
    }
  },
  trimByWord: sentence => {
    let result = sentence;
    let resultArray = result.split(" ");
    if (resultArray.length > 7) {
      resultArray = resultArray.slice(0, 7);
      result = resultArray.join(" ") + "...";
    }
    return result;
  },
  dummyRequest: ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 2000);
  },
  beforeUpload: file => {
    const isJPG = file.type === "image/jpeg";
    const isPNG = file.type === "image/png";
    if (!isJPG && !isPNG) {
      notification("error", "You can only upload Image file!", "");
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 12;
    if (!isLt2M) {
      notification("error", "Image must smaller than 12MB!", "");
      return false;
    }
  },
  beforeUploadFile: file => {
    const isZip = file.type === "application/zip";
    const isX_ZIP = file.type === "application/x-zip";
    const isX_ZIPC = file.type === "application/x-zip-compressed";
    if (!isZip && !isX_ZIP && !isX_ZIPC) {
      notification("error", "You can only upload file!", "");
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 12;
    if (!isLt2M) {
      notification("error", "Image must smaller than 12MB!", "");
      return false;
    }
  },

  getBase64: (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => { return callback(reader.result) });
    reader.readAsDataURL(img);
  },
  isEmptyObject: obj => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  },
  dateFormat: "YYYY/MM/DD",
  Front: {
    Home: 0,
    properties: {
      0: { name: "Home", url: "/home", login: "home-login", key: "home" }
    }
  },
  twoDecimal: num => {
    if (!isNaN(num)) {
      return Math.round(num * 100) / 100;
    } else {
      return 0;
    }
  },
  convertUnsignedString: s => {
    let str = s.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
  },
  status: {
    Active: 1,
    Inactive: 2,
    properties: {
      1: "Active",
      2: "Inactive"
    }
  },
  statusIncident: {
    Read: 1,
    Pending: 2,
    properties: {
      1: "Read",
      2: "Pending"
    }
  },
  yesNo: {
    Yes: 1,
    No: 2,
    properties: {
      1: "Yes",
      2: "No"
    }
  },
  group: [
    {
      key: 1,
      name: "Backlambs"
    },
    { key: 2, name: "Wolfdogs" },
    { key: 3, name: "wildhuter" }
  ],
  typeCharacterProps: [
    { key: 1, name: "Passive Skill" },
    { key: 2, name: "Trainee" },
    { key: 3, name: "Novice Agent" },
    { key: 4, name: "Regular Agent" },
    { key: 5, name: "Special Agent" },
    { key: 6, name: "Skill Ticket(Able to learn beyond level 30)" },
  ],
  slideType: {
    Slide: 1,
    Banner: 2,
    properties: {
      1: "Slide (Image Size: 630x260)",
      2: "Banner (Image Size: 250x121)"
    }
  },
  category: {
    Normal: 1,
    Hot: 2,
    New: 3,
    properties: {
      1: "Normal",
      2: "Hot",
      3: "New"
    }
  },
  categoryAbout: [
    { key: 1, name: "OverView" },
    { key: 2, name: "Team" },
    { key: 3, name: "Area" },
    { key: 4, name: "NPC" },
    { key: 5, name: "Page (Policy)" },
    { key: 6, name: "Page (Term & Codition)" }
  ],
  modeType: {
    Insert: "insert",
    Update: "edit",
    View: "view",
    None: "none",
    properties: {
      insert: "ADD NEW",
      edit: "UPDATE",
      view: "VIEW",
      none: ""
    }
  }
};
export default helperFunc;
