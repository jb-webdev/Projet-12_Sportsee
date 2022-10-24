import React, { useContext } from 'react'
import './dashboard.css'

import Error from '../Error/index.js'

import { GlobalContext } from '../../utils/Context/globalContext.js'
// compo
import Sayhello from '../../components/SayHello/index.js'
import Weight from '../../components/Charts/Weight/index.js'
import AverageSession from '../../components/Charts/AverageSession/index.js'
import Performance from '../../components/Charts/Performance/index.js'
import Score from '../../components/Charts/Score/index.js'
import InfoNutritional from '../../components/InfoNutritional/index.js'
// icons
import calories from '../../utils/assets/icon-svg/icon-calories.svg'
import proteines from '../../utils/assets/icon-svg/icon-protein.svg'
import glucides from '../../utils/assets/icon-svg/icon-carbohydrates.svg'
import lipides from '../../utils/assets/icon-svg/icon-lipids.svg'


export default function Dashboard() {
  const { apiError, userInfo, userPerformance, userAverageSession, userActivity } = useContext(GlobalContext)

  // console.log(userInfo.userInfos.firstName)
  // console.log(userActivity)
  // console.log(userAverageSession)
  // console.log(userPerformance.data)
  // console.log(userInfo)
   
  const scoreUser = userInfo.todayScore || userInfo.score


  return (
    <>
      {apiError ? 
      <Error message = "Connection à L'API Impossible"/> 
        : 
        <main className='mainDashboard'>
          <Sayhello username={userInfo.userInfos.firstName} />
          <div className='mainWrapper'>
            <section className='wrapperCharts'>
              <Weight datas={userActivity} />
              <div className='wrapperSmallCharts'>
                <AverageSession datas={userAverageSession} />
                <Performance datas={userPerformance.data} />
                <Score datas={scoreUser} />
              </div>
            </section>
            <section className='wrapperInfoSection'>
              <InfoNutritional
                image={calories}
                title='Calories'
                value={userInfo.keyData.calorieCount}
                unit='kCal'
              />
              <InfoNutritional
                image={proteines}
                title='Proteines'
                value={userInfo.keyData.proteinCount}
                unit='g' />
              <InfoNutritional
                image={glucides}
                title='Glucides'
                value={userInfo.keyData.carbohydrateCount}
                unit='g' />
              <InfoNutritional
                image={lipides}
                title='Lipides'
                value={userInfo.keyData.lipidCount}
                unit='g'
              />
            </section>
          </div>
        </main> 
      }
    </>
  )
}
