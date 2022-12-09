import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResposiveNavBar from "../components/Layout/ResposiveNavBar";
import Home from "../components/pages/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import PublicRouter from "./PublicRouter";
import { userLoginSync } from "../redux/actions/userAction";
import PrivateRouter from "./PrivateRouter";
import Profile from "../components/pages/Profile";
import Products from "../components/Profile/Products";
import Events from "../components/pages/Events";
import Loading from "../components/Loading/Loading";
import MyEvents from "../components/pages/MyEvents";
import CreateEvent from "../components/pages/CreateEvent";

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined)
  const dispatch = useDispatch()
  const userStorage = useSelector((store) => store.user)
  const [check, setCheck] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true)
        if (Object.entries(userStorage).length === 0) {
          const {
            displayName,
            email,
            accessToken,
            photoURL,
            uid
          } = user.auth.currentUser;
          dispatch(
            userLoginSync({
              name: displayName,
              email,
              accessToken,
              photoURL,
              uid,
              error: false,
            })
          );
        }
      } else {
        setIsLoggedIn(false)
      }
      setCheck(false)
    })
  }, [isLoggedIn, check]);

  if (check) {
    return (
      <Loading />
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ResposiveNavBar setIsLoggedIn={setIsLoggedIn} />}>
          <Route path="/" element={<Home />} />
          <Route path="Eventos" element={<Events />} />
          <Route path="Productos" element={<Products />} />
        </Route>
        <Route element={<PrivateRouter isAuthentication={isLoggedIn} />}>
          <Route element={<ResposiveNavBar setIsLoggedIn={setIsLoggedIn} />}>
            <Route path="profile" element={<Profile />} />
            <Route path="myevents" element={<MyEvents />} />
            <Route path="createevent" element={<CreateEvent />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default Router;
