//Kommentere ut linje → CTRL + K+ C


 //oppgavetekst??
// TODO: Hent HTML #id med getElementById
// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)


/* har laget 3 funksjoner, en for å hå hente ut navn (handleSearch), en for å filtrer på alder (handleFilter) 
    og en som legger til nye bruker i tabellen (addvalue). 
    handleSearch blir trigget ved keyUp
    HandleFilter og addValue blir trigget ved bruk av knapp.
    I funksjonen har jeg laget en filter methode som skrives ut i console.log som viser alle aldere som er høyer enn,
    alder som er skrevet i inputfelt.
*/


//  object array
const users = [
    { id: 0, name: "Trude", age: 77 },
    { id: 1, name: "Simen", age: 85 },
    { id: 2, name: "Lars", age: 99 },
    { id: 3, name: "Ali", age: 34 },
    { id: 4, name: "Finn", age: 60 },
    { id: 5, name: "Kåre", age: 70 },
    { id: 6, name: "Hanne", age: 20 },
    { id: 7, name: "Åse", age: 21 },
    { id: 8, name: "Anne", age: 6 },
    { id: 9, name: "Amanda", age: 31 },
    { id: 10, name: "Morgan", age: 87 }
  ];

 
  //id til ul liste
  const userUl = document.getElementById("users");
  // arrow function 
  const createTableUI = (users) => {
    userUl.innerHTML = null;
    //skriver ut navnene i arrayene som HTML liste
    userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
    //Skriver ut veridiene i object arrayen
    for (const user of users) {
      userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
    }
  };
  

    
    const handleSearch = () => {
    
    // henter verdi fra input feltet
    const searchValue = document.getElementById("name").value;
        if(searchValue === ""){
        // kaller på main funksjonen
            main();
            return;
        
    }
    // console.log(searchValue);
    const result = [];

    // går igjennom object array gjennom å bruke forEach metoden
    users.forEach(user => {
        // Hvis navnet i søkefeltet stemmer overenst med array object
        // bruker toLowerCase() slik at man ikke trenger å måtte bruke stor bokstav
        if(user.name.toLowerCase() === searchValue.toLowerCase()) {
            // skal det settes inn i result array
            result.push(user);
          
        }
        
    });

    // lager en tabel for result array
    createTableUI(result);
};
// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
   const handleFilter = () => {
        
    // henter id for input age
        const inputAge = document.getElementById("age").value;
            if(inputAge === ""){

            main()
            return;
    }
        const resultAge = [];  
        

        users.forEach(user => {
            if(user.age === parseInt(inputAge)){
                resultAge.push(user);
            }
                                    // skriver ut aller aldere som er høyere enn inputverdien
                                    // if(user.age > inputAge )
                                //console.log(`${user.name} is ${user.age}`);
           
                })
        // skriver ut aller aldere som er høyere enn inputverdien      
        const filter = users.filter(value => value.age > inputAge)
        // dette vises så i console.log
        console.log(filter); 
          
        createTableUI(resultAge);
    }
 
    // Funksjon som legger til nye verdier

        const addValue = () => {

        const addName = document.getElementById("newValueName").value;
        const addAge = document.getElementById("newValueAge").value;

        const exists = false;

        // går igjenno, object arrayen
        users.forEach(user => {
            if(user.name === addName && user.age === parseInt(addAge)){
                document.getElementById("outprint").innerHTML = "Denne brukeren finnes alt i tabellen";
                exists = true;
            }
    
        });

        // hvis verdien ikke stemmer, blir ny verdi lagt inn i tabell
        if(!exists){
            users.push({id:users.length, name:addName, age:parseInt(addAge)});
        }
        
        createTableUI(users);
    }
        
 
    const main = () => {
            createTableUI(users);
        };
        main();

            // TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
          document.addEventListener("keyup", handleSearch);
            // TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
          document.getElementById("search-btnAge").addEventListener("click", handleFilter);
          document.getElementById("addValue").addEventListener("click", addValue);

         
        