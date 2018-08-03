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
        text: "Nodejs",
        link: "/nodejs/"
      },
      {
        text: "Tools",
        link: "/tools/"
      }
    ],
    sidebar: {
      "/css/": [
        { title: "css", collapsable: false, children: ["", "background"] }
      ],
      "/javascript/": [
        {
          title: "JavaScript",
          collapsable: false,
          children: [""]
        }
      ],
      "/nodejs": [""],
      "/tools/": ["github-page", "deploy"]
    },
    lastUpdated: "上次更新"
  },
  markdown: {
    lineNumbers: true
  }
};
