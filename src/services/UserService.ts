import { IUserMap } from "../models/IUserMap";

export class UserService{
    private static users:IUserMap[]=[
        {SNo:1,name:'aman',age:28},
        {SNo:2,name:'akash',age:29},
        {SNo:3,name:'mithun',age:26},
        {SNo:4,name:'anushka',age:41},
    ]
    public static getAllUsers(){
        return this.users
    }
}