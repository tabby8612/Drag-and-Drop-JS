const lists = document.querySelectorAll(".list");
const rightbox = document.getElementById("right");
const leftbox = document.getElementById("left");




lists.forEach(list => {
    list.addEventListener("dragstart", (e) => {
        let selected = e.target;


        rightbox.addEventListener("dragover", (e) => {
            e.preventDefault();
        });


        rightbox.addEventListener("drop", (e) => {
            rightbox.appendChild(selected);
            selected = null;
        });

        leftbox.addEventListener("dragover", (e) => {
            e.preventDefault();
        });


        leftbox.addEventListener("drop", (e) => {
            leftbox.appendChild(selected);
            selected = null;
        });


    })
});