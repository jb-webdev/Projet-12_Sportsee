import React, {useContext} from 'react'
import './home.css'
import {useNavigate} from 'react-router-dom'
import { GlobalContext } from '../../utils/Context/globalContext.js'


export default function Home() {
  const { toggleUserAuth, toggleUserId, toggleTypeData, userId } = useContext(GlobalContext)
  

  var navigate = useNavigate()

  const handleChange = e => {
    let resultValue = e.target.value
    switch (resultValue) {
      case 'option1':
        toggleUserId('12')
        toggleTypeData('mocks')

        break
      case 'option2':
        toggleUserId('18')
        toggleTypeData('mocks')

        break
      case 'option3':
        toggleUserId('12')
        toggleTypeData('api')

        break
      case 'option4':
        toggleUserId('18')
        toggleTypeData('api')

        break
      default:

    }
  }

  const handleNavigate = () => {
    toggleUserAuth(true)
    navigate(`/dashboard/${userId}`)
  }

  return (
    <main className='mainHome'>
      <h1>Demo application Projet 12 - Sportsee</h1>
      <p>Pour tester l'application veuillez selectionner les choix dans la modal</p>
      <div className='WrapperFormulaire'>
        <fieldset>
          <legend> choix de connexion</legend>
          <div className="radio-buttons">
            <div className='wrapperInput'>
              <p>Mocks</p>
              <div>
                <label>12</label>
                <input id="option1" value="option1" name="platform" type="radio" onChange={handleChange} />
                <label>18</label>
                <input id="option2" value="option2" name="platform" type="radio" onChange={handleChange} />
              </div>
            </div>
            <div className='wrapperInput'>
              <p>Api</p>
              <div>
                <label>12</label>
                <input id="option3" value="option3" name="platform" type="radio" onChange={handleChange} />
                <label>18</label>
                <input id="option4" value="option4" name="platform" type="radio" onChange={handleChange} />
              </div>
            </div>
          </div>
        </fieldset>
        <button className="btnNavigate" onClick={handleNavigate}>Aller au dashBoard</button>
      </div>
    </main>
  )
}
