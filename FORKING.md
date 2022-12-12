# FORKING.md

## Why?

Suppose you like the idea of a repository of Softr code snippets, but you're
not sure you want to trust someone else to host that code for you in your live
sites. After all, if this service goes down, your sites might break.

Here's the solution: fork it!

## How?

- In Github, fork this repo
- Sign up for a free CloudFlare CDN account
- Connect the CDN to your forked repo 
- Sign up for a free Gitbook account
- Connect Gitbook to your forked repo
- (Optionally) create a subdomain such as scissors.example.com and connect it to the CDN
- (Optionally) create a subdomain such as scissors-docs.example.com and connect it to Gitbook

After you do the above, you'll be able to get all the benefits of a snippet code
repository, but you'll have full control over how it is hosted, and you can make
sure it keeps running. You can even merge some or all the code 
from the main repo periodically so you stay up to date. Or not, your choice!

## Are those subdomains important?

You don't have to create and use them in order for this approach to serve its
main purpose. However, if you do host your snippets from domains that you control,
then it will be possible for you to change the hosting services without having
to go back into your Softr apps and update them. For example, if some day you
you want to use a different CDN instead of CloudFlare, you'll be able to switch
it out in a way that is transparent to the sites that are depending on the code
snippets.