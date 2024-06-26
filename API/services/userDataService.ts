// userDataService.ts
import { Alert } from 'react-native';

// Function to save user data to local JSON server
export async function saveUserDataToDb(user: any) {
  try {
    const response = await fetch('http://10.0.0.119:3333/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error('Failed to save user data');
    }

    const data = await response.json(); 
    console.log('User saved successfully:', data);
    Alert.alert("Registration Successful", `Welcome ${user.name}!`);
  } catch (error) {
    console.error('Error saving user data:', error);
    Alert.alert("Registration Error", "Failed to register user.");
  }
}
