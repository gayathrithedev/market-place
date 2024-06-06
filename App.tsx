import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons/faLocationDot';
function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <View>
          <Text>Welcome</Text>
          <FontAwesomeIcon icon={faLocationDot} />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
