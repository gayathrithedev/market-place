// globals
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

// component
import PlpSectionButton from '../atoms/PlpSectionButton';

const PlpSection = () => {
  const [selectedType, setSelectedType] = useState(1);

  return (
    <View style={styles.listRow}>
      <View style={styles.listLeft}>
        <PlpSectionButton
          type={1}
          selectedType={selectedType}
          setSelectedType={() => setSelectedType(1)}
        />
        <PlpSectionButton
          type={2}
          selectedType={selectedType}
          setSelectedType={() => setSelectedType(2)}
        />
      </View>
      <PlpSectionButton
        type={3}
        selectedType={selectedType}
        setSelectedType={() => setSelectedType(3)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PlpSection;
