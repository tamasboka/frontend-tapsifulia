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