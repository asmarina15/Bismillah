import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

export const _SignInWithGoogle = async () => {
    try {
        GoogleSignin.configure({
            offlineAccess: false,
            webClientId: 
                '645047433972-8iijj4hvm5f18jgvv9oec5iuvbf0kg63.apps.googleusercontent.com',
            scopes: ['profile', 'email']
        })
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();

        const {idToken} = await GoogleSignin.getTokens();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        auth().signInWithCredential(googleCredential);
        return userInfo;
    } catch (error) {
        console.log('=> Google Sign In', error);
        return null
    }
};