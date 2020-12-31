import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import EditDo from '../components/EditDo';

export default function EditTask({navigation}) {
    const data = navigation.getParam('data'),
    setData = navigation.getParam('setData'),
    item = navigation.getParam('item'),
    index = navigation.getParam('index');
    
    return (
        <View style={styles.container}>
            <Text style={styles.brandingName}>Edit Task</Text>
            <EditDo style={styles.editDo} data={data} setData={setData} value={item.text} index={index} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        position: "absolute",
        margin: "auto",
        top: 0,
        left: 0,
        backgroundColor: "#16212B",
        padding: 17,
    },
    brandingName: {
      color: "#90FF8D",
      fontSize: 40,
      textAlign: "center",
      fontFamily: "Quicksand-Regular",
      marginBottom: 20,
    },
})
