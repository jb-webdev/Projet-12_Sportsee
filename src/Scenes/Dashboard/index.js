import React, {useContext} from 'react'

import Error from '../Error/index.js'

import { GlobalContext } from '../../utils/Context/globalContext.js'
import Sayhello from '../../components/SayHello/Sayhello.js'
import Weight from '../../components/Charts/Weight/Weight.js'
import AverageSession from '../../components/Charts/AverageSession/AverageSession.js'
import Intensity from '../../components/Charts/Intensity/Intensity.js'
import Score from '../../components/Charts/Score/Score.js'
import InfoNutritional from '../../components/InfoNutritional/InfoNutritional.js'
import calories from "../../utils/assets/icon-svg/icon-calories.svg";
import proteines from "../../utils/assets/icon-svg/icon-protein.svg";
import glucides from "../../utils/assets/icon-svg/icon-carbohydrates.svg";
import lipides from "../../utils/assets/icon-svg/icon-lipids.svg";


export default function Dashboard() {
  // const { userAuth} = useContext(GlobalContext)
  const { userAuth, userInfo, userPerformance, userAverageSession, userActivity, } = useContext(GlobalContext)
  
  // console.log(userInfo.userInfos.firstName)
  // console.log(userActivity)
  console.log(userAverageSession[1].day)
  //console.log(userPerformance.data)
  //console.log(userInfo)

  return (
    <>
      {
      !userAuth ? <Error /> : 
      <>
        <Sayhello userName={userInfo.userInfos.firstName} />
        <div className='mainDashBoard'>
          <section className='wrapperCharts'>
            <Weight data={userActivity} />
            <div className='wrapperSmallCharts'>
              <AverageSession data={userAverageSession} />
              <Intensity data={userPerformance}/>
              <Score data={userInfo.todayScore}/>
            </div>
          </section>
          <section className='wrapperInfoSection'>
            <InfoNutritional
              image={calories}
              title="Calories"
              value={userInfo.keyData.calorieCount}
              unit="kCal"
            />
            <InfoNutritional
              image={proteines}
              title="Proteines"
              value={userInfo.keyData.proteinCount}
              unit="g" />
            <InfoNutritional
              image={glucides}
              title="Glucides"
              value={userInfo.keyData.carbohydrateCount}
              unit="g" />
            <InfoNutritional
              image={lipides}
              title="Lipides"
              value={userInfo.keyData.lipidCount}
              unit="g"
            />

          </section>
        </div>
      </>
      }
    </>
  )
}
