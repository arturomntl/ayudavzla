// pages/_document.tsx

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
        <Head>
          <link rel="icon" href="/VzlaFlag.png" />
          <meta property="og:title" content="Help Venezuela" />
          <meta property="og:description" content="Help Venezuela from the U.S. Find resources and ways to support Venezuela." />
          <meta property="og:image" content="/VzlaFlag.png" />
          <meta property="og:url" content="https://ayudavzla.com" />
          <meta name="twitter:card" content="/VZLATwitterCard.png" />
          <meta name="twitter:title" content="Help Venezuela" />
          <meta name="twitter:description" content="Help Venezuela from the U.S. Find resources and ways to support Venezuela." />
          <meta name="twitter:image" content="/VzlaFlag.png" />
        </Head>
        <body className={`${pageClass} bg-black text-white`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
