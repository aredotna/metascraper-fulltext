"use strict";

const snapshot = require("snap-shot");
const path = require("path");
const fs = require("fs");

const metascraper = require("metascraper")([require("metascraper-fulltext")()]);

describe("metascraper-fulltext", () => {
  describe(".fulltext", function() {
    it("are.na/blog", async () => {
      const url =
        "https://www.are.na/blog/when-it-changed-part-3-an-ambient-aftermath";
      const html = fs.readFileSync(
        path.resolve(__dirname, "fixtures/are.na-blog.html"),
        "utf-8"
      );
      const metadata = await metascraper({ html, url });
      console.log("metadata", metadata);
      snapshot(metadata);
    });
  });
});
