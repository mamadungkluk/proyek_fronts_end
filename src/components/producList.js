import React, { useState, useEffect, useContext } from 'react';
import './ProductList.css';
import { ProductContext } from './ProductContext';

function ProductList() {
  const { products, setProducts } = useContext(ProductContext);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductImage, setNewProductImage] = useState(null);
  const [editProductId, setEditProductId] = useState(null);
  const [formError, setFormError] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, [setProducts]);

  const addProduct = () => {
    if (newProductName && newProductPrice && newProductImage) {
      const newProduct = {
        id: Date.now(),
        name: newProductName,
        price: parseInt(newProductPrice),
        image: URL.createObjectURL(newProductImage),
      };
      setProducts([...products, newProduct]);
      setNewProductName('');
      setNewProductPrice('');
      setNewProductImage(null);
      setFormError(false);
      setAddSuccess(true);
      setTimeout(() => {
        setAddSuccess(false);
      }, 2000);
    } else {
      setFormError(true);
    }
  };

  const deleteProduct = (productId) => {
    const confirmDelete = window.confirm('Are you sure you want to remove this product?');
    if (confirmDelete) {
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);
    }
  };

  const editProduct = (productId) => {
    const product = products.find((product) => product.id === productId);
    if (product) {
      setEditProductId(productId);
      setNewProductName(product.name);
      setNewProductPrice(product.price.toString());
    }
  };

  const updateProduct = () => {
    const updatedProducts = products.map((product) => {
      if (product.id === editProductId) {
        return {
          ...product,
          name: newProductName,
          price: parseInt(newProductPrice),
        };
      }
      return product;
    });
    setProducts(updatedProducts);
    setNewProductName('');
    setNewProductPrice('');
    setEditProductId(null);
    setFormError(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewProductImage(file);
  };

  return (
    <div className="product-list">
      <h2 className="product-list__title">Products</h2>
      {addSuccess && <p className="success-message">Product has been added!</p>}
      <table className="product-list__table">
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="product-list__item">
              <td className="product-list__image-container">
                <img src={product.image} alt={product.name} className="product-list__image" />
              </td>
              <td className="product-list__details">
                <div className="product-list__name">{product.name}</div>
                <div className="product-list__description">{product.description}</div>
                <div className="product-list__price">Rp. {product.price.toLocaleString()}</div>
              </td>
              <td className="product-list__actions">
                <button className="btn" onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
                <button className="btn" onClick={() => editProduct(product.id)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="product-list__form">
        <input
          type="text"
          placeholder="Product Name"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProductPrice}
          onChange={(e) => setNewProductPrice(e.target.value)}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {formError && <p className="error-message">Please complete the form</p>}
        {editProductId ? (
          <button className="btn" onClick={updateProduct}>
            Update
          </button>
        ) : (
          <button className="btn" onClick={addProduct}>
            Add
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductList;
