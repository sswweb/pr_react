import { useEffect } from 'react';
import BookCard from '../components/BookCard';

const books = [
  {
    "image": "/img/book1.svg",
    "title": "Мастер и Маргарита",
    "category": "Роман",
    "price": "590 руб."
  },
  {
    "image": "/img/book2.svg",
    "title": "Преступление и наказание",
    "category": "Роман",
    "price": "450 руб."
  },
  {
    "image": "/img/book3.svg",
    "title": "Шерлок Холмс",
    "category": "Детектив",
    "price": "520 руб."
  },
  {
    "image": "/img/book4.svg",
    "title": "Убийство в Восточном экспрессе",
    "category": "Детектив",
    "price": "480 руб."
  },
  {
    "image": "/img/book5.svg",
    "title": "1984",
    "category": "Фантастика",
    "price": "410 руб."
  },
  {
    "image": "/img/book6.svg",
    "title": "Солярис",
    "category": "Фантастика",
    "price": "390 руб."
  }
];

export default function Catalog() {
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

            <div className="categories">
                <span>Категории:</span>
                <a href="#">Все</a>
                <a href="#">Романы</a>
                <a href="#">Детективы</a>
                <a href="#">Фантастика</a>
            </div>
        </form>

        <div className="cards">
            {books.map((book) => <BookCard key={book.image} book={book} />)}
        </div>
    </main>
  );
}
