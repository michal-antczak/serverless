module.exports = {
  entry: ["./index.js"],
  target: "node",
  mode: "production",
  resolve: {
    extensions: [".js"],
  },
  output: {
    path: `${process.cwd()}/out`,
    filename: "index.js",
    libraryTarget: "umd",
  },
};
