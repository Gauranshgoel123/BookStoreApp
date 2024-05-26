import React, { createContext, useContext,useState } from 'react'

//first create context
export const AuthContext = createContext();
//children means all other components anf files
export default function AuthProvider( {children} ) {

    const initialAuthUser = localStorage.getItem("Users");
    //state management
    const[authUser,setAuthUser] = useState(
        initialAuthUser?JSON.parse(initialAuthUser) : undefined
    );
    return (
        <AuthContext.Provider value={[ authUser,setAuthUser ]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
