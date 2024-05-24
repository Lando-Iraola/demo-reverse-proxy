document.addEventListener("DOMContentLoaded", async () => {
	const breedData = await fetch("/api/breeds");
	const breeds = await breedData.json();

	const coatData = await fetch("/api/coats");
	const coats = await coatData.json();

	const selects = document.querySelectorAll("select");

	const addOption = (select, value, text) => {
		const option = document.createElement("option");
		option.value = value;
		option.innerText = text;

		select.appendChild(option);
	};

	for (const breed of breeds) {
		addOption(selects[0], breed.name, breed.name);
		addOption(selects[2], breed.name, breed.name);
	}

	for (const coat of coats) {
		addOption(selects[1], coat.name, coat.name);
		addOption(selects[3], coat.name, coat.name);
	}
});

const buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", fetchRaza);
async function fetchRaza() {
	const raza = document.querySelectorAll("select")[0].value;
	const razasRaw = await fetch(`/api/cats/byBreed/${raza}`);
	const razas = await razasRaw.json();
	const div = document.getElementById("raza");
	dibujarTabla(razas, div);
}

buttons[1].addEventListener("click", fetchPelaje);
async function fetchPelaje() {
	const pelaje = document.querySelectorAll("select")[1].value;
	const pelajesRaw = await fetch(`/api/cats/byCoat/${pelaje}`);
	const pelajes = await pelajesRaw.json();
	const div = document.getElementById("pelaje");
	dibujarTabla(pelajes, div);
}

buttons[2].addEventListener("click", fetchPelajeAndRaza);
async function fetchPelajeAndRaza() {
	const raza = document.querySelectorAll("select")[2].value;
	const pelaje = document.querySelectorAll("select")[3].value;
	const razaNPelajeRaw = await fetch(
		`/api/cats/byBreed/${raza}/andCoat/${pelaje}`
	);
	const razaNPelaje = await razaNPelajeRaw.json();
	const div = document.getElementById("raza-pelaje");
	dibujarTabla(razaNPelaje, div);
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
