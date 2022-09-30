import React, { createContext, useState} from 'react'

export const GlobalContext = createContext() 

const GlobalContextProvider = (props) => {
    
    const [userAuth, setUserAuth] = useState(false)
    const [userId, setUserId] = useState("12")
    const [typeData, setTypeData] = useState("mocks")

    const toggleUserAuth = () => {
        setUserAuth(userAuth ? false : true)
    }
    const toggleUserId = (selectId) => {
        setUserId(selectId)
    }
    const toggleTypeData = (typeData) => {
        setTypeData(typeData)
    }
    return(
        <GlobalContext.Provider value={{
            userAuth, 
            userId, 
            typeData,
            toggleUserAuth,
            toggleUserId,
            toggleTypeData,
            }}>

            {props.children}

        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider