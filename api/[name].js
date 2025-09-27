// api/pets/[name].js
export default function handler(req, res) {
  const { name } = req.query;

  const petList = [
    { name: "Giant Chocolate Chicken", type: "Shiny", url: "https://api.bgsipets.com/s-gcc" },
    { name: "Giant Chocolate Chicken", type: "Mythic", url: "https://api.bgsipets.com/m-gcc" },
    { name: "Giant Chocolate Chicken", type: "Shiny Mythic", url: "https://api.bgsipets.com/sm-gcc" },
    { name: "Leaf Doggy", type: "Shiny", url: "https://api.bgsipets.com/s-ld" },
    { name: "Leaf Doggy", type: "Mythic", url: "https://api.bgsipets.com/m-ld" },
    { name: "Leaf Doggy", type: "Shiny Mythic", url: "https://api.bgsipets.com/sm-ld" },
    { name: "Leaf Kitty", type: "Shiny", url: "https://api.bgsipets.com/s-lk" },
    { name: "Leaf Kitty", type: "Mythic", url: "https://api.bgsipets.com/m-lk" },
    { name: "Leaf Kitty", type: "Shiny Mythic", url: "https://api.bgsipets.com/sm-lk" }
  ];

  // Convert array into nested JSON
  const petsJSON = {};
  petList.forEach(pet => {
    if (!petsJSON[pet.name]) petsJSON[pet.name] = {};
    petsJSON[pet.name][pet.type] = pet.url;
  });

  const petData = petsJSON[name];
  if (!petData) {
    res.status(404).json({ error: "Pet not found" });
    return;
  }

  res.status(200).json({ [name]: petData });
}
