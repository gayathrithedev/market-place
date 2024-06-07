// globals
import React, {useRef} from 'react';
import {Image, View, Text} from 'react-native';


// theme
import {fonts} from '../../theme/fonts';

// props
type Props = {
  info: any;
};

const PlpDisplayItem = (props: Props) => {
  const {info} = props;

  return (
    <View>
      <Text style={[fonts.onest400]}>{info.name}</Text>
      <Text>{info.price}</Text>
    </View>
  );
};

export default PlpDisplayItem;
