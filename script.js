function show(id) {
    if (document.getElementById) {
        var mydiv = document.getElementById(id);
        mydiv.style.display = 'block';
    }
}

function unshow(id) {
    if (document.getElementById) {
        var mydiv = document.getElementById(id);
        mydiv.style.display = 'none';
    }
}

function calculate() {
    var z1 = document.getElementById("z1").value;
    var z2 = document.getElementById("z1").value;

    var w1 = document.getElementById("w1").value;
    var w2 = document.getElementById("w2").value;
    var erg;

    //Dollar
    if (w1 == "Dollar" && w2 == "Dollar") {
        alert("Bitte wähle eine andere Zielwährung aus!");
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "220");
    }
    if (w1 == "Dollar" && w2 == "Euro") {
        DollarInEuro(z1);
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "193.43");
    }
    if (w1 == "Dollar" && w2 == "Pfund") {
        DollarInPfund(z1);
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "143.93");
    }
    if (w1 == "Dollar" && w2 == "Rubel") {
        DollarInRubel(z1);
        document.getElementById("rect1").setAttribute("height", "5.03");
        document.getElementById("rect2").setAttribute("height", "330");
    }
    if (w1 == "Dollar" && w2 == "Yen") {
        DollarInYen(z1);
        document.getElementById("rect1").setAttribute("height", "2.75");
        document.getElementById("rect2").setAttribute("height", "330");
    }
    //Euro
    if (w1 == "Euro" && w2 == "Euro") {
        alert("Bitte wähle eine andere Zielwährung aus!");
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", ".220");
    }
    if (w1 == "Euro" && w2 == "Dollar") {
        EuroInDollar(z1);
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "250.19");
    }
    if (w1 == "Euro" && w2 == "Rubel") {
        EuroInRubel(z1);
        document.getElementById("rect1").setAttribute("height", "330");
        document.getElementById("rect2").setAttribute("height", "4.64");
    }
    if (w1 == "Euro" && w2 == "Pfund") {
        EuroInPfund(z1);
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "163.69");
    }
    if (w1 == "Euro" && w2 == "Yen") {
        EuroInYen(z1);
        document.getElementById("rect1").setAttribute("height", "2.42");
        document.getElementById("rect2").setAttribute("height", "330");
    }
    //Rubel
    if (w1 == "Rubel" && w2 == "Rubel") {
        alert("Bitte wähle eine andere Zielwährung aus!");
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "220");
    }
    if (w1 == "Rubel" && w2 == "Dollar") {
        RubelInDollar(z1);
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "3.51");
    }
    if (w1 == "Rubel" && w2 == "Euro") {
        RubelInEuro(z1);
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "3.09");
    }
    if (w1 == "Rubel" && w2 == "Pfund") {
        RubelInPfund(z1);
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "2.3");
    }
    if (w1 == "Rubel" && w2 == "Yen") {
        RubelInYen(z1);
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "420.2");
    }
    if (w1 == "Yen" && w2 == "Yen") {
        alert("Bitte wähle eine andere Zielwährung aus!");
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "220");
    }
    if (w1 == "Yen" && w2 == "Dollar") {
        YenInDollar(z1);
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "1.84");
    }
    if (w1 == "Yen" && w2 == "Euro") {
        YenInEuro(z1);
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "1.6");
    }
    if (w1 == "Yen" && w2 == "Pfund") {
        YenInPfund(z1);
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "1.2");
    }
    if (w1 == "Yen" && w2 == "Rubel") {
        YenInRubel(z1);
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "114.88");
    }
    if (w1 == "Pfund" && w2 == "Pfund") {
        alert("Bitte wähle eine andere Zielwährung aus!");
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "220");
    }
    if (w1 == "Pfund" && w2 == "Dollar") {
        PfundInDollar(z1);
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "336,22");
    }
    if (w1 == "Pfund" && w2 == "Euro") {
        PfundInEuro(z1);
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "295.61");
    }
    if (w1 == "Pfund" && w2 == "Rubel") {
        PfundInRubel(z1);
        document.getElementById("rect1").setAttribute("height", "3.45");
        document.getElementById("rect2").setAttribute("height", "330");
    }
    if (w1 == "Pfund" && w2 == "Yen") {
        PfundInYen(z1);
        document.getElementById("rect1").setAttribute("height", "18.02");
        document.getElementById("rect2").setAttribute("height", "330");
    }

}

function DollarInEuro(wert) {
    erg = wert * 0.87921;
    document.getElementById("ergebnis").value = erg;
}

function DollarInPfund(wert) {
    erg = wert * 0.65422;
    document.getElementById("ergebnis").value = erg;
}

function DollarInRubel(wert) {
    erg = wert * 62.5713;
    document.getElementById("ergebnis").value = erg;
}

function DollarInYen(wert) {
    erg = wert * 119.82;
    document.getElementById("ergebnis").value = erg;
}

function EuroInDollar(wert) {
    erg = wert * 1.13724;
    document.getElementById("ergebnis").value = erg;
}

function EuroInRubel(wert) {
    erg = wert * 71.1586;
    document.getElementById("ergebnis").value = erg;
}

function EuroInYen(wert) {
    erg = wert * 136.27;
    document.getElementById("ergebnis").value = erg;
}

function EuroInPfund(wert) {
    erg = wert * 0.74404;
    document.getElementById("ergebnis").value = erg;
}

function RubelInDollar(wert) {
    erg = wert * 0.01596;
    document.getElementById("ergebnis").value = erg;
}

function RubelInEuro(wert) {
    erg = wert * 0.01403;
    document.getElementById("ergebnis").value = erg;
}

function RubelInYen(wert) {
    erg = wert * 1.91;
    document.getElementById("ergebnis").value = erg;
}

function RubelInPfund(wert) {
    erg = wert * 0.01044;
    document.getElementById("ergebnis").value = erg;
}

function YenInDollar(wert) {
    erg = wert * 0.00835;
    document.getElementById("ergebnis").value = erg;
}

function YenInEuro(wert) {
    erg = wert * 0.00734;
    document.getElementById("ergebnis").value = erg;
}

function YenInRubel(wert) {
    erg = wert * 0.52216;
    document.getElementById("ergebnis").value = erg;
}

function YenInPfund(wert) {
    erg = wert * 0.00546;
    document.getElementById("ergebnis").value = erg;
}

function PfundInDollar(wert) {
    erg = wert * 1.52829;
    document.getElementById("ergebnis").value = erg;
}

function PfundInEuro(wert) {
    erg = wert * 1.34367;
    document.getElementById("ergebnis").value = erg;
}

function PfundInRubel(wert) {
    erg = wert * 95.6271;
    document.getElementById("ergebnis").value = erg;
}

function PfundInYen(wert) {
    erg = wert * 183.12;
    document.getElementById("ergebnis").value = erg;
}

function clearall() {
    document.getElementById("ergebnis").value = "";
    document.getElementById("z1").value = "";
}