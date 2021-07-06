import React, { useContext } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { AuthContext } from '../../context/Auth'

import { sx } from './styles';

const Profile: React.FC = () => {
    const { user, logout } = useContext(AuthContext)
    return (
        <SafeAreaView style={sx.container}>
            <View style={sx.content}>
                <Image source={{
                    uri: `${user?.photoUrl == null ? "https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png" : user.photoUrl}`
                }} style={sx.avatar} />
                <Text style={sx.Name}>{user?.name == null ? `User8F9BF975` : user?.name}</Text>
                <TouchableOpacity onPress={logout} style={sx.Button}>
                    <Ionicons
                        name="close-outline"
                        size={25}
                        color="white"
                        style={sx.Icon}
                    />
                    <Text style={sx.closeButton}>Sair</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Profile;