import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

//Frameworks
import DraggableFlatList from "react-native-draggable-flatlist";
import AsyncStorage from '@react-native-community/async-storage';

//Components
import InputDo from '../components/InputDo';
import Do from '../components/Do';

export default function Home({navigation}) {
  const [data,setData] = React.useState([
    {
      text: 'Get a haircut',
      done: false
    },
    {
      text: 'Dont Waste Time',
      done: false
    },
    {
      text: 'Learn React Native',
      done: false
    },
    {
      text: 'Feed yourself',
      done: false
    }
  ]);

  const _storeData = async () => {
    try {
      const stringData = JSON.stringify(data);
      await AsyncStorage.setItem(
        'PreviouslySetTodos',
        stringData
      );
    } catch (error) {
      // Error saving data
      console.log("Data could not be saved");
    }
  };

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('PreviouslySetTodos');
      if (value !== null) {
        // We have data!!
        setData(JSON.parse(value));
      }
    } catch (error) {
      // Error retrieving data
      console.log("Couldn't retrieve data...");
    }
  };

  React.useEffect(() => {
    _retrieveData();
  }, [])

  React.useEffect(() => {
    _storeData();
  }, [data])

  const _swap = ({data}) => {
    setData(data);
  }

  const deleteItem = (index) => {
    data.splice(index, 1);
    setData([...data]);
  }

  const strikeItem = (index) => {
    data[index].done = !data[index].done;
    setData([...data]);
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#16212A" />
      <Text style={styles.brandingName}>2DO</Text>
      <InputDo style={styles.inputDo} data={data} setData={setData}/>
      <View style={{flex: 1, borderRadius: 8,}}>
        <DraggableFlatList
          data={data}
          renderItem={(e) => <Do dragData={e} deleteItem={deleteItem} strikeItem={strikeItem} navigation={navigation} data={data} setData={setData}/>}
          keyExtractor={(item, index) => `draggable-item-${index}`}
          onDragEnd={_swap}
        />
      </View>
    </View>
  );
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
  }
});

