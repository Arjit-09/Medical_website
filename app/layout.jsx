import "./globals.css";
import SiteShell from "../components/site-shell";
import { CartProvider } from "../components/cart-context";

export const metadata = {
  title: {
    default: "Medzwall | Products & Orders",
    template: "%s | Medzwall",
  },
  description:
    "Browse the Medzwall product catalogue. Order or request a product with our team.",
  applicationName: "Medzwall",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <CartProvider>
          <SiteShell>{children}</SiteShell>
        </CartProvider>
      </body>
    </html>
  );
}
