import { useEffect, useState } from 'react';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setError(null);
        const res = await fetch("http://localhost:3000/categories");
        if (!res.ok) {
          throw new Error(`Ошибка ${res.status}: ${res.statusText}`);
        }
        const data = await res.json();
        setCategories(data);
      } catch (e) {
        setError(e.message);
      }
    }
    load();
  }, []);

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <div className="categories">
        <span>Категории:</span>
        <a href="#">Все</a>
        {categories.map((category) => <a key={category.id} href="#">{category.title}</a>)}
    </div>
  );
}
