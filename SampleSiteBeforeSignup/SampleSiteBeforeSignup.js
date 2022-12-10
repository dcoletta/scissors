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