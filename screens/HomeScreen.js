import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { StyleSheet, Text, View, Button as RNButton } from 'react-native';

import { IconButton } from '../components';
import Firebase from '../config/firebase';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';

const auth = Firebase.auth();

export default function HomeScreen({ navigation}) {
  const { user } = useContext(AuthenticatedUserContext);
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style='dark-content' />
      <View style={styles.row}>
        <Text style={styles.title}>Welcome {user.email}!</Text>
        
       
      </View>
      
      <RNButton
        onPress={() => navigation.navigate('Scanner')}
        title='Go to Food Scanner'
        color='#fff'
      />

      <RNButton
        onPress={handleSignOut}
        title='Sign Out'
        color='#fff'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3aa8c1',
    paddingTop: 350,
    paddingHorizontal: 40
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff'
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff'
  }
});