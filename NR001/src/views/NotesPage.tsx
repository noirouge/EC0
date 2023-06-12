import { useFocusEffect } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import useDatabase from '../core/bd/useDatabase';
import { ENote } from '../core/enums';
import { IProps, INotes } from '../core/interface/index';

function NotesPage({navigation}: IProps): JSX.Element {
  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState<INotes[]>([]);
  const { getAllNotesByUser} = useDatabase();
  const _user = useSelector((state:any) => state.user);
  const dispatch = useDispatch();

  const onSubmitSearch = () => {
    // console.log('SUBMIT SEARCH', search);
  };

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  const goConfig = () => {
    navigation.navigate('ConfigPage');
  };

  const goNew = () => {
    navigation.navigate('NotePage');
    dispatch({type: ENote.CLEAR_NOTE, });
  }

  const goEdit = (note: INotes) => {
    dispatch({type: ENote.SET_NOTE, payload: note});
    navigation.navigate("NotePage");
  }

  useFocusEffect(
    React.useCallback(() => {
     const doSome = async () => {
      setNotes(await getAllNotesByUser(_user.id));
     };
     doSome();
    }, [])
  );


  return (
    <View style={styles.container}>
      {/* <View style={styles.menu}>
        <TouchableWithoutFeedback onPress={goConfig}>
          <Icon style={styles.iconMenu} name="gear" size={30} color="white" />
        </TouchableWithoutFeedback>
        <TextInput
          style={styles.search}
          value={search}
          onChangeText={handleSearch}
          onSubmitEditing={onSubmitSearch}
          placeholder="buscador..."
          placeholderTextColor="gray"
        />
      </View> */}
      <ScrollView>
      <View style={styles.scrollBottom}>
        </View>
        {notes.map((item, index) => (
          <View style={styles.notaContainer} key={index}>
            <TouchableWithoutFeedback onPress={() => goEdit(item)}>
              <View style={styles.nota}>
                <Text style={styles.notaTitle}>{item.title.length ? item.title : 'No Title-' + (index + 1)}</Text>
                <Text style={styles.notaDate}>{item.updateAt ? "Updated: " +
                item.updateAt.getDate() + '/' +  (item.updateAt.getMonth() + 1 ) + '/' + item.updateAt.getFullYear() + "[" + 
                item.updateAt.getHours() + ':' + item.updateAt.getMinutes() + "]" : ''} & {item.createAt ? "Created: " +
                item.createAt.getDate() + '/' +  (item.createAt.getMonth() + 1 ) + '/' + item.createAt.getFullYear() + "[" + 
                item.createAt.getHours() + ':' + item.createAt.getMinutes() + "]" : ''} </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        ))}
        <View style={styles.scrollBottom}>
        </View>
      </ScrollView>
      <View style={styles.iconPlusContainer}>
      </View>
        <Icon onPress={goNew} style={styles.iconPlus} name="plus-circle" />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  textWhite: {
    color: 'white',
  },
  menu: {
    width: '100%',
    height: 40,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#373636',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconMenu: {
    marginStart: 5,
    left: 0,
    position: 'absolute',
  },
  search: {
    color: 'white',
    width: '91%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#292929',
    position: 'absolute',
    left: 35,
    fontSize: 15,
    height: '100%',
    backgroundColor: '#171717',
  },
  nota: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#292929',
    backgroundColor: '#181818',
    margin: 5,
    width: '100%',
    height: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  notaTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    height: 50,
    width: '80%',
  },
  notaDate: {
    color: 'white',
    position: 'absolute',
    bottom: 0,
    fontSize: 10,
  },
  notaContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconPlus: {
    color: '#910025',
    fontSize: 75,
    position: 'absolute',
    bottom: 3,
    right: 3,
  },
  iconPlusContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 9,
    right: 6,
    width: 60,
    height: 60,
    borderRadius: 50,
 
  },
  scrollBottom:{
    height: 20,
  }
});

export default NotesPage;
