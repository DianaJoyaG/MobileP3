import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

interface User {
  id: number;
  login: string;
  avatar_url: string;
  bio: string | null;
  company: string;
  name: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

const ProfileScreen = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://10.0.0.119:3333/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {users.map(user => (
        <View key={user.id} style={styles.profileContainer}>
          <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.bio}>{user.bio || 'No bio available'}</Text>
          <Text style={styles.info}>Company: {user.company}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  profileContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    color: '#666',
    marginVertical: 8,
  },
  info: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
});

export default ProfileScreen;
