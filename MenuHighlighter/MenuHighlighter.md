---
description: >-
  MenuHighlighter adds a highlight to the link of your header block that
  corresponds to the page that the user is currently on.
---

# MenuHighlighter.js

## What It Looks Like

<figure><img src="../.gitbook/assets/image.png" alt=""><figcaption><p>Screenshot of MenuHighlighter.js being used to create a lavender "selected" color to the About page of a Softr site.</p></figcaption></figure>

## How To Use It

In your site settings **Code Inside Footer** section, put the following code:

```
<script src="https://scissors.appspan.net/MenuHighlighter/MenuHighlighter.js">
```

## How to Customize It

Add the following before the `<script src=>` tag:

```
<script>
const MenuHighlighter = {backgroundColor: "#FF0000"};
</script>
```

## What It Does

It looks for an `<nav>` element in the DOM, and then makes a list of all the `<a>` elements underneath the `<nav>` element. For each `<a>`, it checks to see if the slug of the current page starts with the `href` attribute of the link. When it finds one that does, that means it has found the link corresponding to the current page, and it sets the `<a>`'s background color to the specified color. In its search for `<a>` tags, it skips the home page.

## Read the Code

[MenuHighlighter.js](https://scissors.appspan.net/MenuHighlighter/MenuHighlighter.js)
