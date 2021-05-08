
export async function getVaxxed(event){
    const options = await axios({
        method: 'GET',
        url: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/random_masks_usage_instructions.php',
        headers: {
          'x-rapidapi-key': 'c26327474cmsh116fd96a61c2a52p11dc83jsn85d1ce0c9c72',
          'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com'
        }
      });
      console.log(options);
      const toApp = `<div id = "randPic">
      <img src ="${options}" id = "covidPic" alt= "randomCovidPic">

      </div>`
      $("#randForm").replaceWith(toApp);


 }
 export async function randomButton(){
    const $root = $('#root');
    const news =  `<div id = "randForm">
      <button type = "button" id = "getTips"> Show me a Covid infographic </button>
      </div>`
      $root.append(news);
      
        $root.on("click", "#getTips", (event)=> getVaxxed(event));
  
  }
  $(function(){
      randomButton();
  });
