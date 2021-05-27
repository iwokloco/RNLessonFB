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
        <View style={styles.viewSearchBar}>
          <SearchBar onSearch={this.onSearch.bind(this)} />
        </View>
        <View>
          <ProductsList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  viewSearchBar: {
    marginBottom: 15,
  },
});
