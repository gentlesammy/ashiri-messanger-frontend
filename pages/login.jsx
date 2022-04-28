import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import LoginForm from '../components/loginForm'
import styles from '../styles/Home.module.css'
import { toast } from 'react-toastify';
import axios from 'axios'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formState, setFormState] = useState({
    loading: false,
    error : false,
    success: false,
    message: ""
  });
  const updateEmail = (v) => {setEmail(v)}
  const updatePassword = (v) => {setPassword(v)}

  const toastError = (msg) => {
    return toast.error(msg, {
     position: "top-center",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     })
 }
   // toastify error notification
   const toastSuccess = (msg) => {
     return toast.success(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })
  }

  const handleSubmit =async() => {
    //check if input is complet
      if(password == "" || email == ""){
        return toastError("All fields are required");
      }
     //password validation
     if(password.length < 8) return toastError("Invalid Password, Password is too short. Use Minimum of 8 characters please");
     if(!/[A-Z]/.test(password)) return toastError("Invalid Password, Password is too simple, please include at least  a capital letter");
     if(!/[a-z]/.test(password)) return toastError("Invalid Password, Password is too simple, please include at least  a lower letter");
     if(!/[0-9]/.test(password)) return toastError("Invalid Password, Password is too simple, please include at least  a number");
     if(!/[@, #, $, %, &, *, ?]/.test(password)) return toastError("Invalid Password, Password is too simple, Please include one special characters like @, #, $, %, &, *, ?");

      //no error, send info to backend
    try {
      setFormState({
        loading: true,
        error : false,
        success: false,
        message: ""
      })

      const url = `${process.env.NEXT_PUBLIC_API_URL}/users/login`
      console.log({url})
      const postLogin = await axios.post(url, {
        email,
        password
      });
      if(postLogin.data.status == "success"){
        setFormState({
          loading: false,
          error : false,
          success: true,
          message: ""
        })
        //empty the form fields
        setEmail("")
        setPassword("")
        console.log(postLogin.data.data)
        return toastSuccess("Logged In successfully")
      }
      // console.log(postLogin.data)

      
    } catch (error) {
      setFormState({
        loading: false,
        error : true,
        success: false,
        message: ""
      })

      return toastError(error.response.data.data.message)

    }

    



  }



  return (
    <div className={styles.container}>
      <Head>
      <title>Asiri Messages: Login Page</title>
      <meta name="description" content="Asiri messages allow you to receive anonymous messages from Friends anonymously" />
        {/* //favicon */}
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest"></link>
      </Head>
      <div className=''>
          <LoginForm
            email={email} password={password}
            updateEmail={updateEmail}
            updatePassword={updatePassword}
            formState = {formState}
            handleSubmit = {handleSubmit}

          />
      </div>
      
    </div>
  )
}
