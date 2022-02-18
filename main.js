// Úkol: Písmo v odstavci po najetí myši ztuční.
let odstavec = document.querySelector('p');

function mouseOver() {
    odstavec.classList.add('tucny');
}

function mouseOut() {
    odstavec.classList.remove('tucny');
}

// Úkol 1: Tlačítko “červené po kliknutí” bude odstavci přidávat/odebírat 
//třídu, která bude barvu písma v odstavci měnit na červenou.

function cervenyPoKliknuti() {
    odstavec.classList.toggle('cerveny')
}

// Úkol 2: přidej tlačítko “větší po kliknutí”, které písmo zvětší 
// o jeden pixel oproti jeho aktuální velikost.


// Úkol 3: Dopracuj ovládání audio souboru:
// pauznutí zvukové stopy, nastavení zvuku na 0, 0.5 a 1, vrácení se na začátek
