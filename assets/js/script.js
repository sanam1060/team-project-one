
function runFetch(searchterm){
//fetch newscatcher api data
var url = "https://api.newscatcherapi.com/v2/search?q="+searchterm.toString();
fetch(url, {
  headers: { "x-api-key": "C1WcsheJv-MBZTYHt7uzmC6lPuJIF_JqpSYI0oTbylw" },
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    for (let i = 0; i < 4; i++) {

      // get title and content elements
      var accordionItemElContainer = $(".article_" + i.toString());
      var findEl = accordionItemElContainer.find(".article-wrap");
      var accordionTitleEl = findEl.children(".article-title");
      var accordionContentEl = findEl.children(".section-content");

      //append text to title and content elements
      accordionTitleEl.html(data.articles[i].title);
      accordionContentEl.text(data.articles[i].summary);

     // key: "AIzaSyC-uuEmmJHjs_ghh1d1DdTH3Ks7BaoGCsc",
      // AIzaSyD5vJqs8qC6pjL1M64n60kvmrCI4ET8Jiw
      var newurl = "https://translation.googleapis.com/language/translate/v2?";
      fetch(
        newurl +
        new URLSearchParams({
          q:  data.articles[i].title +"###"+  data.articles[i].summary,
          target: "Es",
          source: "En",
          key:"AIzaSyD5vJqs8qC6pjL1M64n60kvmrCI4ET8Jiw",
        })
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data)
          var accordionItemElContainer2 =$(".article_" + i.toString());
          var findEl2 = accordionItemElContainer2.find(".article-wrap2");
          var accordionTitleEl2 = findEl2.children(".article-title2");
          var accordionContentEl2 = findEl2.children(".section-content2");
          
          var split1 = data.data.translations[0].translatedText.split("###")
          var title = split1[0].replaceAll("&#39;","'")
          var content = split1[1].replaceAll("&#39;","'")
          accordionTitleEl2.text(title)
          accordionContentEl2.text(content)   
      });  
    }
  });
}

//accordion js
var section = $("li");
function toggleAccordion() {
  section.removeClass("active");
  $(this).addClass("active");
}
section.on("click", toggleAccordion);

//search term fetch apis
runFetch("bitcoin")
$(".searchtermbutton").on("click",function(){
  
    var searchTerm = $(".searchterm").val()
    runFetch(searchTerm)
})