module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/prueba-precompro/'
    : '/',
  outputDir : 'docs'
}