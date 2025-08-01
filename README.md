# demo App

A React Native app for discovering local events using Ticketmaster API.

## Features
- Login/Signup using Firebase
- Event Search with Keyword & City
- Event Details View with QR Code and Map
- Biometric Login (TouchID)
- Favorites saved per user in Firebase Firestore
- Multilingual Support (RTL)

## Installation
```bash
git clone <your-repo-url>
cd CityPulseApp
npm install
```

## Firebase Setup
1. Create a Firebase Project
2. Add iOS/Android apps
3. Place `google-services.json` in `android/app/` and `GoogleService-Info.plist` in Xcode project
4. Enable Email/Password Auth
5. Create Firestore database (use `favorites` collection)

## Run
```bash
npx react-native run-android
npx react-native run-ios
