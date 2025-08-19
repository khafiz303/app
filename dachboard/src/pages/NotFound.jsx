import { Link } from 'react-router-dom'
import '../style/notFound.css'
export default function NotFound() {
  return (
    <div className="notFound">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/dashboard" className="btn">
        Назад на главную
      </Link>
    </div>
  )
}
