import React, { useState } from 'react';
import { StyleSheet, Image, TextInput, Button, View, Alert } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { useAuth } from '@/hooks/authContext'; // Import the useAuth hook
import { checkGitHubUser } from '@/API/GitHubApi'; // Assuming this is the correct path
import { saveUserDataToDb } from '@/API/services/userDataService';

export default function TabTwoScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const { login } = useAuth();  // Destructure the login function from useAuth

  const handleSignIn = async () => {
    try {
      const userData = await checkGitHubUser(username); // Check if GitHub user exists
      if (userData) {
        const user = {
          login: userData.login,
          avatar_url: userData.avatar_url,
          bio: userData.bio,
          company: userData.company,
          name: userData.name,
          city: city,
          country: country
        };
  
        // Save to local JSON server
        await saveUserDataToDb(user);
  
        // Simulate registration and login
        login(user); // Adjust login to handle complete user data
        Alert.alert("Login Successful", `Welcome ${userData.name}!`);
      } else {
        Alert.alert("Login Failed", "GitHub username does not exist.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Login Error", "An error occurred during login.");
    }
  };
  

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Image
        source={require('@/assets/images/icon-web-dev.jpg')} style={styles.headerImage} />}
    >
      <ThemedText type="subtitle">Sign in with your Github Account</ThemedText>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="GitHub Username"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password (GitHub or App specific)"
          secureTextEntry
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          onChangeText={setCity}
          value={city}
          placeholder="City"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          onChangeText={setCountry}
          value={country}
          placeholder="Country"
          autoCapitalize="none"
        />
        <Button
          title="Sign In"
          onPress={handleSignIn}
        />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 210,
    width: 400,
    bottom: 0,
    left: 5,
    position: 'absolute',
  },
  formContainer: {
    padding: 20,
    backgroundColor: '#f0f0f0'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
