export async function handleNewsPress(event){
    const $root = $('#root');
    const location = $("#getNews").val();
    console.log(location)
    const options = await axios ({
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: {q: 'coronavirus', safeSearch: 'Off', textFormat: 'Raw', freshness: 'Day'},
      headers: {
        'x-bingapis-sdk': 'true',
        'accept-language': 'english',
        'x-rapidapi-key': 'c26327474cmsh116fd96a61c2a52p11dc83jsn85d1ce0c9c72',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com'
      }
    });
    const temp = options.data.value;
    console.log(temp);
    for(let i = 0; i < 5; i++){
        console.log(temp[i]);
            const toApp = ` <div id = "article">
        <a id= "title" href= "${temp[i].url}" target="_blank"> ${temp[i].name} </a>
        <img src ="${temp[i].image.thumbnail.contentUrl}" id = "newspic" alt= "article photo">
        <p id = "des"> ${temp[i].description}</p>
        </div>`
  
    $root.append(toApp);

    }
    // const toApp = ` <div id = "count">
    // <h1 id= "confirmed"> ${options.data[0].confirmed} Confirmed Cases </h1>
    // <h id = "deaths"> ${options.data[0].deaths} Deaths </h1>
    //   </div>`
  
    // //$root.append(toApp);
    // $("#locForm").replaceWith(toApp);
    
    
  }
  export async function newsButton(){
    const $root = $('#root');
    const news =  `<div id = "news">
      <button type = "button" id = "getNews">Get the Latest News </button>
      </div>`
      $root.append(news);
      
        $root.on("click", "#getNews", (event)=> handleNewsPress(event));
  
  }
  $(function(){
      newsButton();
  });