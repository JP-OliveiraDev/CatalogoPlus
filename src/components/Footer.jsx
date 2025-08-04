export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-gray-600">
        
        {/* Texto */}
        <p className="text-sm">&copy; {new Date().getFullYear()} CatálogoPlus. Todos os direitos reservados.</p>

        {/* Links */}
        <div className="flex gap-5 mt-4 md:mt-0">
          <a href="https://github.com/JP-OliveiraDev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.85 10.95c.57.1.78-.25.78-.55v-2c-3.19.7-3.87-1.38-3.87-1.38a3.05 3.05 0 0 0-1.27-1.67c-1.04-.7.08-.68.08-.68a2.43 2.43 0 0 1 1.77 1.2 2.47 2.47 0 0 0 3.38 1 2.47 2.47 0 0 1 .73-1.54c-2.55-.3-5.22-1.28-5.22-5.72a4.49 4.49 0 0 1 1.2-3.12 4.2 4.2 0 0 1 .12-3.08s.96-.3 3.15 1.18a10.8 10.8 0 0 1 5.75 0c2.19-1.48 3.15-1.18 3.15-1.18a4.2 4.2 0 0 1 .12 3.08 4.5 4.5 0 0 1 1.2 3.12c0 4.46-2.67 5.41-5.22 5.72a2.77 2.77 0 0 1 .79 2.15v3.18c0 .3.21.65.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-oliveira-carvalho/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5a2.5 2.5 0 1 1-5.001.001A2.5 2.5 0 0 1 4.98 3.5zM.25 24h4.5V7.98h-4.5V24zm7.75-16.02V24h4.5v-8.21c0-2.22.91-3.79 2.94-3.79 1.58 0 2.56 1.06 2.56 3.71V24h4.5v-9.14c0-4.94-2.63-7.23-6.14-7.23-2.83 0-4.07 1.55-4.76 2.64v-2.21h-4.5z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}