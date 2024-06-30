const api_key = "5005bc7a8b4642d8916c1e958ccf26f4";
const api = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

function reload() {
    window.location.reload();
}
async function fetchNews(query)
{
    const res = await fetch(`${api}${query}&apiKey=${api_key}`);
    const data = await res.json();
    console.log(data);
    bindData(data.articles);
}
function bindData(article)
{
    const cardcontainer = document.getElementById("card-container");
    const newscardtemplate = document.getElementById("template-news-card");


    cardcontainer.innerHTML = "";

    article.forEach((article) => {
         if (!article.urlToImage) return;
        const cardClone = newscardtemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardcontainer.appendChild(cardClone);
    });
}
 


function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

      if (newsImg) {
        newsImg.src = article.urlToImage;
    } else {
        console.error("news-img element not found in template.");
    }

    if (newsTitle) {
        newsTitle.innerHTML = article.title;
    } else {
        console.error("news-title element not found in template.");
    }

    if (newsDesc) {
        newsDesc.innerHTML = article.description;
    } else {
        console.error("news-desc element not found in template.");
    }

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
    });

    if (newsSource) {
        newsSource.innerHTML = `${article.source.name} · ${date}`;
    } else {
        console.error("news-source element not found in template.");
    }
    cardClone.firstElementChild.addEventListener("click", () =>
    {
        window.open(article.url, "_blank");
})
} 

function onNavItemClick(id) {
    fetchNews(id);
    event.preventDefault();
}

const searchbtn = document.querySelector(".search-btn");
const searchtxt = document.querySelector(".input-box");

searchbtn.addEventListener("click", () =>
{
    const query = searchtxt.value;
    if (!query) return;
    fetchNews(query);

})