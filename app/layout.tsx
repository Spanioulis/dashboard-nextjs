import './ui/global.css';
import { montserrat, oswald, playfair, raleway, sourceSans } from './ui/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${sourceSans.className} antialiased`}>
                <header className="flex p-10">
                    <h1 className="text-2xl text-gray-800">Spanioulis</h1>
                </header>
                {children}
                <footer className="flex justify-center p-10">Footer creado por Sapnioulis 🧩</footer>
            </body>
        </html>
    );
}
