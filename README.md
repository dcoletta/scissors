# MenuHighlighter.js

## What It Does

MenuHighlighter adds a highlight to the link of your header block that corresponds to the page that the user is currently on.

## What It Looks Like

<figure><img src=".gitbook/assets/image.png" alt=""><figcaption><p>Screenshot of MenuHighlighter.js being used to create a lavender "selected" color to the About page of a Softr site.</p></figcaption></figure>

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

## Read the Code

[MenuHighlighter.js](https://scissors.appspan.net/MenuHighlighter/MenuHighlighter.js)
