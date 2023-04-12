import React, { useState } from "react";
import logo from "../images/download1.png";
import { useAuth0 } from "@auth0/auth0-react";
import "../login.css";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [fname, setFname] = useState("");
  const [username,setusername]=useState('')
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType === "Admin" && secretKey !== "Abhikgupta") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
      
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status === "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

  
  function handlelogin(e) {
    e.preventDefault();

    console.log(username, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./userDetails";
        }
      });
  }





  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="#" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#">Feature</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">UI SS</a>
        </li>
        <li>
          <a href="#">Download</a>
        </li>

        <li>{isAuthenticated && <p>{user.name}</p>}</li>
        {isAuthenticated ? (
          <li>
            <button
              className="login-btn"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </li>
        ) : (
          <>
            <li>
              <button className="login-btn" onClick={() => setShowLogin(true)}>
                Log In
              </button>
            </li>
            <li>
              <button className="login-btn" onClick={() => setShowSignup(true)}>
                Sign Up
              </button>
            </li>
          </>
        )}
      </ul>

      {showLogin && (
        <>
          <div className="blur-background"></div>
          <div className="login-form">
            <button id="close-btn" onClick={() => setShowLogin(false)}>
              X
            </button>
            <h2>Log In</h2>
            <form onSubmit={handlelogin}>
              <input type="text" placeholder="Username"  onChange={(e) => setusername(e.target.value)} />
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

              <button type="submit">Log In</button>
            </form>
          </div>
        </>
      )}
      {showSignup && (
        <>
          <div>
            <div className="blur-background"></div>
            <div className="signup-form">
              <button
                id="signup-close-btn"
                onClick={() => setShowSignup(false)}
              >
                X
              </button>
              <h2>Sign Up</h2>
              <form  onSubmit={handleSubmit}>
                <h4 id="register-as">Register As</h4>
              
            <input 
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            <span id="user">User</span>
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            <span id="admin">Admin</span>
            {userType == "Admin" ? (
            <div >
              <label>Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null}

                <input type="text" placeholder="Username"   onChange={(e) => setFname(e.target.value)}  />
                <input type="email" placeholder="Email"     onChange={(e) => setEmail(e.target.value)}   />
                <input type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Sign Up</button>
              </form>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
