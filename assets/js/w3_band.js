// xỬ LÝ SLIDER
var slideIndex = 0;
timeout();

function showSlide() {
    var slides = document.getElementsByClassName('slider-content');
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
}

function timeout() {
    setInterval(showSlide, 4000);
}


// XỬ LÝ PHẦN MUA VÉ
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close');

//Hàm hiển thị modal mua vé (thêm class open vào modal)
function showBuyTickets() {
    modal.classList.add('open')
}

//Hàm ẩn modal mua vé (gỡ bỏ class open của modal)
function hideBuyTickets() {
    modal.classList.remove('open')
}

//Lặp qua từng thẻ button và nghe hành vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

//Nghe hành vi click vào button close
modalClose.addEventListener('click', hideBuyTickets)

modal.addEventListener('click', hideBuyTickets)

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation(modalContainer)
})


//XỬ LÝ NÚT MOBILE MENU 
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var mobileMenuIcon = document.getElementById('menu-icon-id');
var navHomeDesc = document.getElementById('nav-home-desc');
var headerHeight = header.clientHeight;

//Đóng/mở mobile menu
mobileMenu.onclick = function() {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
        mobileMenu.style.backgroundColor = '#ccc'
        mobileMenuIcon.style.color = 'black'
    } else {
        header.style.height = '46.4px';
        mobileMenu.style.backgroundColor = 'black'
        mobileMenuIcon.style.color = 'white'
    }
}

//Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');
        if (!isParentMenu) {
            header.style.height = '46.4px';
            mobileMenu.style.backgroundColor = 'black'
            mobileMenuIcon.style.color = 'white'
            navHomeDesc.style.backgroundColor = 'black'
            navHomeDesc.style.color = 'white'
        } else {
            if (window.event) {
                window.event.returnValue = false;
            }
            event.preventDefault();
        }
    }
}