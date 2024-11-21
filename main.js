$(function(){
    //toggle_btn 클릭하면
    $(".toggle_btn").on("click",function(){
    //nav 에 클래스 show 를 추가해라
    //addClass, removeClass 합치면?  toggleClass
    $("nav, body").toggleClass("show");
 
});
})