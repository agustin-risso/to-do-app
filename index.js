const button = document.getElementById("button-task");
const inputTask = document.getElementById("input-task");
const divTask = document.getElementById("task-container");

// Execute a function when the user presses a key on the keyboard
inputTask.addEventListener("keypress", function (event) {
	// If the user presses the "Enter" key on the keyboard
	if (event.key === "Enter") {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		button.click();
	}
});

button.addEventListener("click", function () {
	if (inputTask.value === "") {
		alert("Debes escribir algo!");
	} else {
		let span = document.createElement("span");
		let check = document.createElement("i");
		check.classList.add("bx", "bx-check");
		let remove = document.createElement("i");
		remove.classList.add("bx", "bx-x");
		let div = document.createElement("div");
		let li = document.createElement("li");
		li.innerHTML = inputTask.value;
		span.appendChild(check);
		span.appendChild(remove);
		div.appendChild(li);
		div.appendChild(span);
		divTask.appendChild(div);
		inputTask.value = "";

		check.addEventListener("click", function () {
			if (li.classList.contains("line-through")) {
				li.classList.remove("line-through");
			} else {
				li.classList.add("line-through");
				span.classList.add("decoration-none");
			}
		});

		remove.addEventListener("click", function () {
			div.remove();
		});
	}
});
