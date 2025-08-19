import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);   // данные с сервера
  const [loading, setLoading] = useState(true); // индикатор загрузки
  const [error, setError] = useState(null); // ошибка

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1") // пример API
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <h1>Данные с API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
