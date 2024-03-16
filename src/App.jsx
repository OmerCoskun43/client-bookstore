/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import BookList from "./components/BookList";
import Modal from "./components/Modal";

function App() {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const URL = import.meta.env.VITE_URL;

  const getBooks = async () => {
    try {
      const response = await axios.get(`${URL}`);
      console.log(response);

      setBooks(response.data.books);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  const createBooks = async (book) => {
    try {
      await axios.post(`${URL}`, book);
      getBooks();
    } catch (error) {
      console.log(error);
    }
  };

  const updateBooks = async (book) => {
    try {
      await axios.put(`${URL}${book._id}`, book);
      getBooks();
    } catch (error) {
      console.log(error);
    }
  };

  const [data, setData] = useState({
    kitapAd: "",
    yayinlanmaYili: "",
    yazarAd: "",
    tur: "",
    ISBN: "",
    kapakResmi: "",
  });

  return (
    <div
      // onClick={() => setShowModal(!showModal)}
      // className={showModal ? "bg-slate-300 opacity-50 py-10 " : "py-10"}
      className="py-5"
    >
      <h1 className="text-4xl font-bold underline text-center bg-gradient-to-r from-red-800 to-green-500 bg-clip-text text-transparent ">
        CSKN BOOKSTORE
      </h1>
      <div className="flex justify-end mx-10">
        <button
          onClick={() => setShowModal(!showModal)}
          className="bg-red-500 block  hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Add New Book
        </button>
        {showModal && (
          <Modal
            setShowModal={setShowModal}
            showModal={showModal}
            createBooks={createBooks}
            getBooks={getBooks}
            data={data}
            setData={setData}
            updateBooks={updateBooks}
          />
        )}
      </div>
      <BookList
        books={books}
        getBooks={getBooks}
        setShowModal={setShowModal}
        showModal={showModal}
        setData={setData}
      />
    </div>
  );
}

export default App;
