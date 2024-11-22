import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/spinner";

import { PlusSquare } from "lucide-react";
import { useEffect, useState } from "react";
import BooksCard from "../components/home/booksCard";
import BooksTable from "../components/home/booksTable";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    // setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5555/api/books");
        const data = await response.data.data;
        setBooks(data);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };

    // axios
    //   .get("http://localhost:5555/api/books")
    //   .then((response) => {
    //     setBooks(response.data.data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setLoading(false);
    //   });

    fetchData();
  }, []);

  return (
    <div className="p-4 ">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>

      <div className="flex justify-center items-center gap-[10px] ">
        <h1 className="text-3xl my-8">Book list</h1>

        <Link to={"/books/create"}>
          <PlusSquare className="text-sky-800 text-4xl" />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
