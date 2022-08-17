import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import {baseUrl} from "../../constants/global"

function Register() {
  const [data, setData] = useState({
    email: "",
    mobile: "",
    password: "",
    name: "",
    username: "",
    type: "",
    conpassword: "",
  });


  function submit(e) {
    e.preventDefault();
    //setformErrors(validate(data));
    //setIsSubmit(true);
    registerfun()
   // console.log(data);
    //console.log(formErrors);
  }
  
  function registerfun(){
    console.log(data);
   // if((Object.entries(formErrors).length !== 0)&&(formErrors.flag1=="checked")&&(formErrors.flag2=="checked")&&(formErrors.flag3=="checked")&&(formErrors.flag4=="checked")&&(formErrors.flag5=="checked")&&(formErrors.flag6=="checked")){
      Axios.post(baseUrl+"register", {
        email: data.email,
        mobile: data.mobile,
        password: data.password,
        username: data.username,
        name: data.name,
        user_type: data.type,
      }).then((res) => {
        console.log(res);
         
        /* if(res.data.status=="Username Already Exist"){
          setpopup({color:"danger",mesg:"Username Already Exist"})
         }
         else{
          setpopup({color:"success",mesg:"Registered"})
          navigate("/");
         }*/
         
      });
   // }
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    // console.log(data);
    //test.wewew
  }

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <a
                    href="index.html"
                    className="logo d-flex align-items-center w-auto"
                  >
                    <img src="assets/img/logo.png" alt />
                    <span className="d-none d-lg-block">NiceAdmin</span>
                  </a>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        Create an Account
                      </h5>
                      <p className="text-center small">
                        Enter your personal details to create account
                      </p>
                    </div>
                    <form className="row g-3 needs-validation"  onSubmit={(e) => submit(e)}>
                      <div className="col-12">
                        <label htmlFor="yourName" className="form-label">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          onChange={(e) => handle(e)}
                          value={data.name}
                          required
                        />
                        <div className="invalid-feedback">
                          Please, enter your name!
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourEmail" className="form-label">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          onChange={(e) => handle(e)}
                          value={data.email}
                          id="email"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter a valid Email adddress!
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourEmail" className="form-label">
                          Your Mobile
                        </label>
                        <input
                          type="text"
                          name="mobile"
                          className="form-control"
                          onChange={(e) => handle(e)}
                          value={data.mobile}
                          id="mobile"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter a valid Mobile!
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">
                          Username
                        </label>
                        <div className="input-group has-validation">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            @
                          </span>
                          <input
                            type="text"
                            name="username"
                            className="form-control"
                            onChange={(e) => handle(e)}
                            value={data.username}
                            id="username"
                            required
                          />
                          <div className="invalid-feedback">
                            Please choose a username.
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          onChange={(e) => handle(e)}
                          value={data.password}
                          id="password"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">
                          Retype Password
                        </label>
                        <input
                          type="password"
                          name="conpassword"
                          className="form-control"
                          onChange={(e) => handle(e)}
                          value={data.conpassword}
                          id="conpassword"
                          required
                        />
                        <div className="invalid-feedback">
                          Please retype your password!
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="utype" className="form-label">
                          User Type
                        </label>
                        <div className="col-sm-12">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            onChange={(e) => handle(e)}
                            value={data.type}
                            id="type"
                            required
                          >
                            <option selected>Select</option>
                            <option value={"user"}>User</option>
                            <option value={"employee"}>Employee</option>
                            <option value={"admin"}>Admin</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            name="terms"
                            type="checkbox"
                            defaultValue
                            id="acceptTerms"
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="acceptTerms"
                          >
                            I agree and accept the{" "}
                            <a href="#">terms and conditions</a>
                          </label>
                          <div className="invalid-feedback">
                            You must agree before submitting.
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">
                          Create Account
                        </button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">
                          Already have an account?{" "}
                          <Link to="/login">Log in</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Register;
