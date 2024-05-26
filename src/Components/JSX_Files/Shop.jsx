import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../CSS_Files/Shop.css";

import supplement1 from "../_Imgs/Supplement1.jpg";
import supplement2 from "../_Imgs/Supplement2.jpg";
import supplement3 from "../_Imgs/Supplement3.webp";
import supplement4 from "../_Imgs/Supplement4.jpg";
import supplement5 from "../_Imgs/Supplement5.jpg";
import supplement6 from "../_Imgs/Supplement6.jpg";
import supplement7 from "../_Imgs/Supplement7.webp";
import supplement8 from "../_Imgs/Supplement8.jpg";
import supplement9 from "../_Imgs/Supplement9.jpg";
import supplement10 from "../_Imgs/Supplement10.jpg";

import Equipment1 from "../_Imgs/Equipment1.jpg";
import Equipment2 from "../_Imgs/Equipment2.jpg";
import Equipment3 from "../_Imgs/Equipment3.jpg";
import Equipment4 from "../_Imgs/Equipment4.jpg";
import Equipment5 from "../_Imgs/Equipment5.jpg";
import Equipment6 from "../_Imgs/Equipment6.jpg";
import Equipment7 from "../_Imgs/Equipment7.jpg";
import Equipment8 from "../_Imgs/Equipment8.jpg";
import Equipment9 from "../_Imgs/Equipment9.jpg";
import Equipment10 from "../_Imgs/Equipment10.webp";

import smartwearable1 from "../_Imgs/SmartWearable1.jpg";
import smartwearable2 from "../_Imgs/SmartWearable2.jpg";
import smartwearable3 from "../_Imgs/SmartWearable3.jpg";
import smartwearable4 from "../_Imgs/SmartWearable4.webp";
import smartwearable5 from "../_Imgs/SmartWearable5.jpg";
import smartwearable6 from "../_Imgs/SmartWearable6.jpg";
import smartwearable7 from "../_Imgs/SmartWearable7.jpg";
import smartwearable8 from "../_Imgs/SmartWearable8.jpg";
import smartwearable9 from "../_Imgs/SmartWearable9.jpg";
import smartwearable10 from "../_Imgs/SmartWearable10.jpg";


const Shop = ({ value, setValue }) => {
  const handleAddToCart = (item) => {
    setValue([...value, item]);
    console.log(value);
  };
  const supplementData = [
    {
      id: 1,
      text: "Optimum Nutrition (ON) / Standard 100% Whey Protein / Chocolate / (2lbs/907g)",
      MRP: "3899",
      Price: "3099",
      imageUrl: supplement1,
    },
    {
      id: 2,
      text: "As-It-Is Nutrition / Whey Protein / 1kg ",
      MRP: "2714",
      Price: "1899",
      imageUrl: supplement2,
    },
    {
      id: 3,
      text: "Optimum Nutrition (ON) / Mass Gainer / Chocolate / 3kg ",
      MRP: "3799",
      Price: "3299",
      imageUrl: supplement3,
    },
    {
      id: 4,
      text: "GNC / Whey Gainer / 73g Protein / 440g Carbs / 3kg",
      MRP: "3499",
      Price: "2016",
      imageUrl: supplement4,
    },
    {
      id: 5,
      text: "Optimum Nutrition (ON) / Micronized Creatine Powder / 250g / 83 Serves ",
      MRP: "1399",
      Price: "999",
      imageUrl: supplement5,
    },
    {
      id: 6,
      text: "MuscleBlaze / Beginner's Protein / Chocolate / 1kg",
      MRP: "2279",
      Price: "1449",
      imageUrl: supplement6,
    },
    {
      id: 7,
      text: "MuscleBlaze / Creapure Creatine / Unflavoured / 250g",
      MRP: "1649",
      Price: "1149",
      imageUrl: supplement7,
    },
    {
      id: 8,
      text: "Kapiva / Shilajit Gold Resin / 20g",
      MRP: "1799",
      Price: "1399",
      imageUrl: supplement8,
    },
    {
      id: 9,
      text: "Himalaya / Ashwagandha / 60-Tablets",
      MRP: "220",
      Price: "198/-",
      imageUrl: supplement9,
    },
    {
      id: 10,
      text: "Wow / Omega-3 Fish Oil / Ideal for Keto Diet",
      MRP: "899",
      Price: "608",
      imageUrl: supplement10,
    },
  ];

  const equipmentData = [
    {
      id: 1,
      text: "Flexnest / Adjustable Iron Dumbbells Set / Easy Weight Adjustment (2.5Kg-24Kg) / Set of 2",
      MRP: "41000",
      Price: "17999",
      imageUrl: Equipment1,
    },
    {
      id: 2,
      text: "Kore / PVC 20-50Kg Home Gym Set",
      MRP: "3499",
      Price: "2699",
      imageUrl: Equipment2,
    },
    {
      id: 3,
      text: "Symactive Heavy Duty 3 in 1 Adjustable Incline Multipurpose Gym Bench / Max Weight 350 Kg",
      MRP: "8500",
      Price: "3389",
      imageUrl: Equipment3,
    },
    {
      id: 4,
      text: "Zorex / HGZ-1001 / Home Gym Machine for Multiple Muscle Workout",
      MRP: "49000",
      Price: "21500/-",
      imageUrl: Equipment4,
    },
    {
      id: 5,
      text: "Hercules / SM110 / Home Gym Machine",
      MRP: "60240",
      Price: "46455",
      imageUrl: Equipment5,
    },
    {
      id: 6,
      text: "Realswiss / Commercial Functional Trainer Gym Machine / 200Kg Weight Stack ",
      MRP: "199999",
      Price: "112900",
      imageUrl: Equipment6,
    },
    {
      id: 7,
      text: "Hashtag Fitness / Adjustable 20 in 1 Gym Bench for Home Gyms",
      MRP: "17799",
      Price: "8095",
      imageUrl: Equipment7,
    },
    {
      id: 8,
      text: "UDKI / Hand Grip Strengthner / REsistance 10-100Kg",
      MRP: "700",
      Price: "499",
      imageUrl: Equipment8,
    },
    {
      id: 9,
      text: "Kobo / Heavy Duty 13Kg Fly Wheel Fitness Exercise Spin Bike",
      MRP: "40000",
      Price: "18999",
      imageUrl: Equipment9,
    },
    {
      id: 10,
      text: "Aurion Sued Leather Powerlifting Gym Belt / Medium Size (28-34 inches)",
      MRP: "2499",
      Price: "989",
      imageUrl: Equipment10,
    },
  ];

  const wearableData = [
    {
      id: 1,
      text: "CULTSPORT / Ranger Xr 1.43 Amoled 850 nits/ Sports Recognition, Health Tracking",
      MRP: "9999",
      Price: "3499",
      imageUrl: smartwearable1,
    },
    {
      id: 2,
      text: "Samsung Galaxy Fit 3 / Fitness and Health Tracking / IP68",
      MRP: "9999",
      Price: "4999",
      imageUrl: smartwearable2,
    },
    {
      id: 3,
      text: "Fire-Boltt Phoenix / Multiple Sports Mode and 360 Health",
      MRP: "12999",
      Price: "2099",
      imageUrl: smartwearable3,
    },
    {
      id: 4,
      text: "Garmin / Venu 3s / Advance Fitness and Health Tracker",
      MRP: "115999",
      Price: "89198",
      imageUrl: smartwearable4,
    },
    {
      id: 5,
      text: "Fitbit / FB512GLWT-FRCJK / Advanced Fitness Tools",
      MRP: "22999",
      Price: "18999",
      imageUrl: smartwearable5,
    },
    {
      id: 6,
      text: "Amazfit / GTS 4 / Alexa Built-in / Spo2 / Accurate GPS Tracking Fitness Sports",
      MRP: "10999",
      Price: "8999",
      imageUrl: smartwearable6,
    },
    {
      id: 7,
      text: "Fastrack / Active Pro Rugged / AI Coach / Auto Sport Recognition / AI Voice Assistant ",
      MRP: "11999",
      Price: "5995",
      imageUrl: smartwearable7,
    },
    {
      id: 8,
      text: "CrossBeats / Nexus 2.1 / AI Health Tracker",
      MRP: "11999",
      Price: "3999",
      imageUrl: smartwearable8,
    },
    {
      id: 9,
      text: "Google Pixel Watch / Fitbit Activity Tracking / Heart Rate Tracking / Sports Mode",
      MRP: "28990",
      Price: "24499",
      imageUrl: smartwearable9,
    },
    {
      id: 10,
      text: "Fossil / Gen 6 / Alexa Built-in / Spo2 / Advanced Fitness Tools",
      MRP: "23995",
      Price: "11998",
      imageUrl: smartwearable10,
    },
  ];

  return (
    <div className="page">
      <div className="carousel-container">
        <h2>Supplement</h2>
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
            width={"84vw"}
            centerSlidePercentage={333 / supplementData.length}
          >
            {supplementData.map((item) => (
              <div key={item.id} className="card">
                <img
                  src={item.imageUrl}
                  alt={item.text}
                  style={{ width: "30vh", height: "27vh" }}
                />
                <p style={{ marginTop: "15px" }}>{item.text}</p>
                <p>
                  <del>MRP. {item.MRP}/-</del>
                </p>
                <p><b>Rs.{item.Price}/-</b></p>
                <button onClick={() => handleAddToCart(item)}>
                  Add To Cart
                </button>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="carousel-container">
        <h2>Equipment</h2>
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
            width={"85vw"}
            centerSlidePercentage={333 / supplementData.length}
          >
            {equipmentData.map((item) => (
              <div key={item.id} className="card">
                <img
                  src={item.imageUrl}
                  alt={item.text}
                  style={{ width: "30vh", height: "27vh" }}
                />
                <p style={{ marginTop: "15px" }}>{item.text}</p>
                <p>
                  <del>MRP. {item.MRP}/-</del>
                </p>
                <p><b>Rs.{item.Price}/-</b></p>
                <button onClick={() => handleAddToCart(item)}>Add To Cart</button>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="carousel-container">
        <h2>Smart Wearable</h2>
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
            width={"85vw"}
            centerSlidePercentage={333 / supplementData.length}
          >
            {wearableData.map((item) => (
              <div key={item.id} className="card">
                <img
                  src={item.imageUrl}
                  alt={item.text}
                  style={{ width: "30vh", height: "27vh" }}
                />
                <p style={{ marginTop: "15px" }}>{item.text}</p>
                <p>
                  <del>MRP. {item.MRP}/-</del>
                </p>
                <p><b>Rs.{item.Price}/-</b></p>
                <button onClick={() => handleAddToCart(item)}>Add To Cart</button>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Shop;
