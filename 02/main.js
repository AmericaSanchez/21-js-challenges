const carta = 'bici coche balón _playstation bici coche peluche';

const listGifts = (carta) => {
  return carta
}//listaGifs

const regalos = listGifts(carta);
let quitaGuiones = carta.replace('_', '');
let quitaEspacio = quitaGuiones.replace('  ', '');

split = quitaEspacio.split(" "),
  obj = {};

for (let i = 0; i < split.length; i++) {
  if (obj[split[i]] === undefined) {
    obj[split[i]] = 1;
  } else {
    obj[split[i]]++;
  }
}

console.log(obj)
