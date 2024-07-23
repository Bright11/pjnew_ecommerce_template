function toggleNav() {
    const open_nav_btn=document.querySelector(".open_nav_btn")
    const nav = document.getElementById('ul_top_nav_link');
    if (nav.classList.contains('nav-open')) {
        nav.classList.remove('nav-open');
        nav.classList.add('nav-closed');
        open_nav_btn.innerHTML='<i class="fa fa-bars" style="font-size:36px"></i>'
    } else {
        nav.classList.remove('nav-closed');
        nav.classList.add('nav-open');
        open_nav_btn.innerHTML='<i class="fa fa-close" style="font-size:36px"></i>'
    }
}

// open_earch_mobile

function openSearch() {
    const search_mobile = document.querySelector(".search_bar");
    const mobile_open_icon=document.querySelector('.mobile_open_icon');
    if (search_mobile.classList.contains('search-open')) {
        search_mobile.classList.remove('search-open');
        search_mobile.classList.add('search-closed');
        mobile_open_icon.innerHTML='<i class="fa fa-search"></i>';
    } else {
        search_mobile.classList.remove('search-closed');
        search_mobile.classList.add('search-open');
        mobile_open_icon.innerHTML='<i class="fa fa-times"></i>';
    }
}

// hidecategory
function hidecategory(){
    const updatetext=document.getElementById("category_icon_nav")
    const navcatgory_name=document.querySelector(".navcatgory_name")
    const category_sidebar=document.querySelector(".category_sidebar_settings");

    if(category_sidebar.classList.contains('hide_category_sidebar')){
        category_sidebar.classList.remove('hide_category_sidebar');
        updatetext.innerHTML='<i class="fa fa-bars" style="font-size:24px"></i>'
         navcatgory_name.innerHTML="Category"
    }else{
        category_sidebar.classList.add('hide_category_sidebar');
        updatetext.innerHTML='<i class="fa fa-times" style="font-size:24px"></i>'
        navcatgory_name.innerHTML="Show"
    }
    
}