import { Text, TouchableOpacity, View } from 'react-native';
import { style } from './Footer.style';

export const Footer = ({ selectedTabName, onPress }) => {
    function getTextStyle (tabName) {
        return { fontWeight : 'bold', color : tabName === selectedTabName ? "#2f76e5" : 'black'};
    }
    return (
        <View style={style.container}>
            <TouchableOpacity onPress={() => {onPress('all')}} >
                <Text style={getTextStyle('all')}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {onPress('inProgress')}} >
                <Text style={getTextStyle('inProgress')}>In Progress</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {onPress('done')}}>
                <Text style={getTextStyle('done')}>Done</Text>
            </TouchableOpacity>
        </View>
    )
};