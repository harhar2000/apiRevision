fetch("https://api.github.com/repos/evanw/esbuild")
  .then((response) => {
    return response.json(); // Wait for response to finish loading and then convert to json
  })
  .then((data) => {
    console.log(data);
  });

console.log("End of file");

// fetch("https://pokeapi.co/api/v2/pokemon/")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     console.log("End of file");
//   });
