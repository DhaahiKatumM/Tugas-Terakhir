const elRoot = document.getElementById("root");

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => res.json())
  .then((data) => {
    let temp = "";
    data.results.forEach((pokemon) => {
      // Extract the name and URL
      const name = pokemon.name;
      const url = pokemon.url;

      // Process the image URL
      const id = url.split("/").slice(-2, -1)[0];
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

      // Create a card element for each Pokemon
      temp += `
        <div class='card'>
          <img src='${imageUrl}' alt='${name}'>
          <h4>${name}</h4>
          <a href="${url}">${url}</a>
        </div>`;
    });

    elRoot.innerHTML = temp;
  })
  .catch((err) => {
    console.log(err);
  });