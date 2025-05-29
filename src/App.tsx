import Login from "./components/Login";
import Logout from "./components/Logout";
import Nav from "./components/Nav";
import useUserStore from "./state-management/store";




export default function App() {
  const user = useUserStore(s => s.user); //subscribing on user field updating
  return (
    <div>
      <Nav></Nav>
      {user ? <Logout></Logout> : <Login></Login>}
    </div>
  );
}