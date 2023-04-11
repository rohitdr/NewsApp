import React, { Component, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { useState } from 'react';

export default function Login() {
let Navigate=useNavigate();
useEffect(()=>{
if(sessionStorage.getItem("auth-token")){
  Navigate('/home')
}
},[])
 /**
  * This is a JavaScript function that sends a POST request to a login API endpoint with user email and
  * password, and returns the response in JSON format.
  */
  const loginapi = async () => {
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value
    if(email.length<8){
      window.alert("email must contain atleast 8 characters")
  
    }
    else if(password.length<8){
      window.alert("password must contain atleast 8 characters")
     }
     else{
      try {
  
        const response = await fetch('http://localhost:5000/api/auth/login',
  
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
             
            },
            body: JSON.stringify({
   
              "email": email,
              "password": password
            }),
          }
        );
     
        
        
        let result = await response.json();
        if (response.status == 404) {
          window.alert(result.error)
        } else if (response.status == 200) {
          // console.log(result)
          sessionStorage.setItem("auth-token",result.authtoken)
          // console.log(sessionStorage.getItem("auth-token"))
          Navigate("/home")
        } else {
         
        }
   
      } catch (error) {
       
        console.log(error.message);
      }
     }
   
  };
  return (
    <div>
      <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style={{borderRadius: "1rem"}}>
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <input type="email"  class="form-control form-control-lg" id="email" name="email" />
                <label class="form-label" for="typeEmailX" >Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" class="form-control form-control-lg" id="password" name="password"/>
                <label class="form-label" for="typePasswordX" >Password</label>
              </div>

              {/* <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p> */}

              <button class="btn btn-outline-light btn-lg px-5" type="button" onClick={loginapi}>Login</button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p class="mb-0">Don't have an account? <Link to="/signup" class="text-white-50 fw-bold">Sign Up</Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
