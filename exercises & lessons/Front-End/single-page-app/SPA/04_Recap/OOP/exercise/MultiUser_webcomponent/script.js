import './UserProfile.js';

window.addEventListener('load', async () => {
    let res = await fetch('https://www.randomuser.me/api/?results=5');
    let jres = await res.json();
    let profiles = jres.results;

    let root = document.getElementById('root');

    profiles.forEach(x => {
        let userProfile = document.createElement('user-profile');
        userProfile.profile = x;
        root.appendChild(userProfile);
    });


    let removeProfilebtn = document.querySelector('button#remove-profile');
    removeProfilebtn.addEventListener('click', () => {
        console.log('btn clicked');
        root.removeChild(root.childNodes[0]);
    })
});