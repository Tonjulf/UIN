
// Oppgave 1 

function clearButton()  {

    let btn = document.getElementById("remove").innerHTML = " ";

    btn.addEventListener('click', clearButton);
};

// Oppgave 2 

    function changeText () {
        // skriver ut stringen når knappen blir trykket på
        let btn = document.getElementById("change").innerHTML = "jeg er ikke kreativ nok til å komme på en tekst :P";
        // aktiverer knappen
        btn.addEventListener('click', changeText);
    };

    // Oppgave 3 
    // snodig, jobb me denne
    
    document.addEventListener('keypress', inputFelt);

    function inputFelt (pushed){
       

        let textBox = document.getElementById("input").value;
        let pTag = document.getElementById("input-text");

        if(pushed.keyCode === 13){
            // fjerner newContent i textbox etter at enter er trykket

          document.getElementById("input").value = "";
          pTag.innerHTML = textBox;
         //   pTag.innerHTML = textBox;
            
            
            } 
        };

// Oppgave 4 // vett ikke hvilen mylist der er snakk om, så jeg tenkte
//å lage en array og skrive det ut i liste funksjon ved å trykke på kanppen.
 
let myList = [
    "item1",
    "item2",
    "item3",
    "item4"
];
// henter ul id
let ul = document.getElementById("ul");
// henter knapp id
let btn = document.getElementById("write-list");
// Gjør at vi kan trykke på knappen
btn.addEventListener("click", function(){
//For hvert element i arrayen, gjør dette. Dette endrer ikke den orginale arrayen
    myList.forEach(function(e){
        // lagere liste elementet
        let li = document.createElement('li');
        //retunere tekstinnholde til den angitte niden
        li.innerText = e;
       // Legger et "barn" under en "forelder", dvs li under ul
        ul.appendChild(li)

    })
})


// oppgave 5 // denne skjønner jeg ikke 
// Lag lytterene og funksjonene som gjør at du kan lage et et HTML element (gjerne fra en nedtrekkslist med id #select)
// og tekst fra inputboksen med id #text. Bruk knappen med id #create. 
// Legg teksten til elementet med id #placeholder


function addElement (){
   //knapp
   let btn = document.getElementById("create");
   //inputfelt
   let input = document.getElementById("text");
   //nedtrekk liste
   let select = document.getElementById("select");
   //inntastingsfeltet
   let placeHolder = document.getElementById("placeholder"); 
   
   let htmlSelect = select.value;
   let text = input.value;


  placeHolder.innerHTML += `<${htmlSelect}>${text}</${htmlSelect}>`;

  btn.addEventListener("click", addElement);
};


  




//oppgave 6 // denner er ikke helt ferdig, koden er ikke optimal

function removeList (){
 // sletter første elemente i listen
   let liste = document.getElementById("list");
    liste.removeChild(liste.childNodes[0]);

    
    
}

//oppgave 7 

function checkLength()
{
    if ( document.getElementById("name").value.length >= 4 )
    {
         document.getElementById("order").style.border = "thick solid #FFC0CB";
    
       
    }   
    
}


//oppgave 8 sliter med å gi ulike liste element forskjellige farger

function giveColor (){
  
    // henter knapp
   // const btn1 = document.getElementById("color");

    
// Bruker oddetall og partall nøkkelord som brukes sammen med child element for å finne ut om indexen er partall eller oddetall,
// den første indexen av child element er 1
//.querySelectorAll() Henter alle elementer, enten på tag, id eller klasse

    const oddNumber = document.querySelectorAll('li:nth-child(odd)'); 
    const evenNumber= document.querySelectorAll('li:nth-child(even)');
            for(let i = 0; i < oddNumber.length; i++){
                oddNumber[i].style.color = "green";
                evenNumber[i].style.color = "pink";
  
               
 
}
       
  
 }
    
