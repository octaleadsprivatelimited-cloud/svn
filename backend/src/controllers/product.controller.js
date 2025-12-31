import Product from '../models/Product.js';

export const getProducts = async (req, res) => {
  try {
    const { active } = req.query;
    const query = active === 'false' ? {} : { isActive: true };
    
    const products = await Product.find(query).sort({ order: 1, createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    console.error('Get products error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }
    
    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error('Get product error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { title, description, image, specs, isActive, order } = req.body;
    
    if (!title || !image) {
      return res.status(400).json({
        success: false,
        message: 'Please provide title and image',
      });
    }
    
    const product = await Product.create({
      title,
      description: description || '',
      image,
      specs: specs || [],
      isActive: isActive !== undefined ? isActive : true,
      order: order || 0,
    });
    
    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: product,
    });
  } catch (error) {
    console.error('Create product error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { title, description, image, specs, isActive, order } = req.body;
    
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }
    
    if (title) product.title = title;
    if (description !== undefined) product.description = description;
    if (image) product.image = image;
    if (specs) product.specs = specs;
    if (isActive !== undefined) product.isActive = isActive;
    if (order !== undefined) product.order = order;
    
    await product.save();
    
    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: product,
    });
  } catch (error) {
    console.error('Update product error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }
    
    await Product.findByIdAndDelete(req.params.id);
    
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
    });
  } catch (error) {
    console.error('Delete product error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

