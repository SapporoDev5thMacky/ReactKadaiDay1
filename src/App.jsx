import { useEffect, useRef, useState } from "react";
import "./App.css";
import ImageGrallery from "./ImageGrallery";

const API_KEY = "33866833-1bb8c0f1d7f3c41b2641435bc";

function App() {
  const [inputText, setInputText] = useState("");
  const [fetchData, setFetchData] = useState([]);

  const ref = useRef();
  const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + `apple`;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(ref.current.value);
    const searchURL =
      "https://pixabay.com/api/?key=" + API_KEY + "&q=" + ref.current.value;

    
    fetch(searchURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchData(data.hits);
      });
  };

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.hits); 
        setFetchData(data.hits);
      });
  }, []);



  return (
    <div>
      <div className="container">
        <h2>画像検索</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="検索ワードを入力" ref={ref} />
        </form>
        <ImageGrallery fetchData={fetchData} />
      </div>
    </div>
  );
}

export default App;