import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Do({dragData, deleteItem, strikeItem}) {
    const {item, index, drag, isActive} = dragData;
    return (
        <TouchableOpacity 
            style={styles.touchableOpacity}
            onPressIn={drag}
            onPress={() => {strikeItem(index)}}
        >
            <Icon
                name='check-circle-outline'
                color='#90FF8D'
                size={30}
            />
            <Text style={{textDecorationLine: item.done ? 'line-through':'none',...styles.text}}>{item.text}</Text>
            <Icon
                name='delete'
                color='#FF5656'
                size={30}
                onPress={() => {deleteItem(index)}}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchableOpacity:{
        // height: 100,
        // backgroundColor: isActive ? "blue" : item.backgroundColor,
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
        backgroundColor: "#24313F",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        marginBottom: 14,
    },
    text: {
        color: "#90FF8D",
        fontFamily: "Quicksand-Medium",
        fontSize: 17,
        flexGrow: 1,
        marginLeft: 10,
        alignSelf: "center",
        maxWidth: "80%",
    }
})
