const { parse } = require("himalaya");
let tagMap = {
  ul: "bulletList",
  li: "listItem",
  pre: "codeBlock",
  hr: "rule",
  h1: {
    "type": "heading",
    "attrs": {
      "level": 1
    },
  },
  h2: {
    "type": "heading",
    "attrs": {
      "level": 2
    },
  },
  h3: {
    "type": "heading",
    "attrs": {
      "level": 3
    },
  },
  h4: {
    "type": "heading",
    "attrs": {
      "level": 4
    },
  },
  h5: {
    "type": "heading",
    "attrs": {
      "level": 5
    },
  },
  h6: {
    "type": "heading",
    "attrs": {
      "level": 6
    },
  },
  ol: "orderedList",
  p: "paragraph",
  table: "table",
  td: "tableCell",
  tr: "tableRow",
};

/**
 * Convert html to Atlassian Document Format
 * @param {string} html 
 */
module.exports = function format(html) {
  let json = parse(html);
  return {
    version: 1,
    type: "doc",
    content: formatChildren(json),
  };
}

/**
 * 
 * @param {object[]} tags 
 */
function formatChildren(tags) {
  for (let i = 0; i < tags.length; i++) {
    switch (tags[i].type) {
      case "text":
        formatText(tags[i]);
        break;
      case "element":
        let status = formatElement(tags[i]);
        if (!status) {
          tags.splice(i, 1);
          i--;
        }
    }
  }
  return tags;
}

/**
 * Format text
 * @param {*} tag 
 */
function formatText(tag) {
  tag.text = tag.content;
  delete tag.content;
}

/**
 * Format other elements
 * @param {*} tag 
 * @returns 
 */
function formatElement(tag) {
  if (!tagMap[tag.tagName])
    return false;
  switch (typeof tagMap[tag.tagName]) {
    case "object":
      Object.assign(tag, tagMap[tag.tagName]);
      break;
    default:
      tag.type = tagMap[tag.tagName];
  }
  delete tag.tagName;
  delete tag.attributes;
  if (tag.children) {
    if (tag.children.length) {
      tag.content = formatChildren(tag.children);
    }
    delete tag.children;
  }
  return true;
}

console.log(JSON.stringify(format("<h2>Where does it come from?</h2><p class=\"ql-align-justify\">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</p><p class=\"ql-align-justify\">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p><p><br></p>")));