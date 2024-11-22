/* eslint-disable react/prop-types */
import { BookOpen, InfoIcon, PenLine, Trash2, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BookSingleCard = ({ book }) => {
  return (
    <div
      key={book._id}
      className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg ">
        {book.publisherYear}
      </h2>

      <h4 className="my-2 text-gray-500">{book._id}</h4>

      <div className="flex justify-start books-center gap-x-2">
        <BookOpen className="text-red-300 text-2xl" />
        <h2 className="my-1 font-medium">{book.title}</h2>
      </div>
      <div className="flex justify-start books-center gap-x-2">
        <UserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1 font-medium">{book.author}</h2>
      </div>

      <div className="flex justify-between books-center gap-x-2 mt-4 p-4">
        <Link to={`/books/details/${book._id}`}>
          <InfoIcon className="text-2xl text-green-700 hover:text-black" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <PenLine className="text-2xl text-yellow-500 hover:text-black" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <Trash2 className="text-2xl text-rose-500 hover:text-black" />
        </Link>
      </div>
    </div>
  );
};

export default BookSingleCard;
