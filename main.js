// Get elements
let toggle = document.querySelector('#toggle');
let showPrice = document.querySelector('.price-update');
let range = document.querySelector('.progress input');
let switchBackground = document.getElementsByClassName('switch')[0];

let checked = false
let rawPrice = 16
// update rawprice on range change
let pageViews = document.querySelector('.pageview span')

range.addEventListener('input', (event) => {
    if (event.target.value < 2) {
        rawPrice = 8
        pageViews.innerHTML = '10K'
    }
    else if (event.target.value < 4) {
        rawPrice = 12
        pageViews.innerHTML = '50K'
    }
    else if (event.target.value < 6) {
        rawPrice = 16
        pageViews.innerHTML = '100K'
    }
    else if (event.target.value < 8) {
        rawPrice = 24
        pageViews.innerHTML = '500K'
    }
    else {
        rawPrice = 36
        pageViews.innerHTML = '1M'
    }
    checked 
        ? showPrice.innerHTML = rawPrice*(1-0.25) 
        : showPrice.innerHTML = rawPrice
})



// update monthly price on toggle swaitched
toggle.addEventListener('click', () => {
    checked = !checked
    if (checked) {
        switchBackground.style['background-color'] = 'hsl(174, 86%, 45%)'
        showPrice.innerHTML = rawPrice*(1-0.25) 
    }
    else {
        switchBackground.style['background-color'] = 'hsl(223, 50%, 87%)'
        showPrice.innerHTML = rawPrice
    }
})