import { useSelector } from "react-redux"
import Home from "./Home"
import LandingPage from "./Logged/LandingPage"
import Navbar from "./Navbar"


const MainLanding=()=>{

    const loginStatus = useSelector((state) => state.auth.loginStatus)

    console.log("Home :: ",useSelector((st)=>st.auth))
    console.log("From Homr: ", loginStatus)
    return(
        <div>
          
        {loginStatus && <LandingPage />}
        {!loginStatus && <Home/>}
        </div>
    )
}

export default MainLanding;