import React, { useContext } from 'react'
import './dashboard.css'

import Error from '../Error/index.js'

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



import { GlobalContext } from '../../utils/Context/globalContext.js'
import User from '../../utils/models/User.js'

export default function Dashboard() {
  const { apiError, userInfo, userPerformance, userAverageSession, userActivity } = useContext(GlobalContext)


  var objectUser = new User(userInfo, userAverageSession, userPerformance, userActivity)

  return (
    <>
      {apiError ?
        <Error message="Connection à L'API Impossible" />
        :
        <main className='mainDashboard'>
          <Sayhello username={objectUser.firstname} />
          <div className='mainWrapper'>
            <section className='wrapperCharts'>
              <Weight datas={objectUser.weight} />
              <div className='wrapperSmallCharts'>
                <AverageSession datas={objectUser.averageSession} />
                <Performance datas={objectUser.performance} />
                <Score datas={objectUser.score} />
              </div>
            </section>
            <section className='wrapperInfoSection'>
              <InfoNutritional
                image={calories}
                title='Calories'
                value={objectUser.calorieCount}
                unit='kCal'
              />
              <InfoNutritional
                image={proteines}
                title='Proteines'
                value={objectUser.proteinCount}
                unit='g' />
              <InfoNutritional
                image={glucides}
                title='Glucides'
                value={objectUser.carbohydrateCount}
                unit='g' />
              <InfoNutritional
                image={lipides}
                title='Lipides'
                value={objectUser.lipidCount}
                unit='g'
              />
            </section>
          </div>
        </main>
      }
    </>
  )
}
