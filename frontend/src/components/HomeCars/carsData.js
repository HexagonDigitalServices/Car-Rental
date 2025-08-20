// src/data/carsData.js
import HC1 from "../../assets/HC1.png";
import HC2 from "../../assets/HC2.png";
import HC3 from "../../assets/HC3.png";
import HC4 from "../../assets/HC4.png";
import HC5 from "../../assets/HC5.png";
import HC6 from "../../assets/HC6.png";

const carsData = [
  {
    id: 1,
    name: "Toyota Corolla",
    type: "Compact Sedan",
    price: 3000,
    image: HC1,
    description: "Reliable, fuel-efficient commuter.",
    seats: 5,
    fuel: "Gasoline",
    mileage: "30 MPG",
    transmission: "Automatic"
  },
  {
    id: 2,
    name: "Honda Civic",
    type: "Compact Sedan",
    price: 2500,
    image: HC2,
    description: "Sporty handling with modern tech.",
    seats: 5,
    fuel: "Gasoline",
    mileage: "32 MPG",
    transmission: "Automatic"
  },
  {
    id: 3,
    name: "Volkswagen Golf",
    type: "Hatchback",
    price: 5000,
    image: HC3,
    description: "Practical hatch with punchy engine.",
    seats: 5,
    fuel: "Gasoline",
    mileage: "29 MPG",
    transmission: "Manual"
  },
  {
    id: 4,
    name: "Hyundai Elantra",
    type: "Compact Sedan",
    price: 2000,
    image: HC4,
    description: "Smooth ride, lots of tech features.",
    seats: 5,
    fuel: "Gasoline",
    mileage: "33 MPG",
    transmission: "Automatic"
  },
  {
    id: 5,
    name: "Nissan Altima",
    type: "Midsize Sedan",
    price: 7000,
    image: HC5,
    description: "Comfortable and spacious daily driver.",
    seats: 5,
    fuel: "Gasoline",
    mileage: "31 MPG",
    transmission: "Automatic"
  },
  {
    id: 6,
    name: "Chevrolet Cruze",
    type: "Compact Sedan",
    price: 10000,
    image: HC6,
    description: "Efficient cruiser with solid handling.",
    seats: 5,
    fuel: "Diesel",
    mileage: "34 MPG",
    transmission: "Manual"
  }
];

export default carsData;
