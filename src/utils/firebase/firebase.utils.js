import {initializeApp} from 'firebase/app';
import {
    getAuth ,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
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
  export const signInWithGoogleRedirect = ()=>signInWithRedirect(auth,provider);




  export const db =getFirestore();
  export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation
    )=>{
    if(!userAuth)return;
    const userDocRef = doc(db,'users',userAuth.uid);

    console.log(userDocRef);


    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot); 
    console.log(userSnapshot.exists());


    if(!userSnapshot.exists()){
      const {displayName,email}=userAuth;
      const createdAt = new Date();
      try{
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt,
          ...additionalInformation
        });
      }catch(error){
        console.log('error creating the user',error.message )
      }
    }
    return userDocRef
  }; 

export const createAuthUserWithEmailAndPassword = async (email,password)=>{
  if(!email || !password)return;
  return await createUserWithEmailAndPassword(auth,email,password);
};