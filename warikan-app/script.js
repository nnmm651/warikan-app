const form = document.getElementById("warikan-form");
const totalInput = document.getElementById("total");
const peopleInput = document.getElementById("people");
const amountPerPerson = document.getElementById("amount-per-person");
const detail = document.getElementById("detail");

const yenFormatter = new Intl.NumberFormat("ja-JP");

function showResult() {
  const total = Number(totalInput.value);
  const people = Number(peopleInput.value);

  if (!Number.isFinite(total) || !Number.isFinite(people) || total <= 0 || people <= 0) {
    amountPerPerson.textContent = "-- 円";
    detail.textContent = "金額と人数を入力してください";
    return;
  }

  const perPerson = Math.ceil(total / people);
  const exactRemainder = total % people;

  amountPerPerson.textContent = `${yenFormatter.format(perPerson)} 円`;

  if (exactRemainder === 0) {
    detail.textContent = `${people}人でぴったり割り切れます`;
  } else {
    detail.textContent = `端数込みで一人 ${yenFormatter.format(perPerson)} 円にすると集めやすいです`;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  showResult();
});

totalInput.addEventListener("input", showResult);
peopleInput.addEventListener("input", showResult);
