import { useRef } from 'react'
import useUserStore from '../state-management/store';

const Login = () => {
    const inputElem = useRef<HTMLInputElement>(null);
    const login = useUserStore(s => s.login);
  return (
    <form onSubmit={(event) => {event.preventDefault(); login(inputElem.current?.value || "")}}>
        <input ref={inputElem} placeholder="enter username"/>
    </form>
  )
}

export default Login