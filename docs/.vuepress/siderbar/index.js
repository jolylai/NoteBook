const cssSiderbar = require("./css");
const jsSiderbar = require("./javascript");
const toolsSiderbar = require("./tools");

module.exports = Object.assign(cssSiderbar, jsSiderbar, toolsSiderbar);

//  getCssSiderBar(
//   "CSS基础",
//   "CSS世界",
//   "背景与边框",
//   "形状",
//   "结构与布局",
//   "用户体验"
// ),

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
