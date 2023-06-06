import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {NavigationProp, useFocusEffect} from '@react-navigation/native';
import {IProps} from '../core/interface/index';

function MainPage({navigation}: IProps): JSX.Element {
  const [pattern, setPattern] = useState('');
  const verifyPattern = (p: string) => {
    const newPattern = pattern + p;
    setPattern(newPattern);
    if (newPattern === 'DARK') {
      navigation.navigate('LoginPage');
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      setPattern('');
    }, []),
  );

  return (
    <View style={{...styles.container, ...styles.w100}}>
      <View style={{...styles.cuadros, ...styles.w100}}>
        <TouchableWithoutFeedback onPress={() => verifyPattern('A')}>
          <View style={styles.cuadro}></View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => verifyPattern('K')}>
          <View style={styles.cuadro}></View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => verifyPattern('D')}>
          <View style={styles.cuadro}></View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => verifyPattern('R')}>
          <View style={styles.cuadro}></View>
        </TouchableWithoutFeedback>
      </View>
      <Text style={styles.textMid}>HOLA MUNDO!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  cuadro: {
    width: '50%',
    height: '50%',
  },
  w100: {
    width: '100%',
  },
  cuadros: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textMid: {
    position: 'absolute',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default MainPage;
