import React, { useContext } from 'react';
import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text, TextInput,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

import { AuthContext } from '../../context/Auth';

import ButtonSocial from '../../components/ButtonSocial';
import { Background } from '../../components/Background';



import { sx } from './styles';
import ButtonBack from '../../components/ButtonBack';


type handleSignInData = {
    email: string;
    password: string;

}


const SignUp: React.FC = () => {

    const { signIn, signInGoogle } = useContext(AuthContext)

    const navigation = useNavigation();

    const { handleSubmit, control } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });


    async function handleSignIn(data: handleSignInData) {
        await signIn(data)
    }



    function handlerNavegationBack() {
        navigation.navigate("LoadScreen")
    }


    return (
        <Background>
            <SafeAreaView style={sx.content}>

                <ButtonBack />

                <View style={sx.contentTitle}>
                    <Text style={sx.Title}>Sign in {'\n'}Account</Text>
                </View>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={sx.Form}>
                        <View style={sx.FormInputEmil}>
                            <Text style={sx.FormTitle}>You Email</Text>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={sx.Input}
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                        autoCompleteType="email"
                                        keyboardType="email-address"

                                    />
                                )}
                                name="email"
                                rules={{ required: true }}
                            />
                        </View>
                        <View style={sx.FormInputPassword}>
                            <Text style={sx.FormTitle}>Password</Text>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={sx.Input}
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                        returnKeyType='go'
                                        secureTextEntry
                                        autoCorrect={false}

                                    />
                                )}
                                name="password"
                                rules={{ required: true }}
                            />

                        </View>

                        <TouchableOpacity style={sx.ButtonAccount} onPress={handleSubmit(handleSignIn)}>
                            <Text style={sx.ButtonAccountTitle}>Sign in account</Text>
                        </TouchableOpacity>

                        <ButtonSocial
                            title="Sign in with Google"
                            onPress={signInGoogle}
                        />


                    </View>
                </TouchableWithoutFeedback>

            </SafeAreaView >
        </Background>
    )
}

export default SignUp;