document.addEventListener("DOMContentLoaded", async () => {
	const personalData = await fetch("/api/personal");
	const personal = await personalData.json();
    dibujarTabla(personal, document.querySelector("div"))
});

function dibujarTabla(data, div) {
	const table = document.createElement("table");
	const tr = document.createElement("tr");

	for (const key in data[0]) {
		const th = document.createElement("th");
		th.innerText = key;
		tr.appendChild(th);
	}
	table.appendChild(tr);

	for (const rows of data) {
		const row = document.createElement("tr");
		for (const columns in rows) {
			console.log(columns);
			const td = document.createElement("td");
			if (typeof rows[columns] === "object") {
				td.innerText = rows[columns]["name"];
			} else {
				td.innerText = rows[columns];
			}
			row.appendChild(td);
		}
		table.appendChild(row);
	}

	div.replaceChildren(table);
}
