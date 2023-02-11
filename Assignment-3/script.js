// get reference to HTML table
var table = document.getElementById("myTable");
var addNew = document.getElementById("add");
var count = table.rows.length;

// initialize table display
function initialize() {
  for (var i = 1; i < table.rows.length; i += 2) {
    table.rows[i].innerHTML += "<td></td>";
  }
  for (var i = 2; i < table.rows.length; i += 2) {
    table.rows[i].style.display = "none";
  }
  table.rows[0].innerHTML += "<th>Edit</th>";
}

// add event listeners to table cells
function addEventListeners() {
  console.log("addEventListeners", table.rows.length);
  for (let i = 1; i < table.rows.length; i += 2) {
    table.rows[i].cells[0].children[0].addEventListener("click", check);
    table.rows[i].cells[0].children[3].addEventListener("click", () => {
      showBottom(i);
    });
    table.rows[i].cells[8].addEventListener("click", () => {
      table.rows[i].remove();
      table.rows[i].remove();
      check();
    });
    table.rows[i].cells[9].addEventListener("click", () => {
      alert("Edit the details of the selected row");
    });
  }
}

// call initialize and addEventListeners functions
initialize();

// function to update table display when a cell is clicked
function check() {
  var count = 0;
  for (let i = 1; i < table.rows.length; i += 2) {
    if (table.rows[i].cells[0].children[0].checked) {
      table.rows[i].style.backgroundColor = "yellow";
      table.rows[i].cells[8].innerHTML = "<button onclick='alert(\"Selected record deleted successfully\")'>Delete</button>";
      table.rows[i].cells[9].innerHTML = "<button>Edit</button>";
      count++;
    } else {
      table.rows[i].style.backgroundColor = "#fff";
      table.rows[i].cells[8].innerHTML = "";
      table.rows[i].cells[9].innerHTML = "";
    }
  }
  if (count > 0) {
    document.getElementById("button").disabled = false;
    document.getElementById("button").style.backgroundColor = "orange";
    document.getElementById("button").style.borderColor = "orange";
    for (var i = 0; i < table.rows.length; i++) {
      for (var j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].style.display = "";
        if (j == 8) table.rows[i].cells[j].style.display = "";
      }
    }
  } else {
    document.getElementById("button").disabled = true;
    document.getElementById("button").style.backgroundColor = "gray";
    document.getElementById("button").style.borderColor = "transparent";
    for (var i = 0; i < table.rows.length; i++) {
      for (var j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].style.display = "";
        if (j == 8 || j == 9) table.rows[i].cells[j].style.display = "none";
      }
    }
  }
}
check();

// Show/hide bottom row when a table row is clicked
function showBottom(i) {
  // Get the next row (bottom row) of the clicked row
  if (table.rows[i + 1].style.display == "none") {
    // If bottom row is currently hidden, show it and rotate the down arrow
    table.rows[i + 1].style.display = "";
    table.rows[i].cells[0].children[3].style.transform = "rotate(180deg)";
  } else {
    // If bottom row is visible, hide it and rotate the down arrow back to original position
    table.rows[i + 1].style.display = "none";
    table.rows[i].cells[0].children[3].style.transform = "rotate(0deg)";
  }
}

// Add event listeners for various actions in the table
for (let i = 1; i < table.rows.length; i += 2) {
  // Checkbox click
  table.rows[i].cells[0].children[0].addEventListener("click", check);
  // Down arrow click
  table.rows[i].cells[0].children[3].addEventListener("click", () => {
    showBottom(i);
  });

  // Delete button click
  table.rows[i].cells[8].addEventListener("click", () => {
    table.rows[i].remove();
    table.rows[i].remove();
    check();
  });
  table.rows[i].cells[9].addEventListener("click", () => {
    alert("Edit the details of the selected row");
  });
}

// function that generates a random integer less than the input max
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


// Add button click
addNew.addEventListener("click", () => {
  // Increase the count of students and add a new row to the table
  table.innerHTML += `
      <tr>
        <td>
          <input type="checkbox" /><br /><br /><img
            src="down.png"
            width="25px"
          />
        </td>
        <td>Student ${Math.floor(++count / 2)}</td>
        <td>Teacher ${Math.floor(count++ / 2)}</td>
        <td>"Approved"</td>
        <td>Fall</td>
        <td>TA</td>
        <td>${Math.floor(Math.random() * 90000) + 10000}</td>
        <td>${getRandomInt(100) + "%"}</td>
        <td></td>
        <td></td>
      </tr>
      <tr style="display:none" class="dropDownTextArea">
        <td colspan="8">
          Advisor:<br /><br />
          Award Details<br />
          Summer 1-2014(TA)<br />
          Budget Number: <br />
          Tuition Number: <br />
          Comments:<br /><br /><br />
          Award Status:<br /><br /><br />
        </td>
      </tr>
  `;
  check();
  // Call the check function and add event listeners
  addEventListeners();
});
