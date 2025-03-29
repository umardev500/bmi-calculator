import {Text, View} from 'react-native';

type Props = {
  bmi: number;
  category: string;
};

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'underweight':
      return 'text-blue-500';
    case 'normal weight':
      return 'text-green-600';
    case 'overweight':
      return 'text-yellow-600';
    case 'obesity':
      return 'text-red-600';
    default:
      return 'text-gray-800';
  }
};

export const Result = ({bmi, category}: Props) => {
  return (
    <View className="px-4 py-6 bg-gray-100 rounded-lg">
      <Text className="text-lg font-medium text-gray-800 text-center">{bmi}</Text>
      <Text className={`text-lg font-semibold text-center ${getCategoryColor(category)}`}>{category}</Text>
    </View>
  );
};
