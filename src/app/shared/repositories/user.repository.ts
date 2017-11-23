import { User } from "../interfaces/user";


export class UserRepository {
    constructor() {

    }

    private users: Array<User>;

    public getUsers = () => {
        return this.users;
    }

    public getUserById = (id:number) => {
        return this.users.find(u => u.id == id);
    }

    public saveUser = (user: User) => {
        this.users.push(user);
    }

    public updateUser = (user: User) => {

    }


}