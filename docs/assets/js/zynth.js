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
      {
        className: 'operator',
        begin: ':=:|>>--|!!||~|'
      }
    ]
  };
});
