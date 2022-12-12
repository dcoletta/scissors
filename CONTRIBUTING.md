# CONTRIBUTING.md

## Contributions are welcome!

There are two different ways to contribute a new snippet:

* Preferred: If you are comfortable with Github, JavaScript, and Markdown, then you can create a .js file (the snippet itself) and an .md file (the documentation) and make a pull request to this repository, and I'll review and merge it.
* Alternatively, if you have some JavaScript you want to contribute, but you'd rather hand it off to me and let me do the rest, you can head over to the [issues](https://github.com/dcoletta/scissors/issues) page of this repository, create a new issue, and paste in the code, and I'll take it from there.

Fixes and enhancements to an existing snippet are also welcome! Again, you can contribute a change to a snippet or its documentation using either of the two approaches above.

## What a good pull request looks like

Here's a checklist for what a good pull request (PR) will have:

* a folder at the top level of the repo with the name of your script in PascalCase, such as `DoImportantThing`. (Start the script name with a verb.)
* In the `DoImportantThing` folder, a `DoImportantThing.js` file that contains your snippet code.
* In the JavaScript code in your `DoImportantThing.js` file, any string that a user might need to customize should be overridable. See [SampleSiteBeforeSignup.js](SampleSiteBeforeSignup/SampleSiteBeforeSignup.js) for example conventions.
* At the top of the JavaScript code, please insert a copy of the MIT license inside a comment block.
* In the `DoImportantthing` folder, a `DoImportantThing.md` file that contains the documentation for your snippet. See `SampleSiteBeforeSignup.md` for conventions. If it would be helpful for your documentation to include a screenshot of what visual effect the snippet will have, see [MenuHighlighter.md](MenuHighlighter/MenuHighlighter.md) for conventions on how to include that in the doc page.
* A new line in [SUMMARY.md](SUMMARY.md) with a link to your snippet.

## CSS and HTML in your snippet

Some code snippets require accompanying CSS and/or HTML. There are many different techniques for loading CSS and HTML by reference, and you are welcome to add CSS and HTML files to your folder to be loaded by reference. The only strong suggestion I will make here is that it should be possible for users of your snippet to be able to automatically pick up the latest version without having to change the Softr project that uses it. This means that it is discouraged for the instructions to include something like "please put this HTML or CSS into your project." Instead, prefer loading CSS with a `<link>` tag or including it as a `style` attribute of HTML, and prefer loading HTML into the DOM with code in your JavaScript, such as `document.createElement()` and `element.appendChild()`.

## What am I agreeing to by contributing to this repository?

By submitting a pull request, issue, or any other content to this repository, you agree that your contributions are governed by the [MIT License](LICENSE/) and represent that there are no claims on your contributions which would conflict with that license.
