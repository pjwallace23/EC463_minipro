import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { StyleSheet, Text, View, Button as RNButton, Image} from 'react-native';

import { Button, InputField, ErrorMessage } from '../components';
import Firebase from '../config/firebase';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import Scanner from './scanner';
import logo from '../assets/FDA_Logos.png';
import { NavigationContainer } from '@react-navigation/native';



//import { getData } from './scanner';
//let val = getData()
//let val = getData()
//console.log(val)

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
      
      <Button
        onPress={() => navigation.navigate('Scanner')}
        backgroundColor='#f57c00'
        title='Go to Food Scanner'
        tileColor='#fff'
        titleSize={20}
        containerStyle={{
          marginBottom: 24
        }}
      />
      
      <Image source = {logo} style = {{width:300, height:200, alignSelf: 'center', marginTop: 30}}/>
      <Text style={{fontSize: 20, alignSelf: 'center', marginTop: 40, color:'white'}}>Press "Go to Food Scanner" to scan your ingredient and get its nutritional data from the FDA API!</Text>

      <Button
        onPress={() => navigation.navigate('List')}
        backgroundColor = '#f57c00'
        title='Display Ingredients Scanned in Log'
        titleColor='#fff'
        titleSize={15}
        containerStyle={{
          marginTop: 100
        }}
        />
      <Button
        onPress={handleSignOut}
        backgroundColor='#f57c00'
        title='Sign Out'
        tileColor='#fff'
        titleSize={20}
        containerStyle={{
          marginTop: 20
        }}
      />
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3aa8c1',
    paddingTop: 50,
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