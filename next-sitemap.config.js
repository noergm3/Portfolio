/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://noegonzalez.dev",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.8,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === "/") {
      priority = 1.0;
      changefreq = "weekly";
    } else if (path === "/hire-me") {
      priority = 0.95;
      changefreq = "weekly";
    } else if (path.startsWith("/projects")) {
      priority = 0.85;
      changefreq = "monthly";
    } else if (path.startsWith("/engineering")) {
      priority = 0.8;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
