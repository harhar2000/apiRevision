import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const HERO_API_KEY = process.env.HERO_API_KEY;

const response = await fetch(`https://superheroapi.com/api/${HERO_API_KEY}/1`);
//const data = await response.json();
if (response.status === 200) {
  console.log(response.status);
  console.log(await response.json());
} else {
  console.log(`There was an ${response.status} error`);
}
