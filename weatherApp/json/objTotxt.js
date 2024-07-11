async function metrolife() {
    const URL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const requestURL = new Request(URL);

    try {
        const response = await fetch(requestURL);
        const superHeroesText = await response.text(); // Await the text conversion

        console.log("JSON as text:");
        console.log(superHeroesText); // Display the JSON as text

        // Parse the JSON text to an object for use in the application
        const superHeroes = JSON.parse(superHeroesText);
        console.log("Parsed JSON object:");
        console.log(superHeroes); // Display the JSON object

        // For comparison, stringify the object again
        console.log("Stringified JSON object:");
        console.log(JSON.stringify(superHeroes, null, 2)); // Pretty-print the object back to a string
    } catch (error) {
        console.error("Error fetching or parsing data:", error);
    }
}

// Call the function to execute the fetch and display
metrolife();




let obj = {name:"Chris", age:18};
obj;
let myString = JSON.stringify(obj)
console.log(myString);