import React from "react";
import { View, Text, StatusBar, Image, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import InputFieldComp from "../../components/InputFieldComp";
import RoundButtonComp from "../../components/RoundButtonComp";
import { toastMessage } from "../../config/AppToast";
import auth from '@react-native-firebase/auth';

export default function SignUpScreen() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigation = useNavigation(); // Hook untuk navigasi

    async function handleSignUp() {
        // Validasi email dan password
        // if (!email || !password) {
        //     toastMessage('error', 'Please fill in all fields');
        //     return;
        // }

        try {
            const data = await auth().createUserWithEmailAndPassword(email, password);
            console.log(data);
            // Navigasi ke WelcomeScreen setelah berhasil
            navigation.navigate('WelcomeScreen');
        } catch (error) {
            console.log(error.message);
            Alert.alert('Error', error.message, [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', padding: 15 }}>
            <StatusBar backgroundColor={'white'} />
            <View style={{ flex: 0.5 }}></View>
            <View style={{ flex: 0.5 }}>
                <Image
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    resizeMode={'cover'}
                    source={require('../../assets/login.jpg')}
                />
            </View>

            <View style={{ flex: 0.5, backgroundColor: '#ffdee' }}>
                <Text style={{
                    fontSize: 30,
                    color: 'black',
                    fontWeight: 'bold',
                    marginLeft: 10
                }}>
                    Sign Up
                </Text>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <InputFieldComp
                        placeholder={'email'}
                        keyboardType={'email-address'}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <InputFieldComp
                        placeholder={'password'}
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                    />
                    <RoundButtonComp label={'Sign Up'} marginTop={30} onPress={handleSignUp} />
                </View>
            </View>
        </View>
    );
}
