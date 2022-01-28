var a = document.querySelector('a');
a.onclick=(e) => {
	e.preventDefault();
	window.scroll(0, findPosition(document.querySelector(".mainbody"))-a.offsetHeight);
}
function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
        do {
            currenttop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [currenttop];
    }
}