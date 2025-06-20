import {View, Image, TextInput} from 'react-native'
import React from 'react'
import {icons} from "@/constants/icons";

interface Props {
    placeholder: string;
    onPress?: () => void;
    textValue: string;
    onChange: (text: string) => void;
}

const SearchBar = ({placeholder, onPress, textValue, onChange}: Props) => {
    return (
        <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-5">
            <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8bff"/>
            <TextInput
                onPress={onPress ? onPress : () => {
                }}
                placeholder={placeholder}
                value={textValue}
                onChangeText={onChange}
                placeholderTextColor="#a8b5db"
                className="flex-1 ml-2 text-white"
            />
        </View>
    )
}
export default SearchBar
