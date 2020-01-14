"use strict";

const { memoizeOne, composeRule, toRule } = require("@metascraper/helpers");

const Readability = require("readability");
const jsdom = require("jsdom");

const { JSDOM } = jsdom;

const virtualConsole = new jsdom.VirtualConsole();

const readability = memoizeOne(($, url) => {
  const dom = new JSDOM($.html(), { virtualConsole, url });
  const reader = new Readability(dom.window.document);
  return reader.parse();
});

module.exports = () => {
  return {
    content: [
      ({ htmlDom, url }) => {
        const { content, textContent } = readability(htmlDom, url);
        return {
          html: content,
          text: textContent
        };
      }
    ]
  };
};

module.exports.fulltext = readability;
