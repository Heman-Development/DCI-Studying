export class Github {
  constructor(target) {
    this.target = target;
    this.url;
    this.username;
    this.result;
    this.populatedTemp;

    this.elements = {};
  }

  //to generate the search form
  generateForm = function () {
    return `
            <form class='form-inline'>
                <div class="d-flex justify-content-stretch w-100">
                <label class="sr-only" for="uname">UserName</label>
                <input type="text" class="form-control mb-3 uname" id="uname" placeholder="Username..." />
                <input type="button" class="btn btn-primary mb-3 search-btn float-right" value="Search" id="search-btn"/>
                </div>
            </form>
            
        `;
  };

  registerListeners = function () {
    this.elements.input = document.querySelector("#uname");
    this.elements.btn = document.querySelector("#search-btn");
    this.elements.results = document.querySelector("#results");
    //console.log(this.elements.input);
    this.elements.input.addEventListener("change", (e) => {
      this.username = e.target.value;
      console.log(this);
    });

    this.elements.btn.addEventListener("click", (e) => {
      console.log(this.username);
      if (this.username) {
        this.searchForRepos(this.username).then((reposArray) => {
          //reset populatedTemp
          this.populatedTemp = "";
          for (let repo of reposArray) {
            this.populatedTemp += this.displayRepositories(repo);
          }
          this.elements.results.innerHTML = this.populatedTemp;
        });
      }
    });
  };

  //to send a request to api and fetch the public repositories of a user
  searchForRepos = async function (uname) {
    this.url = `https://api.github.com/users/${uname}/repos`;
    let response = await fetch(this.url);
    let jresponse = await response.json();
    return jresponse;
  };

  //template to display the list of repositories
  displayRepositories = function (repo) {
    return `
        <a href="${repo.url}"
           target="_blank"
           class="list-group-item list-group-item-action flex-column align-items-start ">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${repo.name}</h5>
            <small>${repo.created_at}</small>
          </div>
          <p class="mb-1">
            ${repo.description}
          </p>
        </a>
    `;
  };

  //to initialize the project
  init = function () {
    let cont = document.querySelector(this.target);
    cont.innerHTML = this.generateForm();
    this.registerListeners();
  };
}
