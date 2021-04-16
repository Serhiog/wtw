import React from "react"
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function Header({ userAvatar }) {

  const history = useHistory();
  const handleHome = (evt) => {
    evt.preventDefault()
    if (history.location.pathname === "/") { return }
    history.push("/")
  }

  return (
    <header className="page-header user-page__head">
      <div className="logo">
        <a href="main.html" className="logo__link" onClick={handleHome}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
      <h1 className="page-title user-page__title">
        {location.pathname === "/mylist" ? "My list" : null}
      </h1>
      <div className="user-block">
        <div className="user-block__avatar">
          <img src={"https://4.react.pages.academy" + userAvatar} alt="User avatar" width={63} height={63} onClick={() => { history.push("/mylist") }} />
        </div>
      </div>
    </header>

  )
}

const mapToStateProps = (state) => ({
  userAvatar: state.movies.userAvatar
})

export default connect(mapToStateProps)(Header);
