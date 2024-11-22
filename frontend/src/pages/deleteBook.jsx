import { useState } from "react";
import BackButton from "../components/back-button";
import Spinner from "../components/spinner";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();
  const handleDeleteBook = () => {
    console.log("deleted");
    setLoading(true);
    axios
      .delete(`http://localhost:5555/api/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />

      <h1 className="text-3xl my-4">Delete Book</h1>

      {loading ? <Spinner /> : ""}

      <div className="flex flex-col items-center justify-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto  ">
        <h3 className="text-2xl">
          {" "}
          Are you sure you want to delete this book ?
        </h3>

        <button
          className="p-4 bg-rose-400 rounded-md text-white font-semibold mt-4 w-full"
          onClick={handleDeleteBook}
        >
          Yes , Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
