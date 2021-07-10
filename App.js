import React from 'react';
import { BaseScreen } from './src/components/BaseScreen';
import { Routes } from './src/routes';
import { Cart } from './src/views/Cart';

export default function App() {
  return (
    <BaseScreen>
      <Routes />
    </BaseScreen>
  );
}
