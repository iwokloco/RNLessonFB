import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default function ProductItemList(props) {
  const { img, name, author } = props.data.item;
  console.log(props.data);
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}
