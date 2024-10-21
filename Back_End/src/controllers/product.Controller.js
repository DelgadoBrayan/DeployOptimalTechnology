import Product from "../model/Product.Model.js";

// Create new product
export const createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      nameProduct: req.body.nameProduct,
    });
    return res.status(201).json({ product, msg: 'Producto creado correctamente' });
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear el producto' });
  }
};

// Get All Product
export const getProducts = async (req, res) => {
    try {
      const products = await Product.find();
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener los productos' });
    }
  };
  
// Get product ById
export const getProductById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ msg: 'Producto no encontrado' });
      }
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener el producto' });
    }
  };

// Patch product ById
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { nameProduct } = req.body; 

  try {
      const product = await Product.findByIdAndUpdate(
          id,
          { nameProduct },
          { new: true, runValidators: true }
      );

      if (!product) {
          return res.status(404).json({ msg: 'Producto no encontrado' });
      }

      return res.status(200).json({ msg: 'Producto actualizado correctamente', product });
  } catch (error) {
      return res.status(500).json({ error: error.message });
  }
};

// Delete product ById
export const deleteProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({ msg: 'Producto no encontrado' });
      }
      return res.status(200).json({ msg: 'Producto eliminado correctamente' });
    } catch (error) {
      return res.status(500).json({ error: 'Error al eliminar el producto' });
    }
  };
  
  