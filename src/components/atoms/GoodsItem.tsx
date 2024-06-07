// globals
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

// types
type Props = {
  info: any;
};

const GoodsItem = (props: Props) => {
  const {info} = props;
  const {navigate} = useNavigation();

  const navigateToGoodsPage = () => {
    navigate('Goods');
  };

  return (
    <TouchableOpacity onPress={navigateToGoodsPage}>
      <Text>{info.name}</Text>
    </TouchableOpacity>
  );
};

export default GoodsItem;
