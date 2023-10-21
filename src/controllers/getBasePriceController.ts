import Products from "../models/Products";

const getBasePriceController = async (productName: string): Promise<{}> => {
  try {
    const product = await Products.findOne(
      { nombre: productName },
      "precio_base"
    );
    if (product) {
      return product;
    } else {
      throw new Error(
        "Producto no encontrado en la base de datos o no tiene precio base."
      );
    }
  } catch (error) {
    throw error;
  }
};

export default getBasePriceController;
