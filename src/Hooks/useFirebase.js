import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firbase/firbase.init";
initializeAuthentication()

const useFirebase = () => {
    const [isLoading, setLoading] = useState(true);
    const [users, setUsers] = useState({});
    const auth = getAuth();
    const signInUsinGoogle = () => {
        setLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

            .finally(() => setLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (users) {
                setUsers(user)
            }
            else {
                setUsers({})
            }
            setLoading(false)
        })
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setLoading(false));

    }

    return {
        users,
        logOut,
        signInUsinGoogle,
        isLoading
    }
}

export default useFirebase;