console.log("hello");

var url =
  "https://newsapi.org/v2/everything?q=Apple&from=2022-08-12&sortBy=popularity&apiKey=675890dbd40c4693ae6881a08a35f40c";
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
