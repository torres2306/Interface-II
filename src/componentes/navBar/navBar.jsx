import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="bg-[#778272] shadow-md fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center px-6 py-3">
          <div className="flex items-center gap-2">
            <img src={logo} className=" w-[50px] h-[50px]" />
            <span className="text-2xl font-[Poppins] italic font-extralight text-[#faf9ee]">
              Biblioteca virtual
            </span>
          </div>

          {/* Botones */}
          <div className="hidden font-[Poppins] md:flex gap-3">
            <button className="px-4 py-1 rounded-full bg-[#dccfc0] border border-[#dccfc0] text-[#778272] hover:bg-[#d0c4b6]">
              Ingrese
            </button>
            <button className="px-4 py-1 rounded-full border border-[#dccfc0] text-[#dccfc0] hover:bg-[#dccfc0] hover:text-[#778272]">
              Registro
            </button>
          </div>

          {/* Botón menú móvil */}
          <button
            className="md:hidden text-[#dccfc0]"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        {open && (
          <div className="md:hidden font-[Poppins] bg-[#dccfc0] px-6 py-4 space-y-4">
            
            <div className="flex gap-3">
              <button className="flex-1 px-4 py-1 rounded-full bg-[#778272] border border-[#778272] text-[#dccfc0] hover:bg-[#677063]">
                Ingrese
              </button>
              <button className="flex-1 px-4 py-1 rounded-full border border-[#778272] text-[#778272] hover:bg-[#778272] hover:text-[#dccfc0]">
                Registro
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default NavBar;
