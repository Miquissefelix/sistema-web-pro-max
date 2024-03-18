import { connect } from "mongoose";

//Data aceess Object
export const connectToDB =async () => {
    await connect("mongodb://localhost:27017/sistema-web-pro-max")
}