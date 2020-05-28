/**
 * @flow
 * Created by Dima Portenko on 28.05.2020
 */
import React, { useRef } from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import { getData } from './getData';
import { ListItem } from './ListItem';
import { Transition, Transitioning } from 'react-native-reanimated';

export const ExpandableCellList = () => {
  const transitionRef = useRef();
  const transition = <Transition.Change interpolation="easeInOut" />;
  const data = getData();

  const onPress = () => {
    transitionRef.current.animateNextTransition();
  }

  const renderItem = ({ item }) => {
    return (
      <ListItem
        item={item}
        onPress={onPress}
      />
    )
  }

  return (
    <Transitioning.View ref={transitionRef} transition={transition} style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => `${item.title}${index}`}
        renderItem={renderItem}
      />
    </Transitioning.View>
  );
};
