import React from 'react';
import { Navigator } from 'src/navigator';

import firebase from 'firebase';
import { firebaseConfig } from 'src/config/firebase';

require('firebase/firestore');

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  return <Navigator />;
}

export default App;
