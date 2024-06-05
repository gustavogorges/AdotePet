export class User {
    id !: number;
    name !: string;
    email !: string;
    telephone !: string;
    password !: string;
    bornDate !: string;
    type !: string;

    constructor(name: string, email: string, telephone: string, password: string, bornDate: string, userType: string) {
        this.name = name;
        this.email = email;
        this.telephone = telephone;
        this.bornDate = bornDate;
        this.password = password;
        this.type = userType;
    }
}