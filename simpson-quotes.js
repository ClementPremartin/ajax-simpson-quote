// This function loads pokemon data from the Pokemon API
function fetchSimpsonQuoteJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
   
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes?count=12`;
    axios.get(url)
      .then(function(response) {
        return response.data; // response.data instead of response.json() with fetch
      })
      .then(function(data) {
        console.log('data decoded from JSON:', data[0]);
  
        // Build a block of HTML
        const quoteHtml = `
          <p><strong>${data[0].quote}</strong></p>
          <p>${data[0].character}</p>
          <img src="${data[0].image}" />
        `;
        console.log(data[0].quote);
        console.log(data[0].character);
        console.log(data[0].image);
       
        document.querySelector('#quote').innerHTML = quoteHtml;
      }); 
  }
  const button = document.getElementById("button");
      button.addEventListener("click", function() {
        fetchSimpsonQuoteJSON()
      })
  
  fetchSimpsonQuoteJSON();

