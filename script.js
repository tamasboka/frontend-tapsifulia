const values = Array.from({length: 20}, (_, index) => {
    const value = Math.floor(Math.random()*10000)+1;
    return {
        id: index + 1,
        value: value,
        type: value % 2 === 0 ? 'páros' : 'páratlan',
        category: value < 3000 ? "szegények pénze" : (value >= 3000 && value <= 6000) ? "középosztály pénze" : "gazdagok pénze"
    }
})

const th = ["ID", "Érték (fülium)", "Típus", "Kategória"]

const filterbtn = document.getElementById("applybtn")
filterbtn.addEventListener("click", (e) => {
    e.preventDefault()
    const filtered_arr = applyFilter(values);
    createTable(filtered_arr, tableDiv)
})

function applyFilter(arr) {
    document.getElementById("tableDiv").innerHTML = "";
    /*let filtered_arr = []
    const category = document.getElementById("category").value;
    const min = document.getElementById("min").value;
    const max = document.getElementById("max").value;
    if (!isFinite(min)) {
        min = 0;
    }
    if (!isFinite(max)) {
        max = 10000;
    }
    for (const obj of arr) {
        //console.log(obj["value"])
        if (obj["value"] >= min && obj["value"] <= max) {
            if (category === "all") {
                filtered_arr.push(obj)
            }
            else if (category === obj["category"]) {
                filtered_arr.push(obj)
            }
        }
    }
    return filtered_arr;
    */
    let filtered_arr = [...arr];
    const selectedFilter = document.querySelector('#category').value
    if (selectedFilter !== 'all') {
        filtered_arr = filtered_arr.filter(item => item.category === selectedFilter)
    }
    const minValue = parseInt(document.querySelector("#min").value) || 0;
    const maxValue = parseInt(document.querySelector("#max").value) || Infinity;
    filtered_arr = filtered_arr.filter(item => item.value >= minValue && item.value <= maxValue)
    return filtered_arr
}

function createTableHead(arr, parent) {
    const tr = document.createElement("tr")
    for (const title of arr) {
        const th = document.createElement("th")
        th.innerHTML = title;
        tr.appendChild(th)
    }
    parent.appendChild(tr)
}

function createTableRow(obj, parent) {
    const tr = document.createElement("tr")
    for (const key of Object.keys(obj)) {
        const td = document.createElement("td")
        td.innerHTML = obj[key];
        tr.appendChild(td)
    }
    parent.appendChild(tr)
}

function createTable(arr, div) {
    const table = document.createElement("table")
    table.classList.add("table", "text-center")
    table.id = "table";
    div.appendChild(table)
    createTableHead(th, table);
    for (const obj of arr) {
        createTableRow(obj, table)
    }
}

const tableDiv = document.getElementById("tableDiv")

createTable(values, tableDiv)