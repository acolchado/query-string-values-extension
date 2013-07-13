window.onload = function(){
	var manifest = chrome.runtime.getManifest();

	document.getElementById("header").innerText = manifest.name;
	document.getElementById("version").innerText = "Version: " + manifest.version;
};