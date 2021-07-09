import React from 'react';
import { FlatList, Text } from 'react-native';
import { data } from '../../../../utils/data';
import { PetProduct } from '../PetProduct';

export const ServicesList = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <PetProduct {...item} />}
      keyExtractor={({ id }) => String(id)}
    />
  );
};
