import { async } from '@firebase/util';
import {signInWithGooglePopup} from '../../utils/firebase/firebase.utils' 
import './sign-in.styles.scss'


const SignIn = ()=>{

    const logGoogleUser = async()=>{
        const response = await signInWithGooglePopup();
        console.log(response);
    }



    return(
      <div>
        <h1>Sign in Page</h1>
        <button onClick={logGoogleUser }>
            Sign In with Google Popup
        </button>
      </div>
    )
};

export default SignIn ;