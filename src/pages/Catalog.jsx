import { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';
import Categories from '../components/Categories';
import Search from '../components/Search';
import Sort from '../components/Sort';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [sort, setSort] = useState("");

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

  const filteredProduct = products
    .filter((p) => p.title.toLowerCase().trim().includes(search.toLowerCase().trim()))
    .filter((p) => p.categoryId === selectedCategoryId || selectedCategoryId === null);

  const sorting = (products) => {
    if (!sort) return products;
    return [...products].sort((a, b) => sort === 'asc' ? a.price - b.price : b.price - a.price);
  };

  return (
    <main className="container">
        <h1 className="page-title">Каталог</h1>

        <div className="toolbar">
            <Search value={search} onChange={setSearch} />
            <Sort value={sort} onChange={setSort} />
            <Categories selectedId={selectedCategoryId} onSelect={setSelectedCategoryId} />
        </div>

        {error ? <p>Не удалось загрузить товары: {error}</p> : filteredProduct.length === 0 ? (
            <p>Товары не найдены</p>
        ) : (
        <div className="cards">
            {sorting(filteredProduct).map((book) => <BookCard key={book.id} book={book} />)}
        </div>
        )}
    </main>
  );
}
