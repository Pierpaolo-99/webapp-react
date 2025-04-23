import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvide({ children }) {
    const loginUrl = "http://localhost:3000/api/v1/movies/login"; // Replace with your actual registration URL
    const [user, setUser] = useState(null);

    function login(email, password) {

        return fetch(loginUrl, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(data => {
                if (data.user) setUser(data.user);

                return data
            })

    }

    function logout() {

        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

}

export function useAuth() {
    return useContext(AuthContext);
}