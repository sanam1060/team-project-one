url =
  "https://gnews.io/api/v4/search?q=bitcoin&token=ebf3fd10f6575580a0d6f4f576b71307";

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    var summary = document.createElement("p");
    summary.textContent = data.articles[0].content;
    console.log(data.articles[0].content);
    var body = document.querySelector("body");
    body.appendChild(summary);
  });
