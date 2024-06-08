// Stack Navigator
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import SignUp from '../screens/Register';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
