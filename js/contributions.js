var elements = document.getElementsByClassName("collapsible-header");
var arrowIcon = "<i class=\"caret material-icons\">keyboard_arrow_down</i>";
for (var i = 0; i < elements.length; i++) {
	elements[i].insertAdjacentHTML("beforeend", arrowIcon);
}
