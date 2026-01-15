hljs.registerLanguage('zynth', function(hljs) {
  return {
    name: 'Zynth',
    // Define what counts as a "word" for our keywords
    lexemes: /[a-zA-Z_!~?^][a-zA-Z0-9_!~?^]*/, 
    keywords: {
      keyword: 'fetch! commit? ~loop ^branch',
      literal: 'true false'
    },
    contains: [
      // Manually defined String mode to avoid 'variants' error
      {
        className: 'string',
        begin: '"', end: '"',
        contains: [{ begin: '\\\\.' }]
      },
      // Manually defined Number mode
      {
        className: 'number',
        begin: /\b\d+(\.\d+)?/,
        relevance: 0
      },
      {
        className: 'comment',
        begin: '~>', end: '$'
      },
      // Function DEFINITION
      {
        className: 'function',
        begin: /\^branch\s+/, 
        end: /\{/,
        excludeEnd: true,
        contains: [
          {
            className: 'title.function',
            begin: /[a-zA-Z_][a-zA-Z0-9_]*/
          },
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            contains: [
              {
                className: 'variable',
                begin: /[a-zA-Z_][a-zA-Z0-9_]*/
              }
            ]
          }
        ]
      },
      // Function CALLS
      {
        className: 'title.function.invoke',
        begin: /[a-zA-Z_][a-zA-Z0-9_]*(?=\()/,
        relevance: 0
      },
      {
        className: 'type',
        begin: '@[A-Za-z]+'
      },
      {
        className: 'operator',
        begin: /:=:|>>--|!!|\|~\|/ 
      },
      // General Variables (Catch-all for words that aren't keywords)
      {
        className: 'variable',
        begin: /[a-zA-Z_][a-zA-Z0-9_]*/,
        relevance: 0
      }
    ]
  };
});
