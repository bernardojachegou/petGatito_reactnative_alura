import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { BuyButton } from '../../../../components/BuyButton';
import { InputField } from '../../../../components/InputField';
import { moneyFormat } from '../../../../utils/utils';
import styles from './styles';

export const PetProduct = ({ name, price, description }) => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [expand, setExpand] = useState(false);

  const updateTotalItensAndValue = (newTotalValue) => {
    setTotalProducts(newTotalValue);
    calculateTotalValue(newTotalValue);
  };

  const calculateTotalValue = (numberOfProducts) => {
    setTotalValue(numberOfProducts * price);
  };

  const toggleExpand = () => {
    setExpand(!expand);
    updateTotalItensAndValue(1);
  };

  return (
    <>
      <TouchableOpacity style={styles.information} onPress={toggleExpand}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{moneyFormat(price)}</Text>
      </TouchableOpacity>
      {expand && (
        <View style={styles.cart}>
          <TouchableOpacity>
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
          </TouchableOpacity>
          <BuyButton value={'Adicionar ao carrinho'} action={() => {}} />
        </View>
      )}
      <View style={styles.breakLine} />
    </>
  );
};
