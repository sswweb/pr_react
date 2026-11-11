import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header>
        <div className="container header-inner">
            <Link className="logo" to="/">Книжная полка</Link>
            <nav>
                <Link className={pathname === "/" || pathname === "/" ? "active" : undefined} to="/">Главная</Link>
                <Link className={pathname === "/catalog" || pathname === "/catalog" ? "active" : undefined} to="/catalog">Каталог</Link>
                <Link to={'/cart'}>Корзина</Link>
            </nav>
        </div>
    </header>
  );
}
