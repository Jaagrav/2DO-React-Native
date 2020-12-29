import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Icon } from 'react-native-elements';

const InputDo = ({data, setData}) => {
    const [text,setText] = React.useState("");
    const inputRef = React.useRef();

    const addData = () => {
        if(text.trim()) {
            setData([{text: text, done: false},...data]);
            setText("");
            inputRef.current.blur();
        }
        else
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
    }
    return (
        <View style={styles.inputDo}>
            <TextInput 
                ref={inputRef}
                style={styles.textInput} 
                placeholder="Type Something..."
                onChangeText={(text) => {setText(text)}}
                value={text}
            />
            <TouchableOpacity
                style={styles.textIcon}
                onPress={addData}
            >
                <Icon
                    name='add'
                    type='material'
                    color='#16202A'
                    size={30}
                />
            </TouchableOpacity>
        </View>
    )
}

export default InputDo

const styles = StyleSheet.create({
    inputDo: {
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
