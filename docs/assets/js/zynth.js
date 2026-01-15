hljs.registerLanguage('zynth', function(hljs) {
  return {
    name: 'Zynth',
    keywords: 'fetch! commit? ~loop ^branch',
    contains: [
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,
      {
        className: 'comment',
        begin: '~>', end: '$'
      },
      {
        className: 'type',
        begin: '@[A-Za-z]+'
      },
      // Define variables before operators to ensure they are captured
      {
        className: 'variable',
        begin: /[a-z_][a-z0-9_]*/ // Traditional variable naming
      },
      {
        className: 'operator',
        // Use a regex that ONLY looks for the specific Zynth symbols
        // and uses \b (boundaries) where necessary
        begin: /:=:|>>--|!!|\|~\|/ 
      }
    ]
  };
});
