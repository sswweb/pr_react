import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header>
        <div className="container header-inner">
            <Link className="logo" to="/">Книжная полка</Link>
            <nav>
                <Link className={pathname === "/" || pathname === "/index.html" ? "active" : undefined} to="/">Главная</Link>{" "}
                <Link className={pathname === "/catalog" || pathname === "/catalog.html" ? "active" : undefined} to="/catalog">Каталог</Link>{" "}
                <a href="#">Корзина</a>
            </nav>
        </div>
    </header>
  );
}
