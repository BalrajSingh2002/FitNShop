import React, { useState } from "react";
import NavBar from "./Components/JSX_Files/NavBar.jsx";
import LandingPage from "./Components/JSX_Files/LandingPage.jsx";
import Workout from "./Components/JSX_Files/Workout.jsx";
import Exercises from "./Components/JSX_Files/Workouts&Dietplans/Exercises.jsx";
import DietPlan from "./Components/JSX_Files/DietPlan.jsx";
import Shop from "./Components/JSX_Files/Shop.jsx";
import AboutUs from "./Components/JSX_Files/AboutUs.jsx";
import Cart from "./Components/JSX_Files/Cart.jsx";
import SignUp from "./Components/JSX_Files/SignUp.jsx";
import Footer from "./Components/JSX_Files/Footer.jsx";
import SignIn from "./Components/JSX_Files/SignIn.jsx";
import PlaceOrder from "./Components/JSX_Files/PlaceOrder.jsx";
import UserProfile from "./Components/JSX_Files/UserProfile.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [value, setValue] = useState([]);
  const [globalUser, setGlobalUser] = useState(null);
  const [exercise, setExercise] = useState([]);
  console.log("user set to", globalUser);
  return (
    <>
      <BrowserRouter>
        <NavBar value={value} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="Workout"
            element={<Workout setExercise={setExercise} />}
          />
          <Route path="DietPlan" element={<DietPlan />} />
          <Route
            path="Shop"
            element={<Shop value={value} setValue={setValue} />}
          />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route
            path="Cart"
            element={<Cart value={value} setValue={setValue} />}
          />
          <Route path="PlaceOrder" element={<PlaceOrder />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route
            path="SignIn"
            element={
              <SignIn globalUser={globalUser} setGlobalUser={setGlobalUser} />
            }
          />
          <Route
            path="UserProfile"
            element={<UserProfile globalUser={globalUser} />}
          />
          <Route
            path="Workout/Exercises"
            element={
              <Exercises exercise={exercise} setExercise={setExercise} />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
