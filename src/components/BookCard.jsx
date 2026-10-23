import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  return (
    <div className="card">
                <img src={book.image} alt={book.title} />
                <h3>{book.title}</h3>
                <p className="cat">{book.category}</p>
                <p className="price">{book.price}</p>
                <Link className="btn" to="/product">Подробнее</Link>
            </div>
  );
}
