import { EUser } from '../enums';
import { IUser } from '../interface/index';
const initialState = {
    user: <IUser>{id: '', username: '', password: ''},   
};

const userReducer = (state = initialState, action: any) => {
    switch(action.type){
        case EUser.SET_USER:
            console.log("ACTION", action)
            return {...state, user: action.payload};
        case EUser.CLEAR_USER:
            return {...state, user: {id: '', username: '', password: ''}};
        default:
            return state;
    }
};


export default userReducer;