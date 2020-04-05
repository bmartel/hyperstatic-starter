const renderPages = require("@martel/hyperstatic/src/renderPages");

(async () => {
  let pages = ["/", "/example-page", "/counter"];

  renderPages(pages).then(() => {
    console.log("All pages rendered!");
    process.exit(0);
  });
})();
