import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased bg-background-light  dark:bg-background-dark text-primary-light dark:text-primary-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
