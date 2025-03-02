import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const AdComponent = () => {
  useEffect(() => {
    // here can add ad loading logic
  }, []);

  return (
    <View>
      <Text>AD Component</Text>
    </View>
  );
};

export default AdComponent;
