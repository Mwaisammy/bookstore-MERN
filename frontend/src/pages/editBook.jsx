import axios from "axios";
import { useEffect, useState } from "react";
import BackButton from "../components/back-button";
import Spinner from "../components/spinner";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisherYear, setPublisherYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const editBook = async () => {
      setLoading(true);

      try {
        const res = await axios.get(`http://localhost:5555/api/books/${id}`);
        const data = res.data;

        setAuthor(data.author);
        setPublisherYear(data.publisherYear);
        setTitle(data.title);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert("An error happened, Check your console");
        console.log(error);
      }
    };

    // axios
    //   .get(`http://localhost:5555/api/books/${id}`)
    //   .then((response) => {
    //     setAuthor(response.data.author);
    //     setPublisherYear(response.data.publisherYear);
    //     setTitle(response.data.title);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     alert("An error happened, Check your console");
    //     console.log(error);
    //   });

    editBook();
  }, []);

  // setLoading(true);

  const handleEditBook = () => {
    try {
      const bookData = {
        title,
        author,
        publisherYear,
      };

      // setLoading(true);
      axios.put(`http://localhost:5555/api/books/${id}`, bookData).then(() => {
        setLoading(false);
        navigate("/");
      });
    } catch (error) {
      setLoading(false);
      alert("An error happened. Please check the console");
      console.log(error);
    }
  };

  // handleSaveBook();

  return (
    <div className="p-4">
      <BackButton />

      <h1 className="text-3xl my-4">Edit Book</h1>

      {loading ? <Spinner /> : ""}

      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto ">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>

          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>

          <input
            type="number"
            value={publisherYear}
            onChange={(e) => setPublisherYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <button
          className="text-center text-white p-2 rounded-md bg-blue-500"
          onClick={handleEditBook}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default EditBook;
