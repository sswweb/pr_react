import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Product() {
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getProduct() {
      try {
        setError(null);
        setProduct(null);
        setCategory(null);
        const res = await fetch("http://localhost:3000/products/" + id);
        if (!res.ok) {
          throw new Error(`Ошибка ${res.status}: ${res.statusText}`);
        }
        const productFromServer = await res.json();
        setProduct(productFromServer);
        document.title = "Книжная полка — " + productFromServer.title;
        const catRes = await fetch("http://localhost:3000/categories/" + productFromServer.categoryId);
        if (!catRes.ok) {
          throw new Error(`Ошибка ${catRes.status}: ${catRes.statusText}`);
        }
        const categoryFromServer = await catRes.json();
        setCategory(categoryFromServer);
      } catch (e) {
        setError(e.message);
      }
    }
    getProduct();
  }, [id]);

  return (
    <main className="container">
        <p className="back"><Link to="/catalog">Назад в каталог</Link></p>

        {!id ? <p>Товар не найден</p> : error ? <p>Не удалось загрузить товар: {error}</p> : product && (
        <div className="product">
            <img src={product.image} alt={product.title} />
            <div>
                <p className="cat">{category && category.title}</p>
                <h1>{product.title}</h1>
                <p className="desc">{product.description}</p>
                <p className="price">{product.price} руб.</p>
                <button className="btn" type="button">В корзину</button>
            </div>
        </div>
        )}
    </main>
  );
}
