let time = [
  {
    nome: "alejo",
    camisa: 10,
  },
  {
    nome: "romario",
    camisa: 5,
  },
  {
    nome: "roger guedes",
    camisa: 1,
  },
];

// for (let i = 0; i < time.length; i++) {
//   console.log(i, time[i]);
// }

// for (const i in time) {
//   console.log(i, time[i]);
// }

// for (const jogador of time) {
//   console.log(jogador)
// }

// console.table(time);

// for (const key in time) {
//   time[key]["multiplo"] = time[key]["camisa"] * 2;
// }
// console.table(time);

// for (const i in time) {
//   time[i].multiplo = time[i].camisa * 2;
// }
// console.table(time);
// for (const jogador of time) {
//   jogador["multiplo"] = jogador["camisa"] * 2;
// }
// console.table(time);
for (const jogador of time) {
  jogador.multiplo = jogador.camisa * 2;
}
console.table(time);
