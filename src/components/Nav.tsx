import useUserStore from '../state-management/store'

const Nav = () => {
    const {counter, user} = useUserStore();
  return (
    <>
    <div>User: {user}</div>
    <div>Counter: {counter}</div>
    </>
    
  )
}

export default Nav