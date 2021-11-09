import React, { useContext } from "react";
import { setUser, updatedEmail, resetPassword, logout, login, signup, getUser } from "./Auth";
import { getAuth} from "firebase/auth";

const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext);
}


export function AuthProvider({ children }) {
    const value = {
        setUser,
        updatedEmail,
        resetPassword,
        logout,
        login,
        signup,
        getUser,
        getAuth,
        
    };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}