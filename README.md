# handlebars-block

### some template
```
{{#block 'style'}}
    <link rel="stylesheet" href="sign-up2.css">
{{/block}}
```

### layout
```
{{#if blocks.style}}
    {{{blocks.style}}}
{{else}}
    <link rel="stylesheet" href="/css/index.css">
{{/if}}
```
