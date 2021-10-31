import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
export const AuthContext = createContext();
const AuthProbider = ({ children }) => {
    const allConText = useFirebase()
    return (
        <AuthContext.Provider value={allConText}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProbider;