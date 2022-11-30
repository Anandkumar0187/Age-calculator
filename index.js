let calculate = ()=>{
    let date = new Date();
    let d1 = document.querySelector("#date").value;
    let m1 = document.querySelector("#month").value;
    let y1 = document.querySelector("#year").value;
    let d2 = date.getDate();
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();

    let month = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(isNaN(d1) && isNaN(m1) && isNaN(y1) ){
        document.querySelector("#result").innerHTML = "Please input valid data"
    }
    else if(isNaN(d1) && isNaN(m1)){
        document.querySelector("#result").innerHTML = "Please input valid data for Date field , Month field"
    }
    else if(isNaN(d1) && isNaN(y1) ){
        document.querySelector("#result").innerHTML = "Please input valid data for Date field , Year field"
    }
    else if( isNaN(m1) && isNaN(y1) ){
        document.querySelector("#result").innerHTML = "Please input valid data for Month field , Year field"
    }else if(isNaN(d1)){
        document.querySelector("#result").innerHTML = "Please input valid data for Date field"
    }else if(isNaN(m1)){
        document.querySelector("#result").innerHTML = "Please input valid data for Month field"
    }else if(isNaN(y1)){
        document.querySelector("#result").innerHTML = "Please input valid data for Year field"
    }
    else if(d1.length < 1){
        document.querySelector("#result").innerHTML = "Please enter at least 1 character in Day field"
    }else if(m1.length < 1){
        document.querySelector("#result").innerHTML = "Please enter at least 1 character in Month field"
    }else if(y1.length < 4){
        document.querySelector("#result").innerHTML = "Please enter at least 4 character in Year field"
    }
    else{
        if(d1 > d2){
            d2 = d2 + month[m2 - 1];
            m2 = m2 - 1;
        }
        if(m1 > m2){
            m2 = m2 + 12;
            y2 = y2 - 1;
        }
        let d = d2 - d1;
        let m = m2 - m1;
        let y = y2 - y1;
        
        document.querySelector("#result").innerHTML = "Your Age is " + y + " Years " + m + " Months " + d + " Days."
    }
}