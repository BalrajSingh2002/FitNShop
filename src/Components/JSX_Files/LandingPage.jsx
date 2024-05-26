import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../CSS_Files/LandingPage.css";
import { useUser } from "../../userContext";

import Fitness from "../_Imgs/ForgeFitness.webp"
import Nutrition from "../_Imgs/NutritiousDiet.jpg"
import Shop from "../_Imgs/GymShop.jpg"

import review1 from "../_Imgs/Profile1.png";
import review2 from "../_Imgs/Profile2.png";
import review3 from "../_Imgs/Profile3.png";
import review4 from "../_Imgs/Profile4.png";
import review5 from "../_Imgs/Profile5.png";
import review6 from "../_Imgs/Profile6.png";
import review7 from "../_Imgs/Profile7.png";
import review8 from "../_Imgs/Profile8.png";
import review9 from "../_Imgs/Profile9.png";
import review10 from "../_Imgs/Profile10.png";

import { Link } from "react-router-dom";

const LandingPage = () => {
  const { userData, setUserData } = useUser();
  const Reviews = [
    { id: 1, name: "Balraj Singh", review: "Comprehensive fitness website with diverse workouts, diet plans, and a convenient shop for all your health needs. Highly recommended!", imageUrl: review4 },
    { id: 2, name: "Ayush Kr Singh", review: "Comprehensive fitness website with diverse workouts, diet plans, and a convenient shop for all your health needs. Highly recommended!", imageUrl: review5 },
    { id: 3, name: "Harshit Agarwal", review: "Comprehensive fitness website with diverse workouts, diet plans, and a convenient shop for all your health needs. Highly recommended!", imageUrl: review7 },
    { id: 4, name: "Shushant Monga", review: "Comprehensive fitness website with diverse workouts, diet plans, and a convenient shop for all your health needs. Highly recommended!", imageUrl: review1 },
    { id: 5, name: "Dimple Kaundal", review: "Comprehensive fitness website with diverse workouts, diet plans, and a convenient shop for all your health needs. Highly recommended!", imageUrl: review2 },
    { id: 6, name: "Bisman Singh", review: "Comprehensive fitness website with diverse workouts, diet plans, and a convenient shop for all your health needs. Highly recommended!", imageUrl: review6 },
    { id: 7, name: "Harniman Singh", review: "Comprehensive fitness website with diverse workouts, diet plans, and a convenient shop for all your health needs. Highly recommended!", imageUrl: review7 },
    { id: 8, name: "Divyanshu Mehra", review: "Comprehensive fitness website with diverse workouts, diet plans, and a convenient shop for all your health needs. Highly recommended!", imageUrl: review8 },
    { id: 9, name: "Karan", review: "Comprehensive fitness website with diverse workouts, diet plans, and a convenient shop for all your health needs. Highly recommended!", imageUrl: review9 },
    { id: 10, name: "Priyanshu Choudhary", review: "Comprehensive fitness website with diverse workouts, diet plans, and a convenient shop for all your health needs. Highly recommended!", imageUrl: review10 },
  ];

  return (
    <>
      <div className="landingPage">
        {/*------------------------------------ BANNER 1 ------------------------------------*/}
        <div className="lpbanner1">
          <div className="lpbanner1_content">
            <h1>Unleash Your Potential </h1>
            <p>
              Track your progress, reach your goals, and become the best version
              of yourself with our fitness website. Start today and watch your
              journey to a healthier you unfold before your eyes.
            </p>
            {userData ? (
              <Link to="/Workout">
                <button>Get Started</button>
              </Link>
            ) : (
              <Link to="/SignUp">
                <button>Get Started</button>
              </Link>
            )}
          </div>
        </div>

        {/*------------------------------------ BANNER 2 ------------------------------------*/}

        <div className="lpbanner2">
          <h2>Become the best version of yourself in 3 steps.</h2>
          <div className="lpbanner2_card">
            <div className="lpb2card lpb2card1">
              <div className="lpb2card_content">
                <h2>Set Specific Goals:</h2>
                <p>
                  Clearly define what you want to achive, whether it's weight
                  loss, muscle gain, or improve endurance.
                </p>
              </div>
            </div>
            <div className="lpb2card lpb2card2">
              <div className="lpb2card_content">
                <h2>Create a plan:</h2>
                <p>
                  Breakdown your goals into smaller achievable steps. Follow a
                  workout routine and meal plan that aligns with your
                  objectives.
                </p>
              </div>
            </div>
            <div className="lpb2card lpb2card3">
              <div className="lpb2card_content">
                <h2>Stay consistent and track progress:</h2>
                <p>Stick to our plan and monitor your progress regularly.</p>
              </div>
            </div>
          </div>
        </div>

        {/*------------------------------------ BANNER 3 ------------------------------------*/}

        <div className="lpbanner3">
          <div className="lpbanner3_content">
            <div className="lpbanner3_text">
              <h1>Forge Your Fitness</h1>
              <p>
                Unlock your potential with our empowering workouts tailored to
                sculpt your best self.
              </p>
              <Link to="/Workout">
                <button>View Workouts</button>
              </Link>
            </div>
            <div className="lpbanner3_image">
              <img src={Fitness} alt="Banner Image" />
            </div>
          </div>
        </div>

        {/*------------------------------------ BANNER 4 ------------------------------------*/}

        <div className="lpbanner4">
          <div className="lpbanner4_content">
            <div className="lpbanner4_image">
              <img src={Nutrition} alt="Banner Image" />
            </div>
            <div className="lpbanner4_text">
              <h1>Revitalize Your Nutrition</h1>
              <p>
                Fuel your journey to greatness with diet plans crafted to
                complement your fitness goals.
              </p>
              <Link to="/DietPlan">
                <button>View Diet Plans</button>
              </Link>
            </div>
          </div>
        </div>

        {/*------------------------------------ BANNER 5 ------------------------------------*/}

        <div className="lpbanner5">
          <div className="lpbanner5_content">
            <div className="lpbanner5_text">
              <h1>Gear Up for Success</h1>
              <p>
                Elevate your performance with our curated selection of
                supplements, equipment, and smart wearables, designed to amplify
                every workout.
              </p>
              <Link to="/Shop">
                <button>Shop Now</button>
              </Link>
            </div>
            <div className="lpbanner5_image">
              <img src={Shop} alt="Banner Image" />
            </div>
          </div>
        </div>

        {/*------------------------------------ BANNER 6 ------------------------------------*/}

        <div className="review-carousel-container">
          <div className="carousel">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              swipeable={true}
              emulateTouch={true}
              centerMode={true}
              autoPlay={true}
              showIndicators={false}
              stopOnHover={true}
              useKeyboardArrows={true}
              centerSlidePercentage={250 / Reviews.length}
            >
              {Reviews.map((item) => (
                <div key={item.id} className="reviewcard">
                  <img
                    src={item.imageUrl}
                    alt={item.profile}
                    style={{ width: "17vh", height:"17vh", borderRadius: "50%" }}
                  />
                  <p style={{ marginTop: "15px" }}>{item.name}</p>
                  <p style={{ marginTop: "15px", color:"grey" }}>{item.review}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
