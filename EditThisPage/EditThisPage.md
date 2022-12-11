---
description: >-
  Add an "Edit This Page" button that only you can see, which when clicked takes
  you to that page in the Softr studio.
---

# EditThisPage.js

## What It Looks Like

![image](https://community.softr.io/uploads/db9110/optimized/1X/f91410d5c7f08c1f191486cfb68c6c692fc3a9ff\_2\_464x500.png)

## How To Use It

In your the **Code Inside Footer** section of your page settings, put the following code:

```
<script src="https://scissors.appspan.net/EditThisPage/EditThisPage.js">
```

## How to Customize It

Add the following before the `<script src=>` tag:

```
<script>
const EditThisPage = {
  superUserEmail: "admin@example.com",  // replace this with your superuser email address
  buttonTitle: "Edit this page",        // default button title, replace with your preference
  buttonStyle: "position: fixed; z-index: 9999999; left: 20px; bottom: 60px"  // default button style
};
</script>
```

## What It Does

When the page loads, this script looks to see if the super user account is logged in. If it is, it creates an "Edit this page' button and adds it to the page. When you click the button, it opens the page editor for this page in the Softr studio, in another browser tab.

## Read the Code

[EditThisPage.js](https://scissors.appspan.net/EditThisPage/EditThisPage.js)
