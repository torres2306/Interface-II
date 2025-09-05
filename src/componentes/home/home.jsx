import { useState, useEffect } from "react";
import home from "../../assets/home.jpg";
import Formulario from "../formulario/formulario";
import ModalLibro from "./ModalLibro"; //importa el modal

function Home() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null); // 👈 para el modal

  // 👉 Cargar libros desde la API
  useEffect(() => {
    fetch("http://localhost:4000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error cargando libros:", err));
  }, []);

  // Agregar libro
  const handleAddBook = async (newBook) => {
    const bookWithId = {
      ...newBook,
      img: newBook.image
        ? URL.createObjectURL(newBook.image)
        : "https://via.placeholder.com/150x200",
      desc: "Libro añadido por el usuario.",
    };

    try {
      const res = await fetch("http://localhost:4000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookWithId),
      });
      const savedBook = await res.json();
      setBooks([savedBook, ...books]);
    } catch (error) {
      console.error("Error agregando libro:", error);
    }
  };

  // Editar libro
  const handleEditBook = async (id, updatedBook) => {
    const bookToUpdate = {
      ...updatedBook,
      img: updatedBook.image
        ? URL.createObjectURL(updatedBook.image)
        : books.find((b) => b.id === id).img,
    };

    try {
      await fetch(`http://localhost:4000/books/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookToUpdate),
      });

      setBooks((prevBooks) =>
        prevBooks.map((book) => (book.id === id ? { id, ...bookToUpdate } : book))
      );
      setEditingBook(null);
    } catch (error) {
      console.error("Error editando libro:", error);
    }
  };

  // Eliminar libro
  const handleDeleteBook = async (id) => {
    if (!confirm("¿Seguro que quieres eliminar este libro? 📕❌")) return;

    try {
      await fetch(`http://localhost:4000/books/${id}`, {
        method: "DELETE",
      });
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    } catch (error) {
      console.error("Error eliminando libro:", error);
    }
  };

  return (
    <>
      {/* Lista de libros */}
      <section className="bg-[#faf9ee] py-16 px-6">
        <div className="max-w-6xl mx-auto">
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

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => setEditingBook(book)}
                    className="px-4 py-1 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDeleteBook(book.id)}
                    className="px-4 py-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
                  >
                    Eliminar
                  </button>
                  <button
                    onClick={() => setSelectedBook(book)} // 👈 abre modal
                    className="px-4 py-1 rounded-full bg-[#778272] text-white hover:bg-[#5e6659] transition"
                  >
                    Ver
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario con soporte para edición */}
      <Formulario
        onAddBook={handleAddBook}
        onEditBook={handleEditBook}
        editingBook={editingBook}
        onCancelEdit={() => setEditingBook(null)}
      />

      {/* Modal para ver detalles */}
      <ModalLibro book={selectedBook} onClose={() => setSelectedBook(null)} />
    </>
  );
}

export default Home;
