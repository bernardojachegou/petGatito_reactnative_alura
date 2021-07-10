import React from 'react';
import { FlatList } from 'react-native';
import { cartData } from '../../../../utils/cartData';
import { PetProduct } from '../PetProduct';

export const ServicesList = () => {
  return (
    <FlatList
      data={cartData}
      renderItem={({ item }) => <PetProduct {...item} />}
      keyExtractor={({ id }) => String(id)}
    />
  );
};
