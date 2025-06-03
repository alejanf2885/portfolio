import { ExternalLink, Github, ChevronDown, X } from 'lucide-react';
import { useState } from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl: string;
    demoUrl: string;
}

const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};

export function ProjectCard({ title, description, image, technologies, githubUrl, demoUrl }: ProjectCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showMoreButton = technologies.length > 3;

    return (
        <>
            <div className="group relative bg-gradient-to-br from-[#111827] to-[#1a1f35] rounded-xl overflow-hidden border border-fuchsia-500/30 hover:border-fuchsia-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,255,0.1)]">
                <div className="aspect-video relative overflow-hidden">
                    <img 
                        src={image} 
                        alt={title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-4">
                            <a 
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-fuchsia-500/20 hover:bg-fuchsia-500/30 text-fuchsia-400 transition-all duration-300 hover:scale-110"
                            >
                                <Github size={24} />
                            </a>
                            <a 
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-fuchsia-500/20 hover:bg-fuchsia-500/30 text-fuchsia-400 transition-all duration-300 hover:scale-110"
                            >
                                <ExternalLink size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="p-6 space-y-4">
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-fuchsia-400 transition-colors duration-300">{title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{truncateText(description, 100)}</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                            {technologies.slice(0, 3).map((tech, index) => (
                                <span 
                                    key={index}
                                    className="px-3 py-1 text-xs rounded-full bg-fuchsia-500/10 text-fuchsia-400"
                                >
                                    {tech}
                                </span>
                            ))}
                            {showMoreButton && (
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="group/btn flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-full bg-fuchsia-500/20 text-fuchsia-400 hover:bg-fuchsia-500/30 transition-all duration-300 border border-fuchsia-500/30 hover:border-fuchsia-500/50 hover:shadow-[0_0_15px_rgba(255,0,255,0.2)]"
                                >
                                    <span>Ver más</span>
                                    <ChevronDown size={14} className="transition-transform duration-300 group-hover/btn:translate-y-0.5" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div 
                className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ease-in-out ${
                    isModalOpen 
                    ? 'opacity-100 pointer-events-auto' 
                    : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsModalOpen(false)}
            >
                <div 
                    className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
                        isModalOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                />
                <div 
                    className={`relative bg-gradient-to-br from-[#111827]/95 to-[#1a1f35]/95 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-fuchsia-500/20 shadow-[0_0_50px_rgba(255,0,255,0.1)] transform transition-all duration-500 ease-in-out ${
                        isModalOpen 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                    onClick={e => e.stopPropagation()}
                >
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-4 right-4 p-2 rounded-full bg-fuchsia-500/20 text-fuchsia-400 hover:bg-fuchsia-500/30 transition-all duration-300 hover:scale-110"
                    >
                        <X size={20} />
                    </button>
                    <div className="p-8 space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-white">{title}</h3>
                            <p className="text-gray-300 leading-relaxed text-lg">{description}</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-white">Tecnologías Utilizadas</h4>
                            <div className="flex flex-wrap gap-2">
                                {technologies.map((tech, index) => (
                                    <span 
                                        key={index}
                                        className="px-4 py-2 text-sm rounded-full bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20 hover:bg-fuchsia-500/20 transition-all duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <a 
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-fuchsia-500/20 hover:bg-fuchsia-500/30 text-fuchsia-400 transition-all duration-300 border border-fuchsia-500/20 hover:scale-105"
                            >
                                <Github size={20} />
                                <span>Ver Código</span>
                            </a>
                            <a 
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-fuchsia-500/20 hover:bg-fuchsia-500/30 text-fuchsia-400 transition-all duration-300 border border-fuchsia-500/20 hover:scale-105"
                            >
                                <ExternalLink size={20} />
                                <span>Ver Demo</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 