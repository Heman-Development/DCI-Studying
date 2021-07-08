import "../style/style.scss";

//import Github from './github_serve';
import { Github } from './Github.js';

/* let gh = new Github('#cont');
gh.init(); */
let githubApi = new Github('#cont');
githubApi.init();
//new Github('#cont').init();
