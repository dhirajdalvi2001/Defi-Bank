import { defiBank } from "../../declarations/defiBank";

window.addEventListener("load", async () => {
  update();
});

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("#submit-btn");
  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const withdrawAmount = parseFloat(
    document.getElementById("withdrawal-amount").value
  );

  button.setAttribute("disabled", true);

  if (document.getElementById("input-amount").value.length != 0) {
    await defiBank.topUp(inputAmount);
  }
  if (document.getElementById("withdrawal-amount").value.length != 0) {
    await defiBank.withdraw(withdrawAmount);
  }

  // defiBank.compound();

  update();
  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";
  button.removeAttribute("disabled");
});

async function update() {
  const currentAmount = await defiBank.checkBalance();
  document.getElementById("value").innerText =
    Math.round(currentAmount * 100) / 100;
}
