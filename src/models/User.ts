export class User {
    id !: number;
    name !: string;
    email !: string;
    telephone !: string;
    password !: string;
    bornDate !: string;

    constructor(name: string, email: string, telephone: string, password: string, bornDate: string) {
        this.name = name;
        this.email = email;
        this.telephone = telephone;
        this.password = password;
        this.bornDate = bornDate;
    }
}