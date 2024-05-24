document.addEventListener("DOMContentLoaded", async () => {
	const monthsData = await fetch("/api/finanzas/months");
	const months = await monthsData.json();

	const selects = document.querySelectorAll("select");
	const addOption = (select, value, text) => {
		const option = document.createElement("option");
		option.value = value;
		option.innerText = text;

		select.appendChild(option);
	};

	for (const month of months) {
		addOption(selects[0], month, month);
		addOption(selects[1], month, month);
	}
});

const selects = document.querySelectorAll("select");

selects[0].addEventListener("change", totalByMes);
function totalByMes() {
	const month = event.target.value;
	const totalRaw = fetch(`/api/finanzas/totalByMes/${month}`)
		.then((response) => response.json())
		.then((total) => {
			const p = document.createElement("p");
			p.innerText = `${total.mes} ${total.total}`;
			document.getElementById("total").replaceChildren(p);
		});
}

selects[1].addEventListener("change", movimientosByMes);
function movimientosByMes() {
	const month = event.target.value;
	const totalRaw = fetch(`/api/finanzas/movimientosByMes/${month}`)
		.then((response) => response.json())
		.then((movimientos) => {
			dibujarTabla(movimientos, document.getElementById("movimientos"));
		});
}


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
