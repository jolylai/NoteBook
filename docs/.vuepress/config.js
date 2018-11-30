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
        text: "Zent",
        link: "/zent/"
      },
      {
        text: "React",
        link: "/react/"
      },
      // {
      //   text: "Nodejs",
      //   link: "/nodejs/"
      // },
      {
        text: "Tools",
        link: "/tools/"
      }
    ],
    sidebar: {
      "/css/": [
        {
          title: "css",
          collapsable: false,
          children: ["", "background", "selector", "css-world-3"]
        }
      ],
      "/javascript/": [
        {
          title: "JavaScript",
          collapsable: false,
          children: ["", "generator", "array", "call-apply-bind"]
        }
      ],
      "/zent/": [
        {
          title: "zent",
          collapsable: false,
          children: ["", "affix"]
        }
      ],
      "/react/": [
        {
          title: "react",
          collapsable: false,
          children: ["lifecycle"]
        }
      ],
      "/nodejs": [""],
      "/tools/": [
        {
          title: "tools",
          collapsable: false,
          children: ["", "start", "deploy"]
        }
      ]
    },
    lastUpdated: "上次更新"
  },
  markdown: {
    lineNumbers: true
  }
};
