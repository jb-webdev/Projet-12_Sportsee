import React, { createContext, useState, useEffect } from 'react'
import GetData from '../../Services/getData.js'

export const GlobalContext = createContext()

const GlobalContextProvider = (props) => {

    const [userAuth, setUserAuth] = useState(false)
    const [userId, setUserId] = useState(null)
    const [typeData, setTypeData] = useState(null)
    /* on traite les datas */
    const [userInfo, setUserInfo] = useState(null)
    const [userPerformance, setUserPerformance] = useState(null)
    const [userActivity, setUserActivity] = useState(null)
    const [userAverageSession, setUserAverageSession] = useState(null)
    const [apiError, setApiError] = useState(false)

    function getAllData() {
        const datas = new GetData(userId, typeData)
        datas.getUser().then((data) => data === -1 ? setApiError(true) : setApiError(false))
        datas.getUser().then((data) => setUserInfo(data))
        datas.getUserPerformance().then((data) => setUserPerformance(data))
        datas.getUserAverageSession().then((data) => setUserAverageSession(data))
        datas.getUserActivity().then((data) => setUserActivity(data))
    }
    useEffect(getAllData, [userId, typeData])
    
    const toggleUserId = (selectId) => {
        setUserId(selectId)
    }
    const toggleTypeData = (data) => {
        setTypeData(data)
    }
    
    return (
        <GlobalContext.Provider value={{
            apiError,
            setApiError,
            userAuth,
            setUserAuth,
            userId,
            toggleUserId,
            typeData,
            toggleTypeData,
            userInfo,
            userPerformance,
            userAverageSession,
            userActivity,
        }}>

            {props.children}

        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider