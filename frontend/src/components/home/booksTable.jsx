/* eslint-disable react/prop-types */
import { InfoIcon, PenLine, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Title</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Author
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Publisher year
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Operations
          </th>
        </tr>
      </thead>

      <tbody>
        {books.map((book, index) => {
          console.log(books);

          return (
            <tr key={book._id} className="h-8">
              <td className="border border-slate-700 rounded-md text-center">
                {index + 1}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {book.title}
              </td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {book.author}
              </td>

              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {book.publisherYear}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/books/details/${book._id}`}>
                    <InfoIcon className="text-2xl text-green-800" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <PenLine className="text-2xl text-yellow-600" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <Trash2 className="text-2xl text-rose-600" />
                  </Link>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BooksTable;
