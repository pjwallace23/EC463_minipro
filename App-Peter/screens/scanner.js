import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button as RNButton } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { Button, InputField, ErrorMessage } from '../components';

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");





var db = firebase.firestore();




export default function Scanner({ navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
   
    fetch('https://api.upcdatabase.org/product/'+data+'?apikey=AE37237F9022E31230E15FE1A95C1C75').then(function (response){
      if(response.ok){
        return response.json();
      }
      else{
        return Promise.reject(response)
      }
    }).then(function (dat) {
      post = dat
      //console.log('https://api.nal.usda.gov/fdc/v1/foods/search?query='+dat.description+'&pageSize=1&api_key=N3cPDogFbtGPUgvcGRZSPQAgOJG7UQE9RhKr8cV8')
      return fetch('https://api.nal.usda.gov/fdc/v1/foods/search?query='+dat.description+'&pageSize=1&api_key=N3cPDogFbtGPUgvcGRZSPQAgOJG7UQE9RhKr8cV8')
      
    }).then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    }).then(function (userData) {

      console.log(userData.foods[0].description);
      
      console.log(
        userData.foods[0].foodNutrients[3].nutrientName + ', ' +
        userData.foods[0].foodNutrients[3].value,
        userData.foods[0].foodNutrients[3].unitName 
        )
      console.log(
        userData.foods[0].foodNutrients[0].nutrientName + ', ' +
        userData.foods[0].foodNutrients[0].value,
        userData.foods[0].foodNutrients[0].unitName 
        )  
      console.log(
        userData.foods[0].foodNutrients[1].nutrientName + ', ' +
        userData.foods[0].foodNutrients[1].value,
        userData.foods[0].foodNutrients[1].unitName 
        )    
      console.log(
        userData.foods[0].foodNutrients[2].nutrientName + ', ' +
        userData.foods[0].foodNutrients[2].value,
        userData.foods[0].foodNutrients[2].unitName 
        )    
      console.log(
        userData.foods[0].foodNutrients[4].nutrientName + ', ' +
        userData.foods[0].foodNutrients[4].value,
        userData.foods[0].foodNutrients[4].unitName 
        )    
      console.log(
        userData.foods[0].foodNutrients[5].nutrientName + ', ' +
        userData.foods[0].foodNutrients[5].value,
        userData.foods[0].foodNutrients[5].unitName 
        )  
        
      var food_name = userData.foods[0].description
      var num_cal = userData.foods[0].foodNutrients[3].value

      alert(food_name + ' calories ' + num_cal)

      var food = [
        {
          "Description":userData.foods[0].description,
          //"Description":"Test"
          "Calories":userData.foods[0].foodNutrients[3].nutrientName +
          userData.foods[0].foodNutrients[3].value + userData.foods[0].foodNutrients[3].unitName, 
          "Protein":userData.foods[0].foodNutrients[0].nutrientName + userData.foods[0].foodNutrients[0].value +
          userData.foods[0].foodNutrients[0].unitName,
          "Fat":userData.foods[0].foodNutrients[1].nutrientName + userData.foods[0].foodNutrients[1].value +
          userData.foods[0].foodNutrients[1].unitName,
          "Carbs":userData.foods[0].foodNutrients[2].nutrientName + userData.foods[0].foodNutrients[2].value +
          userData.foods[0].foodNutrients[2].unitName,
          "Sugar":userData.foods[0].foodNutrients[4].nutrientName + userData.foods[0].foodNutrients[4].value +
          userData.foods[0].foodNutrients[4].unitName,
          "Fiber":userData.foods[0].foodNutrients[5].nutrientName + userData.foods[0].foodNutrients[5].value +
          userData.foods[0].foodNutrients[5].unitName

        }
      ]

      food.forEach(function(obj){

        db.collection("food").add({
          Description: obj.Description,
          Calories: obj.Calories,
          Protein: obj.Protein,
          Fat: obj.Fat,
          Carbs: obj.Carbs,
          Sugar: obj.Sugar,
          Fiber: obj.Fiber
        }).then(function(docRef){
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error){
          console.error("Error adding document: ", error);
        })
      })
    }).catch(function (error) {
      console.warn(error);
    });
    
    //alert('You scanned: ' +  + '. Adding this to your menu.')
    //console.log(fetch('https://api.upcdatabase.org/product/0033383401508?apikey=AE37237F9022E31230E15FE1A95C1C75'))
    //fetch('https://api.upcdatabase.org/product/' + data + '?apikey=AE37237F9022E31230E15FE1A95C1C75')
    //.then(res => console.log(res))
    //const response = fetch('https://api.upcdatabase.org/product/0033383401508?apikey=AE37237F9022E31230E15FE1A95C1C75')
    //console.log(response)
    //async function getData() {
      //console.log(data)
      //var fetchItem = 'https://api.upcdatabase.org/product/'+data+'?apikey=AE37237F9022E31230E15FE1A95C1C75'
      //const response = await fetch(fetchItem)
      
      //const dat = await response.json()
      //console.log(dat.description)
      //if(dat.description == 'undefined'){
        //alert('Food Item Not Found')
      //}
      //else{
        //alert(dat.description)
      //}
      //var fetchItem2 = 'https://api.nal.usda.gov/fdc/v1/foods/search?query='+dat.description+'&pageSize=1&api_key=N3cPDogFbtGPUgvcGRZSPQAgOJG7UQE9RhKr8cV8'
      //const response2 = await fetch(fetchItem2)
      //const dat2 = await response.json()
    //}
    //getData();

    
    
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  
  

  return (
    <View style={styles.container}>
      <Text style = {{alignSelf:'center', color:'white', fontSize: 30}}>Scanner</Text>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && navigation.navigate('Home')}
      
      
        <Button
        onPress={() => navigation.navigate('Home')}
        backgroundColor='#f57c00'
        title='Back to Home'
        tileColor='#fff'
        titleSize={20}
        
        containerStyle={{
          marginTop: 600
        }}
      />
    </View>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 50,
    borderTopWidth: 150,
    borderBottomWidth: 150,
    borderColor: '#3aa8c1',
  },
  buttonOuterLayout: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});