import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { IconButton } from '../IconButton/IconButton';

export default function SearchBar(props) {
  const [search, setSearch] = useState(null);

  return (
    <View>
      <TextInput style={styles.input} placeholder="Buscar" onChangeText={setSearch} value={search} />
      <View style={styles.viewInput}>
        <IconButton onPress={() => {}} icon="search" size={35} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 50,
  },
  input: {
    fontSize: 20,
    padding: 10,
    height: 40,
    backgroundColor: 'white',
    paddingRight: 44,
  },
  viewInput: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
});
