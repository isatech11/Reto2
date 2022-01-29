const carta = 'bici coche balón _playstation bici coche peluche'



export default function listGifts(letter) {
    const Carta = letter.split(" ");
    return Carta.filter((Gift) => {
        let value = Gift.startsWith("_")
        if (value !== true && Gift !=="") return Gift !== value
      })
      .reduce((selector, Gift) => {
        selector[Gift] = (selector[Gift] || 0) + 1;
        return selector
      }, {});
    }




const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/