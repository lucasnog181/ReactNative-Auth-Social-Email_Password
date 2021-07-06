import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { Background } from '../../components/Background';
import { sx } from './styles';


import ilustration from '../../assets/illustration.png'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';





const LoadScreen: React.FC = () => {


    const navigation = useNavigation();


    function handlerNavegationSignin() {
        navigation.navigate("SignIn")
    }

    function handlerNavegationSignup() {
        navigation.navigate("SignUp")
    }


    return (
        <Background>
            <View style={sx.container}>
                <Image source={ilustration}
                    style={sx.image}
                    resizeMode="cover"
                />

                <View style={sx.content}>
                    <Text style={sx.title}>
                        Conecte-se {'\n'}
                        e assista os melhores
                        animes
                    </Text>
                    <Text style={sx.subtitle}>
                        Transmita filmes e animes em seu telefone, tablet, laptop e TV sem pagar mais.
                    </Text>
                </View>

                <View style={sx.buttonContent}>
                    <RectButton style={sx.signInButton} onPress={handlerNavegationSignin}>
                        <Text style={sx.TitleButton}>Sign in</Text>
                    </RectButton >

                    <TouchableOpacity style={sx.SignUpButton} onPress={handlerNavegationSignup}>
                        <Text style={sx.TitleButton2}>Sign up</Text>
                    </TouchableOpacity >

                </View>

            </View>
        </Background>
    )
}

export default LoadScreen;