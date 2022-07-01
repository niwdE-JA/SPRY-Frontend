let left_slide = document.getElementsByClassName('slide-left')
let right_slide = document.getElementsByClassName('slide-right')
let fade_in = document.getElementsByClassName('fade-in')

function animationTrigger () {
    let element = document.getElementsByClassName('animated')[1]
    let bound = element.getBoundingClientRect()

    if ( bound.top >= -element.offsetHeight && bound.bottom <= (window.innerHeight) + ( element.offsetHeight * (3/4) )) {
        console.log('yessssss were in')
    }
}


window.addEventListener( 'scroll', animationTrigger )
