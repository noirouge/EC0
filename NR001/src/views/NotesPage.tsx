import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput, TouchableWithoutFeedback, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IProps } from '../core/interface/index';


function NotesPage({navigation}: IProps): JSX.Element {
  const [search, setSearch] = useState('');

  const onSubmitSearch = () => {
    console.log("SUBMIT SEARCH", search);
  };

  const handleSearch = (text: string) => {
    setSearch(text);
  };

const goConfig = () => {
  navigation.navigate("ConfigPage");
}

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableWithoutFeedback onPress={goConfig}>
        <Icon style={styles.iconMenu} name="gear" size={30} color="white" />
        </TouchableWithoutFeedback>
        <TextInput style={styles.search} value={search} onChangeText={handleSearch} onSubmitEditing={onSubmitSearch} placeholder='buscador...' placeholderTextColor='gray' />
      </View>
      <Text style={styles.textWhite}>NOTAS</Text>
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
});

export default NotesPage;
