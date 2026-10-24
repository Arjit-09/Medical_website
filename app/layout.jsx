import "./globals.css";
import SiteShell from "../components/site-shell";
export const metadata = {
  title: {
    default: "Medzwell | Products & enquiries",
    template: "%s | Medzwell",
  },
  description:
    "Browse the Medzwell product catalogue. Enquire about an order or request a product with our team.",
  applicationName: "Medzwell",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
