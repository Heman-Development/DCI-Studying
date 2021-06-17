

//read data
let formData = {};

function registerListenersToInputs () {
    let inputs = document.querySelectorAll(`input[type="text"]`);
    let regbtn = document.querySelector(`input[type="submit"]`)
    
    for (let elem of inputs) {
        elem.addEventListener('change', (e) => {
            formData = { ...formData, [e.target.id]: e.target.value }
            console.log(formData);
        })
    }


    //add listener to register btn
    regbtn.addEventListener('click', function(e) {
        e.preventDefault();

        //send a post request
        fetch("http://localhost:3000/users/register", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            return response.json();
        }).then((jresp) => {
            console.log(jresp)
        })
    })
}

registerListenersToInputs()