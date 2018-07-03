module.exports = {
  title: "NoteBook",
  description: "🚀 前端攻城秘籍",
  base: "/notebook/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      {
        text: "CSS",
        link: "/css/"
      },
      {
        text: "JavaScript",
        link: "/javascript/"
      }
    ],
    sidebar: {
      "/css/": [
        {
          title: "CSS",
          collapsable: false,
          children: ["", 'flex']
        },
      ],
      "/css-secrets/": [
        {
          title: "CSS Secrets",
          collapsable: false,
          children: [""]
        },
      ],
      "/javascript/": [
        {
          title: "JavaScript",
          collapsable: false,
          children: ["promise"]
        }
      ]
    },
    lastUpdated: "上次更新"
  },
  markdown: {
    lineNumbers: true
  }
};
