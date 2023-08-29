import { View, Text } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView, TextInput, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity, Image} from 'react-native'
import { themeColors } from '../theme'
import { useState } from 'react'
import { FIREBASE_AUTH } from '../firebase'
import { ActivityIndicator } from 'react-native'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = FIREBASE_AUTH;

const LoginScreen = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    // Sign In Functionality
    const handleSignIn = async () => {
        setLoading(true)
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            console.log(response)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    // Sign In Functionality
    const handleSignUp = async () => {
        setLoading(true)
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log(response)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    return (
        <SafeAreaView
            className="flex flex-1 justify-center items-center space-y-2"
        >
            <View
                className="flex-col items-center gap-3 pb-14"
            >
                <Image source={require('../assets/Logo.png')}/>
                <Text
                    className="text-2xl"
                >
                OCAKCI HOLDİNG</Text>
            </View>

            <View className="w-80 space-y-2">
                <TextInput
                    onChange={text => setEmail(text)}
                    value={this.email}
                    placeholder='Email'
                    className="px-4 py-3 border rounded-full  bg-white"
                    style={{}}
                />
                <TextInput
                    onChange={text => setPassword(text)}
                    value={this.password}
                    placeholder='Şifre'
                    secureTextEntry={true}
                    className="px-4 py-3 border rounded-full  bg-white"
                />
                
            </View>
            <View
                className="flex space-y-2 w-80 gap-y-4 "
            >
            <TouchableOpacity
                className="flex items-center border rounded-full "
                style={{backgroundColor: themeColors.bgColor(1)}}
                // onPress={handleSignIn}
                onPress={() => navigation.navigate('Home')}
            >
                <Text 
                    className="h-8 text-lg"
                    style={{color: `${themeColors.text}`}}
                > 
                    Giriş
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                className="flex items-center border rounded-full "
                style={{backgroundColor: themeColors.bgColor(1)}}
                onPress={handleSignUp}
            >
                <Text 
                    className="h-8 text-lg"
                    style={{color: `${themeColors.text}`}}
                > 
                    Kayıt Ol
                </Text>
            </TouchableOpacity>
            </View>
            {/* <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
            >
                <Icon.LogOut height={20} width={20} strokeWidth="2.5" stroke="red" />
            </TouchableOpacity> */}
        </SafeAreaView>
    )
}

export default LoginScreen