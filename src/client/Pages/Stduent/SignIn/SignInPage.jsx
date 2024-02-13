import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'

const SignInPage = () => {
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handlesignup = () => {
    navigate('/Sign_Up');
  }

  const handleLogin = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!/^[0-9]{10}$/.test(phoneNumber)) {
      setPhoneNumberError("Invalid phone number (10 digits required)");
      isValid = false;
    } else {
      setPhoneNumberError("");
    }
    if (isValid) {
      setShowOtpInput(true);
    }
    // Implement your login logic here
  };


  const handleOtpVerification = (e) => {
    e.preventDefault();
    // Implement your OTP verification logic here
    console.log("Verifying OTP...");
  };
  return (
    <div>
      <div className="login-root">
        <div
          className="box-root flex-flex flex-direction--column"
          style={{ minHeight: "100vh", flexGrow: 1 }}
        >
          <div className="loginbackground box-background--white padding-top--64">
            <div className="loginbackground-gridContainer">
              <div
                className="box-root flex-flex"
                style={{ gridArea: "top / start / 8 / end" }}
              >
                <div
                  className="box-root"
                  style={{
                    backgroundImage:
                      "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
                    flexGrow: 1,
                  }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "4 / 2 / auto / 5" }}
              >
                <div
                  className="box-root box-divider--light-all-2 animationLeftRight tans3s"
                  style={{ flexGrow: 1 }}
                />
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "6 / start / auto / 2" }}
              >
                <div
                  className="box-root box-background--blue800"
                  style={{ flexGrow: 1 }}
                />
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "7 / start / auto / 4" }}
              >
                <div
                  className="box-root box-background--blue animationLeftRight"
                  style={{ flexGrow: 1 }}
                />
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "8 / 4 / auto / 6" }}
              >
                <div
                  className="box-root box-background--gray100 animationLeftRight tans3s"
                  style={{ flexGrow: 1 }}
                />
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "2 / 15 / auto / end" }}
              >
                <div
                  className="box-root box-background--cyan200 animationRightLeft tans4s"
                  style={{ flexGrow: 1 }}
                />
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "3 / 14 / auto / end" }}
              >
                <div
                  className="box-root box-background--blue animationRightLeft"
                  style={{ flexGrow: 1 }}
                />
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "4 / 17 / auto / 20" }}
              >
                <div
                  className="box-root box-background--gray100 animationRightLeft tans4s"
                  style={{ flexGrow: 1 }}
                />
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "5 / 14 / auto / 17" }}
              >
                <div
                  className="box-root box-divider--light-all-2 animationRightLeft tans3s"
                  style={{ flexGrow: 1 }}
                />
              </div>
            </div>
          </div>
          <div
            className="box-root padding-top--24 flex-flex flex-direction--column"
            style={{ flexGrow: 1, zIndex: 9 }}
          >
            <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
              <h1 className="text-2xl font-bold">SIGN IN</h1>
            </div>
            <div className="formbg-outer">
              <div className="formbg">
                <div className="formbg-inner padding-horizontal--48">
                  <form onSubmit={showOtpInput ? handleOtpVerification : handleLogin} id="stripe-login">
                    <div className="field padding-bottom--24">
                      <label htmlFor="phonenumber">Phone Number</label>
                      <input type="text" maxLength={10} required name="phonenumber" 
                       value={phoneNumber}
                       onChange={(e) => {
                        const inputPhoneNumber = e.target.value;
                        if (/^[\d\b]+$/.test(inputPhoneNumber)) {
                          setPhoneNumber(inputPhoneNumber);
                        } else if (e.target.value === "") {
                          // Handle backspace by setting the phone number to an empty string
                          setPhoneNumber("");
                        }
                      }}
                       />
                        <p className="text-red-600">{phoneNumberError}</p>
                    </div>
                    {showOtpInput && (
                      <div className="field padding-bottom--24">
                        <div className="grid--50-50">
                          <label htmlFor="otp">OTP</label>
                        </div>
                        <input type="text" name="otp" 
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)} />
                      </div>
                    )}
                    <div className="field padding-bottom--24">
 
                      <input
                        type="submit"
                        name="submit"
                        defaultValue="Continue"
                      />
                
                    </div>
                  </form>
                </div>
              </div>
              <div className="footer-link padding-top--24">
                <span>
                  Don't have an account? <a onClick={handlesignup} style={{cursor:'pointer'}}>Sign up</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignInPage;