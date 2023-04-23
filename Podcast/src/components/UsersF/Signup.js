import React, { useState } from "react";
import './signup.css'
import { useNavigate } from "react-router";
export default function Signup(props) {

  const [credentials, setCredentials] = useState({ email: "", password: "",name:"",cpassword:""});
  let navigate = useNavigate();
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(credentials.password!==credentials.cpassword)
    {
      props.showAlert("Password and confirm Password are different!",'danger');
    }
    else{
      const url = "API_URL";
      const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    console.log(json);
    if (json.success) { // if success
      //redirect
      props.showAlert('Account Created Successfully','success');
      localStorage.setItem('token', json.authToken);  //athentication token to be taken from jwt
      navigate('/');
    }
    else {
      props.showAlert(json.error,"danger");
    }
    }
  }
  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
      }}
    >
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4 input">
                        <i className="fas fa-user fa-lg me-3 fa-fw" style={{marginBottom : '10%'}}></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="name" name='name' className="form-control" onChange={onChange} required  minLength={3}/>
                          <label className="form-label" htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" style={{marginBottom : '10%'}}></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" id="email" className="form-control" name="email" onChange={onChange} required/>
                          <label className="form-label" htmlFor="email">Your Email </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" style={{marginBottom : '10%'}}></i>
                        <div className="form-outline flex-fill mb-0">
                        <input type="password" name='password' className="form-control" id="password" onChange={onChange} required minLength={5}/>
                        <label htmlFor="password" className="form-label">Password</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw" style={{marginBottom : '10%'}}></i>
                        <div className="form-outline flex-fill mb-0">
                        <input type="password" name='cpassword' className="form-control" id="cpassword" onChange={onChange} required minLength={5} />
                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="Submit" className="btn btn-primary btn-lg"> Register </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="/logo.jpg"
                      className="img-fluid"
                      style={{ paddingLeft: "80px" }}
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
