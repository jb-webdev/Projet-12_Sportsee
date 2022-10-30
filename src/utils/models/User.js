export default class User {
  constructor(userInfo, averageSession, performance, weight) {
    this.user = userInfo
    this.averageSession = averageSession
    this.performance = performance.data
    this.weight = weight
    this.score = this.getscore()
  }

  get firstname() {
    return this.user.userInfos.firstName
  }
  get lastname() {
    return this.user.userInfos.lastName
  }
  get age() {
    return this.user.userInfos.age
  }
  get calorieCount() {
    return this.user.keyData.calorieCount
  }
  get proteinCount() {
    return this.user.keyData.proteinCount
  }
  get carbohydrateCount() {
    return this.user.keyData.carbohydrateCount
  }
  get lipidCount() {
    return this.user.keyData.lipidCount
  }

  get userPerformance() {
    let performance = []
    if (this.performance === null) {
      performance = []
    } else {
      performance = this.performance.data.data
    }
    return performance
  }


  getscore() {
    var scoreUser = this.user.score || this.user.todayScore
    return scoreUser * 100
  }

}
