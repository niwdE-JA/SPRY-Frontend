
function leftSlide (){
    let element = document.getElementsByClassName('slide-left')
    let numArray = element.length

    for( let i=0 ; i < numArray ; i++ ){
        let bound = element[i].getBoundingClientRect()

        if ( window.innerHeight - bound.top >= bound.height *(3/5) && bound.bottom <= (window.innerHeight) + ( element[i].offsetHeight)) {

            element[i].style.animation = '.8s ease 0s 1 normal none running slide-left'
            element[i].style.opacity = '1'
        }
    }
}

function rightSlide (){
    let element = document.getElementsByClassName('slide-right')
    let numArray = element.length

    for( let i=0 ; i < numArray ; i++ ){
        let bound = element[i].getBoundingClientRect()

        if ( window.innerHeight - bound.top >= bound.height *(3/5) && bound.bottom <= (window.innerHeight) + ( element[i].offsetHeight)) {

            element[i].style.animation = '.8s ease 0s 1 normal none running slide-right'
            element[i].style.opacity = '1'
        }
    }
}

function fadeIn (){
    let element = document.getElementsByClassName('fade-in')
    let numArray = element.length

    for( let i=0 ; i < numArray ; i++ ){
        let bound = element[i].getBoundingClientRect()

        if ( window.innerHeight - bound.top >= bound.height *(3/5) && bound.bottom <= (window.innerHeight) + (element[i].offsetHeight) ) {

            element[i].style.animation = '1s ease 0s 1 normal none running fade-in'
            element[i].style.opacity = '1'
        }
    }
}

function upSlide (){
    let element = document.getElementsByClassName('slide-up')
    let numArray = element.length

    for( let i=0 ; i < numArray ; i++ ){
        let bound = element[i].getBoundingClientRect()

        if ( window.innerHeight - bound.top >= bound.height *(3/5) && bound.bottom <= (window.innerHeight) + ( element[i].offsetHeight)) {

            element[i].style.animation = '1.5s ease 0s 1 normal none running slide-up'
            element[i].style.opacity = '1'
        }
    }
}

function animationTrigger () {
    rightSlide()
    leftSlide()
    upSlide()
    fadeIn()
}


window.addEventListener( 'scroll', animationTrigger )
