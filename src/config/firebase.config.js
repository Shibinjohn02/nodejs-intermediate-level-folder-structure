const firebase = require('firebase');
require('dotenv').config();

// Setting up the firebase sdk configuration
const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
}

// Initializing firebase SDK
const db = firebase.initializeApp(firebaseConfig);

module.exports = db;