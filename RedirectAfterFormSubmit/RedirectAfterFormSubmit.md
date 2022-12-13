---
description: >-
  After a form submit to Make, redirect your user to another page defined in the Make automation.
---

# EditThisPage.js

## How To Use It

In your the **Code Inside Footer** section of your page settings, put the following code:

```
<script src="https://scissors.appspan.net/RedirectAfterFormSubmit/RedirectAfterFormSubmit.js">
```

Then, in your form's Features section, under Destination choose Send to Make and follow the instructions in the blue box. Fill in the Webhooks response action in Make so that the Body contains `{"redirect": "https://google.com"}`, substituting your destination URL for `https://google.com`.

## How to Customize It

Add the following before the `<script src=>` tag:

```
<script>
const RedirectAfterFormSubmit = {
  formId: "form1",
  redirectPropName: "redirect"
};
</script>
```

{% hint style="info" %}
You don't need to supply all these override values, just the ones you want to change from the default values.
{% endhint %}

## What It Does

After the form is successfully submitted to Make, the script looks at the response body, gets the value for `redirect` (or whatever property name you have specified), and then navigates the browser to that string as a URL.

## Read the Code

{% embed url="https://github.com/dcoletta/scissors/blob/main/RedirectAfterFormSubmit/RedirectAfterFormSubmit.js" %}
