import React from 'react';
import { FlatList, View } from 'react-native';
import { data } from '../../utils/data';
import { CartProduct } from '../Cart/components/CartProduct';
import { CartStatus } from './components/CartStatus';

export const Cart = () => {
  const total = data.reduce(
    (add, { price, quantity }) => add + price * quantity,
    0
  );
  return (
    <View style={{ flex: 1, backgroundColor: '#d9b9e5' }}>
      <CartStatus total={total} />
      <FlatList
        data={data}
        renderItem={({ item }) => <CartProduct {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </View>
  );
};
