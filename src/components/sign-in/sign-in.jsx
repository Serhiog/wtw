import React, { useState } from "react"
import Footer from "../footer/footer"
import Header from "../header/header"
import { login } from "../../store/api-actions";
import { connect } from "react-redux";

function SignIn({ getLogin, history }) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleEmail = (evt) => {
    setEmail(evt.target.value)
  }
  const handlePassword = (evt) => {
    setPassword(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getLogin(email, password)
    history.push("/")
  }

  return (
    <div className="user-page">
      <Header />
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" onChange={handleEmail} />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" onChange={handlePassword} />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>

  )
}


const mapDispatchToProps = (dispatch) => ({
  getLogin(email, password) {
    dispatch(login(email, password))
  }
})

export default connect(null, mapDispatchToProps)(SignIn);
