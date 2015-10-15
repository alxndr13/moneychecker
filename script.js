function calculate() {
    var z1 = document.getElementById("z1").value;
    var z2 = document.getElementById("z1").value;

    var w1 = document.getElementById("w1").value;
    var w2 = document.getElementById("w2").value;
    var erg;
    
    //Dollar
    if (w1 == "Dollar" && w2 == "Dollar") {
        alert("Bitte wähle eine andere Zielwährung aus!");
    }
    if (w1 == "Dollar" && w2 == "Euro") {
        DollarInEuro(z1);
    }
    if (w1 == "Dollar" && w2 == "Pfund") {
        DollarInPfund(z1);
    }
    if (w1 == "Dollar" && w2 == "Rubel") {
        DollarInRubel(z1);
    }
    if (w1 == "Dollar" && w2 == "Yen") {
        DollarInYen(z1);
    }
    //Euro
    if (w1 == "Euro" && w2 == "Euro") {
        alert("Bitte wähle eine andere Zielwährung aus!");
    }
    if (w1 == "Euro" && w2 == "Dollar") {
        EuroInDollar(z1);
    }
    if (w1 == "Euro" && w2 == "Rubel") {
        EuroInRubel(z1);
    }
    if (w1 == "Euro" && w2 == "Pfund") {
        EuroInPfund(z1);
    }
    if (w1 == "Euro" && w2 == "Yen") {
        EuroInYen(z1);
    }
    //Rubel
    if (w1 == "Rubel" && w2 == "Rubel") {
        alert("Bitte wähle eine andere Zielwährung aus!");
    }
    if (w1 == "Rubel" && w2 == "Dollar") {
        RubelInDollar(z1);
    }
    if (w1 == "Rubel" && w2 == "Euro") {
        RubelInEuro(z1);
    }
    if (w1 == "Rubel" && w2 == "Pfund") {
        RubelInPfund(z1);
    }
    if (w1 == "Rubel" && w2 == "Yen") {
        RubelInYen(z1);
    }
    if (w1 == "Yen" && w2 == "Yen") {
      alert("Bitte wähle eine andere Zielwährung aus!");
    }
    if (w1 == "Yen" && w2 == "Dollar") {
        YenInDollar(z1);
    }
    if (w1 == "Yen" && w2 == "Euro") {
        YenInEuro(z1);
    }
    if (w1 == "Yen" && w2 == "Pfund") {
        YenInPfund(z1);
    }
    if (w1 == "Yen" && w2 == "Rubel") {
        YenInRubel(z1);
    }
    if (w1 == "Pfund" && w2 == "Pfund") {
      alert("Bitte wähle eine andere Zielwährung aus!");
    }
    if (w1 == "Pfund" && w2 == "Dollar") {
        PfundInDollar(z1);
    }
    if (w1 == "Pfund" && w2 == "Euro") {
        PfundInEuro(z1);
    }
    if (w1 == "Pfund" && w2 == "Rubel") {
        PfundInRubel(z1);
    }
    if (w1 == "Pfund" && w2 == "Yen") {
        PfundInYen(z1);
    }
    
}

function DollarInEuro(wert) {
    erg = wert  * 0.87921;
    document.getElementById("ergebnis").innerHTML = erg;
}
function DollarInPfund(wert) {
    erg = wert * 0.65422;
    document.getElementById("ergebnis").innerHTML = erg;
}
function DollarInRubel(wert) {
    erg = wert * 62.5713;
    document.getElementById("ergebnis").innerHTML = erg;
}
function DollarInYen(wert) {
    erg = wert * 119.82;
    document.getElementById("ergebnis").innerHTML = erg;
}
function EuroInDollar(wert) {
    erg = wert * 1.13724;
    document.getElementById("ergebnis").innerHTML = erg;
}
function EuroInRubel(wert) {
    erg = wert * 71.1586;
    document.getElementById("ergebnis").innerHTML = erg;
}
function EuroInYen(wert) {
    erg = wert * 136.27;
    document.getElementById("ergebnis").innerHTML = erg;
}
function EuroInPfund(wert) {
    erg = wert * 0.74404;
    document.getElementById("ergebnis").innerHTML = erg;
}
function RubelInDollar(wert) {
    erg = wert * 0.01596;
    document.getElementById("ergebnis").innerHTML = erg;
}
function RubelInEuro(wert) {
    erg = wert * 0.01403;
    document.getElementById("ergebnis").innerHTML = erg;
}
function RubelInYen(wert) {
    erg = wert * 1.91;
    document.getElementById("ergebnis").innerHTML = erg;
}
function RubelInPfund(wert) {
    erg = wert * 0.01044;
    document.getElementById("ergebnis").innerHTML = erg;
}
function YenInDollar(wert) {
    erg = wert * 0.00835;
    document.getElementById("ergebnis").innerHTML = erg;
}
function YenInEuro(wert) {
    erg = wert * 0.00734;
    document.getElementById("ergebnis").innerHTML = erg;
}
function YenInRubel(wert) {
    erg = wert * 0.52216;
    document.getElementById("ergebnis").innerHTML = erg;
}
function YenInPfund(wert) {
    erg = wert * 0.00546;
    document.getElementById("ergebnis").innerHTML = erg;
}
function PfundInDollar(wert) {
    erg = wert * 1.52829;
    document.getElementById("ergebnis").innerHTML = erg;
}
function PfundInEuro(wert) {
    erg = wert * 1.34367;
    document.getElementById("ergebnis").innerHTML = erg;
}
function PfundInRubel(wert) {
    erg = wert * 95.6271;
    document.getElementById("ergebnis").innerHTML = erg;
}
function PfundInYen(wert) {
    erg = wert * 183.12;
    document.getElementById("ergebnis").innerHTML = erg;
}
function clearall() {
    document.getElementById("ergebnis").innerHTML = "";
    document.getElementById("z1").value = "";
}
