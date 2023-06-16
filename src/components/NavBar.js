import React from "react";
import {useNavigate} from "react-router-dom";

function NavBar({handleSignOut, userEmail}) {
  const navigate = useNavigate();

  function signOut() {
    localStorage.removeItem('jwt');
    handleSignOut();
    navigate('/signin');
  }

  return (
    <div className="menu">
      <p className="menu__user-email">{userEmail}</p>
      <button type="submit" className="menu__link" onClick={signOut}>Выйти</button>
    </div>
  )
}

export default NavBar;