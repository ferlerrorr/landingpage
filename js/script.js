//toggle mobile menu
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

//toggle mobile menu
function toggleMenu() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');

        //adds the menu(burger)
        toggle.querySelector("a").innerHTML = "<i class='fa fa-bars'></i>";
    } else {
        menu.classList.add("active");

        //adds the close(x) icon
        toggle.querySelector("a").innerHTML = "<i class='fa fa-times'></i>";
    }
}
//event listener
toggle.addEventListener('click', toggleMenu, false);

//submenu
const items = document.querySelectorAll('.item');

// activate submenu
function toggleItem() {
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
        menu.querySelector("submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active");
    } else {
        this.classList.add("submenu-active");
    }
}

// event listener
for (let item of items) {

    if (item.querySelector(".submenu")) {
        item.addEventListener("click", toggleItem, false);
        item.addEventListener("keypress", toggleItem, false);


    }
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
}

/* Event listener */
document.addEventListener("click", closeSubmenu, false);