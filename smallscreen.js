const topbar = document.querySelector('#topbar');
function detectSmallScreen() {
	if(window.innerWidth < 700 && size != 'small') {
		topbar.style.display = 'block';
		topbar.innerHTML = `
<span class="menu-container">
	<span class="material-icons">
	menu
	</span>
</span>`;
		size = 'small';
		topbar.onclick = expandMenu;
	}
	
	if(window.innerWidth > 700 && size != 'large') {
		topbar.style.display = 'grid';
		topbar.innerHTML = `
<a href="/" id="l1">Home</a>
<a href="/compositions" id="l2">My compositions</a>
<a href="/codes" id="l3">My coding projects</a>`;
		size = 'large';
		topbar.onclick = null;
	}
}

let size = 'large';

window.onresize = detectSmallScreen;
detectSmallScreen();

function expandMenu() {	
	topbar.classList.add('expanded');
	topbar.innerHTML += `
<div id="menulist">
<a href="/">Home</a>
<a href="/compositions">My compositions</a>
<a href="/codes">My coding projects</a>
</div>
`
	topbar.querySelector('#menulist').onclick = ''
	topbar.onclick = collapseMenu;
}

function collapseMenu(){
	topbar.classList.remove('expanded');
	topbar.innerHTML = `<span class="menu-container">
	<span class="material-icons">
	menu
	</span>
</span>`;
	topbar.onclick = expandMenu;
}

var children = document.querySelector('.codingBackground').children;
var totalWidth = 0;

for (var i = 0; i < children.length; i++) {
    totalWidth += children[i].offsetHeight;
}