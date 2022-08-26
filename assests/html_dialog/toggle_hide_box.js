function toggle(box) {
    const menu = document.querySelector("#"+box);
    const boxdisplay = menu.style.display;

    if( boxdisplay == "block" ){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
}

function hide(box){
    const aa = box;
    setTimeout(function (){
            const menu = document.querySelector("#"+box);
            menu.style.display = "none";
        }, 1500);
}