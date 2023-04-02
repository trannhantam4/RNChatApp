import "dotenv/config";
export default {
  expo: {
    name: "RNChatApp",
    slug: "RNChatApp",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      apiKey: "AIzaSyBp91QIisoX9TyWwLoF5lM2n1uHzugfMT8",
      authDomain: "rnchatapp-90c30.firebaseapp.com",
      projectId: "rnchatapp-90c30",
      storageBucket: "rnchatapp-90c30.appspot.com",
      messagingSenderId: "263739315961",
      appId: "1:263739315961:web:cae9e985fcb27207fdb428",
    },
  },
};
