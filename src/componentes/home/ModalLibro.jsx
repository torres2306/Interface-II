import { X } from "lucide-react";

function ModalLibro({ book, onClose }) {
  if (!book) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-lg relative">
        {/* Botón cerrar */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* Imagen */}
        <img
          src={book.img}
          alt={book.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />

        {/* Información */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {book.title}
        </h2>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Autor:</span> {book.author}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Categoría:</span> {book.category}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Fecha de publicación:</span>{" "}
          {book.date}
        </p>
        <p className="text-gray-700 mt-3">{book.desc}</p>
      </div>
    </div>
  );
}

export default ModalLibro;
