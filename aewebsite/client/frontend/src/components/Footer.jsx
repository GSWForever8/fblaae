import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gradient-to-br from-red-700 to-blue-700 mt-auto py-12 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center border-b border-golden/20 pb-8">
                    <div className="text-2xl font-bold hover:text-white transition-colors duration-300">DBHS FBLA American Enterprise</div>
                </div>
                <div className="grid md:grid-cols-3 gap-12 mt-12">
                    <div>
                        <h3 className="font-bold text-white mb-6">Links</h3>
                        <ul className="space-y-2">
                            {[
                                { to: "/about", text: "About Us" },
                                { to: "/contact", text: "Contact" },
                                { to: "/gallery", text:"Gallery"},
                            ].map(({ to, text }) => (
                                <li key={to}>
                                    <Link 
                                        to={to} 
                                        className="relative group inline-block transition-all duration-300 hover:translate-x-1"
                                    >
                                        <span className="relative z-10">{text}</span>
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-golden transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"/>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;