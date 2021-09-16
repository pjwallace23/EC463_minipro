import 'dotenv/config';

export default{
  "expo": {
    "name": "SWMini",
    "slug": "SWMini",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    /*
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID
    }
    */
    extra: {
      apiKey: "AIzaSyAOlmjAdecZXQLUTIiZ1qIXbtg64k6Ia04",
      authDomain: "swexpo-d6654.firebaseapp.com",
      projectId: "swexpo-d6654",
      storageBucket: "swexpo-d6654.appspot.com",
      messagingSenderId: "744203427391",
      appID: "G-KZ7ER8SL3M"
    }
    
  }
}

  

