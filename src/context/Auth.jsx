import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const [repo, setRepo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`https://api.github.com/repos/banRayan/marmiTech-challenge`)
                .then(response => setRepo(response.data));
        }

        fetchData()
    }, [])


    return (
        <AuthContext.Provider
            value={{
                repo
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext);