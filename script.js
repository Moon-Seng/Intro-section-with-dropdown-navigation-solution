let featuresDropdownBtn = document.getElementById("features-dropdown-btn");
let companyDropdownBtn = document.getElementById('company-dropdown-btn');
let featuresToggleDropdown = document.getElementById('features-dropdown-list');
let companyToggleDropdown = document.getElementById('company-dropdown-list');
let featuresDropdownArrow = document.getElementById('features-dropdown-arrow');
let companyDropdownArrow = document.getElementById('company-dropdown-arrow');
let screenSize = window.innerWidth;
let navItems = document.getElementById('nav-items');
let openBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-menu');
let body = document.body;
let image = document.getElementById('changingImg');

console.log(image);

featuresDropdownBtn.addEventListener('click', function(){
    featuresToggleDropdown.classList.toggle('hidden');
    if(featuresDropdownArrow.src === 'http://127.0.0.1:8080/images/icon-arrow-up.svg'){
        featuresDropdownArrow.src = 'http://127.0.0.1:8080/images/icon-arrow-down.svg'
    }else if(featuresDropdownArrow.src === 'http://127.0.0.1:8080/images/icon-arrow-down.svg'){
        featuresDropdownArrow.src = 'http://127.0.0.1:8080/images/icon-arrow-up.svg';
    }

})

companyDropdownBtn.addEventListener('click', function(){
    companyToggleDropdown.classList.toggle('hidden');
    if(companyDropdownArrow.src === 'http://127.0.0.1:8080/images/icon-arrow-up.svg'){
        companyDropdownArrow.src = 'http://127.0.0.1:8080/images/icon-arrow-down.svg'
    }else{
        companyDropdownArrow.src = 'http://127.0.0.1:8080/images/icon-arrow-up.svg';
    }
})

if(screenSize < 768){
    navItems.classList.add('hidden');
    image.src = "http://127.0.0.1:8080/images/image-hero-mobile.png"
}

openBtn.addEventListener('click', function(){
    navItems.classList.remove('hidden');
    closeBtn.classList.remove('hidden');
})

closeBtn.addEventListener('click' , function(){
    navItems.classList.add('hidden');
    body.style.backgroundColor= "hsla(0, 0%, 8%, 0%)"

})
