class CssExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-_:/]+/g) || [];
  }
}

module.exports = {
  content: ["src/**/*.html", "src/**/*.js", "src/**/*.jsx"],
  extractors: [
    {
      extractor: CssExtractor,
      extensions: ["html", "js", "jsx"],
    },
  ],
  whitelist: ["*", /\[.*\]/, /::.+/],
};
