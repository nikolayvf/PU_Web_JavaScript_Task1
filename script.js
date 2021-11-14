var htmlFirst, htmlSecond;
function allowDrop(event) {
    event.preventDefault();
}

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById(data).style.margin = "1px";
}
function isTrueSecondTask() {
    var firstGapFirstChild = document.getElementById("firstGap").firstChild;
    var secondGapFirstChild = document.getElementById("secondGap").firstChild;

    var isTrueFirst = firstGapFirstChild !== null && firstGapFirstChild.id === "firstOption";
    var isTrueSecond = secondGapFirstChild !== null && secondGapFirstChild.id === "secondOption";

    isTrueFirst ? document.getElementById("firstGap").style.borderBottom = "2px dotted green" :
        document.getElementById("firstGap").style.borderBottom = "2px dotted red";
    isTrueSecond ? document.getElementById("secondGap").style.borderBottom = "2px dotted green" :
        document.getElementById("secondGap").style.borderBottom = "2px dotted red";
}
function isTrueFirstTask() {
    var firstGapFirstChild = document.getElementById("firstLiGap").firstChild;
    var secondGapFirstChild = document.getElementById("secondLiGap").firstChild;
    var thirdGapFirstChild = document.getElementById("thirdLiGap").firstChild;

    var isTrueFirst = firstGapFirstChild !== null && firstGapFirstChild.id === "secondOptionLi";
    var isTrueSecond = secondGapFirstChild !== null && secondGapFirstChild.id === "firstOptionLi";
    var isTrueThird = thirdGapFirstChild !== null && thirdGapFirstChild.id === "thirdOptionLi";

    isTrueFirst && isTrueSecond && isTrueThird ? document.getElementById("firstLiGap").style.borderBottom = "2px dotted green" :
        document.getElementById("firstLiGap").style.borderBottom = "2px dotted red";
    isTrueFirst && isTrueSecond && isTrueThird ? document.getElementById("secondLiGap").style.borderBottom = "2px dotted green" :
        document.getElementById("secondLiGap").style.borderBottom = "2px dotted red";
    isTrueFirst && isTrueSecond && isTrueThird ? document.getElementById("thirdLiGap").style.borderBottom = "2px dotted green" :
        document.getElementById("thirdLiGap").style.borderBottom = "2px dotted red";

}
function tryAgain() {
    var container = document.getElementById("second-task");
    container.innerHTML = htmlSecond;
}
function tryAgainFirst() {
    var container = document.getElementById("first-task");
    container.innerHTML = htmlFirst;
}
window.onload = function () {
    htmlFirst = document.getElementById("first-task").innerHTML;
    htmlSecond = document.getElementById("second-task").innerHTML;
};