function saveIt() {
    //Eingegebene Zahl
    var schluessel1 = 1;
    var wert1 = document.getElementById("z1").value;
    sessionStorage.setItem(schluessel1, wert1);
    //Ergebnis
    var schluessel2 = 2;
    var wert2 = document.getElementById("ergebnis").value;
    sessionStorage.setItem(schluessel2, wert2);
    //Waehrung links
    var schluessel3 = 3;
    var waehrung1 = document.getElementById("w1").value;
    sessionStorage.setItem(schluessel3, waehrung1);
    //Waehrung rechts
    var schluessel4 = 4;
    var waehrung2 = document.getElementById("w2").value;
    sessionStorage.setItem(schluessel4, waehrung2);

}

function getIt() {
    //Werte laden
    var wert1 = sessionStorage.getItem(1);
    var wert2 = sessionStorage.getItem(2);
    var waehrung1 = sessionStorage.getItem(3);
    var waehrung2 = sessionStorage.getItem(4);

    //Zahlenwerte
    document.getElementById("z1").value = wert1;
    document.getElementById("ergebnis").value = wert2;
    if (waehrung1.length != 0 && waehrung2.length != 0) {
        //Waehrungen
        document.getElementById("w1").value = waehrung1;
        document.getElementById("w2").value = waehrung2;
    } else {
        document.getElementById("w1").value = "Euro";
        document.getElementById("w2").value = "Dollar";
    }


    if (document.getElementById("z1").value == "") {
        unshow("svg_div");
    } else {
        calculate();
        show("svg_div");
    }

}

function clearIt() {
    sessionStorage.clear();

}




/**
 * SLIDE LEFT MENU
 */

(function (window) {

    'use strict';

    /**
     * Extend Object helper function.
     */
    function extend(a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    }

    /**
     * Each helper function.
     */
    function each(collection, callback) {
        for (var i = 0; i < collection.length; i++) {
            var item = collection[i];
            callback(item);
        }
    }

    /**
     * Menu Constructor.
     */
    function Menu(options) {
        this.options = extend({}, this.options);
        extend(this.options, options);
        this._init();
    }

    /**
     * Menu Options.
     */
    Menu.prototype.options = {
        wrapper: '#o-wrapper', // The content wrapper
        type: 'slide-left', // The menu type
        menuOpenerClass: '.c-button', // The menu opener class names (i.e. the buttons)
        maskId: '#c-mask' // The ID of the mask
    };

    /**
     * Initialise Menu.
     */
    Menu.prototype._init = function () {
        this.body = document.body;
        this.wrapper = document.querySelector(this.options.wrapper);
        this.mask = document.querySelector(this.options.maskId);
        this.menu = document.querySelector('#c-menu--' + this.options.type);
        this.closeBtn = this.menu.querySelector('.c-menu__close');
        this.menuOpeners = document.querySelectorAll(this.options.menuOpenerClass);
        this._initEvents();
    };

    /**
     * Initialise Menu Events.
     */
    Menu.prototype._initEvents = function () {
        // Event for clicks on the close button inside the menu.
        this.closeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            this.close();
        }.bind(this));

        // Event for clicks on the mask.
        this.mask.addEventListener('click', function (e) {
            e.preventDefault();
            this.close();
        }.bind(this));
    };

    /**
     * Open Menu.
     */
    Menu.prototype.open = function () {
        this.body.classList.add('has-active-menu');
        this.wrapper.classList.add('has-' + this.options.type);
        this.menu.classList.add('is-active');
        this.mask.classList.add('is-active');
        this.disableMenuOpeners();
    };

    /**
     * Close Menu.
     */
    Menu.prototype.close = function () {
        this.body.classList.remove('has-active-menu');
        this.wrapper.classList.remove('has-' + this.options.type);
        this.menu.classList.remove('is-active');
        this.mask.classList.remove('is-active');
        this.enableMenuOpeners();
    };

    /**
     * Disable Menu Openers.
     */
    Menu.prototype.disableMenuOpeners = function () {
        each(this.menuOpeners, function (item) {
            item.disabled = true;
        });
    };

    /**
     * Enable Menu Openers.
     */
    Menu.prototype.enableMenuOpeners = function () {
        each(this.menuOpeners, function (item) {
            item.disabled = false;
        });
    };

    /**
     * Add to global namespace.
     */
    window.Menu = Menu;

})(window);








var slideLeft = new Menu({
    wrapper: '#o-wrapper',
    type: 'slide-left',
    menuOpenerClass: '.c-button',
    maskId: '#c-mask'
});

var slideLeftBtn = document.querySelector('#c-button--slide-left');

slideLeftBtn.addEventListener('click', function (e) {
    e.preventDefault;
    slideLeft.open();
});





function show(id) {
    if (document.getElementById("z1").value == "") {

    } else {
        if (document.getElementById) {
            var mydiv = document.getElementById(id);
            mydiv.style.display = 'block';
        }
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
        document.getElementById("t1").innerHTML = "Dollar";
        document.getElementById("t2").innerHTML = "Dollar";
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "220");
    }
    if (w1 == "Dollar" && w2 == "Euro") {
        DollarInEuro(z1);
        document.getElementById("t1").innerHTML = "Dollar";
        document.getElementById("t2").innerHTML = "Euro";
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "193.43");
    }
    if (w1 == "Dollar" && w2 == "Pfund") {
        DollarInPfund(z1);
        document.getElementById("t1").innerHTML = "Dollar";
        document.getElementById("t2").innerHTML = "Pfund";
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "143.93");
    }
    if (w1 == "Dollar" && w2 == "Rubel") {
        DollarInRubel(z1);
        document.getElementById("t1").innerHTML = "Dollar";
        document.getElementById("t2").innerHTML = "Rubel";
        document.getElementById("rect1").setAttribute("height", "5.03");
        document.getElementById("rect2").setAttribute("height", "330");
    }
    if (w1 == "Dollar" && w2 == "Yen") {
        DollarInYen(z1);
        document.getElementById("t1").innerHTML = "Dollar";
        document.getElementById("t2").innerHTML = "Yen";
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
        document.getElementById("t1").innerHTML = "Euro";
        document.getElementById("t2").innerHTML = "Dollar";
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "250.19");
    }
    if (w1 == "Euro" && w2 == "Rubel") {
        EuroInRubel(z1);
        document.getElementById("t1").innerHTML = "Euro";
        document.getElementById("t2").innerHTML = "Rubel";
        document.getElementById("rect1").setAttribute("height", "4.64");
        document.getElementById("rect2").setAttribute("height", "330");
    }
    if (w1 == "Euro" && w2 == "Pfund") {
        EuroInPfund(z1);
        document.getElementById("t1").innerHTML = "Euro";
        document.getElementById("t2").innerHTML = "Pfund";
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "163.69");
    }
    if (w1 == "Euro" && w2 == "Yen") {
        EuroInYen(z1);
        document.getElementById("t1").innerHTML = "Euro";
        document.getElementById("t2").innerHTML = "Yen";
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
        document.getElementById("t1").innerHTML = "Rubel";
        document.getElementById("t2").innerHTML = "Dollar";
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "3.51");
    }
    if (w1 == "Rubel" && w2 == "Euro") {
        RubelInEuro(z1);
        document.getElementById("t1").innerHTML = "Rubel";
        document.getElementById("t2").innerHTML = "Euro";
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "3.09");
    }
    if (w1 == "Rubel" && w2 == "Pfund") {
        RubelInPfund(z1);
        document.getElementById("t1").innerHTML = "Rubel";
        document.getElementById("t2").innerHTML = "Pfund";
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "2.3");
    }
    if (w1 == "Rubel" && w2 == "Yen") {
        RubelInYen(z1);
        document.getElementById("t1").innerHTML = "Rubel";
        document.getElementById("t2").innerHTML = "Yen";
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
        document.getElementById("t1").innerHTML = "Yen";
        document.getElementById("t2").innerHTML = "Dollar";
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "1.84");
    }
    if (w1 == "Yen" && w2 == "Euro") {
        YenInEuro(z1);
        document.getElementById("t1").innerHTML = "Yen";
        document.getElementById("t2").innerHTML = "Euro";
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "1.6");
    }
    if (w1 == "Yen" && w2 == "Pfund") {
        YenInPfund(z1);
        document.getElementById("t1").innerHTML = "Yen";
        document.getElementById("t2").innerHTML = "Pfund";
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "1.2");
    }
    if (w1 == "Yen" && w2 == "Rubel") {
        YenInRubel(z1);
        document.getElementById("t1").innerHTML = "Yen";
        document.getElementById("t2").innerHTML = "Rubel";
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
        document.getElementById("t1").innerHTML = "Pfund";
        document.getElementById("t2").innerHTML = "Dollar";
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "336.22");
    }
    if (w1 == "Pfund" && w2 == "Euro") {
        PfundInEuro(z1);
        document.getElementById("t1").innerHTML = "Pfund";
        document.getElementById("t2").innerHTML = "Euro";
        document.getElementById("rect1").setAttribute("height", "220");
        document.getElementById("rect2").setAttribute("height", "295.61");
    }
    if (w1 == "Pfund" && w2 == "Rubel") {
        PfundInRubel(z1);
        document.getElementById("t1").innerHTML = "Pfund";
        document.getElementById("t2").innerHTML = "Rubel";
        document.getElementById("rect1").setAttribute("height", "3.45");
        document.getElementById("rect2").setAttribute("height", "330");
    }
    if (w1 == "Pfund" && w2 == "Yen") {
        PfundInYen(z1);
        document.getElementById("t1").innerHTML = "Pfund";
        document.getElementById("t2").innerHTML = "Yen";
        document.getElementById("rect1").setAttribute("height", "18.02");
        document.getElementById("rect2").setAttribute("height", "330");
    }

}

function Runden2Dezimal(x) {
    Ergebnis = Math.round(x * 100) / 100;
    return Ergebnis;
}

function DollarInEuro(wert) {
    erg = wert * 0.87921;
    document.getElementById("ergebnis").value = Runden2Dezimal(erg);
}

function DollarInPfund(wert) {
    erg = wert * 0.65422;
    document.getElementById("ergebnis").value = Runden2Dezimal(erg);
}

function DollarInRubel(wert) {
    erg = wert * 62.5713;
    document.getElementById("ergebnis").value = Runden2Dezimal(erg);
}

function DollarInYen(wert) {
    erg = wert * 119.82;
    document.getElementById("ergebnis").value = Runden2Dezimal(erg);
}

function EuroInDollar(wert) {
    erg = wert * 1.13724;
    document.getElementById("ergebnis").value = Runden2Dezimal(erg);
}

function EuroInRubel(wert) {
    erg = wert * 71.1586;
    document.getElementById("ergebnis").value = Runden2Dezimal(erg);
}

function EuroInYen(wert) {
    erg = wert * 136.27;
    document.getElementById("ergebnis").value = Runden2Dezimal(erg);
}

function EuroInPfund(wert) {
    erg = wert * 0.74404;
    document.getElementById("ergebnis").value = Runden2Dezimal(erg);
}

function RubelInDollar(wert) {
    erg = wert * 0.01596;
    document.getElementById("ergebnis").value = Runden2Dezimal(erg);
}

function RubelInEuro(wert) {
    erg = wert * 0.01403;
    document.getElementById("ergebnis").value = Runden2Dezimal(erg);
}

function RubelInYen(wert) {
    erg = wert * 1.91;
    document.getElementById("ergebnis").value = Runden2Dezimal(erg);
}

function RubelInPfund(wert) {
    erg = wert * 0.01044;
    document.getElementById("ergebnis").value = Runden2Dezimal(erg);
}

function YenInDollar(wert) {
    erg = wert * 0.00835;
    document.getElementById("ergebnis").value = Runden2Dezimal(erg);
}

function YenInEuro(wert) {
    erg = wert * 0.00734;
    document.getElementById("ergebnis").value = Runden2Dezimal(erg);
}

function YenInRubel(wert) {
    erg = wert * 0.52216;
    document.getElementById("ergebnis").value = Runden2Dezimal(erg);
}

function YenInPfund(wert) {
    erg = wert * 0.00546;
    document.getElementById("ergebnis").value = Runden2Dezimal(erg);
}

function PfundInDollar(wert) {
    erg = wert * 1.52829;
    document.getElementById("ergebnis").value = Runden2Dezimal(erg);
}

function PfundInEuro(wert) {
    erg = wert * 1.34367;
    document.getElementById("ergebnis").value = Runden2Dezimal(erg);
}

function PfundInRubel(wert) {
    erg = wert * 95.6271;
    document.getElementById("ergebnis").value = Runden2Dezimal(erg);
}

function PfundInYen(wert) {
    erg = wert * 183.12;
    document.getElementById("ergebnis").value = Runden2Dezimal(erg);
}

function clearall() {
    document.getElementById("ergebnis").value = "";
    document.getElementById("z1").value = "";
    document.getElementById("w1").value = "Euro";
    document.getElementById("w2").value = "Dollar";
}