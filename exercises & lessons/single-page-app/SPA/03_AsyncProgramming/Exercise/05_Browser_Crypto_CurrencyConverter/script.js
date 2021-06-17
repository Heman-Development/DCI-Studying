

 function convert() {
    let cryptodd = document.getElementById('crypto');
    let currencydd = document.getElementById('currency');
    let cryptoVal, curVal;
    cryptodd.addEventListener('change', (e) => {
        cryptoVal = e.target.value
        console.log(cryptoVal);
    })

    currencydd.addEventListener("change", (e) => {
        curVal = e.target.value;
        console.log(curVal);
    });

    //make the url
    let button = document.querySelector('button');
    button.addEventListener('click', async (e) => {
        e.preventDefault()
        try {
            let url = `https://api.cryptonator.com/api/ticker/${cryptoVal}-${curVal}`
            let Response = await fetch(url, { method: 'GET'});
            let data = await Response.json();
            console.log(data);

            //read amount
            let amount = document.getElementById("cryptoAmount").value || 1;
            let result = amount * data.ticker.price;
            console.log('result: ', result);

            //display result
            document.getElementById('result').value = result.toFixed(2);
        } catch (error) {
            console.log(error.message);
        }
    })
    //send a request
   // console.log(data);
}
convert()