hljs.registerLanguage('zynth', function(hljs) {
  return {
    name: 'Zynth',
    keywords: {
      keyword: 'fetch! commit? ~loop ^branch',
      literal: 'true false'
    },
    contains: [
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,
      {
        className: 'comment',
        begin: '~>', end: '$'
      },
      // 1. Function DEFINITION (Name after ^branch)
      {
        className: 'function',
        beginKeywords: '^branch', end: /\{/,
        excludeEnd: true,
        contains: [
          {
            className: 'title.function',
            begin: /[a-z_][a-z0-9_]*/
          },
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            keywords: 'input data', // Highlight specific param names
            contains: [hljs.SELF]
          }
        ]
      },
      // 2. Function CALLS (Name followed by '(')
      {
        className: 'title.function.invoke',
        begin: /[a-z_][a-z0-9_]*(?=\()/, // Positive lookahead for '('
        relevance: 0
      },
      {
        className: 'type',
        begin: '@[A-Za-z]+'
      },
      {
        className: 'variable',
        begin: /[a-z_][a-z0-9_]*/
      },
      {
        className: 'operator',
        begin: /:=:|>>--|!!|\|~\|/ 
      }
    ]
  };
});
