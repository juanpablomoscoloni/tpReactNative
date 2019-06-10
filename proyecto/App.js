
import { createStackNavigator } from 'react-navigation';
import CounterScreen from './screens/CounterScreen';
import MainScreen from './screens/MainScreen';

export default createStackNavigator({
  MainS: {
    screen: MainScreen,
    navigationOptions: () => ({
      header: null,
    })
  },
  counterS: {
    screen: CounterScreen,
    navigationOptions: () => ({
      header: null,
    })
  },
}, {
    initialRouteName: 'MainS',
})