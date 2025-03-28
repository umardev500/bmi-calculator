import {Text, View} from 'react-native';

type Props = {
  bmi: number;
  category: string;
};

export const Result = ({bmi, category}: Props) => {
  return (
    <View className="px-4 py-5 bg-gray-100 rounded-lg">
      <Text className="text-lg font-medium text-gray-800 text-center">
        Your BMI is: {bmi}
      </Text>
      <Text className="text-lg font-medium text-gray-800 text-center">
        BMI Category: {category}
      </Text>
    </View>
  );
};
