import { useEffect } from "react";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertRobots(content: string | undefined) {
  let el = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
  if (!content) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", "robots");
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setJsonLd(schemas: object[]) {
  document.head.querySelectorAll('script[data-seo-jsonld="page"]').forEach((el) => el.remove());
  schemas.forEach((schema) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seoJsonld = "page";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

export function Seo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  schema,
  bareTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  schema?: object | object[];
  bareTitle?: boolean;
}) {
  useEffect(() => {
    const fullTitle = bareTitle ? title : `${title} — ${SITE_NAME}`;
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;
    upsertMeta("name", "description", description);
    upsertCanonical(url);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", image);
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);
    upsertRobots(noindex ? "noindex, nofollow" : undefined);

    if (schema) {
      setJsonLd(Array.isArray(schema) ? schema : [schema]);
    } else {
      setJsonLd([]);
    }

    return () => {
      document.head.querySelectorAll('script[data-seo-jsonld="page"]').forEach((el) => el.remove());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, image, noindex, JSON.stringify(schema)]);

  return null;
}
