import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function RoundButtonComp({
    label, 
    border = false, 
    onPress, 
    width = '100%',
    marginTop = 0
}) {
    return (
        <TouchableOpacity style={{marginTop: marginTop}} onPress={() => onPress()}>
        <View style={{
            backgroundColor: border ? 'white' : '#034ef7',
            width: width,
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 20,
            marginLeft: 10,
            borderColor: 'black',
            borderWidth: border ? 1 : 0
            }}>
            <Text style=
                {{color: 'black', 
                textAlign: 'center',
                fontWeight: 'bold'
            }}>
                {label}
            </Text>
        </View>
        </TouchableOpacity>
    );
}