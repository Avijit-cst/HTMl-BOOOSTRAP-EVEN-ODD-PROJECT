function result() {
    let a = document.getElementById
    ("getresult").value 
    if(a % 2 == 0) {
        document.getElementById("output").
        innerText = "Even"
    }
    else {
        document.getElementById("output").
        innerText = "odd"
    }
}