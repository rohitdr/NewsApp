import React,{Component} from 'react' 
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'

export default function Signup() {
  let Navigate=useNavigate();
  const registerapi = async () => {
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value
    let confirm_password=document.getElementById('confirm_password').value
    let name=document.getElementById('name').value
   if(password!==confirm_password){
    window.alert("password must be same as confirm password")
   }
   else if(name.length <3){
    window.alert("Name must contain atleast three characters")
   }
   else if(password.length<8){
    window.alert("password must contain atleast 8 characters")
   }
  else if(email.length<8){
    window.alert("email must contain atleast 8 characters")

  }
   else{
    try {
  
      const response = await fetch('http://localhost:5000/api/auth/createuser',

        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
           
          },
          body: JSON.stringify({
             "name":name,
             "email": email,
            "password": password
          }),
        }
      );
   
      
      
      let result = await response.json();
      if (response.status == 404) {
        window.alert(result.error)
      } else if (response.status == 200) {
        window.alert(" You have Succesfully created your account")
        Navigate('/login')
      } else {
      
      }

    } catch (error) {
     
      console.log(error.message);
    }
   }
  
  };
  return (
    <section class="vh-100 bg-image"
  style={{backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}>
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style={{borderRadius: "15px"}}>
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>

              <form>

                <div class="form-outline mb-4">
                  <input type="text" class="form-control form-control-lg"  id="name" name="name"/>
                  <label class="form-label" for="form3Example1cg">Your Name</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" class="form-control form-control-lg" id="email" name="email"/>
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" class="form-control form-control-lg" id="password" name="passwword"/>
                  <label class="form-label" for="form3Example4cg">Password</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password"  class="form-control form-control-lg" id="confirm_password" name="confirm_password"/>
                  <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                </div>

                

                <div class="d-flex justify-content-center">
                  <button type="button"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"onClick={registerapi}>Register</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login" class="fw-bold text-body"><u>Login here</u></Link></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

 