import { style } from "./Header.style";
import logo from '../../assets/logo.png';
import { Image, Text } from "react-native";

export const Header = () => {
    return (
        <>
            <Image style={style.logo} source={logo} resizeMode="contain" /> 
            <Text style={style.subtitle}>Tu as probablement un truc à faire</Text>
        </>
        
    )
}