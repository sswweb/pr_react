import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => { document.title = "Книжная полка — главная"; }, []);
  return (
    <main className="container">
        <div className="banner">
            <h1>Книги, которые хочется дочитать</h1>
            <p>Художественная литература, детективы и фантастика с доставкой.</p>
            <Link className="btn" to="/catalog">Перейти в каталог</Link>
        </div>

        <form className="subscribe" action="#">
            <h2>Подписка на рассылку</h2>
            <p className="hint">Новые поступления раз в неделю, без спама.</p>
            <input type="email" name="email" placeholder="Введите почту" />{" "}
            <button className="btn" type="submit">Подписаться</button>
        </form>
    </main>
  );
}
