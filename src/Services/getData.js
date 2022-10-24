/**
 * @file getData is the file that retrieves the data either on the Mocks or on the api
 * @author jean-jacques BOERO
 */

/**
 * Class that retrieves user data using fetch()
 */
export default class GetData {
  /**
   * @param {string} userId User ID
   * @param {string} typeData database type chosen for the test 'api' or 'mocks'
   */
  constructor(userId, typeData) {
    this.userId = userId;
    this.typeData = typeData;
    this.baseUrl = this.getBaseUrl();
    this.extensionFile = this.getExtensionFile();
  }

  /**
   * @property {methode} getBaseUrl builds the base of the url
   * @returns {string}
   */
  getBaseUrl() {
    let urlSelect = ''
    switch (this.typeData) {
      case 'api':
        urlSelect = 'http://localhost:3000/user/'
        break;
      case 'mocks':
        urlSelect = 'http://localhost:8080/user/'
        break;
      default:
    }
    return urlSelect
  }

  /**
   * @property {methode} getExtensionFile builds the end of the url by adding a '.json' extension for requests on mocks
   * @returns {string}
   */
  getExtensionFile() {
    let checkExtension = ''
    switch (this.typeData) {
      case 'api':
        checkExtension = ''
        break;
      case 'mocks':
        checkExtension = '.json'
        break;
      default:
        checkExtension = '.json'
    }
    return checkExtension
  }

  /**
   * @property {methode} getUser Returns user data
   * @returns {Array}
   */
  async getUser() {
    try {
      const response = await fetch(`${this.baseUrl + this.userId + this.extensionFile}`)
      const datas = await response.json();
      return datas.data
    }
    catch (error) {
      return -1
    }
  }
  /**
   * @property {methode} getUserActivity Returns user activity data
   * @returns {Array}
   */
  async getUserActivity() {
    try {
      const response = await fetch(`${this.baseUrl + this.userId + '/activity' + this.extensionFile}`)
      const datas = await response.json();
      return datas.data.sessions
    }
    catch (error) {
      return -1
    }
  }

  /**
  * @property {methode} getUserAverageSession Returns the user's average-session data
  * @returns {Array}
  */
  async getUserAverageSession() {
    try {
      const response = await fetch(`${this.baseUrl + this.userId + '/average-sessions' + this.extensionFile}`)
      const datas = await response.json();
      return datas.data.sessions
    }
    catch (error) {
      return -1
    }
  }
  /**
   * @property {methode} getUserPerformance Returns user performance data
   * @returns {Array}
   */
  async getUserPerformance() {
    try {
      const response = await fetch(`${this.baseUrl + this.userId + '/performance' + this.extensionFile}`)
      const datas = await response.json();
      return datas.data
    } catch (error) {
      return -1
    }
  }
}