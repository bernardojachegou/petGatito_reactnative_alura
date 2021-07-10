import React from 'react';
import { Text, View } from 'react-native';
import { BuyButton } from '../../../../components/BuyButton';
import { moneyFormat } from '../../../../utils/utils';
import styles from './styles';

export const CartStatus = ({ total }) => {
  return (
    <View style={styles.content}>
      <View style={styles.total}>
        <Text style={styles.description}>Total do Carrinho:</Text>
        <Text style={styles.value}>{moneyFormat(total)}</Text>
      </View>
      <View style={styles.button}>
        <BuyButton value={'Concluir pedido'} changeColor />
      </View>
    </View>
  );
};
