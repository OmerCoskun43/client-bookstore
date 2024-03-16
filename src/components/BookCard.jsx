/* eslint-disable react/prop-types */
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const BookCard = ({ book, getBooks, setShowModal, showModal, setData }) => {
  const URL = import.meta.env.VITE_URL;

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${URL}${id}`);
      getBooks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (book) => {
    console.log("book ==>", book);
    setData(book);
    setShowModal(!showModal);
  };
  return (
    <div
      className="bg-blue-200 w-[300px] h-[480px]  sm:w-[380px] sm:h-[500px] py-3 pe-[1rem] ps-[1rem] rounded-xl  
            shadow-2xl 
         flex flex-col justify-center items-center gap-1  
            "
      key={book?._id}
    >
      <h1 className="font-bold text-xl sm:text-2xl   text-blue-800 hover:text-red-500 cursor-pointer">
        {book?.kitapAd}
      </h1>
      <p>
        {" "}
        ISBN: <span className="font-bold text-red-500 ps-1">
          {book?.ISBN}
        </span>{" "}
      </p>
      <p>
        Yayınlanma Yılı
        <span className="font-bold text-red-500 ps-1">
          {book?.yayinlanmaYili}
        </span>{" "}
      </p>
      <p>
        {" "}
        Türü: <span className="font-bold text-red-500 ps-1">
          {book?.tur}
        </span>{" "}
      </p>
      <img
        className="w-[200px] block imgShadow h-[250px] sm:w-[240px] sm:h-[260px] rounded-xl object-fill"
        src={book?.kapakResmi}
        alt=""
      />
      <p className="pt-[1rem]">
        {" "}
        Yazar:
        <span className="font-bold  text-red-500 ps-1">
          {book?.yazarAd}{" "}
        </span>{" "}
      </p>
      <div className="flex flex-row gap-4 text-blue-800 text-xl cursor-pointer justify-center mt-3">
        <MdEdit
          onClick={() => handleEdit(book)}
          className=" hover:text-red-500"
        />
        <MdDeleteOutline
          onClick={() => handleDelete(book?._id)}
          className=" hover:text-red-500"
        />
      </div>
    </div>
  );
};

export default BookCard;
