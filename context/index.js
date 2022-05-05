import { useState, useEffect, useReducer, createContext } from "react";



// create context
const UserContext = createContext({});

const UserProvider = ({children}) => {
    useEffect(() => {
        const auth = JSON.parse(window.localStorage.getItem("auth"))
        let userDetail = auth&&auth.correctUser? auth.correctUser: null
        let userToken = auth&&auth.accessToken? auth.accessToken: ""
        setState({
            user:  userDetail,
            token: userToken
        })
    }, [])
    
    const [state, setState] = useState({
        user: null,
        token: ''
    })


    return  (
            <UserContext.Provider value={[state, setState]}>
                {children}
            </UserContext.Provider>
            );

}

export {UserContext, UserProvider}