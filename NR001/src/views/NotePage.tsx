import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import useDatabase from '../core/bd/useDatabase';
import {INotes, IProps} from '../core/interface/';
function NotePage({navigation}: IProps): JSX.Element {
  const {addNote, updateNote, getNoteById, deleteNote} = useDatabase();
  const _user = useSelector((state: any) => state.user);
  const _note = useSelector((state: any) => state.note);
  const [note, setNote] = useState<INotes>({
    id: '',
    text: '',
    title: '',
    userId: _user.id,
  });
  const [isEdited, setIsEdited] = useState(false);
  const saveNote = (note_: INotes) => {
    if (note.id.length) {
      // console.log("EXISTE NOTA");
      updateNote({...note_});
    } else {
      // console.log("NO EXISTE NOTA");
      const id = addNote({...note_});
      if (id.length) {
        setNote({...note_, id: id});
      }
    }
  };

  const handleTitle = (text: string) => {
    // console.log("TITLE LENGHT", text.length);
    if (text.length >= 1000) {
      // console.log("TITULO MAYOR QUE MIL");
      return;
    }
    setNote({...note, title: text});
    setIsEdited(true);
    // console.log("_USER", note);
    // saveNote({...note, title: text});
  };
  const handleContent = (text: string) => {
    // console.log('TEXT LENGTH', text.length);
    if (text.length > 30000) {
      // console.log('MAYOR QUE 25000');
      return;
    }
    setNote({...note, text: text});
    setIsEdited(true);
    // console.log("_USER", note);
    // saveNote({...note, text: text});
  };

  const eraseNote = () => {
    Alert.alert(
      'ELIMINAR NOTA',
      'REALMENTE QUIERES ELIMINAR ESTA NOTA',
      [
        {
          text: 'NO',
          onPress: () => {},
        },
        {
          text: 'SI',
          onPress: () => {
            if (note.id) {
              deleteNote(note);
              navigation.goBack();
            }
          },
        },
      ],
      {cancelable: true},
    );
  };

  const goBack = () => {
    if (isEdited) {
      if (note.text.length || note.title.length) {
        saveNote(note);
      } else if (note.id.length && !note.text.length && !note.title.length) {
        deleteNote(note);
      }
    }
    navigation.goBack();
  };

  const scrollRef: any = useRef(null);

  const scrollToEnd = () => {
    scrollRef.current.scrollToEnd();
  };

  const scrollToTop = () => {
    scrollRef.current.scrollTo({y: 0, animated: true});
  };

  useEffect(() => {
    // console.log("_NOTE", _note);
    if (_note.id.length) {
      setNote(getNoteById(_note.id));
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableWithoutFeedback onPress={goBack}>
          <Icon
            style={styles.iconBack}
            name="arrowleft"
            size={30}
            color="white"
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={scrollToTop}>
          <Icon
            style={styles.iconUp}
            name="upcircleo"
            size={30}
            color="white"
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={scrollToEnd}>
          <Icon
            style={styles.iconDown}
            name="downcircleo"
            size={30}
            color="white"
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={eraseNote}>
          <Icon style={styles.iconMenu} name="delete" size={30} color="white" />
        </TouchableWithoutFeedback>
      </View>

      <ScrollView ref={scrollRef}>
        <TextInput
          value={note.title}
          onChangeText={handleTitle}
          style={styles.title}
          multiline
          placeholder="Titulo..."
          placeholderTextColor="gray"
        />
        <TextInput
          value={note.text}
          style={styles.content}
          onChangeText={handleContent}
          multiline
          placeholder="Contenido..."
          placeholderTextColor="gray"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
  },
  textWhite: {
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    color: 'white',
    fontSize: 17,
  },
  iconMenu: {
    color: 'red',
    right: 0,
    position: 'absolute',
  },
  iconBack: {
    color: 'white',
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  iconUp: {
    position: 'absolute',
    left: '40%',
  },
  iconDown: {
    position: 'absolute',
    left: '50%',
  },
});

export default NotePage;
