//MOCKS
const URL_DATA_USER = `${'http://localhost:3000/user/' }`
//API
// const URL_DATA_USER = `${'http://localhost:3000/user/'}`

// mettre un context pour l'id lors de la connexion de l'utilisateur
// userID


export default class GetData {

  async getUser(userId) {
    try {
    //mocked data
    const response = await fetch(`${URL_DATA_USER + userId + '.json'}`)
    const datas = await response.json();
    return datas.data
    } 
    catch (error) {
      console.log(error)
    }
  }
  async getUserActivity(userId) {
    try {
      //mocked data
      const response = await fetch(`${URL_DATA_USER + userId + '/activity.json'}`)
      const datas = await response.json();
      return datas.data.sessions
    } 
    catch (error) {
      console.log(error)
    }
  }
  async getUserAverageSession(userId) {
    try {
      //mocked data
      const response = await fetch(`${URL_DATA_USER + userId + '/average-sessions.json'}`)
      const datas = await response.json();
      return datas.data.sessions
    } 
    catch (error) {
      console.log(error)
    }
  }
  async getUserPerformance(userId) {
    try {
      //mocked data
      const response = await fetch(`${URL_DATA_USER + userId + '/performance.json'}`)
      const datas = await response.json();
      return datas.data
    } catch (error) {
      console.log(error)
    }
  }
}