module.exports = {
  title: "NoteBook",
  description: "🚀 前端攻城笔记",
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
        text: "React",
        link: "/react/"
      },
      {
        text: "Tools",
        link: "/tools/"
      }
    ],
    sidebar: {
      "/css/": getCssSiderBar("CSS基础", "CSS世界", '背景与边框'),
      "/javascript/": getJSSiderBar("JS"),
      "/react/": getReactSiderBar("React"),
      "/tools/": getToolsSiderBar("Tools")
    },
    lastUpdated: "上次更新"
  },
  markdown: {
    lineNumbers: true
  }
};

function getCssSiderBar(groupA, groupB, groupC) {
  return [
    {
      title: '指南',
      collapsable: false,
      children: [""]
    },
    {
      title: groupA,
      collapsable: false,
      children: ["selector", "background", "css-world-3"]
    },
    {
      title: groupB,
      collapsable: false,
      children: ["overflow"]
    },
    {
      title: groupC,
      collapsable: false,
      children: ["translucent-borders"]
    }
  ];
}

function getJSSiderBar(groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: ["", "array", "utils"]
    }
  ];
}

function getReactSiderBar(groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: ["lifecycle", "dva"]
    }
  ];
}

function getToolsSiderBar(groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: ["", "git", "npm", "deploy", "axios"]
    }
  ];
}
