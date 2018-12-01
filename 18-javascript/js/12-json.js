// let eurUsd = {
//     last: 1.3444,
//     cur: 1.3552,
// };
// console.log(eurUsd, last);

let person = {
    students: [
        { name: 'Kamil', height: 170 },
        { name: 'Kuba', height: 180 },
        { name: 'Marta', height: 160 }
    ],
    nauczyciel: "Krystian",
}

for (let key in person) {
    // console.log(Array.isArray (person[key]));
    if (Array.isArray(person[key]))
        person[key].forEach(element => {
            console.log("Imię " + element.name + " wysokość " + element.height + "cm.");

        });
}






