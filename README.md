# Sample GitHub Pages Site

Uses default GitHub Pages, which uses Jekyll.

## Code block syntax highlighting

### Using kramdown and rouge (default)

By default when you write a code block using the triple-tick Jekyll's markdown processor kramdown will use the rouge plug-in to highlight the code.  This is by far the simplest implementation.  However it's difficult to customize.  If the rouge plug-in does not support a language it will not handle the code block well.

You can adjust styling for this using `_sass/custom/custom.scss`

### Using highlightjs

[highlightjs](https://highlightjs.org/) is an alternate highlighter.  

to use this you can disable Jekyll's default highlighter in the `_config.yaml` with:

```
markdown: kramdown
kramdown:
  syntax_highlighter_opts:
    # disables syntax highlighting so another highlighter like highlightjs can be used
    disable: true
```

In `_includes/head_custom.html` you add the references to the highlightjs code and styles.  See highlightjs' documentation for details.

You'll notice that after this code is highlighted, but you lose the styling and copy functionality.  You will need to add those back yourself.

Styles can be added in `_sass/custom/custom.scss`

Specifically you may want to add styles for the `code.hljs` element class code block.

#### Copy button

A copy button can be added to code blocks using https://github.com/arronhunt/highlightjs-copy

JS and CSS CDN links added to `_includes/head_custom.html` and code registers the `highlightjs-copy` plugin.
