import './ui/global.css';
import { montserrat, oswald, playfair, raleway, sourceSans } from './ui/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${raleway.className} antialiased`}>
                <header className="flex p-10 bg-blue-400 text-gray-100">
                    <h1 className="text-2xl">Header</h1>
                </header>
                {children}
                <footer className="flex justify-center p-10 bg-blue-400">Footer creado por Spanioulis 🧩</footer>
            </body>
        </html>
    );
}
