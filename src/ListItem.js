/**
 * @flow
 * Created by Dima Portenko on 28.05.2020
 */
import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const ListItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity style={styles.wrap} onPress={() => setExpanded(!expanded)}>
      <View style={styles.container}>
        <Image source={{ uri: item.image}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text>{item.title}</Text>
          <Text>{item.subtitle}</Text>
        </View>
      </View>
      {expanded && (
        <Text style={styles.details}>{item.details}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrap: { borderColor: 'gray', borderWidth: 1, margin: 5, borderRadius: 5  },
  container: { flexDirection: 'row' },
  image: { width: 50, height: 50, margin: 10 },
  textContainer: { justifyContent: 'space-around' },
  details: { margin: 10 },
});

