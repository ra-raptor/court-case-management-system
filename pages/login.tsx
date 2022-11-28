import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [hidden, sethidden] = useState(true);
  const svg = hidden ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );
  const router = useRouter();
  const handleLogin = async (e) => {
    console.log("hello");

    e.preventDefault();
    console.log(email, pass);
    const userDetails = {
      email: email,
      password: pass,
    };
    await axios
      .post("/api/users/login", userDetails, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response.data.authToken);

        router.push("/dashboard");
      })
      .catch(function (error) {
        window.alert(error.response.data.msg);
        console.log(error.response.data);
      });
  };
  const handleEmail = (e) => {
    setemail(e.target.value);
  };
  const handlepass = (e) => {
    setpass(e.target.value);
  };
  return (
    <div data-theme="light">
      <div className="hero min-h-screen  bg-base-200 w-full">
        <div className="hero-content w-3/4 flex-col lg:flex-row-reverse">
          {/* <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluphtatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div> */}
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center pt-8">Login</h1>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="input-group w-300">
                  <input
                    type={hidden ? "password" : "text"}
                    placeholder="Type here"
                    value={pass}
                    onChange={handlepass}
                    className="input input-bordered w-300 grow"
                  />
                  <button
                    className="btn btn-outline"
                    onClick={() => sethidden(!hidden)}
                  >
                    {svg}
                  </button>
                </div>
              </div>

              {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}

              <div className="form-control mt-6">
                <button
                  className="btn btn-block btn-primary"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
              <div className="divider">OR</div>
              <div className="form-control">
                <Link href="/signup">
                  <button className="btn btn-outline btn-block btn-accent">
                    Signup
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
