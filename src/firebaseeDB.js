import { initializeApp, getApps } from 'firebase/app';
import { getDatabase, ref, onValue, query, orderByKey, equalTo, startAt, endAt  } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyA9L9tZI7pknpqklKVIkjBk_EfbDmE75Ng",
    authDomain: "glossary-lawyer.firebaseapp.com",
    projectId: "glossary-lawyer",
    storageBucket: "glossary-lawyer.appspot.com",
    messagingSenderId: "738810528587",
    appId: "1:738810528587:web:8deeed3f6c4beea1cb9ece",
    measurementId: "G-ZYQ31X693L"
  };

let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

export const db = getDatabase(app);
export { ref, onValue, query, orderByKey, equalTo, startAt, endAt  };
