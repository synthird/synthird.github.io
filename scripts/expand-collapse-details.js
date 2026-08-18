const expandCollapseAll = document.getElementById("expand-collpase-all"),
	details = document.getElementsByTagName("details");

function toggleDetails(opened) {
	for (const detail of details) {
		detail.open = opened;
	}
}

expandCollapseAll.addEventListener("click", event => {
	const buttonText = event.target.textContent;

	if (buttonText === "Expand all") {
		toggleDetails(true);
	} else if (buttonText === "Collapse all") {
		toggleDetails(false);
	}
});
