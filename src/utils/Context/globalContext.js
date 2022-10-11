import React, { createContext, useState, useEffect } from 'react'
import GetData from '../../Services/getData.js'

export const GlobalContext = createContext()




const GlobalContextProvider = (props) => {

    const [userAuth, setUserAuth] = useState(false)
    const [userId, setUserId] = useState("12")
    const [typeData, setTypeData] = useState(null)
    /* on traite les datas */
    const [userInfo, setUserInfo] = useState(null)
    const [userPerformance, setUserPerformance] = useState(null)
    const [userActivity, setUserActivity] = useState(null)
    const [userAverageSession, setUserAverageSession] = useState(null)

    function getAllData() {
        const datas = new GetData(userId, typeData)
        datas.getUser().then((data) => setUserInfo(data))
        datas.getUserPerformance().then((data) => setUserPerformance(data))
        datas.getUserAverageSession().then((data) => setUserAverageSession(data))
        datas.getUserActivity().then((data) => setUserActivity(data))
    }
    useEffect(getAllData, [userId, typeData])

    const toggleUserAuth = () => {
        setUserAuth(userAuth ? false : true)
    }
    const toggleUserId = (selectId) => {
        setUserId(selectId)
    }
    const toggleTypeData = (data) => {
        setTypeData(data)
    }
    return (
        <GlobalContext.Provider value={{
            userAuth,
            userId,
            typeData,
            toggleUserAuth,
            toggleUserId,
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