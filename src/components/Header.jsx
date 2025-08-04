import SearchBar from "./SearchBar";
import Image from "next/image";

export default function Header({ onSearch, cartCount, favCount = 0, onCartClick, onFavoritesClick }) {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="w-full flex items-center justify-between px-4 sm:px-6 py-3 gap-4">
        
        {/* Logo */}
        <div className="flex items-center h-12 cursor-pointer">  
          <Image 
            src="/logo.png" 
            alt="CatalogoPlus Logo" 
            width={120} 
            height={120} 
            className="w-28 sm:w-36 object-contain transition-transform duration-300 hover:scale-105 drop-shadow-md"
          />
        </div>

        {/* Barra de busca - escondida no mobile */}
        <div className="hidden md:flex flex-1 max-w-lg">
          <SearchBar onSearch={onSearch} />
        </div>

        {/* Ações */}
        <div className="flex items-center gap-4 text-gray-700">
          
          {/* Favoritos */}
          <div
            onClick={onFavoritesClick}
            className="relative cursor-pointer text-gray-700 hover:text-pink-600 transition-all duration-300 hover:scale-110"
            role="button"
            tabIndex={0}
            aria-label="Abrir favoritos"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
              viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
              className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" 
                d="M21 8.25c0-2.485-2.239-4.5-5-4.5-1.676 0-3.13.814-4 
                   2.09A5.002 5.002 0 003 8.25c0 7.25 9 12.75 9 12.75s9-5.5 
                   9-12.75z" />
            </svg>
            {favCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-md animate-bounce">
                {favCount}
              </span>
            )}
          </div>

          {/* Carrinho */}
          <div
            onClick={onCartClick}
            className="relative cursor-pointer hover:text-blue-600 transition-all duration-300 hover:scale-110"
            role="button"
            tabIndex={0}
            aria-label="Abrir carrinho"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
              viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
              className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" 
                d="M2.25 2.25h1.5l1.5 12h12l1.5-9h-15M16.5 
                   18.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-6.75 
                   0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-md animate-bounce">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Barra de busca extra - aparece só no mobile */}
      <div className="md:hidden px-4 pb-3">
        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
}
