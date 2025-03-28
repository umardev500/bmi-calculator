import {useState} from 'react';
import {Alert, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {Input} from '../components/Input';
import {Result} from '../components/Result';

export const Home = () => {
  const [bmi, setBmi] = useState(0);
  const [category, setCategory] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleCalculate = () => {
    if (!height || !weight) {
      Alert.alert('Please enter both height and weight');
      return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = (
      parseFloat(weight) /
      (heightInMeters * heightInMeters)
    ).toFixed(2);
    setBmi(parseFloat(bmiValue));

    let bmiCategory = '';
    if (parseFloat(bmiValue) < 18.5) {
      bmiCategory = 'Underweight';
    } else if (parseFloat(bmiValue) < 24.9) {
      bmiCategory = 'Normal weight';
    } else if (parseFloat(bmiValue) < 29.9) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obesity';
    }
    setCategory(bmiCategory);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View className="p-6">
        <View>
          <Text className="text-4xl font-semibold text-center">
            BMI Calculator
          </Text>
        </View>

        <View className="gap-4 mt-10">
          <Input
            label="Height (cm):"
            placeholder="Enter height"
            onChangeText={e => {
              setHeight(e);
            }}
          />
          <Input
            label="Weight (kg):"
            placeholder="Enter weight"
            onChangeText={e => {
              setWeight(e);
            }}
          />
        </View>

        <TouchableOpacity
          onPress={handleCalculate}
          className="mt-6 bg-blue-500 px-4 py-3 rounded-lg">
          <Text className="text-white text-lg text-center font-medium">
            Calculate
          </Text>
        </TouchableOpacity>

        {/* Result */}
        {bmi > 0 && category && (
          <View className="mt-5">
            <Result bmi={bmi} category={category} />
          </View>
        )}
      </View>
    </>
  );
};
