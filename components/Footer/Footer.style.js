import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container : {
        flexDirection : 'row',
        paddingVertical : 30,
        justifyContent : 'space-evenly',
        backgroundColor : 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    }
});