import Burgers from "../components/menu/Burgers";
import ColdDrinks from "../components/menu/ColdDrinks";
import Desserts from "../components/menu/Desserts";
import Fries from "../components/menu/Fries";
import Offers from "../components/menu/Offers";
import Snacks from "../components/menu/Snacks";

export const timings = [
  { id: "monday", day: "Monday", time: "8:00 AM - 3:00 PM" },
  { id: "tuesday", day: "Tuesday", time: "8:00 AM - 3:00 PM" },
  { id: "wednesday", day: "Wednesday", time: "8:00 AM - 3:00 PM" },
  { id: "thursday", day: "Thursday", time: "8:00 AM - 3:00 PM" },
  { id: "friday", day: "Friday", time: "8:00 AM - 3:00 PM" },
  { id: "saturday", day: "Saturday", time: "8:00 AM - 3:00 PM" },
  { id: "Sunday", day: "Sunday", time: "8:00 AM - 3:00 PM" },
];

export const menu = [
  {
    id: "offers",
    component: Offers,
    item: "Offers",
  },
  {
    id: "burgers",
    component: Burgers,
    item: "Burgers",
  },
  {
    id: "fries",
    component: Fries,
    item: "Fries",
  },
  {
    id: "snacks",
    component: Snacks,
    item: "Snacks",
  },
  {
    id: "cold-drinks",
    component: ColdDrinks,
    item: "Cold Drinks",
  },
  {
    id: "desserts",
    component: Desserts,
    item: "Desserts",
  },
];
