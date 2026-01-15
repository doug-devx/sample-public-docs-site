hljs.registerLanguage('zynth', function(hljs) {
  return {
    name: 'Zynth',
    // This regex tells HLJS that keywords can start with ^, ~, or end with ! and ?
    lexemes: /[a-z_][a-z0-9_!~?^]*/, 
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
      // 1. Fixed Function DEFINITION
      {
        className: 'function',
        begin: /\^branch\s+/, // Match the keyword directly as a 'begin'
        end: /\{/,
        excludeEnd: true,
        contains: [
          {
            className: 'title.function',
            begin: /[a-z_][a-z0-9_]*/
          },
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            contains: [
              {
                className: 'variable',
                begin: /[a-z_][a-z0-9_]*/
              }
            ]
          }
        ]
      },
      // 2. Function CALLS
      {
        className: 'title.function.invoke',
        begin: /[a-z_][a-z0-9_]*(?=\()/,
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
        // Escaped the | characters for the regex
        begin: /:=:|>>--|!!|\|~\|/ 
      }
    ]
  };
});
