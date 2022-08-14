//fetch newscatcher api data
var url = "https://api.newscatcherapi.com/v2/search?q=bitcoin";
fetch(url, {
  headers: { "x-api-key": "C1WcsheJv-MBZTYHt7uzmC6lPuJIF_JqpSYI0oTbylw" },
})
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    for (let i = 0; i < 10; i++) {
      // get title and content elements
      var accordionItemElContainer = $(".article_" + i.toString());
      var findEl = accordionItemElContainer.find(".article-wrap");
      var accordionTitleEl = findEl.children(".article-title");
      var accordionContentEl = findEl.children(".section-content");

      //append text to title and content elements
      accordionTitleEl.html(data.articles[i].title);
      accordionContentEl.text(data.articles[i].summary);

      //fetch translations goes here (might have to use settimeout to delay each fetch)
    }

    // BOILERPLATE TRANSLATION CODE (needs to be added to for loop above)
    // var newurl = "https://translation.googleapis.com/language/translate/v2?";
    // fetch(
    //   newurl +
    //     new URLSearchParams({
    //       q: "hello",
    //       target: "Fr",
    //       source: "En",
    //       key: "AIzaSyC-uuEmmJHjs_ghh1d1DdTH3Ks7BaoGCsc",
    //     })
    // )
    //   .then((res) => {
    //     console.log(res);
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });

    return data;
  });

var section = $("li");

function toggleAccordion() {
  section.removeClass("active");
  $(this).addClass("active");
}

section.on("click", toggleAccordion);
