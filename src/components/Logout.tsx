import useUserStore from '../state-management/store'
const Logout = () => {
    const logout = useUserStore(s => s.logout);
  return (
    <button onClick={logout}>Logout</button >
  )
}

export default Logout