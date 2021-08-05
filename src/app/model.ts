export default class Profile {
    userid: String;
    fullname: String;
    mobile: String;
    email: String;

    constructor(userid, fullname, mobile, email) {
        this.userid = userid;
        this.fullname = fullname;
        this.mobile = mobile;
        this.email = email;
    }
}

