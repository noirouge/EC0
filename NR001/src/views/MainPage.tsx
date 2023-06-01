import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function MainPage({navigation}): JSX.Element {
  return (
    <View style={{...styles.w100, ...styles.cuadros }}>
        <View style={styles.cuadro}></View>
        <View style={styles.cuadro}></View>
        <View style={styles.cuadro}></View>
        <View style={styles.cuadro}></View>
      <Text>Main Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
cuadro: {
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    width: '50%',
    height: '50%',
},
w100: {
width: '100%',
},
cuadros: {
    display: 'flex',
    flexWrap: 'wrap'
},
textMid:{
    position: 'absolute',
}
});

export default MainPage;
