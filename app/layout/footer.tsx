export default function Footer() {
    return (
        <footer className="bg-fuchsia-900-800 text-white p-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
                <p className="text-xs">Built with love using React and Tailwind CSS.</p>
            </div>
        </footer>
    );
}