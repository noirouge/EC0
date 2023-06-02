import Realm from "realm";
import {UsersSchema, NotesSchema} from "./schemas";
import { IUser, INotes } from '../interface/index';
import useGenerateID from "../../hooks/useGenerateID";
import useEncrypter from "../../hooks/useEncrypter";
import {EUtils} from '../enums/index';

function useDatabase(){
    const realm = new Realm({schema: [UsersSchema, NotesSchema], schemaVersion: 0});
    const {ID} = useGenerateID();
    const {encryptText, decryptText} = useEncrypter();
    const addUser = (user: IUser) => {
        const _user = <IUser>getUserByName(user);
        if(_user.username){
            console.log("ESTE USUARIO YA EXISTE");
        }else{
            user.id = ID;
            user.password = encryptText(user.password, EUtils.FIRST_KEY);
            const date = new Date();
            const todayDate = date.toUTCString();
            user.createAt = todayDate;
            user.updateAt = todayDate;
            realm.write(() => {
                realm.create(UsersSchema.name, user)
            });
        };
    };
    const getAllUsers = () => {
        const users: any = realm.objects(UsersSchema.name);
        const userList:IUser[] = [];
        users.forEach((item:IUser) => {
            userList.push({id: item.id, username: item.username, password: item.password, });
        });

        // userList.forEach((item) => {
        //      item.password = decryptText(item.password, EUtils.FIRST_KEY);
        // });
        return userList;
    };
    const getUserByName = (user: IUser) => {
        const users = getAllUsers();

        if(users.length){
        const _user = users.find(item => item.username === user.username);
        if(_user){
            return _user;
        }
        }else{
            return {}
        }

    };
    const loginUser = (user: IUser) => {
        console.log("loginUser user", user);
        const users = getAllUsers();
        let isLogin = false;
        if(users.length){
            const _user = users.find(item => item.username === user.username);
            if(_user){
                if(user.password === decryptText(_user.password, EUtils.FIRST_KEY)){
                    isLogin = true;
                }
            }
        }
        return isLogin;
    };
    
    


    return{addUser, getAllUsers, loginUser}
}

export default useDatabase;