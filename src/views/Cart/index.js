import React from 'react';
import { cartData } from '../../utils/cartData';
import { CartStatus } from './components/CartStatus';
import { ServicesList } from './components/ServicesList';

export const Cart = () => {
  const total = cartData.reduce(
    (add, { price, quantity }) => add + price * quantity,
    0
  );
  return (
    <>
      <CartStatus total={total} />
      <ServicesList />
    </>
  );
};
