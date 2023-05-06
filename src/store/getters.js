const getters = {
  token: state => state.user.token,
  roles: state => state.user.roles,
  name: state => state.user.name,
  avatar: state => state.user.avatar
}
export default getters
