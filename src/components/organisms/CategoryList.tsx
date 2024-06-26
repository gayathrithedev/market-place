// globals
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

// components
import CategoryItem from '../atoms/CategoryItem';

// types
type Props = {
  data: any;
};

const CategoryList = (props: Props) => {
  const {data} = props;
  return (
    <ScrollView
      style={styles.listRow}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {data?.map((item: any) => (
        <React.Fragment key={item.id}>
          <CategoryItem categoryInfo={item} />
        </React.Fragment>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listRow: {
    flexDirection: 'row',
  },
});

export default CategoryList;
