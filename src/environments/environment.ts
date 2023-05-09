import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCzM3dSOLLxBqEOrthKOHYR6iqXNYrfSAA",
    authDomain: "smartcook-42.firebaseapp.com",
    projectId: "smartcook-42",
    storageBucket: "smartcook-42.appspot.com",
    messagingSenderId: "504415742247",
    appId: "1:504415742247:web:fc1f019e367ccd37d1e102",
    measurementId: "G-6L8C4PFBLP",
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
