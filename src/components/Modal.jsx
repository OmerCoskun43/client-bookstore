/* eslint-disable react/prop-types */

const Modal = ({
  showModal,
  setShowModal,
  createBooks,
  setData,
  data,
  updateBooks,
}) => {
  let yillar = [];
  for (let i = 2024; i >= 1800; i--) {
    yillar.push(i);
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data._id) {
      createBooks(data);
      setData({
        kitapAd: "",
        yayinlanmaYili: "",
        yazarAd: "",
        tur: "",
        ISBN: "",
        kapakResmi: "",
      });
    } else {
      updateBooks(data);
      setData({
        kitapAd: "",
        yayinlanmaYili: "",
        yazarAd: "",
        tur: "",
        ISBN: "",
        kapakResmi: "",
      });
    }

    setShowModal(!showModal);
    // setData({
    //   kitapAd: "",
    //   yayinlanmaYili: "",
    //   yazarAd: "",
    //   tur: "",
    //   ISBN: "",
    //   kapakResmi: "",
    // });
  };

  return (
    <div className="fixed top-[25%] left-[19%] w-[250px] h-[350px] opacity-100  sm:top-[15%] sm:left-[35%] sm:w-[420px] sm:h-[720px] ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white gap-1 p-3  rounded-xl"
      >
        <label htmlFor="kitapAd">Kitap Adı:</label>
        <input
          className="border-2 border-1px border-gray-500"
          type="text"
          id="kitapAd"
          name="kitapAd"
          required
          onChange={handleChange}
          value={data?.kitapAd}
        />
        <label htmlFor="yazarAd">Yazar Adı:</label>
        <input
          className="border-2 border-1px border-gray-500"
          type="text"
          id="yazarAd"
          name="yazarAd"
          required
          onChange={handleChange}
          value={data?.yazarAd}
        />
        <label htmlFor="ISBN">ISBN:</label>
        <input
          className="border-2 border-1px border-gray-500"
          type="number"
          id="ISBN"
          name="ISBN"
          required
          onChange={handleChange}
          value={data?.ISBN}
        />
        <label htmlFor="yayinlanmaYili">Yayınlanma Yılı</label>
        <select
          className="border-2 border-1px border-gray-500 py-1"
          id="yayinlanmaYili"
          name="yayinlanmaYili"
          required
          onChange={handleChange}
          value={data?.yayinlanmaYili}
        >
          {yillar?.map((yil, index) => (
            <option key={index} value={yil}>
              {yil}
            </option>
          ))}
        </select>

        <label htmlFor="tur">Tür:</label>
        <input
          className="border-2 border-1px border-gray-500"
          type="text"
          id="tur"
          name="tur"
          required
          onChange={handleChange}
          value={data?.tur}
        />
        <label htmlFor="kapakResmi">Kapak Resmi:</label>
        <input
          className="border-2 border-1px border-gray-500"
          type="text"
          id="kapakResmi"
          name="kapakResmi"
          required
          onChange={handleChange}
          value={data?.kapakResmi}
        />

        <button
          className="bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-3 mt-2 rounded"
          type="submit"
        >
          {data?._id ? "Update Book" : "Add Book"}
        </button>
        <button
          className="bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-3 mt-2 rounded"
          onClick={() => {
            setShowModal(!showModal);
            setData({
              kitapAd: "",
              yayinlanmaYili: "",
              yazarAd: "",
              tur: "",
              ISBN: "",
              kapakResmi: "",
            });
          }}
        >
          Close Modal
        </button>
      </form>
    </div>
  );
};

export default Modal;
