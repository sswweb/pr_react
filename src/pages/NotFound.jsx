import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => { document.title = "Книжная полка — страница не найдена"; }, []);
  return (
    <main className="container">
        <div className="banner">
            <h1>404 — Страница не найдена</h1>
            <p>Такой страницы нет. Вернитесь на главную.</p>
            <Link className="btn" to="/">На главную</Link>
        </div>
    </main>
  );
}
