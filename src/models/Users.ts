import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  id: Number,
  nombre: String,
  metadata: {
    precios_especiales: [
      {
        nombre_producto: String,
        precio_especial_personal: Number,
      },
    ],
  },
});

const User = mongoose.model("User", userSchema);

export default User;