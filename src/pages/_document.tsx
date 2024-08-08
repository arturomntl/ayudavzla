// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const pageClass = {
      '/': 'homePage', // Index page
      '/ayudar': 'ayudarPage', // Ayudar Page
      // Add more pages as needed
    }[this.props.__NEXT_DATA__.page] || '';

    return (
      <Html>
        <Head />
        <body className={pageClass}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
