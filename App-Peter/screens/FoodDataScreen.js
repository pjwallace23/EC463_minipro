import { collection, getDocs } from "firebase/firestore";
import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { StyleSheet, Text, View, Button as RNButton, Image} from 'react-native';
import { render } from "react-dom";
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const db = firebase.firestore();

export default function FetchListScreen({navigation})  { 

    let str1 = "Items Scanned \n\n";

    db.collection("food").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            str1 = str1 + "Item: " + doc.get('Description') + "  " + "Calories: " + doc.get('Calories') + "\n" + "\n";
        });
        console.log(str1);
    }); 
    navigation.navigate("Home");
    return null
}