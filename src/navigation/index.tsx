import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import {SafeAreaView} from 'react-native';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <TabNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default RootNavigator;
