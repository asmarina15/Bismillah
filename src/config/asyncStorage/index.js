import AsyncStorage from "@react-native-async-storage/async-storage";

export const_storaIntoAsyncStorage = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.log('=> Error', 'stroing data in asyn storage');
    }
};

export const_getFromAsyncStorage = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value) {
            return value;
        }else{
            return null;
        }
    } catch (e) {
        console.log('=> Error', 'getting data from asyn storage');
        return null;
    }
}