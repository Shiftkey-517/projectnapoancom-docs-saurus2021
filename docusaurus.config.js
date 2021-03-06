/** @type {import('@docusaurus/types').DocusaurusConfig} */
const DefaultLocale = 'ja';

const isDeployPreview =
  process.env.NETLIFY && process.env.CONTEXT === 'deploy-preview';

module.exports = {
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },
  title: 'ナポアンのマイクラMD',
  tagline: 'Markdown版ナポアンのマイクラです,',
  url: 'https://md.napoan.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sasigume',
  projectName: 'projectnapoancom-docs-saurus2021',
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-182248553-8',
    },
    navbar: {
      title: 'ナポアンのマイクラMD',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/blog',
          label: 'ブログ',
        },
        {
          to: '/docs/intro',
          label: 'ドキュメント',
        },

        {
          href: `https://twitter.com/sasigume`,
          label: 'Twitter',
          position: 'right',
        },
        {
          href: `https://github.com/sasigume/projectnapoancom-docs-saurus2021`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'サイトマップ',
          items: [
            {
              to: '/blog',
              label: 'ブログ',
            },
            {
              to: '/docs/intro',
              label: 'ドキュメント',
            },
          ],
        },
        {
          title: 'ドキュメント',
          items: [
            {
              to: '/docs/admin/intro',
              label: '更新方法',
            },
            {
              to: '/docs/people/intro',
              label: 'メンバー',
            },
            {
              to: '/docs/posts/intro',
              label: '記事',
            },
            {
              to: '/docs/join/intro',
              label: 'このサイトの編集',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Twitter',
              href: `https://twitter.com/sasigume`,
            },
            {
              label: 'GitHub',
              href: `https://github.com/sasigume/projectnapoancom-docs-saurus2021`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aelyone. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/sasigume/projectnapoancom-docs-saurus2021/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/sasigume/projectnapoancom-docs-saurus2021/edit/main/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
