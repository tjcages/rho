import { useEffect, useState } from "react";
import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const Meta = (props: Props) => {
  const title = props.title ?? "Rho | FE Test";
  const description = props.description ?? "Just a fun frontend test";
  const image = props.image ?? "/preview.jpg";
  const url = props.url ?? "https://www.rho.co/";

  const [faviconHref, setFaviconHref] = useState("/favicon.ico");

  useEffect(() => {
    // Get current color scheme.
    const matcher = window.matchMedia("(prefers-color-scheme: dark)");
    // Set favicon initially.
    setFaviconHref(getFaviconPath(matcher.matches));
    // Change favicon if the color scheme changes.
    matcher.onchange = () => setFaviconHref(getFaviconPath(matcher.matches));
  }, [faviconHref]);

  const getFaviconPath = (isDarkMode = false) => {
    // could do dark/light mode here but removed for simplicity
    return isDarkMode ? "/favicon.ico" : "/favicon.ico";
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} key="title" />
      <meta name="og:title" content={title} key="og:title" />
      <meta property="og:site_name" content={title} />
      <meta name="description" content={description} key="description" />
      <meta name="og:description" content={description} key="og:description" />
      <meta property="og:url" content={url} key="url" />
      <meta property="og:image" content={image} key="image" />
      <meta property="twitter:card" content="summary_large_image" key="card" />
      <meta property="twitter:title" content={title} key="twitter:title" />
      <meta property="twitter:image" content={image} key="twitter:image" />
      <meta
        property="twitter:description"
        content={description}
        key="twitter:description"
      />
      <meta
        property="twitter:creator"
        content="@capitalxyz"
        key="twitter:creator"
      />

      <link rel="icon" href={faviconHref} />
    </Head>
  );
};

export default Meta;
