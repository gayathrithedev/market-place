// globals
import React from 'react';
import {FlatList} from 'react-native';

// component
import PlpDisplayItem from '../molecules/PlpDisplayItem';

// types
type Props = {
  data: any;
};

const PlpDisplayList = (props: Props) => {
  const {data} = props;
  return (
    <FlatList
      data={data}
      renderItem={item => <PlpDisplayItem info={item} />}
      keyExtractor={({id}) => id}
    />
  );
};

export default PlpDisplayList;
