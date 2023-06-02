import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


function NotePage(): JSX.Element {
    return(
        <View style={styles.container}>
      <Text style={styles.textWhite} >Note Page</Text>
    </View>
    )
};


const styles = StyleSheet.create({
container:{
backgroundColor: 'black',
height: '100%',
width: '100%',
},
textWhite:{
  color: 'white'
},
});


export default NotePage;