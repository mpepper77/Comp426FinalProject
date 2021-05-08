export async function handleNewsPress(event){
    const $root = $('#root');
    const location = $("#getNews").val();
    console.log(location)
    const options = await axios ({
      method: 'GET',
      url: 'https://newsapi.org/v2/top-headlines?q=coronavirus&apiKey=6be8acb89056400f8ca8f5860f583b38'
    });
    const temp = options.data.articles;
    console.log(temp);
    for(let i = 0; i < 20; i++){
        console.log(temp[i]);
            const toApp = ` <div id = "article">
        <a id= "title" href= "${temp[i].url} target="_blank"> ${temp[i].title} </a>
        <h2 id = "author"> ${temp[i].author}  </h1>
        <img src ="${temp[i].urlToImage}" id = "newspic" alt= "article photo">
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
    const news =  `<div id = "locForm">
      <button type = "button" id = "getNews">Get the Latest News </button>
      </div>`
      $root.append(news);
      
        $root.on("click", "#getNews", (event)=> handleNewsPress(event));
  
  }
  $(function(){
      newsButton();
  });