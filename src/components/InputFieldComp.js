import React from "react";
import { View, Text, TextInput } from "react-native";

export default function InputFieldComp({
    placeholder, 
    keyboardType ='deafult', 
    secureTextEntry = false,
    onChangeText
}) {
    return (
        <View 
            style={{
                backgroundColor: 'white', 
                borderWidth: 2,
                marginBottom: 5,
                borderRadius: 15,
                paddingHorizontal: 15
             }}>
            <TextInput 
            placeholder={placeholder} 
            keyboardType={keyboardType} 
            secureTextEntry={secureTextEntry}
            onChangeText={(text) => onChangeText(text)}
            />
        </View>
    );
}