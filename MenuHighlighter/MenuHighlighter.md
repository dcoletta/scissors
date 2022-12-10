# What It Does

MenuHighlighter adds a highlight to the link of your header block that corresponds to the page that the user is currently on.

# How To Use It

In your site settings **Code Inside Footer** section, put the following code:

```
<script src="https://scissors.appspan.net/MenuHighlighter/MenuHighlighter.js">
```

# How to Customize It

Add the following before the `<script src=>` tag:

```
<script>
const MenuHighlighter = {backgroundColor: "#FF0000"};
</script>
```