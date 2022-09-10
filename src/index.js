let rowCounter = 0;
let same = false;
let sameId = -1;

const submitButton = document.getElementById("submit-data");
submitButton.addEventListener("click", function (event) {
  for (let i = 0; i < rowCounter; i++) {
    const td = document.getElementById("td1" + i);
    if (td.value == document.getElementById("uname").value) {
      same = true;
      sameId = i;
      break;
    }
  }
  addRow(same, sameId);
  rowCounter++;
  event.preventDefault();
});

let id = 0;
function addRow(same, sameId) {
  const table1 = document.getElementById("table1");

  if (same == false) {
    let tr = document.createElement("tr");
    table1.appendChild(tr);

    let td1 = document.createElement("td");
    td1.setAttribute("id", "td1" + id);
    td1.innerText = document.getElementById("uname").value;
    td1.value = document.getElementById("uname").value;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.setAttribute("id", "td2" + id);
    td2.innerText = document.getElementById("email").value;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.setAttribute("id", "td3" + id);
    td3.innerText = document.getElementById("address").value;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.setAttribute("id", "td4" + id);
    td4.innerText = document.getElementById("admin").value;
    tr.appendChild(td4);

    id++;
  } else {
    let td2Same = document.getElementById("td2" + sameId);
    td2Same.innerText = document.getElementById("email").value;
    let td3Same = document.getElementById("td3" + sameId);
    td3Same.innerText = document.getElementById("address").value;
    let td4Same = document.getElementById("td4" + sameId);
    td4Same.innerText = document.getElementById("admin").value;
    same = false;
  }
}

const emptyButton = document.getElementById("empty-table");
emptyButton.addEventListener("click", function () {
  const table1 = document.getElementById("table1");
  for (let i = 0; i < table1.rows.length; ) {
    table1.deleteRow(i);
  }
  rowCounter = 0;
  same = false;
  sameId = -1;
  id = 0;
});
