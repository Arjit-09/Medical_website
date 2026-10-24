# Medzwell

A simple Next.js product catalogue with search, category filters, product pages, and two enquiry types: orders and missing products. Both forms send to `Usonlinemedshop247@gmail.com`. Shared contact details live in `data/site.js`; catalogue content lives in `data/products.js`.

## Development

Requires Node.js 20.9 or newer.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

## Production

Set `NEXT_PUBLIC_SITE_URL` to the actual Medzwell domain and configure `SMTP_USER` and `SMTP_PASS` with the sending Gmail account and its app password. Keep credentials out of source control. Then run `npm run build` and `npm start` on a Node.js host. Email endpoints require a server runtime; a static export cannot process the forms.

Without SMTP configuration, forms return an explicit unavailable message with a direct email fallback. Delivery errors never produce a success confirmation. A successful submission means the SMTP server accepted the message, not a guarantee of inbox delivery. Test both enquiry types with the real mailbox before launch. No customer form details are logged or stored by this application.

The existing catalogue and contact details were retained for the Medzwell redesign. Listed prices and stock badges are not presented as live inventory; the team confirms availability and pricing. The old About and Services URLs redirect to Contact. The logo is available at `public/medzwell-logo.svg` and its mark at `public/medzwell-mark.svg`.

Run email validation and delivery-behavior tests with `node --test tests/send-request.test.mjs`. Before public launch, configure request rate limits at the hosting proxy and confirm the catalogue and business contact details.
