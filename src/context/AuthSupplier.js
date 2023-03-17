import { createContext, useState } from "react";
import React from 'react';

const AuthContext = createContext({})

export function AuthSupplier ({ children }) {
    const [auth, setAuth] = useState({})
    const [percentage, setPercentage] = useState(100);

    return (
        <AuthContext.Provider value={{ auth, setAuth, percentage, setPercentage }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;