// import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
// import { Alert } from 'react-native';

// const facebookSignin = async () => {
//     try {
//         // Memulai proses login dengan Facebook
//         const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        
//         if (result.isCancelled) {
//             // Jika login dibatalkan
//             Alert.alert('Facebook Sign In cancelled by user');
//             return;
//         }
        
//         // Mendapatkan token akses dari Facebook
//         const data = await AccessToken.getCurrentAccessToken();
//         if (!data) {
//             throw new Error('Failed to get access token');
//         }

//         const accessToken = data.accessToken.toString();
//         console.log('Access Token:', accessToken);

//         // Ambil data pengguna menggunakan token
//         const response = await fetch(`https://graph.facebook.com/me?fields=id,name,email,picture.type(large)&access_token=${accessToken}`);
//         const userData = await response.json();

//         console.log('User Info:', userData);
//         Alert.alert('Welcome', `Hello, ${userData.name}`);

//         // Melakukan navigasi atau aksi lainnya setelah login sukses
//     } catch (error) {
//         console.error('Facebook Sign-in Error:', error);
//         Alert.alert('Error', 'Failed to sign in with Facebook');
//     }
// };
