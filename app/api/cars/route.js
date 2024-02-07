import { NextResponse } from "next/server";
import connect from "../../../utils/mongoDB/db";
import Car from "../../../models/Car";

export const GET = async (request) => {
  try {
    // Establish connection and the GET the cars list from DB
    await connect();
    const cars = await Car.find();
    // console.log(JSON.stringify(cars))
    // console.log(NextResponse(JSON.stringify(cars)));
    return new NextResponse(JSON.stringify(cars), { status: 200 });
  } catch (err) {
    return new NextResponse("Error in fetching cars" + err, { status: 500 });
  }
};
