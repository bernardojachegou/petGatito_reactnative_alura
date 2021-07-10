import React from 'react';
import { View, FlatList } from 'react-native';
import { PetProduct } from '../PetServices/components/PetProduct';
import { data } from '../../utils/data';

export const PetServices = () => {
  return (
    <View style={{ backgroundColor: '#FCDEA7' }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <PetProduct {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </View>
  );
};
