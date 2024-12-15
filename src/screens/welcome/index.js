import React from 'react';
import { FlatList, Linking, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import DataJersey from './data/Jersey.json';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';

const Jersey = () => {
  return (
    <FlatList
      data={DataJersey}
      keyExtractor={(item) => item.id} 
      renderItem={({ item }) => (
        <TouchableOpacity 
          style={styles.card}
          onPress={() => {
            Linking.openURL('google.navigation:q=' + item.latitude, + item.longitude); 
          }}
        >
          <View style={styles.avatar}>
            <FontAwesomeIcon icon={faShop} size={50} color="#4169e1" />
          </View>
          <View style={styles.info}>
            <Text style={styles.cardtitle}>{item.toko}</Text>
            <Text style={styles.cardaddress}>{item.alamat}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default Jersey;

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 100,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    marginRight: 15,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  cardtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  cardaddress: {
    fontSize: 14,
    color: '#666',
  },
  card: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 20,
    marginVertical: 7,
  },
});
