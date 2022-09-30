import React, {useContext} from 'react'

import Error from '../Error/index.js'

import { GlobalContext } from '../../utils/Context/globalContext.js'



export default function Dashboard() {
  // const { userAuth} = useContext(GlobalContext)
  const { userAuth, userInfo, userPerformance, userAverageSession, userActivity, } = useContext(GlobalContext)
  
  console.log(userInfo)
  console.log(userActivity)
  console.log(userAverageSession)
  console.log(userPerformance)

  return (
    <div>
      {!userAuth ? <Error /> : <h1>hello dashboard</h1>}
    </div>
  )
}
