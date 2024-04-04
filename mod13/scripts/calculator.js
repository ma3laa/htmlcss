function input(x) {

    //let y = parseFloat(document.getElementById("result").value); 

    if (document.getElementById('result').value == 0) //This checks the zero and gets rid of it when necessary.
    {
        document.getElementById('result').value == x;
    }
    else {
        document.getElementById('result').value += x;
    }

}

function allClear() {

    document.getElementById("result").value = 0;

}

function plusminus() {

    let x = parseFloat(document.getElementById("result").value);

    x *= -1;

    document.getElementById("result").value = x;
}

function percent() {

    let x = parseFloat(document.getElementById("result").value);

    x *= 0.01;

    document.getElementById("result").value = x;

}

function square() {

    let x = parseFloat(document.getElementById("result").value);

    x *= x;

    document.getElementById("result").value = x;


}
