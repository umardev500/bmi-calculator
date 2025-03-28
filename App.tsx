import {SafeAreaView} from 'react-native-safe-area-context';
import {Home} from './src/Home';
import './src/global.css';

const App = () => {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
};

export default App;
