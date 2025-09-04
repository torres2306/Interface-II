import home from "../../assets/home.jpg";
import Formulario from "../formulario/formulario";

function Home() {
  const books = [
    {
      id: 1,
      title: "Título",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      img: "https://via.placeholder.com/150x200",
    },
    {
      id: 2,
      title: "Título",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      img: "https://via.placeholder.com/150x200",
    },
    {
      id: 3,
      title: "Título",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      img: "https://via.placeholder.com/150x200",
    },
    {
      id: 4,
      title: "Título",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      img: "https://via.placeholder.com/150x200",
    },
    {
      id: 5,
      title: "Título",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      img: "https://via.placeholder.com/150x200",
    },
    {
      id: 6,
      title: "Título",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      img: "https://via.placeholder.com/150x200",
    },
  ];
  return (
    <>
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${home})` }}
      >
        <h1 className="text-[109px] font-[Parisienne] mb-4 text-[#faf9ee] drop-shadow-lg">
          Cada página es una puerta
        </h1>
        <p className="text-[66.3px] text-center font-[libertinus] max-w-xl text-[#faf9ee] drop-shadow-md">
          a un nuevo universo.
        </p>
      </div>
      <section className="bg-[#faf9ee] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-[50px] font-[Parisienne] text-[#778272] underline">
              Libros
            </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                className="px-4 py-2 border border-[#778272] rounded-full focus:outline-none focus:ring-2 focus:ring-[#778272]"
              />
              <span className="absolute right-4 top-2 text-gray-500">🔍</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-2xl shadow-sm p-5 flex flex-col"
              >
                <img
                  src={book.img}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold text-[#333] mb-2">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 flex-1">{book.desc}</p>
                <button className="mt-4 self-start px-4 py-1 rounded-full bg-[#778272] text-white hover:bg-[#5e6659] transition">
                  Ver
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Formulario />
    </>
  );
}

export default Home;
