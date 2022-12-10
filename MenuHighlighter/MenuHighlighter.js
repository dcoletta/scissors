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
    anchor.css("background-color","#C4B8DA");
    return false;
  }
  return true;
});
