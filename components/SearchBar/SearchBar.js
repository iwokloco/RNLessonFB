import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

export default function SearchBar(props) {
  const [search, setSearch] = useState(null);

  return (
    <View>
      <TextInput placeholder="Buscar" onChangeText={setSearch} value={search} />
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
