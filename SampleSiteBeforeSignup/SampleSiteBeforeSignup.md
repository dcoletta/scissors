---
description: >-
  SampleSiteBeforeSignup lets you make your site available for "sampling" some number
  of pages before making the user sign up in order to keep using it.
---

# SampleSiteBeforeSignup.js

## How To Use It

In your site settings **Code Inside Header** section, put the following code:

```
<script src="https://scissors.appspan.net/SampleSiteBeforeSignup/SampleSiteBeforeSignup.js">
```

Or, if you want the counter of allowed page views to only be used on certain pages, 
you can put the above code into just the **Code Inside Header** section of one or more
individual pages.

## How to Customize It

Add the following before the `<script src=>` tag:

```
<script>
const SampleSiteBeforeSignup = {
    maxPageViewsBeforeSignUp: 5,    // number of pages the user is allowed to visit before being asked to sign up
    signUpSlug: '/register',        // slug of the page where your user can sign up
    signInSlug: '/signin',          // slug of the page where your user can sign in
    cookieName: 'pageViews'         // name of the cookie that keeps track of the number of visits
};
</script>
```

## What It Does

Every time a non-logged-in user visits your site on a page other than your sign-up or sign-in page,
a counter stored in a cookie is incremented. When the counter gets to the limit, then instead of
loading the page the user wanted to go to, the page that loads is the sign-up page.

## Read the Code

[SimpleSiteBeforeSignup.js](https://scissors.appspan.net/SimpleSiteBeforeSignup/SimpleSiteBeforeSignup.js)
