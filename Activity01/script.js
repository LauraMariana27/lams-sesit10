function somar() {
    var numsoma1 = document.getElementById("n1s").valueAsNumber;
    var numsoma2 = document.getElementById("n2s").valueAsNumber;
    var res = numsoma1 + numsoma2;
    document.getElementById("resultsoma").textContent = res;
}

function subtrair() {
    var numsub1 = document.getElementById("n1sub").valueAsNumber;
    var numsub2 = document.getElementById("n2sub").valueAsNumber;
    var res = numsub1 - numsub2;
    document.getElementById("resultsub").textContent = res;
}

function multiplicar() {
    var numulti1 = document.getElementById("n1m").valueAsNumber;
    var numulti2 = document.getElementById("n2m").valueAsNumber;
    var res = numulti1 * numulti2;
    document.getElementById("resultmulti").textContent = res;
}

function dividir() {
    var numdiv1 = document.getElementById("n1d").valueAsNumber;
    var numdiv2 = document.getElementById("n2d").valueAsNumber;
    var res = numdiv1 / numdiv2;
    document.getElementById("resultdiv").textContent = res;
}

function media() {
    var numed1 = document.getElementById("n1med").valueAsNumber;
    var numed2 = document.getElementById("n2med").valueAsNumber;
    var numed3 = document.getElementById("n3med").valueAsNumber;
    var res = (numed1 + numed2 + numed3) /3;
    document.getElementById("resultmedia").textContent = res;
}