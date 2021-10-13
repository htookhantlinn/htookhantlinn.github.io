// $(document).ready(function () {
//     $(window).scroll(function () {
//         if ($(window).scrollTop() > $(window).height()) {
//             console.log("hello")
//             document.querySelector('nav').classList.add('d-none')
//         }
//         else {
//             $(".menu").css({ "background-color": "white" });
//         }

//     })
// })

//counter
let speed = 200;
let counters = document.querySelectorAll('.counter')
function counterStart() {
    counters.forEach(counter => {
        const updateCount = () => {
            let count = +counter.innerText
            let data_target = +counter.getAttribute('data-target')
            let inc = data_target / speed;

            if (count < data_target) {
                counter.innerText = Math.ceil(count + inc)
                setTimeout(updateCount, 100);
            } else {
                counter.innerText = data_target
            }
        }
        updateCount()
    });
}

$(window).on('scroll', function () {
    if (window.pageYOffset > 2500) {
        counterStart()
    }

});

//counter end


window.addEventListener('scroll', () => {
    console.log(window.screenY)
    console.log(window.screenX)
    console.log(window.pageYOffset)
    if (window.pageYOffset > 100)
        document.querySelector('nav').classList.remove('bg-transparent')
    else
        document.querySelector('nav').classList.add('bg-transparent')

})


function collapseText(column) {
    document.querySelector(`.collapse_column${parseInt(column)}_text`).classList.remove('d-none')
}

function deCollapseText(column) {
    document.querySelector(`.collapse_column${parseInt(column)}_text`).classList.add('d-none')

}

//grayscale
function removeGrayScale(img) {
    img.style.cursor = 'pointer';
    img.style.filter = 'grayscale(0%)';
}

function addGrayScale(img) {
    img.style.filter = 'grayscale(100%)';
}

let items = document.querySelectorAll('#recipeCarousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})