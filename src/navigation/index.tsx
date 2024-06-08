import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import {SafeAreaView} from 'react-native';

// utils
import {getLoginInfo} from '../utils/storage';
import AuthNavigator from './AuthNavigator';
import {useEffect, useState} from 'react';

const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const result = await getLoginInfo();
      setIsAuthenticated(result);
    };
    checkLogin();
  }, []);
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        {isAuthenticated ? <TabNavigator /> : <AuthNavigator />}
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default RootNavigator;
