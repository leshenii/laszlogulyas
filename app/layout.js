import "./globals.css";
import 'animate.css';

export const metadata = {
    title: "Gulyás László",
    description: "webfejlesztő",
    icons: {
        icon: "/favicon.svg",
        shortcut: "/favicon.svg",
        apple: "/favicon.svg",
    },
};

export default function RootLayout({children}) {



    return (
        <html lang="en">
        <body className="kanit-medium">
        <main>
            {children}
        </main>
        </body>
        </html>
    );
}
