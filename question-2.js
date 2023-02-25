const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=efdefe3f99f047c9934528e800ad4187"
const container = document.querySelector(".container");
container.innerHTML = "Loading...";

async function getList() {
    try {
    const response = await fetch(url);
    const data = await response.json();
    const items = data.results;
    container.innerHTML = "";
    
    for ( let i = 0; i < items.length; i++) {
        const tags = items[i].tags;
        const tagsNumber = tags.length;
        container.innerHTML += `<div class="results"><ul>
                                <li>Name: ${items[i].name}</li>
                                <li>Rating: ${items[i].rating}</li>
                                <li>Tags: ${tagsNumber}</li>
                                </ul></div>`
        if (i === 7) {
            break;
        }
    }
    } catch(error) {
        container.innerHTML = "An error occured"

    } 
}
getList()