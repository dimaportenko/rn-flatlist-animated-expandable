/**
 * @flow
 * Created by Dima Portenko on 28.05.2020
 */
import React from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import { getData } from './getData';
import { ListItem } from './ListItem';

export const ExpandableCellList = () => {
  const data = getData();
  console.warn(data)

  const renderItem = ({ item }) => {
    return (
      <ListItem item={item} />
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => `${item.title}${index}`}
        renderItem={renderItem}
      />
    </View>
  );
};
