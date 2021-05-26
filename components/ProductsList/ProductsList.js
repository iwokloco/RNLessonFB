import React, { Component } from 'react';
import { render } from 'react-dom';
import { FlatList, View } from 'react-native';
import ProductItemList from '../ProductItemList/ProductItemList';

const MOCK_LIST = [
  {
    name: 'Universo',
    img: 'https://www.astiberri.com/spree/products/3065/original/universo.jpg?1523614095',
    author: ['Albert Monteys'],
  },
  {
    name: 'Universo',
    img: 'https://www.astiberri.com/spree/products/3065/original/universo.jpg?1523614095',
    author: ['Albert Monteys'],
  },
  {
    name: 'Universo',
    img: 'https://www.astiberri.com/spree/products/3065/original/universo.jpg?1523614095',
    author: ['Albert Monteys'],
  },
  {
    name: 'Universo',
    img: 'https://www.astiberri.com/spree/products/3065/original/universo.jpg?1523614095',
    author: ['Albert Monteys'],
  },
  {
    name: 'Universo',
    img: 'https://www.astiberri.com/spree/products/3065/original/universo.jpg?1523614095',
    author: ['Albert Monteys'],
  },
  {
    name: 'Universo',
    img: 'https://www.astiberri.com/spree/products/3065/original/universo.jpg?1523614095',
    author: ['Albert Monteys'],
  },
  {
    name: 'Universo',
    img: 'https://www.astiberri.com/spree/products/3065/original/universo.jpg?1523614095',
    author: ['Albert Monteys'],
  },
  {
    name: 'Universo',
    img: 'https://www.astiberri.com/spree/products/3065/original/universo.jpg?1523614095',
    author: ['Albert Monteys'],
  },
  {
    name: 'Universo',
    img: 'https://www.astiberri.com/spree/products/3065/original/universo.jpg?1523614095',
    author: ['Albert Monteys'],
  },
];

export default function ProductsList(props) {
  console.log('ProductsList');
  return (
    <View>
      <FlatList data={MOCK_LIST} keyExtractor={(item, index) => index} renderItem={(flatListElement) => <ProductItemList data={flatListElement} />} />
    </View>
  );
}
