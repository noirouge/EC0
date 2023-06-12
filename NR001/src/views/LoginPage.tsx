import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import useDatabase from '../core/bd/useDatabase';
import {IUser, IProps} from '../core/interface/index';
import {useSelector, useDispatch} from 'react-redux';
import {EUser} from '../core/enums';
import Realm from 'realm';
// import useConvert from '../hooks/useConvert';


function LoginPage({navigation}: IProps): JSX.Element {
  // Realm.deleteFile({path: Realm.defaultPath});
  const {addUser, loginUser, getAllUsers} = useDatabase();
  const [user, setUser] = useState<IUser>({
    username: '',
    password: '',
    id: '',
  });
  // const {convertStringToMb} = useConvert();
  // console.log('LOGIN USERS', getAllUsers());
  // getAllUsers();

  const _user = useSelector((state:any) => state.user);
  const dispatch = useDispatch();

  const uNameChange = (text: string) => {
    // console.log('NAME CHANGE', convertStringToMb(text));
    setUser({...user, username: text});
  };

  const pwdChange = (text: string) => {
    // console.log('PWD CHANGE', text);
    setUser({...user, password: text});
  };

  const login = async () => {
    // console.log("USER STORE", _user)
    const {isLogin, user_} = await loginUser(user);
    const users: IUser[] = await getAllUsers();
    if(user.username.length === 0 || user.password.length === 0){
      // console.log("UN CAMPO ESTA VACIO");
      return;
    }
    if (users.length) {
      if (isLogin) {
        // user.id = "WAKA";
        
        dispatch({type: EUser.SET_USER, payload: user_});
        // console.log('STATE', _user);
        navigation.navigate('NotesPage');
        // dispatch(() => clearUser());
      } else {
        // console.log('NO');
      }
    } else {
      addUser(user);
      // console.log("SE CREO UN USUARIO");
      setUser({id: '', password: '', username: ''});
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          value={user.username}
          onChangeText={uNameChange}
          style={styles.text}
          placeholder="USERNAME..."
          placeholderTextColor="gray"
        />
      </View>
      <View style={styles.input}>
        <TextInput
          value={user.password}
          onChangeText={pwdChange}
          style={styles.text}
          placeholder="PASSWORD..."
          secureTextEntry={true}
          placeholderTextColor="gray"
        />
      </View>
      <TouchableOpacity onPress={login} style={styles.btnLogin}>
        <Text style={styles.text}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    margin: 2,
    width: '70%',
    borderColor: 'white',
    borderStyle: 'solid',
    backgroundColor: '#0C0C0C',
  },
  text: {
    color: 'white',
  },
  btnLogin: {
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '70%',
    height: 50,
    backgroundColor: '#181616',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginPage;
