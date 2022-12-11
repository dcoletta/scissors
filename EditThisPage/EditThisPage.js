/*
MIT License

Copyright (c) 2022 David Coletta

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Defaults
var superUserEmail = "";
var buttonTtile = "Edit this page";
var buttonStyle = "position: fixed; z-index: 9999999; left: 20px; bottom: 60px";

// Overrides
if (typeof EditThisPage === "object") {
    if (EditThisPage.hasOwnProperty('superUserEmail')) {
        superUserEmail = EditThisPage.superUserEmail;
    }
    if (EditThisPage.hasOwnProperty('buttonTitle')) {
        superUserEmail = EditThisPage.buttonTitle;
    }
    if (EditThisPage.hasOwnProperty('buttonStyle')) {
        superUserEmail = EditThisPage.buttonStyle;
    }
}

// Code
function editThisPage() {
    const appId = document.querySelectorAll("div[data-appid]")[0].attributes['data-appid'].value;
    const pageId = document.querySelectorAll("div[data-appid]")[0].attributes['data-pageid'].value
    const url = `https://studio.softr.io/applications/${appId}/pages/${pageId}`
    window.open(url);
}
if (typeof logged_in_user === 'object' && logged_in_user.softr_user_email === superUserEmail) {
    const buttonNode = document.createElement("input");
    // <input style="position: fixed; z-index: 9999999; left: 20px; bottom: 60px" 
    //  type="button" value="Edit this page" onclick='editThisPage()')">
    buttonNode.setAttribute("style", buttonStyle);
    buttonNode.setAttribute("type", "button");
    buttonNode.setAttribute("value", buttonTtile);
    buttonNode.setAttribute("onClick", "editThisPage()");
    document.body.appendChild(buttonNode);
}