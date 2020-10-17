module.exports = {
  title: "Gameo",
  tagline: "There's a Game for Everyone",
  url: 'https://steffy-lo.github.io', // Your website URL
  baseUrl: '/Gameo/',
  onBrokenLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "steffy-lo", // Usually your GitHub org/user name.
  projectName: "gameo", // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: "Gameo Logo",
        src: "img/gameo-logo.png",
        srcDark: "img/gameo-logo.png",
      },
      items: [
        {
          to: "docs/en",
          activeBasePath: "docs",
          label: "How it Works",
          position: "left",
        },
        { to: "about", label: "About", position: "left" },
        { to: "usage", label: "Usage", position: "left" },
        {
          label: "Languages",
          position: "right",
          items: [
            {
              label: "English",
              to: "docs/en",
            },
            {
              label: "Bahasa Indonesia",
              to: "docs/id/",
            },
          ],
        },
        {
          href: "https://github.com/steffy-lo/Gameo",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "How it Works",
          items: [
            {
              label: "Introduction",
              to: "docs/",
            },
            {
              label: "PyTorch Integration",
              to: "docs/collaborative-filtering/",
            },
            {
              label: "Creating Endpoints",
              to: "docs/overview/",
            },
            {
              label: "Building the React Website",
              to: "docs/api-usage/",
            },
          ],
        },
        {
          title: "Getting Started",
          items: [
            {
              label: "Visit Gameo",
              href: "https://twitter.com/docusaurus",
            },
            {
              label: "About",
              to: "about",
            },
            {
              label: "Usage",
              to: "usage",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/steffy-lo/Gameo",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gameo. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
