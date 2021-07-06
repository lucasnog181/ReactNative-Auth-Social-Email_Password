import React, { useEffect } from "react";
import { Alert } from "react-native";
import { createContext, useState, ReactNode } from "react";

import firebase from "firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as Google from 'expo-google-app-auth';


type AuthContextType = {
    signed: boolean,
    loading: boolean
    user: User | null
    signUp: (data: signInData) => Promise<void>
    signIn: (data: signInData) => Promise<void>
    signInGoogle: () => {},
    logout: () => void

}

type AuthContextProviderData = {
    children: ReactNode;
};

type signInData = {
    email: string;
    password: string;
}

type User = {
    id?: string | null;
    email?: string | null;
    name?: string | null;
    givenName?: string | null;
    familyName?: string | null;
    photoUrl?: string | null;

}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthContextProviderData) {

    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true);

    // Auth Email Password
    async function signUp({ email, password }: signInData) {

        try {
            setLoading(true);

            await firebase.auth().createUserWithEmailAndPassword(email, password).then(async response => {
                await AsyncStorage.setItem('@Auth:user', JSON.stringify(response.user))
                setUser(response.user);
            })

        } catch (error) {
            Alert.alert(error.title, error.toString())
        }
    }


    // Auth Email Password
    async function signIn({ email, password }: signInData) {
        try {

            await firebase.auth().signInWithEmailAndPassword(email, password).then(async response => {
                await AsyncStorage.setItem('@Auth:user', JSON.stringify(response.user))
                setUser(response.user);
            })

        } catch (error) {
            Alert.alert(error.title, error.toString())
        }
    }


    // Auth Social
    async function signInGoogle() {
        try {
            const result = await Google.logInAsync({
                androidClientId: '510314060027-poeg67mli97ihhakdgrqgt5qtsm43qbb.apps.googleusercontent.com',
                iosClientId: '510314060027-g4no8t70kvp1b3ndh6npbj2o0l1mp4ut.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                await AsyncStorage.setItem('@AuthSocial:user', JSON.stringify(result.user))
                setUser(result.user);
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }


    // Buscar e renderizar o usuario
    useEffect(() => {
        async function loadStorageData() {
            const storageUser = await AsyncStorage.getItem('@Auth:user') || await AsyncStorage.getItem('@AuthSocial:user')

            if (storageUser) {
                setUser(JSON.parse(storageUser))

            } else if (!storageUser) {
                setLoading(false);
            }
        }

        loadStorageData()
    }, [])


    // Sair
    function logout() {

        AsyncStorage.clear().then(() => {
            setUser(null)
        })
    }

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            signUp,
            signIn,
            signInGoogle,
            logout,
            user,
            loading
        }}>
            {children}
        </AuthContext.Provider>

    )
}

