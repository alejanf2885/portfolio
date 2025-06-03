import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-[#111827] to-[#1a1f35] border-b border-fuchsia-500/30 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(244,114,182,0.5)] hover:shadow-[0_0_20px_rgba(244,114,182,0.7)] transition-all duration-300">
                        <span className="text-white text-xl font-bold">A</span>
                    </div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(244,114,182,0.7)]">
                        My Portfolio
                    </h1>
                </div>

                {/* Botón de menú móvil */}
                <button 
                    className="md:hidden p-2 text-gray-300 hover:text-fuchsia-400 transition-all duration-300"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Navegación */}
                <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto bg-[#111827] md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:items-center md:space-x-8`}>
                    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                        <li>
                            <a href="#about" className="text-gray-300 hover:text-fuchsia-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.7)] relative group">
                                About
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="text-gray-300 hover:text-fuchsia-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.7)] relative group">
                                Projects
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-gray-300 hover:text-fuchsia-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.7)] relative group">
                                Contact
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    </ul>
                    <div className="flex items-center space-x-4 md:space-x-6">
                        <a 
                            href="/cv.pdf" 
                            download
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white font-medium hover:shadow-[0_0_15px_rgba(244,114,182,0.5)] transition-all duration-300 flex items-center space-x-2 group"
                        >
                            <span>Download CV</span>
                            <Download className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-300" />
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}