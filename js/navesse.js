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

function addGrayScale(img){
    img.style.filter = 'grayscale(100%)';
}