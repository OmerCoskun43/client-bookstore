/* eslint-disable react/prop-types */

import BookCard from "./BookCard";

const BookList = ({ books, getBooks, setShowModal, showModal, setData }) => {
  return (
    <div className=" sm:w-9/10 mt-5  mx-auto flex flex-col sm:flex-row  flex-wrap items-center justify-center gap-x-2 gap-y-14 sm:gap-8">
      {books.map((book) => (
        <BookCard
          key={book._id}
          book={book}
          getBooks={getBooks}
          setShowModal={setShowModal}
          showModal={showModal}
          setData={setData}
        />
      ))}
    </div>
  );
};

export default BookList;
