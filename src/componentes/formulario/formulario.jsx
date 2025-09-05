import { useState, useEffect } from "react";
import formulario from "../../assets/formulario.jpg";

function Formulario({ onAddBook, onEditBook, editingBook, onCancelEdit }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    date: "",
    image: null,
  });

  //  Cuando editingBook cambia, cargamos sus datos en el formulario
  useEffect(() => {
    if (editingBook) {
      setFormData({
        title: editingBook.title,
        author: editingBook.author,
        category: editingBook.category,
        date: editingBook.date,
        image: null, // no cargamos la imagen original
      });
    }
  }, [editingBook]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingBook) {
      // Editamos libro existente
      onEditBook(editingBook.id, formData);
      alert("Libro editado correctamente ✏️");
    } else {
      // Agregamos nuevo libro
      onAddBook(formData);
      alert("Libro agregado correctamente 📚");
    }

    // Limpiar formulario
    setFormData({
      title: "",
      author: "",
      category: "",
      date: "",
      image: null,
    });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-6"
      style={{ backgroundImage: `url(${formulario})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <h2 className="col-span-2 text-3xl font-bold text-white mb-4">
          {editingBook ? "Editar Libro" : "Agregar Libro"}
        </h2>

        {/* Campos */}
        <div>
          <label className="block text-white mb-1">Título</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Ingrese el nombre del libro..."
            className="w-full px-4 py-2 rounded-full bg-white/80 text-gray-800 outline-none focus:ring-2 focus:ring-[#778272]"
          />
        </div>

        <div>
          <label className="block text-white mb-1">Autor</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Ingrese el nombre del autor..."
            className="w-full px-4 py-2 rounded-full bg-white/80 text-gray-800 outline-none focus:ring-2 focus:ring-[#778272]"
          />
        </div>

        <div>
          <label className="block text-white mb-1">Categoría</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Ingrese la categoría..."
            className="w-full px-4 py-2 rounded-full bg-white/80 text-gray-800 outline-none focus:ring-2 focus:ring-[#778272]"
          />
        </div>

        <div>
          <label className="block text-white mb-1">Fecha de publicación</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-full bg-white/80 text-gray-800 outline-none focus:ring-2 focus:ring-[#778272]"
          />
        </div>

        {/* Imagen */}
        <div className="col-span-2">
          <label className="block text-white mb-2">Imagen del libro</label>
          <div className="w-full border-2 border-dashed border-white/70 rounded-xl p-6 text-center bg-white/10">
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
              id="fileUpload"
            />
            <label
              htmlFor="fileUpload"
              className="cursor-pointer text-white hover:underline"
            >
              Arrastra o importa tu archivo de imagen aquí
            </label>
            {formData.image && (
              <p className="mt-2 text-sm text-white">
                Archivo seleccionado: {formData.image.name}
              </p>
            )}
          </div>
        </div>

        {/* Botones */}
        <div className="col-span-2 flex justify-end gap-4 mt-4">
          {editingBook && (
            <button
              type="button"
              onClick={onCancelEdit}
              className="px-6 py-2 rounded-full bg-red-400 text-white hover:bg-red-500 transition"
            >
              Cancelar edición
            </button>
          )}
          <button
            type="submit"
            className="px-6 py-2 rounded-full  border border-[#dccfc0] text-[#dccfc0] hover:bg-[#dccfc0] hover:text-[#778272] transition"
          >
            {editingBook ? "Actualizar" : "Guardar"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
