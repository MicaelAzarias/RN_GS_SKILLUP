import React from 'react';
import { View, Text } from 'react-native';
import { componentStyles as styles } from '../styles/styles'; 

const ProgressBar = ({ progress, color }) => {
  const width = Math.max(0, Math.min(1, progress)) * 100;
  return (
    <View>
      <View style={styles.track}>
        <View style={[
          styles.bar, 
          { width: `${width}%` }, 
          color ? { backgroundColor: color } : {} 
        ]} />
      </View>
    </View>
  );
};

export default ProgressBar;