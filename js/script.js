// document.onload(
//
// )
var elements = document.getElementsByClassName("collapsible-header"); // get all elements with class 'B'
for (var i = 0; i < elements.length; i++) { // for every element with class 'B':
	elements[i].insertAdjacentHTML("beforeend", "<i class=\"caret material-icons\">keyboard_arrow_down</i>");
	// insert text just inside the element
}
