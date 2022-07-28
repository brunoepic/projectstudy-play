var imgProduct = document.querySelector('#img-product');

function imghSetWhiteTwo(){

    imgProduct.setAttribute('src', './images/pulse-headset-white2.png');

    headOne.classList.add('none');
    headTwo.classList.remove('none');
    colorcamera.classList.add('none');

    corDois.classList.add('selectcolor');
    imgColorBlackTwo.classList.remove('selectcolor');
}


function imghSetWhiteThree(){
    imgProduct.setAttribute('src', './images/pulse-headset-white3.png');
    

    ballwhite.classList.add('selectcolor');

    colorcontroller.classList.add('none');
    colorhset.classList.add('none');
    colorcamera.classList.remove('none');
    headTwo.classList.add('none');
}

function imghSetBlackTwo(){
    imgProduct.setAttribute('src', './images/pulse-headset-black2.png');
}



var controller = document.querySelector('.controller');


// ANGLES FROM PRODUTS
let anglecontroller = document.querySelector('.angle-product-controller');
let anglehset = document.querySelector('.angle-product-hset');
let anglecamera = document.querySelector('.angle-product-camera');

let ballwhite = document.querySelector('.white');

let strokController = document.querySelector('.strokcontroller');

let title = document.querySelector('#title');
let price = document.querySelector('#price');
let description = document.querySelector('#description');

function imgController(){
    imgProduct.setAttribute('src', './images/dualsense-controller-white.png');

    title.innerHTML = 'DualSense <br/> Wireless Controller';
    price.innerHTML = 'US$69.99'
    description.innerHTML = 'Brighten up your PS5 gaming nights with this modern controller, featuring two subtly different shades of black.';

    ball.forEach((item) => 
    item.classList.remove('selectcolor'))

    strokController.classList.add('selectangle');

    ballwhite.classList.add('selectcolor');

    colorcontroller.classList.remove('none')
    colorhset.classList.add('none');
    colorcamera.classList.add('none');

    headTwo.classList.add('none');
    anglecontroller.classList.remove('none');
    anglehset.classList.add('none');
    anglecamera.classList.add('none');
}


let ballwhiteh = document.querySelector('.whiteh')
function imghSet(){

    title.innerHTML = 'PULSE 3D <br/> Wireless Headset';
    price.innerHTML = 'US$99.99';
    description.innerHTML = 'Bring more excitement to your gameplay nights with Midnight Black. Available soon at select retailers.';

    imgProduct.setAttribute('src', './images/pulse-headset-white.png');

    
    ballwhiteh.classList.add('selectcolor');

    headTwo.classList.add('none')

    colorcontroller.classList.add('none');
    colorhset.classList.remove('none');
    colorcamera.classList.add('none');

    anglecontroller.classList.add('none');
    anglehset.classList.remove('none');
    anglecamera.classList.add('none');
}

function imgCamera(){
    imgProduct.setAttribute('src', './images/ps5-camera.png');

    title.innerHTML = 'HD Camera';
    price.innerHTML = 'US$59.99';
    description.innerHTML = 'Add your own image to gameplay videos and broadcasts with smooth, crisp, Full HD capture.';

    imgProduct.style.width = '34rem';

    ball.forEach((item) => 
    item.classList.remove('selectcolor'))
    
    ballwhite.classList.add('selectcolor');

    headTwo.classList.add('none');

    colorcontroller.classList.add('none');
    colorhset.classList.add('none');
    colorcamera.classList.remove('none');

    anglecontroller.classList.add('none');
    anglehset.classList.add('none');
    anglecamera.classList.remove('none');
}

let cart = document.querySelector('.cart')

let windowWidth = window.innerWidth;
