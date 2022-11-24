import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'
import { User } from '~/types'

@Module({
  name: 'users',
  stateFactory: true,
  namespaced: true,
})
class UserModule extends VuexModule {
  users: User[] = []

  @Mutation
  setUsers(users: User[]) {
    this.users = users
  }

  @Action
  async getUsers() {
    const users = $axios.$get('/users')
    this.setUsers(users)
  }
}