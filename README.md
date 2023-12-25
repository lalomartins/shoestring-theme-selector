[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/lalomartins/shoestring-theme-selector)
[![NPM](https://nodei.co/npm/@lalomartins/shoestring-theme-selector.png?mini=true)](https://www.npmjs.com/package/@lalomartins/shoestring-theme-selector)

# \<shoestring-theme-selector\>

A web component for theme-selector that uses [Shoelace](https://shoelace.style/) buttons for consistent UI.

Written with [Lit](https://lit.dev/) 3.0, but you can use it anywhere you can use Shoelace!

## Usage

<!--
```
<custom-element-demo>
  <template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/themes/light.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/themes/dark.css" />
    <script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/shoelace-autoloader.js"></script>
    <script type="module" src="./shoestring-theme-selector.js"></script>
    <shoestring-theme-selector></shoestring-theme-selector>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<shoestring-theme-selector></shoestring-theme-selector>
```

If you're using Shoelace in your own project and you want to avoid loading two different copies, import like this:

```js
import '@shoelace-style/shoelace/dist/components/switch/switch.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@lalomartins/shoestring-theme-selector/shoestring-theme-selector.js';
```

Otherwise, if you _want_ to use the bundled Shoelace:

```js
import {setBasePath} '@lalomartins/shoestring-theme-selector';
// …
setBasePath("node_modules/@lalomartins/shoestring-theme-selector/node_modules/@shoelace-style/shoelace/dist/");
```

(You can also use CDNed Shoelace if you prefer.)

## API

Attributes:

- current - The current page
- total - Total number of items
- page-size (default: 10) - How many items are in a page
- surrounding-pages (default: 2) - How many pages to display before and after current at most
- hide-on-single-page - If set, and all items fit in one page, hide the element

If accessing props directly in JS (or Lit's `.prop=${}`), convert the names to camelCase, e.g. `pageSize`.

Events:

- page-change - Indicates when the page changes; value is in `event.detail.page`

## Install

```
npm i @lalomartins/shoestring-theme-selector
```

You don't need to import Shoelace on your own code if you're not using it, but you _do_ need to load your own CSS, whether it's from CDN, or from `node_modules`, or copying it into your build. You can check the [Shoelace install instructions](https://shoelace.style/getting-started/installation) for details.

## CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/themes/light.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/themes/dark.css"
/>
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/shoelace-autoloader.js"
></script>
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@lalomartins/shoestring-theme-selector@1.0.0/cdn/shoestring-theme-selector.js"
></script>
```

If the icon doen't show up, tweak your import order to make sure you have the Shoelace base path set before Theme Selector loads.
