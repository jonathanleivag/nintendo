module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave-pattern': 'url(../src/assets/images/wave-white.png)',
        'wave-pattern-dots': 'url(../src/assets/images/pattern-white-dots.png)',
        'pattern-characters-red':
          "url('../src/assets/images/pattern-characters-red.png')",
        'character-mario': "url('../src/assets/images/character-l.png')",
        'wave-pink': "url('../src/assets/images/wave-pink.png')",
        'yellow-dots': "url('../src/assets/images/pattern-yellow-dots.png')"
      })
    }
  },
  plugins: []
}
