import { Image, TouchableOpacity, Text } from "react-native";
import { style } from "./CardTodo.style";
import checkedIcon from '../../assets/check.png';

export const CardTodo = ({todo, onPress, onLongPress}) => {
    return(
        <TouchableOpacity 
            onPress={() => onPress(todo)} 
            onLongPress={() => onLongPress(todo)}
            style={style.container}
        >
            <Text style={[style.text, todo.isCompleted && {textDecorationLine : 'line-through'}]}>{todo.title}</Text>
            {todo.isCompleted && <Image style={style.icon} source={checkedIcon} />}
        </TouchableOpacity>
    )
}