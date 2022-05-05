import { useState, useEffect, useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import RegisterForm from '../components/registerForm'
import styles from '../styles/Home.module.css'
import { toast } from 'react-toastify';
import axios from 'axios'
import { UserContext } from '../context'
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [intro, setIntro] = useState("");
  const [formState, setFormState] = useState({
    loading: false,
    error : false,
    success: false,
    message: ""
  });
 
  const updateUsername = (v) => {setUsername(v)}
  const updateEmail = (v) => {setEmail(v)}
  const updatePassword = (v) => {setPassword(v)}
  const updateIntro = (v) => {setIntro(v)}
  // toastify error notification
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

  // username validation
  function validateUserName(username){
    var usernameRegex = /^[a-zA-Z0-9]+$/;
    return usernameRegex.test(username);
  }
  const handleSubmit =async(e) => {
    e.preventDefault()
    // form validation
    //empty input
    if(username == "" || password == "" || email == "" || intro == ""){
      return toastError("All fields are required");
    }
    //check if username is too short
    if(username.length < 5){
      return toastError("Username too short, minimum length is five");
    }
    //check if username has space or special character
    if(validateUserName(username) == false){
      return toastError("Username  should not have space or special characters. Just letters and numbers");
    }
    //password validation
    if(password.length < 8) return toastError("Password is too short. Use Minimum of 8 characters please");
    if(!/[A-Z]/.test(password)) return toastError("Password is too simple, please include at least  a capital letter");
    if(!/[a-z]/.test(password)) return toastError("Password is too simple, please include at least  a lower letter");
    if(!/[0-9]/.test(password)) return toastError("Password is too simple, please include at least  a number");
    if(!/[@, #, $, %, &, *, ?]/.test(password)) return toastError("Password is too simple, Please include one special characters like @, #, $, %, &, *, ?");

    //validate intro
    if(intro.length > 50){
      return toastError("maximum length of intro is 50 characters");
    }
    if(intro.length < 10){
      return toastError("minimum length of intro is 10 characters");
    }

    //no error, send info to backend
    try {
      setFormState({
        loading: true,
        error : false,
        success: false,
        message: ""
      })

      const url = `${process.env.NEXT_PUBLIC_API_URL}/users/register`
      console.log({url})
      const postRegister = await axios.post(url, {
        username,
        email,
        password,
        intro
      });
      if(postRegister.data.status == "success"){
        setFormState({
          loading: false,
          error : false,
          success: true,
          message: ""
        })
        //empty the form fields
        setEmail("")
        setIntro("")
        setPassword("")
        setUsername("")
        return toastSuccess(postRegister.data.data.message)
      }
      // console.log(postRegister.data)

      
    } catch (error) {
      setFormState({
        loading: false,
        error : false,
        success: false,
        message: ""
      })

      return toastError(error.response.data.data.message)

    }

  }

  const [state, setState] = useContext(UserContext);
  if(state && state.token !== ""){router.push("/dashboard")};


  return (
    <div className=" pt-5">
      <Head>
      <title>Asiri Messages: Register Page</title>
      <meta name="description" content="Asiri messages allow you to receive anonymous messages from Friends anonymously" />
        {/* //favicon */}
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest"></link>
      </Head>
      <RegisterForm username={username} email={email} password={password} intro={intro}
        updateUsername={updateUsername}
        updateEmail={updateEmail}
        updatePassword={updatePassword}
        updateIntro={updateIntro}
        setFormState={setFormState}
        formState={formState}
        handleSubmit={handleSubmit}
      />
      
      
    </div>
  )
}
