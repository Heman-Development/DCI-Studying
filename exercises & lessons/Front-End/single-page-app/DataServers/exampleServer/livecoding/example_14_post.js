

let formData = {};

function registerListenersToInputs() {
    let inputs = document.querySelectorAll(`input[type="text"]`);
    let regbtn = document.querySelector(`input[type="submit"]`);

    for (let elem of inputs) {
        elem.addEventListener('change', (e) => {
            formData = {...formData, [e.target.name]:e.target.value}
        })
    }

    //eventlistener for btn
    regbtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        fetch('http://localhost:3000/users/register', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type":"application/json"
            }
        }).then(response => {
            return response.json()
        }).then(jresponse => {
            console.log(jresponse);
        })

    })
}

registerListenersToInputs();
