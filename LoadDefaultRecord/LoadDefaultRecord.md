---
description: >-
  LoadDefaultRecord is useful when you have a List Block and a List Details
  block on the same page, and you want to make sure that the List Details block displays
  a default record from the table when the page is loaded without a specific record ID
  on the URL.
---

# LoadDefaultRecord.js

## How To Use It

In your the **Code Inside Header** section of your page settings, put the following code:

```
<script src="https://scissors.appspan.net/LoadDefaultRecord/LoadDefaultRecord.js">
```

## How to Customize It

Add the following before the `<script src=>` tag:

```
<script>
const LoadDefaultRecord = {
    defaultRecordId: "abc123"    // Id of the record to display when no record Id is on the URL
};
</script>
```

## What It Does

When the page loads, it looks to see if there is a record Id specified on the URL, which could
either be in the `?recordId=` format or in the `/r/rec` format. If there is no record Id in either
of these formats, then it changes the URL to include the value of `defaultRecordId` and reloads
the page by calling `history.replaceState()` so that there is not an extra entry in the history.

## Read the Code

[LoadDefaultRecord.js](https://scissors.appspan.net/LoadDefaultRecord/LoadDefaultRecord.js)
