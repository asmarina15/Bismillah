import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import RoundButtonComp from "../../components/RoundButtonComp";
import FullRoundButtonComp from "../../components/FullRoundButtonComp";
import { _SignInWithGoogle } from "../../config/firebase/GoogleSignin";
import { axiosClient, SIGN_IN } from "../../config/api";

export default function SignInScreen({navigation}) {

    React.useEffect(() => {    
        });
    
    async function googleSignin() {
        _SignInWithGoogle().then(data => {
            if (!data) {
                console.log('=> Error:', 'No Data');
                return;
            }
            _sign_in_api(data);
        });
    }

    async function _sign_in_api(googleData) {
        setLoading(true);
        const apiParams = {
            loginSource: 'google',
            sid: googleData.id,
            name: googleData.user.name,
            email: googleData.user.email,
            profileImage: googleData.user.photo,
            fcmToken: 'fcm_110220'
        };
        const {data, status} = await axiosClient.post(SIGN_IN, apiParams);
        setLoading(false);
        if (status == 200) {
            if(data.status == "200") {
                console.log('=> Success:', data);
                toastMessage("success", data.message);
                _storeIntoAsyncStorage("user", JSON.stringify(data));
                navigation.navigate('WelcomeScreen');
            }else{
                toastMessage("error", data.message);
            }       
        }else{
            toastMessage("error", "Error in Sign In API");
        }
    }

    return (
        <View style={{flex: 1}}>
            <StatusBar backgroundColor={'black'}/>
            <View style={{flex: 0.5}}>
                <Image
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    resizeMode={'cover'}
                    source={require('../../assets/login.jpg')}/>
            </View>

            <View style={{flex: 0.5, backgroundColor: '#ffdee'}}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 30,
                    color: 'black',
                    fontWeight: 'bold'
                }}>
                    Hello
                </Text>
                
                <Text style={{
                    textAlign: 'center',
                }}>
                    Selamat Datang!
                </Text>
                
                <View style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    justifyContent: 'center'
                }}>
                    {/* <RoundButtonComp label={'login'} width={120}/> */}
                    <RoundButtonComp 
                        label={'Masuk'} 
                        border={true} 
                        width={120}
                        onPress={() => navigation.navigate('SignUpScreen')}/>
                </View>

                <Text style={{
                    flex: 1,
                    marginTop: 20,
                    textAlign: 'center',
                    marginTop: 100
                }}>
                    Akun Sosial Media
                </Text>

                <View 
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 15,
                        alignItems: 'flex-end',
                        paddingBottom: 20,
                        flex: 1
                }}> 
                    <FullRoundButtonComp 
                    image={require('../../assets/google.jpg')} 
                    bg={'#e54545'}
                    onPress={() => googleSignin()}
                    />

                    <FullRoundButtonComp 
                    image={require('../../assets/facebook.jpg')} 
                    bg={'#2d75e8'}/>
                </View>
            </View>
        </View>
    );
}