
        function add() {
    const input = document.getElementById("display");
    const li = document.getElementById("newLi");

    if (input.value.trim() !== "") {
        const list = document.createElement("li");
        const span = document.createElement("span");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
             checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                span.style.textDecoration = "line-through";
            } else {
                span.style.textDecoration = "none";
            }
        });

        span.textContent = input.value;

        const delButton = document.createElement("button");
        delButton.textContent = "delete";
        delButton.classList.add("btn");

        delButton.addEventListener("click", function () {
            list.remove();
        });

        list.appendChild(checkbox);
        list.appendChild(span);
        list.appendChild(delButton);

        li.appendChild(list);

        input.value = "";
    }
}