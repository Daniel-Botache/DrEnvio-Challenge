import Products from '../models/Products';

const getBasePriceController = async (productName: string): Promise<{ precio_base: number }> => {
  try {
    const product = await Products.findOne({ nombre: productName }, 'precio_base');
    if (product && product.precio_base) {
      return { precio_base: product.precio_base };
    } else {
      throw new Error('Producto no encontrado en la base de datos o no tiene precio base.');
    }
  } catch (error) {
    throw error;
  }
};

export default getBasePriceController;