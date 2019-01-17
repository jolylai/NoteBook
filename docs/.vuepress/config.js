const path = require("path");

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
        text: "PomeloUI",
        link: "/pomelo-ui/"
      },
      {
        text: "Tools",
        link: "/tools/"
      }
    ],
    sidebar: {
      "/css/": getCssSiderBar(
        "CSS基础",
        "CSS世界",
        "背景与边框",
        "形状",
        "结构与布局",
        "用户体验"
      ),
      "/javascript/": getJSSiderBar("JS", "Array", "Date"),
      "/react/": getReactSiderBar("React"),
      "/pomelo-ui/": getPomeloUISiderBar("pomeloUI"),
      "/tools/": getToolsSiderBar("Tools")
    },
    lastUpdated: "上次更新"
  },
  markdown: {
    lineNumbers: true
  }
  // chainWebpack: config => {
  //   config.resolve.alias.set("@public", path.resolve(__dirname, "/public"));
  // }
};

function getCssSiderBar(groupA, groupB, groupC, groupD, groupE, groupF) {
  return [
    {
      title: "指南",
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
      children: [
        "translucent-borders",
        "multiple-borders",
        "background",
        "inner-rounding",
        "stripes"
      ]
    },
    {
      title: groupD,
      collapsable: false,
      children: [
        "ellipse",
        "parallelograms",
        "diamond",
        "corners",
        "trapezoid",
        "pie"
      ]
    },
    {
      title: groupE,
      collapsable: false,
      children: [
        "intrinsic-sizing",
        "styling-sibling-count",
        "fluid-fixed",
        "vertical-centering",
        "sticky-footer"
      ]
    },
    {
      title: groupF,
      collapsable: false,
      children: [
        "hit-area",
        "custom-checkbox",
        "shadow-weaken-background",
        "blurry-weaken-background"
      ]
    }
  ];
}

function getJSSiderBar(groupA, groupB, groupC) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: ["", "array", "string", "utils"]
    },
    {
      title: groupB,
      collapsable: false,
      children: []
    },
    "date"
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

function getPomeloUISiderBar(groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: ["", "affix"]
    }
  ];
}

function getToolsSiderBar(groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        "",
        "git",
        "github",
        "github-page",
        // "npm",
        "deploy",
        "axios",
        "cors"
      ]
    }
  ];
}
