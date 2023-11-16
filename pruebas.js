function contarOvejas(ovejas) {
  let filt = []
  ovejas.forEach(x => {
    if (x.color == "rojo" && x.name.toLowerCase().includes("a")) {
      filt.push(x);
    }
  })
  return filt;
  };

const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);
