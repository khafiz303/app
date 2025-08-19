import axios from "axios";

function CreatePost() {
  const sendData = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: "Мой пост",
          body: "Содержимое поста",
          userId: 1,
        }
      );
      console.log("Ответ от сервера:", response.data);
    } catch (error) {
      console.error("Ошибка при отправке:", error.message);
    }
  };

  return <button onClick={sendData}>Отправить пост</button>;
}

export default CreatePost;
