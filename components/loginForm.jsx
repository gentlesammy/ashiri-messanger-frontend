import Link from "next/link";

const LoginForm = ({email, password, updateEmail, updatePassword,  handleSubmit, formState}) => {
    const handleSubmits = (e) =>{
        e.preventDefault();
        handleSubmit()
    }

    return (
        <div className="register_form_section">
            <section className='form_hero'>
                <div className="container text-center">
                <div className="row">
                        <div className="col">
                            {
                                formState.error &&
                                <div className="alert alert-danger" role="alert">
                                     Invalid Credentials, Not a member? 
                                     <Link href="/register"><a> Register Here </a></Link>
                                </div>
                            }
                        </div>
                    </div>
                <h2>SIGN IN</h2>
                <h6>Login to your account to view anonymous messages sent to you</h6>
                </div>
            </section>
            <section className="form_area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-6">
                            <form className="row g-3" onSubmit={(e) => handleSubmits(e)}>
                                <div className="row mb-3">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" placeholder="email address"
                                       onChange={(e)=>updateEmail(e.target.value)}
                                       value={email}
                                    />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                    <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword3" placeholder="password"
                                        onChange={(e)=>updatePassword(e.target.value)}
                                        value={password}
                                    />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary form-control"
                                    disabled={formState.loading || formState.success}>
                                    {formState.loading? "... signing you in" : "Sign In"}
                                </button>
                            </form>
                        </div>
                    </div>
                    <p className="text-center  pt-3">Not Yet a Member? <Link href="/register"><a>Sign Up Here</a></Link></p>
                </div>
            </section>
        
        </div>
    )
}

export default LoginForm