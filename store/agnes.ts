import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'

@Module({
  name: 'agnes',
  namespaced: true,
  stateFactory: true
})
export default class Agnes extends VuexModule {
  public userName: string = 'Agnes'

  public get getUserName () {
    return this.userName || ''
  }

  @Mutation
  public SET_USER_NAME (userName: string) {
    this.userName = userName
  }

  @Action
  public setUserName (userName: string) {
    this.SET_USER_NAME(userName)
    return 'userName'
  }
  @Action
  public fetchData () {
    const data = $axios.$get('/v1/id-area/cities')
    return data
  }
}