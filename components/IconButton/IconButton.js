import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export function IconButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View>
        <MaterialIcons name={props.icon} size={props.size} color={props.color} />
      </View>
    </TouchableOpacity>
  );
}
