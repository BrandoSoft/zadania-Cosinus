
        //zadanie 1.0


        const powiekszNapisWitaj = function() {

            with(witajNaStronie.style) {
                fontSize = '60px';
            }

        }
        const pomniejszNapisWitaj = function() {
            with(witajNaStronie.style) {
                fontSize = '30px';
            }
        }

        const witajNaStronie = document.getElementById('witaj');
        witajNaStronie.addEventListener("mouseover", powiekszNapisWitaj);
        witajNaStronie.addEventListener("mouseout", pomniejszNapisWitaj);

        //zadanie 1.1

        const tablicaMiesiecy = ["styczen", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "pazdziernik", "listopad", "grudzień"];

        const wyswietlMiesiace = function() {

            const div11 = document.getElementById('div11');
            const tabelaMiesiecy = document.createElement("ul");
            div11.appendChild(tabelaMiesiecy);
            tabelaMiesiecy.className = "lista";

            for (i = 0; i < 12; i++) {
                const miesiac = document.createElement("li");
                miesiac.innerHTML = tablicaMiesiecy[i];
                tabelaMiesiecy.appendChild(miesiac);

            }
        }
        const b11 = document.getElementById('11');
        b11.addEventListener("click", wyswietlMiesiace);

        //Zadanie 1.2

        const tablicaDni = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];

        const wyswietlDniTygodnia = function() {

            const div12 = document.getElementById('div12');
            const tabelaDni = document.createElement("ol");
            div12.appendChild(tabelaDni);
            tabelaDni.className = "lista";

            for (i = 0; i < 7; i++) {
                const dzien = document.createElement("li");
                dzien.innerHTML = tablicaDni[i];
                tabelaDni.appendChild(dzien);
            }

        }
        const b12 = document.getElementById('12');
        b12.addEventListener("click", wyswietlDniTygodnia);

        // zadanie 1.3

        const wyswietlanieTabeli4x4 = function() {

            const div13 = document.getElementById('div13');
            const tabela4x4 = document.createElement("table");
            div13.appendChild(tabela4x4);


            const kolumny = document.createElement("td");

            for (i = 0; i < 4; i++) {
                const wiersze = document.createElement("tr");
                tabela4x4.appendChild(wiersze);
                for (y = 0; y < 4; y++) {
                    const kolumny = document.createElement("td");
                    wiersze.appendChild(kolumny);
                }
            }

        }

        const b13 = document.getElementById('13');
        b13.addEventListener("click", wyswietlanieTabeli4x4);

        // zadanie 2.1.1

        const suma211 = function() {

            var a1 = parseInt(prompt("proszę podać cyfre numer 1"));
            var a2 = parseInt(prompt("proszę podać cyfre numer 2"));
            var a3 = parseInt(prompt("proszę podać cyfre numer 3"));
            var a4 = parseInt(prompt("proszę podać cyfre numer 4"));
            var a5 = parseInt(prompt("proszę podać cyfre numer 5"));
            var a6 = parseInt(prompt("proszę podać cyfre numer 6"));
            var a7 = parseInt(prompt("proszę podać cyfre numer 7"));
            var a8 = parseInt(prompt("proszę podać cyfre numer 8"));
            var a9 = parseInt(prompt("proszę podać cyfre numer 9"));
            var a10 = parseInt(prompt("proszę podać cyfre numer 10"));
            var a11 = parseInt(prompt("proszę podać cyfre numer 11"));

            const wynikSuma211 = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11;

            const wynikSrednia211 = (a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11) / 11;


            const spanWynikSuma211 = document.createElement("span");

            const td211 = document.getElementById('td211');

            td211.appendChild(spanWynikSuma211);
            spanWynikSuma211.innerTEXT = "Suma to: " + wynikSuma211 + " ";

            const spanWynikSrednia211 = document.createElement("span");

            td211.appendChild(spanWynikSrednia211);
            spanWynikSrednia211.innerTEXT = "Natomiast średnia to: " + wynikSrednia211;

        }

        const b211 = document.getElementById('211');
        b211.addEventListener("click", suma211);



        // zadanie 2.1.2

        const suma212 = function() {
            let tablicaZad212 = [];
            let sumaZad212 = 0;
            let sredniaZad212 = 0;


            let iloscLiczbDoZadania212 = parseInt(prompt("Proszę podać ile liczb będziemy sumować a następnie obliczać z nich średnią"));

            for (i = 0; i < iloscLiczbDoZadania212; i++) {
                tablicaZad212[i] = parseInt(prompt("Prosze podać liczbe nr " + parseInt(i + 1)));
                console.log(tablicaZad212);
            }

            for (y = 0; y < tablicaZad212.length; y++) {
                sumaZad212 += tablicaZad212[y];
                console.log(sumaZad212);
            }

            const spanWynikSuma212 = document.createElement("span");

            const td212 = document.getElementById('td212');

            td212.appendChild(spanWynikSuma212);
            spanWynikSuma212.innerHTML = "Suma tych liczb to  " + sumaZad212 + "   ";

            sredniaZad212 = sumaZad212 / tablicaZad212.length;

            console.log("srednia " + sredniaZad212);

            const spanWynikSrednia212 = document.createElement("span");
            td212.appendChild(spanWynikSrednia212);
            spanWynikSrednia212.innerHTML = "Średnia to " + sredniaZad212;


        }
        const b212 = document.getElementById('212');
        b212.addEventListener("click", suma212);
        
        // zadanie 2.1.3

        const suma213 = function() {
            let tablicaZad213 = [];
            let sumaZad213 = 0;
            let sredniaZad213 = 0;



            for (i = 0; i < 11; i++) {
                tablicaZad213[i] = parseInt(prompt("Prosze podać liczbe nr " + parseInt(i + 1)));
                console.log(tablicaZad213);
            }

            for (y = 0; y < tablicaZad213.length; y++) {
                sumaZad213 += tablicaZad213[y];
                console.log(sumaZad213);
            }

            const spanWynikSuma213 = document.createElement("span");

            const td213 = document.getElementById('td213');

            td213.appendChild(spanWynikSuma213);
            spanWynikSuma213.innerHTML = "Suma tych liczb to  " + sumaZad213 + "   ";

            sredniaZad213 = sumaZad213 / tablicaZad213.length;

            console.log("srednia " + sredniaZad213);

            const spanWynikSrednia213 = document.createElement("span");
            td213.appendChild(spanWynikSrednia213);
            spanWynikSrednia213.innerHTML = "Średnia to " + sredniaZad213;


        }

        const b213 = document.getElementById('213');
        b213.addEventListener("click", suma213)

        // zadanie 2.2

        const sortowanie = function() {
            tablicaDoSortowania = [];
            tablicaLiterek = ["a", "b", "c"];

            for (i = 0; i < 3; i++) {
                tablicaDoSortowania[i] = parseInt(prompt("proszę podać " + tablicaLiterek[i]));
                console.log(tablicaDoSortowania);
            }
            tablicaDoSortowania.sort(function(a, b) {
                return a - b
            });
            console.log(tablicaDoSortowania);

            const div22 = document.getElementById('div22');

            const spanWynik22 = document.createElement("span");
            div22.appendChild(spanWynik22);
            spanWynik22.innerHTML = "Wynik to " + tablicaDoSortowania[0] + " " + tablicaDoSortowania[1] + " " + tablicaDoSortowania[2];



        }

        const b22 = document.getElementById('22');
        b22.addEventListener("click", sortowanie);

        // zadanie 2.3
        
        const pierwiastkowanie = function(){
        const a = parseInt(prompt("Proszę podać a"));
        const b = parseInt(prompt("proszę podać b"));
            if(a < 0){
                window.alert("Wartości muszą być wieksze od 0");
            }
            else if(b<0){
                window.alert("Wartości muszą być wieksze od 0");
            }
            else{
                
                const div23 = document.getElementById('div23');
                const span23 = document.createElement("span");
                div23.appendChild(span23);
                span23.innerHTML = "Wynik dzielenia pierwiastków a i b to: " + (Math.sqrt(a)/Math.sqrt(b));
            }
           
            
            
        }
        
        
        const b23 = document.getElementById('23');
        b23.addEventListener("click", pierwiastkowanie);

        // zadanie 3.1

        const zad_31 = function() {
            let liczba = prompt("proszę podać liczbę n");
            let text = "*" + prompt("proszę podać tekst do wyświetlenia");
            let wynik = text;

            const sector = document.createElement("div");
            const div31 = document.getElementById('div31');

            div31.appendChild(sector);


            for (i = 0; i < liczba - 1; i++) {
                wynik += text;

            }

            sector.textContent = wynik;
        }

        const b31 = document.getElementById('31');
        b31.addEventListener("click", zad_31);
        
        // zadanie 3.2 
        
        const rysujTabele = function(){
        
        let wysokoscTabeli = parseInt(prompt("Proszę podać wysokość tabeli", "100"));
        let szerokoscTabeli = parseInt(prompt("Proszę podać szerokość tabeli", "400"));
        let iloscWierszy =  parseInt(prompt("Proszę podać ilość wierszy w tabeli", "5"));
        
            const div32 = document.getElementById('div32');
            const tabelaZad32 = document.createElement("table");
            div32.appendChild(tabelaZad32);
            tabelaZad32.className = "tabelaZad32";
           
            const tabelaZad32Style = document.querySelector('.tabelaZad32');
            tabelaZad32Style.style.height = wysokoscTabeli;
            tabelaZad32Style.style.width = szerokoscTabeli;
            
            for(i=0; i < iloscWierszy; i++){
                const tr32 = document.createElement("tr");
                tabelaZad32.appendChild(tr32);
                for(j=0; j < 3; j++){
                    const td32 = document.createElement("td");
                    tr32.appendChild(td32);
                }
            }
            
            
        }
        
        const b32 = document.getElementById('32');
        b32.addEventListener("click", rysujTabele);
        
        // zadanie 3.3
        
        const wyswietlPierwiastki = function(){
         
        const div33 = document.getElementById('div33');
        const ol33 = document.createElement("ol");
                div33.appendChild(ol33);
            
            for(i=1;i < 101; i++){
                const li33 = document.createElement("li");
                ol33.appendChild(li33);
                li33.innerHTML = "Pierwiastek z " + i + " to " + Math.sqrt(i);
            }
        }
        
        
        const b33 = document.getElementById('33');
        b33.addEventListener("click", wyswietlPierwiastki);
