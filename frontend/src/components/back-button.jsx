/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function BackButton({ destination = "/" }) {
  return (
    <div className="flex">
      <Link to={destination}>
        <ArrowLeft className="bg-sky-500 text-white px-4 py-1 rounded-lg w-fit" />
      </Link>
    </div>
  );
}

export default BackButton;
