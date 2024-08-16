import "./globals.css";
import 'animate.css';

export const metadata = {
    title: {
        default: "Gulyás László webfejlesztő",
        template: "%s | Gulyás László webfejlesztő"
    },
    description: "Gulyás László, webfejlesztő. Tekintsd meg a portfólimat, és vedd fel velem a kapcsolatot!",
    icons: {
        icon: "/favicon.svg",
        shortcut: "/favicon.svg",
        apple: "/favicon.svg",
    },
    twitter: {
        card: "summary-large-image"
    }
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
