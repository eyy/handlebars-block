# handlebars-block

### some template
```handlebars
{{#block 'style'}}
    <link rel="stylesheet" href="sign-up2.css">
{{/block}}
```

### layout
```handlebars
{{#if blocks.style}}
    {{{blocks.style}}}
{{else}}
    <link rel="stylesheet" href="/css/index.css">
{{/if}}
```
