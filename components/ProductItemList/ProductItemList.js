import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function ProductItemList(props) {
  const { img, name, author } = props.data.item;
  console.log(props.data);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: img,
        }}
      ></Image>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    height: 100,
    width: 100,
  },
  red: {
    color: 'red',
  },
});
