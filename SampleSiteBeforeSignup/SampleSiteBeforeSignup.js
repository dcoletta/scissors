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
var maxPageViewsBeforeSignUp = 5;
var signUpSlug = '/register';
var signInSlug = '/signin';
var cookieName = 'pageViews';

// Overrides
if (typeof SampleSiteBeforeSignup === "object") {
    if (SampleSiteBeforeSignup.hasOwnProperty('maxPageViewsBeforeSignUp')) {
        maxPageViewsBeforeSignUp = SampleSiteBeforeSignup.maxPageViewsBeforeSignUp;
    }
    if (SampleSiteBeforeSignup.hasOwnProperty('signUpSlug')) {
        signUpSlug = SampleSiteBeforeSignup.signUpSlug;
    }
    if (SampleSiteBeforeSignup.hasOwnProperty('signInSlug')) {
        signInSlug = SampleSiteBeforeSignup.signInSlug;
    }
    if (SampleSiteBeforeSignup.hasOwnProperty('cookieName')) {
        cookieName = SampleSiteBeforeSignup.cookieName;
    }
  }

// Code
function isLoggedIn() {
    return (typeof(logged_in_user) === "object");
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, newValue) {
    document.cookie = `${name}=${newValue}`;
    return newValue;
}

function incrementPageViews() {
    var pageViews = parseInt(getCookie(cookieName));
    if (isNaN(pageViews)) {
        pageViews = 0;
    }
    pageViews += 1;
    return setCookie(cookieName, pageViews);
}

if (!isLoggedIn() && document.location.pathname !== signUpSlug && document.location.pathname !== signInSlug) {
    if (incrementPageViews() > maxPageViewsBeforeSignUp) {
        document.location.replace(signUpSlug);
    }
}