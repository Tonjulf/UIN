
function findLongestWord() {
// Statisk tekst som brukes til å søke i
const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard."
;
// splits a string into an array of substrings
const myArray = text.split();

//Initiate a variable that will hold the length of the longest word
let longestWord = 0;
console.log(myArray);

for( let i = 0; i < myArray.length; i ++){
 // If strSplit[i].length is greater than the word it is compared with...
    if(myArray[i].length > longestWord){ 
        // ...then longestWord takes this new value
        longestWord = myArray[i].length;
    }
}

}
findLongestWord();

   