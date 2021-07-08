"use strict";


    const apiUrl = "https://api.cryptonator.com/api/ticker";
    const entryField = document.querySelector(".entryField");
    const outputField = document.querySelector(".outputField");
    const form = document.querySelector("#conversion-form");
    const input = document.querySelector("#cryptoInput");
    const output = document.querySelector("#cryptoOutput");
    const inputAmount = document.querySelector("#cryptoInput");

    const registerEvents=async()=>{
        console.log(`${apiUrl}/${entryField.value}-${outputField.value}`)
          let data = await fetch(`${apiUrl}/${entryField.value}-${outputField.value}`)
          let jsonData= await data.json()
          output.value = (jsonData.ticker.price * input.value).toFixed(2)
       }
        
    form.addEventListener("submit", e => {
            e.preventDefault();
            registerEvents()
        })