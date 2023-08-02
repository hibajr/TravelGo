import gym from "../assets/gym.jpg";
import peru from "../assets/Special Offers/peru.jpg";
import tanzania from "../assets/Special Offers/tanzania.jpg";
import dubai from "../assets/Special Offers/dubai.jpg";

const specialOffers = [
  {
    image: peru,
    currentPrice: 5350,
    percentOff: 30,
    beds: 2,
    bath: 2,
    status: "For Rent",
    location: "450 Vine street #310, Peru",
    shuttle: "shuttle",
    WiFi: "Wi-Fi",
  },
  {
    image: tanzania,
    currentPrice: 8210,
    percentOff: 30,
    beds: 2,
    bath: 3,
    status: "For Rent",
    location: "Asilia lodge,ngorongoro, Tanzania",
    shuttle: "shuttle",
    WiFi: "Wi-Fi",
  },
  {
    image: dubai,
    currentPrice: 15430,
    percentOff: 30,
    beds: 4,
    bath: 5,
    status: "For Rent",
    location: "201 Al-wayat street #344, Dubai",
    shuttle: "shuttle",
    WiFi: "Wi-Fi",
  },
];
export default specialOffers;
