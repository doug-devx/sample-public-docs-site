hljs.registerLanguage('food', function (hljs) {
  return {
    name: 'Food',
    aliases: ['food'],
    keywords: {
      keyword: 'ing'
    },
    contains: [
      // Strings: "sugar"
      {
        className: 'string',
        begin: '"',
        end: '"'
      },

      // Function calls: mix(x, y)
      {
        className: 'function',
        begin: /\b[a-zA-Z_][a-zA-Z0-9_]*(?=\()/,
      },

      // Variables / identifiers
      {
        className: 'variable',
        begin: /\b[a-zA-Z_][a-zA-Z0-9_]*\b/
      },

      // Optional: comments (e.g. # comment)
      {
        className: 'comment',
        begin: /#/,
        end: /$/
      }
    ]
  };
});
