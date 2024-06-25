import React, { useState } from 'react';
import { Modal, StyleSheet, View, Text, Button, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { ThemedText } from '@/components/ThemedText';
import userData from '@/assets/db.json'; // Make sure this path is correct

interface User {
  id: number;
  login: string; // Assuming this should be included as per your JSON data.
  avatar_url: string;
  bio: string | null; // Marking `bio` as nullable.
  company: string;
  name: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}


export default function MapTab() {
  // Use userData directly from the imported JSON
  const { users } = userData as { users: User[] };  // Cast your userData to the correct type
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleMarkerPress = (user: User) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ThemedText type="subtitle" style={styles.title}>Community Map</ThemedText>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {users.map(user => (
          <Marker
            key={user.id}
            coordinate={{ latitude: user.coordinates.latitude, longitude: user.coordinates.longitude }}
            title={user.name}
            description={user.company}
            onPress={() => handleMarkerPress(user)}
          />
        ))}
      </MapView>
      {selectedUser && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image source={{ uri: selectedUser.avatar_url }} style={styles.avatar} />
              <Text style={styles.modalText}>Name: {selectedUser.name}</Text>
              <Text style={styles.modalText}>Company: {selectedUser.company}</Text>
              <Text style={styles.modalText}>Bio: {selectedUser.bio || 'No bio available'}</Text>
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
