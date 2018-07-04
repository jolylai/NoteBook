module.exports = {
  title: "NoteBook",
  description: "🚀 前端攻城秘籍",
  base: "/notebook/",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    nav: [
      {
        text: "CSS",
        items: [{ text: "CSS Secret", link: "/css-secret" }]
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
      // "/css/": [
      //   {
      //     title: "CSS",
      //     collapsable: false,
      //     children: ["", 'flex']
      //   },
      // ],
      "/css-secrets/": [
        {
          title: "CSS Secrets",
          collapsable: false,
          children: [""]
        }
      ],
      "/javascript/": [
        {
          title: "JavaScript",
          collapsable: false,
          children: ["promise"]
        }
      ],
      "/tools/": ["github-page"]
    },
    lastUpdated: "上次更新"
  },
  markdown: {
    lineNumbers: true
  }
};
