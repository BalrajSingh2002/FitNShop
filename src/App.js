import React, { useState } from "react";
import NavBar from "./Components/JSX_Files/NavBar.jsx";
import LandingPage from "./Components/JSX_Files/LandingPage.jsx";
import Workout from "./Components/JSX_Files/Workout.jsx";
import Exercises from "./Components/JSX_Files/Workouts&Dietplans/Exercises.jsx";
import Diets from "./Components/JSX_Files/Workouts&Dietplans/Diets.jsx";
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
import Success from "./Components/JSX_Files/Success.jsx";
import Cancel from "./Components/JSX_Files/Cancel.jsx";

function App() {
  const [value, setValue] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [diets, setDiets] = useState([]);
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
          <Route path="DietPlan" element={<DietPlan setDiets={setDiets} />} />
          <Route
            path="Shop"
            element={<Shop value={value} setValue={setValue} />}
          />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route
            path="Cart"
            element={<Cart value={value} setValue={setValue} />}
          />
          <Route path="/sucess" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="PlaceOrder" element={<PlaceOrder />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="UserProfile" element={<UserProfile />} />
          <Route
            path="Workout/Exercises"
            element={
              <Exercises exercise={exercise} setExercise={setExercise} />
            }
          />
          <Route
            path="Workout/Diets"
            element={<Diets diets={diets} setDiets={setDiets} />}
          />
          <Route path="/success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
