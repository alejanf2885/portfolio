import { Code2, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
    return (
        <section className="bg-gradient-to-b from-[#1a1f35] via-gray-900 to-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-8 gap-12 md:gap-8">
            {/* Texto de presentación */}
            <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                    I'm <span className="text-fuchsia-500 drop-shadow-[0_0_10px_rgba(255,0,255,0.7)]">Alejandro</span>,<br />
                    <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]">a web developer</span>.
                </h1>
                <div className="flex justify-center md:justify-start gap-4 mt-6">
                    <a href="https://github.com/alejanf2885" target="_blank" rel="noopener noreferrer" 
                       className="p-2 rounded-lg bg-fuchsia-500/10 hover:bg-fuchsia-500/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(244,114,182,0.5)]">
                        <Github className="w-6 h-6 text-fuchsia-400" />
                    </a>
                    <a href="https://linkedin.com/in/alejanf" target="_blank" rel="noopener noreferrer"
                       className="p-2 rounded-lg bg-fuchsia-500/10 hover:bg-fuchsia-500/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(244,114,182,0.5)]">
                        <Linkedin className="w-6 h-6 text-fuchsia-400" />
                    </a>
                    <a href="mailto:alejanf07@gmail.com"
                       className="p-2 rounded-lg bg-fuchsia-500/10 hover:bg-fuchsia-500/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(244,114,182,0.5)]">
                        <Mail className="w-6 h-6 text-fuchsia-400" />
                    </a>
                </div>
            </div>

            {/* Cuadro de código con estilo neón */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-[#111827] to-[#1a1f35] border border-fuchsia-500/30 rounded-xl shadow-2xl p-4 md:p-6 font-mono text-xs md:text-sm w-full max-w-xl relative overflow-hidden backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                    <span className="text-gray-400 ml-2 text-xs font-medium tracking-wide">Developer.java</span>
                    <div className="ml-auto">
                        <Code2 className="w-4 h-4 text-fuchsia-400" />
                    </div>
                </div>
                <pre className="relative z-10 whitespace-pre-wrap leading-relaxed text-[#d8b4fe] drop-shadow-[0_0_10px_rgba(219, 39, 119, 0.7)] overflow-x-auto">
                    <code>
                        <span className="text-green-400">public class</span> <span className="text-blue-400">Developer</span> {'{\n'}
                        {'    '}<span className="text-green-400">private final String</span> name = <span className="text-purple-400">"Alejandro"</span>;{'\n'}
                        {'    '}<span className="text-green-400">private final String</span> role = <span className="text-purple-400">"Full Stack Developer"</span>;{'\n'}
                        {'    '}<span className="text-green-400">private final String[]</span> skills = {'{\n'}
                        {'        '}<span className="text-yellow-300">"Java"</span>, <span className="text-yellow-300">"Spring"</span>, <span className="text-yellow-300">"React"</span>,{'\n'}
                        {'        '}<span className="text-yellow-300">"TypeScript"</span>, <span className="text-yellow-300">"Tailwind"</span>{'\n'}
                        {'    '};{'\n\n'}
                        {'    '}<span className="text-green-400">public</span> Developer() {'{\n'}
                        {'        '}System.out.println(<span className="text-purple-400">"👋 " + name + " | " + role</span>);{'\n'}
                        {'    }'}{'\n'}
                        {'}'}
                    </code>
                </pre>
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-cyan-500/5 pointer-events-none"></div>
            </div>
        </section>
    );
}
