
export async function getVaxxed(){
    const options = {
        method: 'GET',
        url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-everything',
        headers: {
        'x-rapidapi-key': 'c26327474cmsh116fd96a61c2a52p11dc83jsn85d1ce0c9c72',
        'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
    };
    console.log(options);
 }

  $(function(){
    getVaxxed();
});