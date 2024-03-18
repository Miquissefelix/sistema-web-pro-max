import { NextResponse } from "next/server";
//import { connect } from "mongoose";
import User from "@/models/userModel";
import { connectToDB } from "@/utils/DAO";

export async function GET(request) {
  //await connect("mongodb://localhost:27017/sistema-web-pro-max");
   //sistemaweb nome adicionado manualmente para criar uma BD
//    console.log("ola");
// return new NextResponse("ola")
  //    const db=mongoose.connection.db
  //    const users=await db.collection("users").find().toArray();
  //    console.log(users);

  await connectToDB()

  const data = {
    firstName: "Miquisse ",
    lastName: "Felix", 
    email: "fmiquissejose@gmail.com",
    password: "12345678",
    birthday: "2001-05-22",
    gender: "M",
    phone: "258861764645",
    role: "admin",
  };

  const user = await User.create({
    ...data,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });

  return  NextResponse.json(user);
};

export async function POST(request){
  await connectToDB();
  //formData==json
  const body=await request.json();
  // console.log(body);
 
  const user = await User.create({
    ...body,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });

  return NextResponse.json(user, {status: 201 });
}
