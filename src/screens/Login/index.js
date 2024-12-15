// import React from "react";
// import { View, Text, StatusBar, Image, Alert } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import InputFieldComp from "../../components/InputFieldComp";
// import RoundButtonComp from "../../components/RoundButtonComp";
// // import { toastMessage } from "../../config/AppToast";
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';

// export default function RegisterScreen() {
//     const [fullName, setFullName] = React.useState('');
//     const [email, setEmail] = React.useState('');
//     const [password, setPassword] = React.useState('');
//     const [phone, setPhone] = React.useState('');
//     const navigation = useNavigation(); // Hook untuk navigasi

//     async function handleRegister() {
//         // Validasi form
//         // if (!fullName || !email || !password || !phone) {
//         //     toastMessage('error', 'Please fill in all fields');
//         //     return;
//         // }

//         try {
//             // Buat akun menggunakan Firebase Authentication
//             const userCredential = await auth().createUserWithEmailAndPassword(email, password);
//             const userId = userCredential.user.uid;

//             // Simpan data pengguna ke Firestore
//             await firestore().collection('users').doc(userId).set({
//                 fullName: fullName,
//                 email: email,
//                 phone: phone,
//                 createdAt: firestore.FieldValue.serverTimestamp()
//             });

//             console.log("User registered successfully!");
//             // Navigasi ke WelcomeScreen setelah registrasi berhasil
//             navigation.navigate('WelcomeScreen');
//         } catch (error) {
//             console.log(error.message);
//             Alert.alert('Registration Failed', error.message, [
//                 {
//                     text: 'Cancel',
//                     onPress: () => console.log('Cancel Pressed'),
//                     style: 'cancel',
//                 },
//                 { text: 'OK', onPress: () => console.log('OK Pressed') },
//             ]);
//         }
//     }

//     return (
//         <View style={{ flex: 1, backgroundColor: 'white', padding: 15 }}>
//             <StatusBar backgroundColor={'white'} />

//             {/* Bagian Gambar */}
//             <View style={{ flex: 0.5 }}>
//                 <Image
//                     style={{
//                         width: '100%',
//                         height: '100%',
//                     }}
//                     resizeMode={'cover'}
//                     source={require('../../assets/register.jpg')} // Gambar untuk layar registrasi
//                 />
//             </View>

//             {/* Bagian Form Registrasi */}
//             <View style={{ flex: 0.5 }}>
//                 <Text style={{
//                     fontSize: 30,
//                     color: 'black',
//                     fontWeight: 'bold',
//                     marginLeft: 10
//                 }}>
//                     Register
//                 </Text>
//                 <View style={{ flex: 1, justifyContent: 'center' }}>
//                     <InputFieldComp
//                         placeholder={'Full Name'}
//                         onChangeText={(text) => setFullName(text)}
//                     />
//                     <InputFieldComp
//                         placeholder={'Email'}
//                         keyboardType={'email-address'}
//                         onChangeText={(text) => setEmail(text)}
//                     />
//                     <InputFieldComp
//                         placeholder={'Password'}
//                         secureTextEntry={true}
//                         onChangeText={(text) => setPassword(text)}
//                     />
//                     <InputFieldComp
//                         placeholder={'Phone Number'}
//                         keyboardType={'phone-pad'}
//                         onChangeText={(text) => setPhone(text)}
//                     />
//                     <RoundButtonComp label={'Register'} marginTop={30} onPress={handleRegister} />
//                 </View>
//             </View>
//         </View>
//     );
// }
