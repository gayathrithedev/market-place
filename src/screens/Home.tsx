import React from 'react';
import {Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons/faLocationDot';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <FontAwesomeIcon icon={faLocationDot} />
    </View>
  );
};

export default Home;
