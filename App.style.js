import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    app : {
        backgroundColor : '#f9f9f9',
        flex : 1,
        padding : 10,
    },
    header : {
        flex : 1
    },
    body : {
        flex : 5,
        overflow : 'scroll'
    },
    cardItem : {
        marginBottom : 20 
    },
    footer : {
        height : 70
    }
});