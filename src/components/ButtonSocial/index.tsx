import React from 'react';
import { ButtonProps } from 'react-native';
import { TouchableOpacity, Image, Text } from 'react-native';

import GoogleIcon from '../../assets/google.png'

import { sx } from './styles'

type PropsTitleButton = ButtonProps & {
    title: string,
}

function ButtonSocial({ title, ...rest }: PropsTitleButton) {
    return (
        <TouchableOpacity style={sx.buttonSocial} {...rest} >
            <Image source={GoogleIcon} style={sx.buttonSocialIcon} />
            <Text style={sx.buttonSocialTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonSocial;