import Realm from 'realm';
import {UsersSchema, NotesSchema} from './schemas';
import { IUser, INotes } from '../interface/index';
import useGenerateID from '../../hooks/useGenerateID';
import useEncrypter from '../../hooks/useEncrypter';
import {EUtils} from '../enums/index';
import useConvert from '../../hooks/useConvert';


function useDatabase() {
  // const realm = new Realm({
  //   schema: [UsersSchema, NotesSchema],
  //   schemaVersion: 0,
  // });
  const {ID} = useGenerateID();
  const {encryptText, decryptText} = useEncrypter();
  const {convertStringToMb} = useConvert();
  const schemaObject = {
    schema: [UsersSchema, NotesSchema],
    schemaVersion: 0,
  }
  // CREATE DATABASE:BEGIN

  const createDB = () =>{
    const path = Realm.defaultPath;
    const dbExist = Realm.exists({path: path});
    if(dbExist){
      // console.log("YA EXISTE UNA BASE DE DATOS");
    }else{
      const realm = new Realm(schemaObject);
      realm.close();
      // console.log("NO EXISTE BASE DE DATOS POR ENDE SE HA CREADO UNA NUEVA");
    }
  
  }

  // CREATE DATABASE:END

  // USERS:BEGIN
  const addUser = async(user: IUser) => {
    const _user =  <IUser> await getUserByName(user);
    const realm = await Realm.open(schemaObject);
    // console.log("ADD USER", realm);
    if (_user.username) {
      // console.log('ESTE USUARIO YA EXISTE');
    } else {
      user.id = ID;
      user.password = encryptText(user.password, EUtils.FIRST_KEY);
      const date = new Date();
      user.createAt = date;
      user.updateAt = date;
      realm.write(() => {
        realm.create(UsersSchema.name, user);
      });
    };
    realm.close();
    // console.log("SE HA CREADO UN NUEVO USUARIO");
  };
  const getAllUsers = async () => {
    const realm = await Realm.open(schemaObject);
    const users: any = realm.objects(UsersSchema.name);
    const userList: IUser[] = [];
    users.forEach((item: IUser) => {
      userList.push({
        id: item.id,
        username: item.username,
        password: item.password,
      });
    });

    // userList.forEach((item) => {
    //      item.password = decryptText(item.password, EUtils.FIRST_KEY);
    // });
    realm.close();
    // console.log("GET ALL USERS", userList);
    return userList;
  };
  const getUserByName = async (user: IUser) => {
    const users = await getAllUsers();
    const realm = await Realm.open(schemaObject);
    if (users.length) {
      const _user = <IUser> users.find(item => item.username === user.username);
      if (_user) {
        const _user_ = <IUser>{id: _user.id, username: _user.username, password: _user.password, createAt: _user.createAt, updateAt: _user.updateAt };
        realm.close();
        // console.log("getUserByName", _user_ );
        return _user_;
      }
    } else {
      realm.close();
      // console.log("getUserByName No Hay Usuario");
      return {};
    }
    realm.close();
  };
  const loginUser = async (user: IUser) => {
    const users = await getAllUsers();
    const realm = await Realm.open(schemaObject);
    let isLogin = false;
    let user_ = <IUser>{};
    if (users.length) {
      const _user = users.find(item => item.username === user.username);
      if (_user) {
        if (user.password === decryptText(_user.password, EUtils.FIRST_KEY)) {
          isLogin = true;
          user_ = _user;
        }
      }
    }
    realm.close();
    return {isLogin, user_};
  };
  //USERS:END

  //NOTES:BEGIN
  const getAllNotes = async () => {
    // console.log("GetAllNotes");
    const realm = await Realm.open(schemaObject);
    const notes = realm.objects(NotesSchema.name);
    // console.log("WAKA WAKA", notes);
    const notesArray = Array.from(notes);
    // realm.close();
    // console.log("GET ALL NOTES", notesArray);
    return {realm,notesArray};
  };

  const getAllNotesByUser = async (id: string) => {
    const {realm, notesArray} = await getAllNotes();
    // console.log("getAllNotesByUser", notesArray);
    const _notes = notesArray.filter((item:any )=> item.userId === id);
    const listNotes = <any[]>[];
   if(_notes.length){
     _notes.forEach((element: any) => {
       listNotes.push({id: element.id, title: element.title, userId: element.userId, createAt: element.createAt, updateAt: element.updateAt, text: element.text, });
      });
   };
   realm.close();
    return listNotes.sort((a:any,b:any) =>  b.updateAt.getTime() - a.updateAt.getTime());
  }

  const getNoteById = async (id: string) => {
    const realm = await Realm.open(schemaObject);
    const note:any = <INotes>realm.objectForPrimaryKey(NotesSchema.name, id);
    const _note = <INotes>{id: note.id, title: note.title, userId: note.userId, createAt: note.createAt, updateAt: note.updateAt,text: decryptText(note.text, EUtils.SECOND_KEY)};
    realm.close();
    return _note;
  };

  const addNote = async (note: INotes) => {
    const realm = await Realm.open(schemaObject);
note.id = ID;
const date = new Date();
note.createAt = date;
note.updateAt = date;
const text = encryptText(note.text, EUtils.SECOND_KEY);
const newNote = <INotes>{id: note.id, text: text, title: note.title, userId: note.userId, createAt: note.createAt, updateAt: note.updateAt};
realm.write(() => {
  realm.create(NotesSchema.name, newNote);
});
// console.log("ADD NOTE", note);
realm.close();
return note.id;
  };

const updateNote = async (note: INotes) => {
  const realm = await Realm.open(schemaObject);

  realm.write(() => {
  const _note = <INotes>realm.objectForPrimaryKey(NotesSchema.name, note.id);
  if(_note){

    _note.text = encryptText(note.text, EUtils.SECOND_KEY);
    _note.title = note.title;
    _note.updateAt = new Date();
  }
})
realm.close();
};

const deleteNote = async (note: INotes) => {
  const realm = await Realm.open(schemaObject);
realm.write(() => {
  const _note = <INotes>realm.objectForPrimaryKey(NotesSchema.name, note.id);
  if(_note){
    realm.delete(_note);
  }
}); 
realm.close();
}



  //NOTES:END

  return {
    // return-users:BEGIN
    addUser,
    getAllUsers,
    loginUser,
    getUserByName,
    // return-users:END
    // return-notes:BEGIN
    getAllNotes,
    getNoteById,
    addNote,
    getAllNotesByUser,
    updateNote,
    deleteNote,
    // return-notes:END
    createDB,
  };
}

export default useDatabase;
