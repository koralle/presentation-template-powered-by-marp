module.exports = {
  plugins: [
    require("cssnano")({
      preset: [
        "cssnano-preset-default",
        {
          discardComments: false
        }
      ]
    })
  ]
}
