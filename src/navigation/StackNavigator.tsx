// Stack Navigator
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Home from '../screens/Home';
import Goods from '../screens/Goods';
import ProductDetail from '../screens/ProductDetail';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Goods" component={Goods} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
