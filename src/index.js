function myfunction1(){

    var l = document.getElementById("length_value").value;
    var b = document.getElementById("length_value").value;
    
    x= parseInt(l);
    y= parseInt(b);


document.getElementById("result1").innerHTML= "Area is "+ x*y + " mtr";
document.getElementById("result2").innerHTML= "Perimeter is "+ 2*(x+y) + " mtr";

}


