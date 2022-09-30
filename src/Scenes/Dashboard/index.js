import React, {useContext} from 'react'
import { GlobalContext } from '../../utils/Context/globalContext.js'
import Error from '../Error/index.js'



export default function Dashboard() {
  const {userId, typeData, userAuth} = useContext(GlobalContext)
  
  console.log(userId)
  console.log(typeData)

  

  return (
    <div>
      {!userAuth ? <Error /> : <h1>hello dashboard</h1>}
    </div>
  )
}
