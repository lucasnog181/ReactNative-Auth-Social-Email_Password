import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import BackImg from '../../assets/back.png'
import { useNavigation } from '@react-navigation/native';



import { sx } from './styles';

const ButtonBack: React.FC = () => {

    const navigation = useNavigation();


    function handlerNavegationBack() {
        navigation.navigate("LoadScreen")
    }

    return (
        <TouchableOpacity style={sx.buttonBack} onPress={handlerNavegationBack}>
            <Image source={BackImg} style={sx.ImgButton} />
        </TouchableOpacity>
    )
}

export default ButtonBack;