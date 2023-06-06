import Realm from 'realm';
import {UsersSchema, NotesSchema} from './schemas';
import { IUser, INotes } from '../interface/index';
import useGenerateID from '../../hooks/useGenerateID';
import useEncrypter from '../../hooks/useEncrypter';
import {EUtils} from '../enums/index';
import useConvert from '../../hooks/useConvert';


function useDatabase() {
  const realm = new Realm({
    schema: [UsersSchema, NotesSchema],
    schemaVersion: 0,
  });
  const {ID} = useGenerateID();
  const {encryptText, decryptText} = useEncrypter();
  const {convertStringToMb} = useConvert();
  // USERS:BEGIN
  const addUser = (user: IUser) => {
    const _user = <IUser>getUserByName(user);
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
    }
  };
  const getAllUsers = () => {
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
    return userList;
  };
  const getUserByName = (user: IUser) => {
    const users = getAllUsers();

    if (users.length) {
      const _user = users.find(item => item.username === user.username);
      if (_user) {
        return _user;
      }
    } else {
      return {};
    }
  };
  const loginUser = (user: IUser) => {
    const users = getAllUsers();
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
    return {isLogin, user_};
  };
  //USERS:END

  //NOTES:BEGIN
  const getAllNotes = () => {
    const notes = realm.objects(NotesSchema.name);
    // console.log("WAKA WAKA", notes);
    return Array.from(notes);
  };

  const getAllNotesByUser = (id: string) => {
    const notes:any = getAllNotes();
    const _notes = notes.filter((item:INotes )=> item.userId === id);
    const listNotes = <INotes[]>[];
   if(_notes.length){
     _notes.forEach((element: INotes) => {
       listNotes.push({id: element.id, title: element.title, userId: element.userId, createAt: element.createAt, updateAt: element.updateAt, text: element.text, });
      });
   }
    return listNotes.sort((a:any,b:any) =>  b.updateAt.getTime() - a.updateAt.getTime());
  }

  const getNoteById = (id: string) => {
    const note:any = <INotes>realm.objectForPrimaryKey(NotesSchema.name, id);
    const _note = <INotes>{id: note.id, title: note.title, userId: note.userId, createAt: note.createAt, updateAt: note.updateAt,text: decryptText(note.text, EUtils.SECOND_KEY)};
    return _note;
  };

  const addNote = (note: INotes) => {
note.id = ID;
const date = new Date();
note.createAt = date;
note.updateAt = date;
const text = encryptText(note.text, EUtils.SECOND_KEY);
const newNote = <INotes>{id: note.id, text: text, title: note.title, userId: note.userId, createAt: note.createAt, updateAt: note.updateAt};
realm.write(() => {
  realm.create(NotesSchema.name, newNote);
});
return note.id;
  };

const updateNote = (note: INotes) => {

  realm.write(() => {
  const _note = <INotes>realm.objectForPrimaryKey(NotesSchema.name, note.id);
  if(_note){

    _note.text = encryptText(note.text, EUtils.SECOND_KEY);
    _note.title = note.title;
    _note.updateAt = new Date();
  }
})

};

const deleteNote = (note: INotes) => {
realm.write(() => {
  const _note = <INotes>realm.objectForPrimaryKey(NotesSchema.name, note.id);
  if(_note){
    realm.delete(_note);
  }
})
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

  };
}

export default useDatabase;
