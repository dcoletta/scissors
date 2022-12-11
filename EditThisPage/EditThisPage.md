---
description: >-
  Add an "Edit This Page" button that only you can see, which when clicked takes
  you to that page in the Softr studio.
---

# EditThisPage.js

## What It Looks Like

<figure><img src="../.gitbook/assets/f91410d5c7f08c1f191486cfb68c6c692fc3a9ff.png" alt="A screen shot of a site that uses the &#x22;Edit this page&#x22; script to add a button that lets you edit the page in the Softr studio."><figcaption><p>A screen shot of a site that uses the "Edit this page" script to add a button that lets you edit the page in the Softr studio.</p></figcaption></figure>

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

{% hint style="info" %}
You don't need to supply all these override values, just the ones you want to change from the default values.
{% endhint %}

## What It Does

When the page loads, this script looks to see if the super user account is logged in. If it is, it creates an "Edit this page" button and adds it to the page. When you click the button, it opens the page editor for this page in the Softr studio, in another browser tab.

## Read the Code

[EditThisPage.js](https://scissors.appspan.net/EditThisPage/EditThisPage.js)

{% embed url="https://raw.githubusercontent.com/dcoletta/scissors/main/EditThisPage/EditThisPage.js" %}
