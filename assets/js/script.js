console.log("hello");

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
      var name = ".accordion__item__" + i.toString();
      var accordionItemEl = $(name);
      var accordionTitleEl = accordionItemEl.children(".accordion__title");
      var accordionContentEl = accordionItemEl.children(".accordion__content");
      // console.log(accordionTitleEl);
      accordionTitleEl.html(
        data.articles[i].title +
          '<div class="bmenu x7"><span class="btop"></span><span class="bmid"></span><span class="bbot"></span></div>'
      );
      accordionContentEl.text(data.articles[i].summary);
    }

    return data;
  });

$(function () {
  $(".accordion")
    .find(".accordion__title")
    .click(function () {
      // Adds active class
      $(this).toggleClass("active");
      // Expand or collapse this panel
      $(this).next().slideToggle("fast");
      // Hide the other panels
      $(".accordion__content").not($(this).next()).slideUp("fast");
      // Removes active class from other titles
      $(".accordion__title").not($(this)).removeClass("active");
    });
});
