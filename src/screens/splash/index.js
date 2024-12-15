import React from 'react'
import { Text, View, ImageBackground } from 'react-native'

export default function SplashScreen({navigation}) {
    setTimeout(() => {
        navigation.navigate('SignInScreen')
    }, 3000);
    return (
        <ImageBackground
            source={require('../../assets/jerseyyy.jpg')}
            resizeMode={"cover"}
            style={{flex: 1, padding: 15}}>
            <Text 
                style={{
                    fontSize: 25,
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    justifyContent: 'center',
                }}>JerseyIN
            </Text>
        </ImageBackground>
      )
}
