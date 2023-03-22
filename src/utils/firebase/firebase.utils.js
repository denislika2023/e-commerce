import {initializeApp} from 'firebase/app';
import {
    getAuth ,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import{
getFirestore,
doc,
getDoc,
setDoc

} from 'firebase/firestore';




// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhxb9_4Hu0Jqx3f0q0iXsaYAbLzAL9JdU",
    authDomain: "e-commerce-db-d5a34.firebaseapp.com",
    projectId: "e-commerce-db-d5a34",
    storageBucket: "e-commerce-db-d5a34.appspot.com",
    messagingSenderId: "649001314154",
    appId: "1:649001314154:web:149660398b060da4bfa713"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig); 

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = ()=>signInWithPopup(auth,provider);
  export const db =getFirestore();