var table = document.getElementById("responses")
var actualTest = 0;
var currentTest = 0;
var percentperScript;
function mover() {
    var progressBar = document.getElementById("progressBar");
    var currentValue = parseInt(progressBar.getAttribute("aria-valuenow"));
    var width = currentValue + percentperScript
    progressBar.setAttribute("aria-valuenow", width.toString())
    console.log(width)
    progressBar.style.width = width + '%';

}

function insertTest(){
  actualTest += 1
  var row = table.insertRow();
  var cell = row.insertCell();
  cell.className = "active"
  cell.innerHTML = actualTest
}

function startScript(){
  table.rows.item(0).className = "info"
  percentperScript = 100/actualTest
}

function testResult(){
  mover()
  if(currentTest >= actualTest){
    return;
  }
  //Having it as ok for now should recieve a param true or false
  table.rows.item(currentTest).className = "success"
  //when the test fails
  //table.rows.item(currentTest).className = "danger"
  table.rows.item(currentTest+1).className = "info"
  currentTest += 1;
}
