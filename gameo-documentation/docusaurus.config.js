module.exports = {
  title: "Gameo",
  tagline: "There's a Game for Everyone",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "steffy-lo", // Usually your GitHub org/user name.
  projectName: "gameo", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Gameo",
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "How it Works",
          position: "left",
        },
        { to: "about", label: "About", position: "left" },
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
              label: "MongoDB Integration and Endpoints",
              to: "docs/overview/",
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
              to: "docs/usage/",
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
