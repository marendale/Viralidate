import { createContext,useState,useEffect } from "react";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export const Context = createContext();

export const AuthContext = ({children}) => {
 const auth = getAuth();
 const [user, setUser] = useState(null);
 const [userType, setUserType] = useState(null);
 const [loading,setLoading] = useState(true);

 useEffect(() => {
    let unsubscribe;
    unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        setLoading(false)
        if(currentUser){
            setUser(currentUser)
            const patientProfile = await getDoc(doc(db, "patientProfile", currentUser.uid));
            const adminProfile = await getDoc(doc(db, "adminProfile", currentUser.uid));
            if(patientProfile.exists()){
                setUserType('patient')
            }
            if(adminProfile.exists()){
                setUserType('admin')
            }
        } 
        else {
            setUser(null);
            setUserType(null);
        }
    });
    return () => {
        if(unsubscribe) unsubscribe();
    }
 },[])
 
 const values = {
    user: user,
    setUser: setUser,
    userType: userType,
    setUserType: setUserType
 }

return <Context.Provider value={values}>
   {!loading &&
    children
   }
</Context.Provider>
}