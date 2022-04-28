import Link from "next/link"

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container d-flex">
                    
                    <Link href="/">
                        <a className="navbar-brand">ASHIRI MESSAGE</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link href="/">
                                <a className="navbar-brand">Home</a>
                            </Link>
                            <Link href="/profile">
                                <a className="navbar-brand">Profile</a>
                            </Link>
                            <Link href="/register">
                                <a className="navbar-brand">Register</a>
                            </Link>
                            <Link href="/login">
                                <a className="navbar-brand">Login</a>
                            </Link>
                            <Link href="/">
                                <a className="navbar-brand">Message Shares </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>  
    )
}

export default Header
