import "./globals.css";
import SiteShell from "../components/site-shell";
import { CartProvider } from "../components/cart-context";
import { OrderModalProvider } from "../components/order-modal-context";
import { OrderModal } from "../components/order-modal";

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
          <OrderModalProvider>
            <SiteShell>{children}</SiteShell>
            <OrderModal />
          </OrderModalProvider>
        </CartProvider>
      </body>
    </html>
  );
}
