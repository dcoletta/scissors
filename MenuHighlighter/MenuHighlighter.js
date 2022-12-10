/*
    Name: MenuHighlighter.js
    What it does: adds a background highlight to the selected link in your app header
    How to use: add <script src="https://scissors.appspan.net/MenuHighlighter/MenuHighlighter.js"> 
                to your site's Code Inside Footer
    How to customize: change the value of the backgroundColor variable
*/
const backgroundColor = "#C4B8DA";  // change this value to customize the background color

const nav = $("nav");
const currentSlug = document.location.pathname;
const anchors = nav.find("a");
// For all the anchors in the nav bar
anchors.each(function() {
  const anchor = $(this);
  const anchorHref = $(this).attr('href');
  // Skip the link to the home page
  if (anchorHref === "/") {
    return true;
  }
  // Otherwise, if the current slug starts with this link,
  // apply some CSS to it.
  if (currentSlug.startsWith(anchorHref)) {
    anchor.css("background-color", backgroundColor);
    return false;
  }
  return true;
});
