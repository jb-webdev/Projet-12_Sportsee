
const choseDataApi = (typeData, user, activite) => {
  var url 
  switch (typeData) {
    case 'api':
      url = `${'http://localhost:4200/user/'+ user + activite}`
      break;
    case 'mocks':
      url = `${'http://localhost:3000/user/'+ user + activite + '.json'}`
      break;
    default:
      url = `${'http://localhost:3000/user/'+ user + activite + '.json'}`
      
  }
  return url
} 

export default class GetData {

  async getUser(userId, typeData) {
    try {
    //mocked data
    const response = await fetch(choseDataApi(typeData, userId, '', '.json'))
    const datas = await response.json();
    return datas.data
    } 
    catch (error) {
      console.log(error)
    }
  }
  async getUserActivity(userId, typeData) {
    try {
      //mocked data
      const response = await fetch(choseDataApi(typeData, userId, '/activity', '.json'))
      const datas = await response.json();
      return datas.data.sessions
    } 
    catch (error) {
      console.log(error)
    }
  }
  async getUserAverageSession(userId,typeData) {
    
    try {
      //mocked data
      const response = await fetch(choseDataApi(typeData, userId, '/average-sessions', '.json'))
      const datas = await response.json();
      return datas.data.sessions
    } 
    catch (error) {
      console.log(error)
    }
  }
  async getUserPerformance(userId,typeData) {
    try {
      //mocked data
      const response = await fetch(choseDataApi(typeData, userId, '/performance', '.json'))
      const datas = await response.json();
      return datas.data
    } catch (error) {
      console.log(error)
    }
  }
}