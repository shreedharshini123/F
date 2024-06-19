import mongoose from "mongoose";


 export const connecDB = async () => {
    await mongoose.connect('mongodb+srv://shreedharshini:YU_b9BWx4MA.MvR@cluster0.uwraghh.mongodb.net/FOOD_DELIVERYAPP').then(()=>console.log("DB Connected"));
}