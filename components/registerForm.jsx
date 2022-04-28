import Link from 'next/link'
import { useState, useEffect } from 'react'
const RegisterForm = ({username, email, password, intro, updateUsername, updateEmail, updatePassword, updateIntro, handleSubmit, formState}) => {
    return (
        <div className="register_form_section">
            <section className='form_hero'>
                <div className="container text-center">
                <h2>SIGN UP</h2>
                <h6>Create Your account and start receiving anonymous messages</h6>
                </div>
            </section>
            <section className="form_area">
                <div className="container ">
                    <div className="row">
                        <div className="col">
                            {
                                formState.success &&
                                <div className="alert alert-success" role="alert">
                                     You have signed up successfull, 
                                     <Link href="/login"><a>Login Here</a></Link>
                                </div>
                            }
                        </div>
                    </div>
                    <form className="row g-3" onSubmit={(e) => handleSubmit(e)}>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="email address"
                            onChange={(e)=>updateEmail(e.target.value)}
                            value={email}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="password"
                            onChange={(e)=>updatePassword(e.target.value)}
                            value={password}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" placeholder="username no space" 
                            onChange={(e)=>updateUsername(e.target.value)}
                            value={username}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="intro" className="form-label">Intro Note</label>
                            <input type="text" className="form-control" id="intro" placeholder="short welcome message" 
                            onChange={(e)=>updateIntro(e.target.value)}
                            value={intro}/>
                        </div>
                        <div className="col-6">
                            <button type="submit" className="btn btn-primary form-control" 
                            disabled={formState.loading}>
                                {formState.loading? "... signing you up" : "Sign up"}
                            </button>
                        </div>
                    </form>
                    <p className="text-center  pt-3">Already a Member? <Link href="/login"><a>Sign In Here</a></Link></p>
                </div>
            </section>

        </div>
    )
}

export default RegisterForm
