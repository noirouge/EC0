import { ENote, EUser } from '../enums';
import { INotes, IUser } from '../interface/index';
const initialState = {
    user: <IUser>{id: '', username: '', password: ''},   
    note: <INotes>{id: '', text: '', title: '', userId: ''},
};

const userReducer = (state = initialState, action: any) => {
    switch(action.type){
        case EUser.SET_USER:
            // console.log("ACTION", action)
            return {...state, user: action.payload};
        case EUser.CLEAR_USER:
            return {...state, user: {id: '', username: '', password: ''}};
        case ENote.SET_NOTE:
            return {...state, note: action.payload};
        case ENote.CLEAR_NOTE:
            return {...state, note: {id: '', text: '', title: '', userId: ''}};
        default:
            return state;
    }
};


export default userReducer;