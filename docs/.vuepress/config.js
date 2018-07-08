module.exports = {
  title: "NoteBook",
  description: "🚀 前端攻城秘籍",
  base: "/notebook/",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    nav: [
      {
        text: "CSS",
        link: "/css/"
      },
      {
        text: "JavaScript",
        link: "/javascript/"
      },
      {
        text: "Tools",
        link: "/tools/"
      }
    ],
    sidebar: {
      "/css-secrets/": [
        {
          title: "CSS Secrets",
          collapsable: false,
          children: [""]
        }
      ],
      "/js-promise/": [
        {
          title: "Promise",
          collapsable: false,
          children: ["chain-flow"]
        }
      ],
      "/tools/": ["github-page", "deploy"]
    },
    lastUpdated: "上次更新"
  },
  markdown: {
    lineNumbers: true
  }
};
