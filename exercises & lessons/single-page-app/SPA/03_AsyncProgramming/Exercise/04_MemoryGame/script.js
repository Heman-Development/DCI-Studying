/* Product details:
    1- create table 4x4
    2- set an image randomly to every cell
    3- onclick on the cells the images should flip back
    4- after selecting the second image, they should be compared and
    if they are matched keep them visible otherwise flip them back after 2 second
    5- on every correct attempt, the use get 10points, and on failures 10 point deducted
    6- user has 90sec to finish the game otherwise the game we be restarted
    7- if user finish the game successfully on time then
    we should display a modal with greeting message and points and time
    8- we should have a restart button to be able to restart the game at anytime */
/* async function getRandomPics() {
  // body

  let pics = [];
  await fetch("https://www.randomuser.me/api/?results=8")
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      //console.log(results.results);
      results.results.forEach((user) => {
        pics.push(user.picture.large);
      });
    });

  console.log(pics);

  pics.map((pic) => {
    let img1 = document.createElement("img");
    img1.src = pic;

    let img2 = document.createElement("img");
    img2.src = pic;
    document.body.appendChild(img1);
    document.body.appendChild(img2);
  });
}

getRandomPics(); */

//let pics = [];
/* const getUsers = () => {
  fetch("https://www.randomuser.me/api/?results=5")
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
        jsonData.results.map(user => {
            pics.push(user.picture.large);
        });
    });

}; */

async function getUsers() {
  let response = await fetch("https://randomuser.me/api/?results=8");
  let jsData = await response.json();
  return { users: jsData.results };
}

let pictures = [];
const usersList = async () => {
    console.log('test');
  console.log(getUsers());
};

