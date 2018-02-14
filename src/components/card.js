import React from 'react';
import { View } from 'react-native';

const Card = () => {
  return (
    <View style={styles.containerStyle}>
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: '#90CAF9',
    borderRadius: 4,
    marginTop: 4,
    marginBottom: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    elevation: 4,
    position: 'relative'
  }
};
