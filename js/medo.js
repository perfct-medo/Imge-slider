let imges = document.querySelectorAll(".contaner img");
let polits = document.querySelectorAll("ul  li");
let left = document.querySelector("#left");
let right = document.querySelector("#right");
let cont = 0;
// console.log(polits);

setInterval(() => {
    imges.forEach((e) => {
        e.classList.remove("active");
    });
    polits.forEach((e) => {
        e.classList.remove("clon");
    });
    if (cont === 4) {
        cont = 0;
        imges[cont].classList.add("active");
        polits[cont].classList.add("clon");
    } else if (cont !== 4) {
        cont++;
        imges[cont].classList.add("active");
        polits[cont].classList.add("clon");
    } else if (cont === 0) {
        cont = 4;
        imges[cont].classList.add("active");
        polits[cont].classList.add("clon");
    } else if (cont !== 0) {
        cont--;
        imges[cont].classList.add("active");
        polits[cont].classList.add("clon");
    } else {}
    cont = e.innerHTML - 1;
}, 4000);

left.addEventListener("click", function() {
    imges.forEach((e) => {
        e.classList.remove("active");
    });
    polits.forEach((e) => {
        e.classList.remove("clon");
    });

    if (cont === 0) {
        cont = 4;
        imges[cont].classList.add("active");
        polits[cont].classList.add("clon");
    } else {
        cont--;
        imges[cont].classList.add("active");
        polits[cont].classList.add("clon");
    }
});
right.addEventListener("click", function() {
    imges.forEach((e) => {
        e.classList.remove("active");
    });
    polits.forEach((e) => {
        e.classList.remove("clon");
    });
    if (cont === 4) {
        cont = 0;
        imges[cont].classList.add("active");
        polits[cont].classList.add("clon");
    } else {
        cont++;
        imges[cont].classList.add("active");
        polits[cont].classList.add("clon");
    }
});
// polits

polits.forEach((e) => {
    e.addEventListener("click", function() {
        polits.forEach((e) => {
            e.classList.remove("clon");
        });
        e.classList.add("clon");
        imges.forEach((e) => {
            e.classList.remove("active");
        });
        cont = e.innerHTML - 1;
        imges[cont].classList.add("active");
    });
});

//