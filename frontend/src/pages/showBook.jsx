import { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/back-button";
import Spinner from "../components/spinner";

const ShowBook = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getBook = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:5555/api/books/${id}`);
        const data = await res.data;
        console.log(data);

        setBook(data);
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    getBook();
  }, [id]);
  return (
    <div className="p-4">
      <BackButton />

      <h1 className="text-3xl my-4">Show book</h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex justify-center items-center ">
          <div className="flex justify-center items-center flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">ID</span>
              <span>{book._id}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Title</span>
              <span>{book.title}</span>
            </div>

            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Author</span>
              <span>{book.author}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Publish year</span>
              <span>{book.publishYear}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Create time</span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Update time</span>
              <span>{new Date(book.updateAt).toString()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
