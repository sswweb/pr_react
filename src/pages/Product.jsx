import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Product() {
  useEffect(() => { document.title = "Книжная полка — Мастер и Маргарита"; }, []);
  return (
    <main className="container">
        <p className="back"><Link to="/catalog">Назад в каталог</Link></p>

        <div className="product">
            <img src="/img/book1.svg" alt="Мастер и Маргарита" />
            <div>
                <p className="cat">Роман</p>
                <h1>Мастер и Маргарита</h1>
                <p className="desc">Роман Михаила Булгакова. В Москву приезжает Воланд со свитой, а параллельно рассказывается история Мастера и Маргариты. Книга в твёрдом переплёте.</p>
                <p className="price">590 руб.</p>
                <button className="btn" type="button">В корзину</button>
            </div>
        </div>
    </main>
  );
}
