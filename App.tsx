import {SafeAreaView} from 'react-native-safe-area-context';
import './src/global.css';
import {Home} from './src/screens/Home';

const App = () => {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
};

export default App;
