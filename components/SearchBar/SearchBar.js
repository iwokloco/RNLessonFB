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
