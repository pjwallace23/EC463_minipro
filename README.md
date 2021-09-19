# EC463_minipro
Development of an app in React Native Expo to scan and read a barcode with firebase authentication and functional read and writes from cloud firestore database. 

#### PLEASE READ: All progress and changes to codebase and programming can be found in the various Peter and John branches. The code in there follows all our steps of development over the last weeks. All final changes and app code can be found in the master branch. 

#### Images / Screenshots: Specific screenshots of our app and progress can be found in the screenshots folder

#### API's Used: UPC Databse: https://upcdatabase.org/api and FDC Database: https://fdc.nal.usda.gov/api-guide.html

# Video Demo
[![DemoVideo](https://user-images.githubusercontent.com/50682462/133932153-5c30871a-982a-4962-a517-855ebe8a8759.PNG)](https://youtu.be/v5kCFWkiE9Q) </br>
link:- https://youtu.be/v5kCFWkiE9Q </br>

# DevLog / Goals

## Day1 9/8/2021
Installed development tools, including Node, Expo CLI and Android Studio. Configured android studio emulator with expo and tested to make sure we can open hello world style apps in the emulator.

## Day2 9/10/2021
Worked remotely to setup Firebase with React Native (John) and Firebase with Expo (Peter). Started to configure a barcode scanner with expo as well as Google authentication in firebase using the android SHA1 key and package name. 

## Day3 9/11/2021
Found a working case for the barcode scanner and implemented firebase and authentication (email/password). Started developing frontend UI and screen navigational logic for our final app.

## Day 4 9/12/2021
Continued fine-tuning firebase authentication. Implemented the barcode scanner in an app with firebase authentication and set up firestore database. 

## Day 5 9/14/2021
John: implemented functionality to send barcode data directly from scanner to FDA API, fetch nutritional data, and store it in firestore database. As of now unable to retrieve data from firestore.
Peter: Improved UI design for the Scanner and Home screens.

## Day 6 9/16/2021
Peter: Implemented funcitonality to retrieve nutritional data from firestore database using the database.get() function. Programmed a button in home screen to display nutritional data of all items scanned in a list. This list is shown in the application log, we are unable to display it in a JS screen in our app.

## Day 7 9/17/2021
Continued attempting to implement functionality to display data in our app, but were unsuccessful. Final app will only be able to retrieve data and display it in the Expo console. 


