// globals
import {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';

// navigation
import {NavigationContainer} from '@react-navigation/native';

// firebase
import auth from '@react-native-firebase/auth';

// utils

// navigators
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import {initializeFirebase} from '../utils/firebase';
import {setUserinfo} from '../utils/storage';

const RootNavigator = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUserinfo(user);
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    initializeFirebase();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  // useEffect(() => {
  //   const checkLogin = async () => {
  //     const result = await getLoginInfo();
  //     setIsAuthenticated(result);
  //   };
  //   checkLogin();
  // }, []);
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        {user ? <TabNavigator /> : <AuthNavigator />}
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default RootNavigator;
