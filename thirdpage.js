let mark =localStorage.getItem("marks");
let percentage = (100*mark)/5;
document.getElementById("secp").innerHTML="You Scored : "+percentage+"%";
if(percentage==100){
document.getElementById("image").setAttribute("src", "./OIP.jpg");


}else if(percentage==0){
    document.getElementById("image").setAttribute("src", "./zeromark.jpg");
}else {
    document.getElementById("image").setAttribute("src", "./average.jpg");
}
