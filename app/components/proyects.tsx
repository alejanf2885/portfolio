import { ProjectCard } from './cards/proyects-cards';

export default function Proyects() {
    const projects = [
        {
            title: "TITANAZO LUISMI",
            description: "Freelance web development project for a personal trainer and professional bodybuilder. The platform offers personalized training services, diet plans, and online tracking, with a design focused on usability and direct client communication to facilitate physical transformation and achievement of sports goals.",
            image: "/proyect1.png",
            technologies: ["React", "React Router", "Tailwind", "TypeScript"],
            githubUrl: "",
            demoUrl: "https://www.titanazoibffpro-luismi.com/"
        },
        {
            title: "Project 2",
            description: "Detailed description of the project and the technologies used in its development.",
            image: "/project2.jpg",
            technologies: ["Next.js", "Node.js", "MongoDB"],
            githubUrl: "#",
            demoUrl: "#"
        },
        {
            title: "Project 3",
            description: "Detailed description of the project and the technologies used in its development.",
            image: "/project3.jpg",
            technologies: ["React", "Firebase", "Tailwind"],
            githubUrl: "#",
            demoUrl: "#"
        }
    ];

    return (
        <section id="projects" className="relative bg-gradient-to-br from-black to-gray-900 text-white">

            {/* Banner con imagen de Adán */}
            <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
                <div className="absolute inset-0">
                    <img
                        src="/Creacion-of-adan.webp"
                        alt="Background"
                        className="w-full h-full object-cover object-[center_30%] sm:object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40"></div>
                </div>
                <div className="relative h-full flex items-center justify-center px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-center">
                        My <span className="text-fuchsia-500 drop-shadow-[0_0_10px_rgba(255,0,255,0.7)]">Projects</span>
                    </h2>
                </div>
            </div>

            {/* Grid de proyectos */}
            <div className="container mx-auto  px-4 sm:px-6 py-12 sm:py-16 md:py-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`${projects.length % 2 === 1 && index === projects.length - 1
                                    ? 'sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto'
                                    : ''
                                }`}
                        >
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}