# README

## Quickstart

Hello Softr app developer who just wants to grab some code and get it into your project as quickly as possible! Here's the three-step process that will get you going:

* Visit [the docs](https://scissors-docs.appspan.net)
* Look through the scripts and find the one that does the thing you need
* Do what it says in the "How to Use It" section

## What else should I know?

### Snippets are dynamically loaded by default

When you follow the instructions in the "How to Use It" section, then by default your application will load the snippet from a Cloudflare CDN that always contains the latest version of the snippet. This has the advantage of making sure your site picks up any fixes to the snippet that might have been necessary over time as Softr evolves and changes. But it has the disadvantage that a change to the snippet could possibly break your site at a time not of your choosing.

If you would prefer to avoid both the advantage and disadvantage of loading the snippet dynamically, you can copy and paste the snippet itself. At the bottom of each doc page there is a handy link that will take you to the raw code for the snippet, suitable for easy copying and pasting.

## I found a bug, what should I do?

Thank you for finding a bug! Please head over to the [issues](https://github.com/dcoletta/scissors/issues) page of this repository, create a new issue, and provide the following information:

* Which snippet you are using
* What you expected to happen when you tried to use it
* What actually happened
* Screenshots (if relevant)
* A link to a page of your app where the snippet is not working correctly (if that's feasible)

## How to contribute

See [CONTIRBUTING.md](./CONTRIBUTING.md).

## Why does Scissors exist?

I decided to try to get more organized about custom code snippets. For a while I was putting my custom code snippets in [unlock-softr.com](http://unlock-softr.com/), and that was way better than nothing. But I wanted some things that were going to be hard to do there:

* I wanted to make it easier for people to use custom code snippets in their Softr apps
* I wanted to make it easier for multiple people to collaborate on the code snippets
* I wanted to make it optionally possible for changes to a snippet to be able to propagate automatically to Softr sites that are using the snippet

I’m calling it ![:scissors:](https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/2702-fe0f@2x.png) Scissors since it’s all about code snippets.

In case you’re curious, the tools I used to build this are Github to store the snippets, CloudFlare CDN to publish the code snippets for inclusion into Softr pages, and Gitbook to make the documentation.

## What am I agreeing to by using this code?

Your use of code and documentation in this repository is governed by the [MIT License](LICENSE/).

