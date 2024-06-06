import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons/faLocationDot';
function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Welcome</Text>
        <FontAwesomeIcon icon={faLocationDot} />
      </View>
    </SafeAreaView>
  );
}

export default App;
