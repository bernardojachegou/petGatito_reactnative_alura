import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { BuyButton } from '../../../../components/BuyButton';
import { InputField } from '../../../../components/InputField';
import { moneyFormat } from '../../../../utils/utils';
import styles from './styles';

export const CartProduct = ({ name, price, description, quantity }) => {
  const [totalProducts, setTotalProducts] = useState(quantity);
  const [totalValue, setTotalValue] = useState(price * quantity);

  const updateTotalItensAndValue = (newTotalValue) => {
    setTotalProducts(newTotalValue);
    calculateTotalValue(newTotalValue);
  };

  const calculateTotalValue = (numberOfProducts) => {
    setTotalValue(numberOfProducts * price);
  };

  return (
    <>
      <View style={styles.information}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{moneyFormat(price)}</Text>
      </View>
      <View style={styles.cart}>
        <View>
          <View style={styles.productPrice}>
            <Text style={styles.description}>Quantidade: </Text>
            <InputField
              style={styles.calculedValue}
              itemValue={totalProducts}
              action={updateTotalItensAndValue}
            />
          </View>
          <View style={styles.productPrice}>
            <Text style={styles.description}>Preço: </Text>
            <Text style={styles.price}>{moneyFormat(totalValue)}</Text>
          </View>
        </View>
        <BuyButton value={'Remover do carrinho'} action={() => {}} />
      </View>
      <View style={styles.breakLine} />
    </>
  );
};
