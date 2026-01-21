let jackpot = 683288342;
const el = document.getElementById("jackpot");

setInterval(() => {
  jackpot += Math.floor(Math.random() * 700);
  el.textContent = jackpot.toLocaleString("id-ID");
}, 1000);
