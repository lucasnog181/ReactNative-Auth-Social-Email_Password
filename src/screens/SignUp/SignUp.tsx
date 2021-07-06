import React, { useContext } from 'react';
import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text, TextInput,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

import { useForm, Controller } from 'react-hook-form';
import { AuthContext } from '../../context/Auth';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native'



import { sx } from './styles';
import ButtonBack from '../../components/ButtonBack';


type handleSignInData = {
    email: string;
    password: string;

}


const SignIn: React.FC = () => {

    const { signUp } = useContext(AuthContext)
    const navigation = useNavigation()


    const { handleSubmit, control } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });


    async function handleSignIn(data: handleSignInData) {
        await signUp(data)
    }

    function handlerNavegationBackLogin() {
        navigation.navigate("SignIn")
    }

    return (
        <Background>
            <SafeAreaView style={sx.content}>

                <ButtonBack />

                <View style={sx.contentTitle}>
                    <Text style={sx.Title}>Create {'\n'}Account</Text>
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
                            <Text style={sx.ButtonAccountTitle}>Create account</Text>
                        </TouchableOpacity>

                        <View style={sx.ContentLogin}>
                            <Text style={sx.TextContentLogin}>Already have an account?</Text>
                            <TouchableOpacity onPress={handlerNavegationBackLogin}>
                                <Text style={sx.TextButton}>Login</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </TouchableWithoutFeedback>

            </SafeAreaView >
        </Background>
    )
}

export default SignIn;