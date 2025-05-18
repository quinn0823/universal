# Universal

The universal images, styles and scripts for my web projects.

## Usage

### Logo

```
universal
└── images
    └── logos
        ├── logo-transparent-fill.png
        ├── logo-transparent-fit.png
        └── logo-white-fit.png
```

``` html
<head>
    <link rel="icon" href="https://quinn0823.github.io/universal/images/logos/logo-transparent-fill.png" type="image/png" />
    <link rel="apple-touch-icon" href="https://quinn0823.github.io/universal/images/logos/logo-white-fit.png" type="image/png" />
</head>
```

### Header and Footer

``` html
<head>
    <title>Template | Jonathan's Bytecraft</title>

    <meta name="author" content="Jonathan Chiu" />
    <meta name="license" content="MIT" />
    <meta name="copyright-year" content="2025" />
    <meta name="updated-date" content="2025-04-01" />
</head>
<body>
    <header id="universal-header">
        <h1 id="universal-title"></h1>
    </header>

    <footer id="universal-footer"></footer>

    <script src="https://quinn0823.github.io/universal/scripts/header.js" type="text/javascript"></script>
    <script src="https://quinn0823.github.io/universal/scripts/footer.js" type="text/javascript"></script>
</body>
```

### Styles (Not Available)

``` html
<head>
    <link rel="stylesheet" href="https://quinn0823.github.io/universal/styles/main.css" type="text/css" />
</head>
```

### Packages

#### clipboard.js

``` html
<head>
    <script src="https://quinn0823.github.io/universal/packages/clipboard/dist/clipboard.min.js" type="text/javascript"></script>
</head>
```

#### Font Awesome

##### SVG + JS

``` html
<head>
    <script src="https://quinn0823.github.io/universal/packages/fontawesome/js/solid.min.js" type="text/javascript"></script>
    <script src="https://quinn0823.github.io/universal/packages/fontawesome/js/brands.min.js" type="text/javascript"></script>
    <script src="https://quinn0823.github.io/universal/packages/fontawesome/js/fontawesome.min.js" type="text/javascript"></script>
</head>
```

##### Web Fonts + CSS

``` html
<head>
    <link rel="stylesheet" href="https://quinn0823.github.io/universal/packages/fontawesome/css/solid.min.css" type="text/css" />
    <link rel="stylesheet" href="https://quinn0823.github.io/universal/packages/fontawesome/css/brands.min.css" type="text/css" />
    <link rel="stylesheet" href="https://quinn0823.github.io/universal/packages/fontawesome/css/fontawesome.min.css" type="text/css" />
</head>
```

## Template

- en-US: [source](./template/en-us/index.html), [preview](https://quinn0823.github.io/universal/template/en-us/)
- zh-CN: [source](./template/zh-cn/index.html), [preview](https://quinn0823.github.io/universal/template/zh-cn/)

## Projects Powered by Universal

- [formula-writer](https://github.com/quinn0823/formula-writer): 公式默写器 | Formula Writer ([index_new.html](https://quinn0823.github.io/formula-writer/index_new.html))
- [universal](): Universal

---

Updated Date: May 18, 2025

The MIT License (MIT)

Copyright © 2025 Jonathan Chiu