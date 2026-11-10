import { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';
import Categories from '../components/Categories';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setError(null);
        const res = await fetch("http://localhost:3000/products");
        if (!res.ok) {
          throw new Error(`Ошибка ${res.status}: ${res.statusText}`);
        }
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        setError(e.message);
      }
    }
    load();
  }, []);

  useEffect(() => { document.title = "Книжная полка — каталог"; }, []);
  return (
    <main className="container">
        <h1 className="page-title">Каталог</h1>

        <form className="toolbar" action="#">
            <input type="text" name="search" placeholder="Поиск по товарам" />

            <label>
                Сортировка:{" "}
                <select name="sort">
                    <option value="asc">По цене: дешевле</option>
                    <option value="desc">По цене: дороже</option>
                </select>
            </label>

            <Categories />
        </form>

        {error ? <p>Не удалось загрузить товары: {error}</p> : products.length === 0 ? (
            <p>Товары не найдены</p>
        ) : (
        <div className="cards">
            {products.map((book) => <BookCard key={book.id} book={book} />)}
        </div>
        )}
    </main>
  );
}
