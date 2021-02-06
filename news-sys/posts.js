var newsDiv = document.getElementById("newsDiv");

var newsSrc = "https://yeetree.github.io/ElectronBuilderSite/news-sys/";

//a list of posts to be shown in the NEWS section
var postList = ["2-6-2021.html", "2-6-2021-2.html"];

var i;
function uploadPosts() {
  for (i = 0; i <postList.length; i++) {
    newsDiv.innerHTML += "<iframe src='" + newsSrc + postList[i] + "'</iframe>"
  }
}
