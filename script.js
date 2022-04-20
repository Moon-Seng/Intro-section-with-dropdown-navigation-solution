let featuresDropdownBtn = document.getElementById("features-dropdown-btn");
let companyDropdownBtn = document.getElementById('company-dropdown-btn');
let featuresToggleDropdown = document.getElementById('features-dropdown-list');
let companyToggleDropdown = document.getElementById('company-dropdown-list');
let featuresDropdownArrow = document.getElementById('features-dropdown-arrow');
let companyDropdownArrow = document.getElementById('company-dropdown-arrow');
let screenSize = window.innerWidth;
let navItems = document.getElementById('nav-items');
let openBtn = document.querySelector('.menu-btn');

if(screenSize < 768){
    navItems.classList.add('hidden');
}

openBtn.addEventListener('click', function(){
    navItems.classList.remove('hidden');
})

featuresDropdownBtn.addEventListener('click', function(){
    featuresToggleDropdown.classList.toggle('hidden');
    if(featuresDropdownArrow.src === 'http://127.0.0.1:5500/images/icon-arrow-up.svg'){
        featuresDropdownArrow.src = 'http://127.0.0.1:5500/images/icon-arrow-down.svg'
    }else{
        featuresDropdownArrow.src = 'http://127.0.0.1:5500/images/icon-arrow-up.svg';
    }

})

companyDropdownBtn.addEventListener('click', function(){
    companyToggleDropdown.classList.toggle('hidden');
    if(companyDropdownArrow.src === 'http://127.0.0.1:5500/images/icon-arrow-up.svg'){
        companyDropdownArrow.src = 'http://127.0.0.1:5500/images/icon-arrow-down.svg'
    }else{
        companyDropdownArrow.src = 'http://127.0.0.1:5500/images/icon-arrow-up.svg';
    }
})