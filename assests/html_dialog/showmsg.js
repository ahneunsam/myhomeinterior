function showmsg(tf) {
    if( tf == "true" ){
        window.alert("'확인' 버튼을 누르면\n자동으로 2초 후 메인화면으로 이동합니다.");
        returnpage();

    }else{
        window.alert("오류로 인하여 해당 작업을 실행할 수 없습니다.\n페이지를 새로고침 후 다시 시도해 주세요.");
    }
}

function changecolor(){
    document.querySelector("#gomainbtn").classList.add("mainbtn_changecolor");
}

function returnpage(){
    document.querySelector("#gomainbtn").innerHTML = "('메인화면으로 돌아가기' 선택됨)";
    changecolor();
    setTimeout(function (){
        window.location.href = "../myhomeinterior_main.html";
    }, 1000)
}