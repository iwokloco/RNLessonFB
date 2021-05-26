import React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ProductsList from '../components/ProductsList/ProductsList';
import SearchBar from '../components/SearchBar/SearchBar';

export default class ScreenHome extends Component {
  constructor(props) {
    super(props);
  }

  onSearch(currentSearch) {}

  render() {
    return (
      <View style={styles.container}>
        <SearchBar onSearch={this.onSearch.bind(this)} />
        <ProductsList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
