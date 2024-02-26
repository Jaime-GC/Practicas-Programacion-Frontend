import { AppProps } from "https://deno.land/x/fresh@1.4.2/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh_template</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
