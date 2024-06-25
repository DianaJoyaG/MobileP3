import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/1024025?v=4' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Linus Torvalds</Text>
        <Text style={styles.bio}>Creator of Linux & Git</Text>
        <View style={styles.statsContainer}>
          <Text style={styles.stats}>Followers: 114k</Text>
          <Text style={styles.stats}>Following: 0</Text>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        {/* Icons or images for achievements could be added here */}
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Popular repositories</Text>
        <Text style={styles.repository}>linux {"\n"}⭐ 114k</Text>
        <Text style={styles.repository}>git {"\n"}⭐ 35k</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5', // Lighter background for a fresher look
  },
  headerContainer: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e4e8', // Subtle separation
  },
  avatar: {
    margin: 20,
    width: 140, // Slightly larger avatar
    height: 140,
    borderRadius: 70, // Full circle
    borderWidth: 3, // Highlight the avatar with a border
    borderColor: '#007AFF', // Navy blue border
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222', // Darker text for better readability
  },
  bio: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
    marginBottom: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 12,
  },
  stats: {
    fontSize: 16,
    fontWeight: '600', // Make stats a bit bolder
    color: '#333',
  },
  sectionContainer: {
    paddingVertical: 15, // More padding for a spacious look
    paddingHorizontal: 20,
    backgroundColor: '#ffffff', // White background for sections
    marginTop: 10,
    borderRadius: 8, // Rounded corners for sections
    shadowColor: '#000', // Subtle shadows for a 3D effect
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF', // Style color matching the avatar border
  },
  repository: {
    fontSize: 16,
    color: '#333',
    paddingTop: 5,
  }
});

export default ProfileScreen;
