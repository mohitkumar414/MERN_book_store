import dotenv from 'dotenv';
dotenv.config();

export const PORT = 5555;

const URL = process.env.URL
console.log("hello",URL)

export const mongoDBURL = URL;


//plaese create a free dtabase for yourself
