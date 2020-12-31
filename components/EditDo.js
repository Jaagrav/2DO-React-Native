import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Icon } from 'react-native-elements';

const EditDo = ({data, setData, value, index, navigation}) => {
    const [text,setText] = React.useState(value);
    const inputRef = React.useRef();

    const editData = () => {
        if(text.trim()) {
            data[index].text = text;
            setData([...data]);
            navigation.goBack();
        }
        else{
            Alert.alert(
                'No item entered',
                'Please enter a valid item. Make sure it is not null or empty.',
                [
                {
                    text: 'Gotchu',
                    style: 'cancel',
                },
                ],
                {cancelable: true},
            );
            setText(data[index].text);
        }
    }

    React.useEffect(()=>{
        inputRef.current.focus();
    }, []);
    return (
        <View style={styles.editDo}>
            <TextInput 
                ref={inputRef}
                placeholder="Type Something..."
                style={styles.textInput} 
                onChangeText={(text) => {setText(text)}}
                value={text}
            />
            <TouchableOpacity
                style={styles.textIcon}
                onPress={editData}
            >
                <Icon
                    name='edit'
                    type='material'
                    color='#16202A'
                    size={30}
                />
            </TouchableOpacity>
        </View>
    )
}

export default EditDo;

const styles = StyleSheet.create({
    editDo: {
        backgroundColor: "#90FF8D",
        paddingLeft: 10,
        paddingRight: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 4,
        alignSelf: "stretch",
        marginBottom: 20
    },
    textInput: {
        fontWeight: 'normal',
        fontFamily: "Quicksand-SemiBold",
        width: '90%',
        textAlign: "left",
        fontSize: 17
    },
    textIcon: {
        margin: "auto",
        alignSelf: "center"
    }
})
