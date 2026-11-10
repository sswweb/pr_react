import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => { document.title = "Книжная полка — страница не найдена"; }, []);
  return (
    <main className="container">
        <div className="banner">
            <h1>Страница не найдена</h1>
            <p>Проверьте адрес страницы.</p>
            <Link className="btn" to="/">На главную</Link>
        </div>
    </main>
  );
}
