let value = document.getElementById("secbutton");
value.addEventListener("click", submitfun);
function submitfun(){
    let check = document.querySelector('input[name="firstq"]:checked');
    let check1 = document.querySelector('input[name="secq"]:checked');
    let check2 = document.querySelector('input[name="thrdq"]:checked');
    let check3 = document.querySelector('input[name="forthq"]:checked');
    let check4 = document.querySelector('input[name="fifthq"]:checked');

    let count=0;
    if(check!=null && check1!=null && check2!=null && check3!=null && check4!=null){
        if(document.getElementById("firstsec").checked==true){
            count++;
    }
    if(document.getElementById("secondfor").checked==true){
        count++;
}
if(document.getElementById("thirdsec").checked==true){
    count++;
}
if(document.getElementById("forthfor").checked==true){
    count++;
}
if(document.getElementById("fifthfir").checked==true){
    count++;
}
    localStorage.setItem("marks", count);
    window.open("thirdpage.html");
    
    }
    else{
        if(check==null || check1==null || check2==null || check3==null || check4==null){
          alert("Please Answer All the Questions");
    }
}
    
}
