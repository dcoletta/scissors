# README

## Quickstart

Hello Softr app developer who just wants to grab some code and get it into your project as quickly as possible! Here's the three-step process that will get you going:
- Visit [the docs](https://scissors-docs.appspan.net)
- Look through the scripts and find the one that does the thing you need
- Do what it says in the "How to Use It" section

## What else should I know?

### Snippets are dynamically loaded by default
When you follow the instructions in the "How to Use It" section, then by default your application will load the snippet from a Cloudflare CDN that always contains the latest version of the snippet. This has the advantage of making sure your site picks up any fixes to the snippet that might have been necessary over time as Softr evolves and changes. But it has the disadvantage that a change to the snippet could possibly break your site at a time not of your choosing. 

If you would prefer to avoid both the advantage and disadvantage of loading the snippet dynamically, you can copy and paste the snippet itself. At the bottom of each doc page there is a handy link that will take you to the raw code for the snippet, suitable for easy copying and pasting.

## I found a bug, what should I do?
Thank you for finding a bug! Please head over to the [issues](https://github.com/dcoletta/scissors/issues) page of this repository, create a new issue, and provide the following information:
- Which snippet you are using
- What you expected to happen when you tried to use it
- What actually happened
- Screenshots (if relevant)
- A link to a page of your app where the snippet is not working correctly (if that's feasible)

## How to contribute to Scissors
### Contributions are welcome! 
There are two different ways to contribute a new snippet:
- Preferred: If you are comfortable with Github, JavaScript, and Markdown, then you can create a .js file (the snippet itself) and an .md file (the documentation) and make a pull request to this repository, and I'll review and merge it.
- Alternatively, if you have some JavaScript you want to contribute, but you'd rather hand it off to me and let me do the rest, you can head over to the [issues](https://github.com/dcoletta/scissors/issues) page of this repository, create a new issue, and paste in the code, and I'll take it from there.

Fixes and enhancements to an existing snippet are also welcome! Again, you can contribute a change to a snippet or its documentation using either of the two approaches above.

### What a good pull request looks like
Here's a checklist for what a good pull request (PR) will have:
-  a folder at the top level of the repo with the name of your script in PascalCase, such as `DoImportantThing`. (Start the script name with a verb.)
- In the `DoImportantThing` folder, a `DoImportantThing.js` file that contains your snippet code. 
- In the JavaScript code in your `DoImportantThing.js` file, any string that a user might need to customize should be overridable. See [SampleSiteBeforeSignup.js](https://github.com/dcoletta/scissors/blob/main/SampleSiteBeforeSignup/SampleSiteBeforeSignup.js) for example conventions.
- At the top of the JavaScript code, please insert a copy of the MIT license inside a comment block.
- In the `DoImportantthing` folder, a `DoImportantThing.md` file that contains the documentation for your snippet. See `SampleSiteBeforeSignup.md` for conventions. If it would be helpful for your documentation to include a screenshot of what visual effect the snippet will have, see [MenuHighlighter.md](https://github.com/dcoletta/scissors/blob/main/MenuHighlighter/MenuHighlighter.md) for conventions on how to include that in the doc page.
- A new line in [SUMMARY.md](https://github.com/dcoletta/scissors/blob/main/SUMMARY.md) with a link to your snippet.

### CSS and HTML in your snippet

Some code snippets require accompanying CSS and/or HTML. There are many different techniques for loading
CSS and HTML by reference, and you are welcome to add CSS and HTML files to your folder to be loaded by reference.
The only strong suggestion I will make here is that it should be possible for users of your snippet to be able to automatically pick up the latest version without having to change the Softr project that uses it. This means
that it is discouraged for the instructions to include something like "please put this HTML or CSS into your project." Instead, prefer loading CSS with a `<link>` tag or including it as a `style` attribute of HTML, and prefer loading HTML into the DOM with code in your JavaScript, such as `document.createElement()` and `element.appendChild()`.

## Why does Scissors exist?
I decided to try to get more organized about custom code snippets. For a while I was putting my custom code snippets in [unlock-softr.com](http://unlock-softr.com/), and that was way better than nothing. But I wanted some things that were going to be hard to do there:

* I wanted to make it easier for people to use custom code snippets in their Softr apps
* I wanted to make it easier for multiple people to collaborate on the code snippets
* I wanted to make it optionally possible for changes to a snippet to be able to propagate automatically to Softr sites that are using the snippet

I’m calling it ![:scissors:](https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/2702-fe0f@2x.png) Scissors since it’s all about code snippets.

In case you’re curious, the tools I used to build this are Github to store the snippets, CloudFlare CDN to publish the code snippets for inclusion into Softr pages, and Gitbook to make the documentation.

## What am I agreeing to by using this code?

Your use of code and documentation in this repository is governed by the [MIT License](https://github.com/dcoletta/scissors/blob/main/LICENSE). 

## What am I agreeing to by contributing to this repository?

By submitting a pull request, issue, or any other content to this repository, you agree that your contributions are governed by the [MIT License](https://github.com/dcoletta/scissors/blob/main/LICENSE) and represent that there are no claims on your contributions which would conflict with that license. 