import { useContext, useEffect, useState} from "react"
import Link from "next/link"
import { UserContext } from "../context"
import { useRouter } from "next/router";


const Header = () => {
    const router = useRouter();
    const [current, setCurrent] = useState(router.pathname)
    useEffect(() => {
       process.browser && setCurrent(router.pathname)
       
    }, [process.browser && router.pathname])
    const [state, setState] = useContext(UserContext);
    
    console.log({current})
    const logOutUser = () => {
        window.localStorage.removeItem("auth");
        setState({
            user: null,
            token: ''
        })
        router.push("/");
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container d-flex">
                    
                    <Link href="/">
                        <a className="navbar-brand">ASHIRI MESSANGER</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link href="/">
                                <a className={`navbar-brand  ${current == "/" ? "active" : ""}`} >Home</a>
                            </Link>
                            <Link href="/sharedmessages">
                                <a className={`navbar-brand  ${current == "/sharedmessages" ? "active" : ""}`}>Message Shares </a>
                            </Link>
                            {
                                state.user !== null && state.user !== undefined && state.token !== "" &&
                                <>
                                    <Link href="/dashboard">
                                        <a className={`navbar-brand ${current == "/dashboard" ? "active" : ""}`}>Dashboard</a>
                                    </Link>
                                    
                                    <a className="navbar-brand" onClick={logOutUser}>Logout</a>
                                    

                                </>
                            }
                            
                            {
                                state.token === "" &&
                                <>
                                    <Link href="/register">
                                        <a className={`navbar-brand ${current == "/register" ? "active" : ""}`}>Register</a>
                                    </Link>
                                    <Link href="/login">
                                        <a className={`navbar-brand ${current == "/login" ? "active" : ""}`}>Login</a>
                                    </Link>

                                </>
                            }

                                <Link href="/terms">
                                    <a className={`navbar-brand ${current == "/terms" ? "active" : ""}`}>Terms</a>
                                </Link>
                        
                        </div>
                    </div>
                </div>
            </nav>
        </>  
    )
}

export default Header
