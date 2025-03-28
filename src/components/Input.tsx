import React from 'react';
import {Text, TextInput, View} from 'react-native';

type Props = {
  label?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
};

export const Input = ({label, placeholder, onChangeText}: Props) => {
  return (
    <View className="gap-2">
      <Text className="text-base font-medium text-gray-800">{label}</Text>
      <TextInput
        keyboardType="numeric"
        className="px-4 py-3 rounded-lg text-base border border-gray-400 focus:border-gray-700 "
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};
