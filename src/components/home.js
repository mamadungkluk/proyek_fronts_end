import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import './Home.css'; // Import file CSS
import laptopCodeImage from '../image/xlimPRO.jpg';
import mobileImage from '../image/xlimSE.jpg';
import backendImage from '../image/xlimSQ.jpg';
import xlimv2 from '../image/xlimv2.jpg';

function Home() {
  const { products } = useContext(ProductContext);

  return (
    <div className="home-container">
      <h1 className="home-title">Product</h1>
      <table className="home-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="product-list__ok">
              <td>
                <img src={product.image} alt={product.name} className="home-image" />
              </td>
              <td>{product.name}</td>
              <td>Rp. {product.price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="home">
        <p className="home__subtitle">In stock</p>
        <section className="home__content">
          <div className="home__feature">
            <img className="home__image" src={laptopCodeImage} alt="Web Development" />
            <h2 className="home__feature-title">XlimSE</h2>
            <p className="home__feature-description">
              Rp. 73.000
            </p>
          </div>
          <div className="home__feature">
            <img className="home__image" src={mobileImage} alt="Mobile Development" />
            <h2 className="home__feature-title">XlimPRO</h2>
            <p className="home__feature-description">
              Rp. 100.000
            </p>
          </div>
          <div className="home__feature">
            <img className="home__image" src={backendImage} alt="Backend Development" />
            <h2 className="home__feature-title">XlimSQ</h2>
            <p className="home__feature-description">
              Rp. 75.0000
            </p>
          </div>
          <div className="home__feature">
            <img className="home__image" src={xlimv2} alt="xlimv2" />
            <h2 className="home__feature-title">XlimV2</h2>
            <p className="home__feature-description">
              Rp. 100.000
            </p>
          </div>
        </section>
        <footer className="home__footer">
  <p>
    &copy;{" "}
    <a
      href="https://instagram.com/alimhs17?igshid=MzNlNGNkZWQ4Mg=="
      target="_blank"
      rel="noopener noreferrer"
      className="instagram-link"
    >
      <span className="instagram-link-text">alimhs17</span>
    </a>
  </p>
</footer>

      </div>
    </div>
  );
}

export default Home;
