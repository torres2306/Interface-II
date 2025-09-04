import { useState } from "react";
import formulario from "../../assets/formulario.jpg";

function Formulario() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    date: "",
    image: null,
  });

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
    console.log("Datos enviados:", formData);
    alert("Libro agregado correctamente 📚");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-6"
      style={{ backgroundImage: `url(${formulario})` }} // Pon tu imagen en /public
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Encabezado */}
        <h2 className="col-span-2 text-3xl font-bold text-white mb-4">
          Agregar Libro
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

        {/* Subida de imagen */}
        <div className="col-span-2">
          <label className="block text-white mb-2">
            Imagen del libro
          </label>
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
          <button
            type="button"
            onClick={() =>
              setFormData({ title: "", author: "", category: "", date: "", image: null })
            }
            className="px-6 py-2 rounded-full bg-[#dccfc0] text-[#778272] hover:bg-[#d0c4b6] transition"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-full  border border-[#dccfc0] text-[#dccfc0] hover:bg-[#dccfc0] hover:text-[#778272] transition"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
