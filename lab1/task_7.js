const mod = require('./custom_module');

// Додавання планет
let h1 = mod.add_Planet("Planet_1", "Test coordinates 1");
let h2 = mod.add_Planet("Planet_2", "Test coordinates 2");
let h3 = mod.add_Planet("Planet_3", "Test coordinates 3");

// Список планет
mod.get_Planets_List();

// Видалення планет
console.log("Видалення планети: Planets_2");
mod.remove_Planet("Planet_2", "Test coordinates 2");

// Список планет
mod.get_Planets_List();

// Зміна планет
console.log("Зміна планети: Planet_3");
mod.edit_Planet("Planet_3", "Test coordinates 3", "Planet_3.1", "Test coordinates 3.1");

// Список планет
mod.get_Planets_List();

// Пошук планет
let plan1 = mod.find_Planet("Planet_1", "Test coordinates 1");
console.log(`Пошук планети Planet_1: ${plan1 !== -1 ? "знайдено" : "не знайдено"}`);
let plan2 = mod.find_Planet("Planet_7", "Test coordinates 7");
console.log(`Пошук планети Planet_7: ${plan2 !== -1 ? "знайдено" : "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////////////

// Додавання станцій
mod.add_Station("Station_1", "Coordinates_1", plan1);
mod.add_Station("Station_2", "Coordinates_2", plan1);
mod.add_Station("Station_3", "Coordinates_3", plan1);

// Список станцій планети Planet_1
mod.get_Stations_List(plan1);

// Видалення станцій
console.log("Видалення станцій: Station_2");
mod.remove_Station("Station_2", "Coordinates_2", plan1);

// Список станцій планети Planet_1
mod.get_Stations_List(plan1);

// Редагування станцій
console.log("Редагування станцій: Station_1");
mod.edit_Station("Station_1", "Coordinates_1", plan1, "Station_1.1", "Coordinates_1.1");

// Список станцій планети Planet_1
mod.get_Stations_List(plan1);

// Пошук станцій
let doc1 = mod.find_Station("Station_3", "Coordinates_3", plan1);
console.log(`Пошук станції - Station_3: ${plan1 !== -1 ? "знайдено" : "не знайдено"}`);
let doc2 = mod.find_Station("Station_7", "Coordinates_7", plan1);
console.log(`Пошук станції - Station_7: ${plan2 !== -1 ? "знайдено" : "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////////////

// Додавання вантажів
mod.add_Cargo("Cargo_1_1", "Cargo_1_2", plan1);
mod.add_Cargo("Cargo_2_1", "Cargo_2_2", plan1);
mod.add_Cargo("Cargo_3_1", "Cargo_3_2", plan1);

// Список вантажів
mod.get_Cargos_List(plan1);

// Видалення вантажів
console.log("Видалення вантажів: Cargo_1");
mod.remove_Cargo("Cargo_1_1", "Cargo_1_2", plan1);

// Список вантажів
mod.get_Cargos_List(plan1);

// Редагування вантажів
console.log("Редагування вантажів: Cargo_3");
mod.edit_Cargo("Cargo_3_1", "Cargo_3_2", plan1, "Cargo_3_1.1", "Cargo_3_2.1");

// Список вантажів
mod.get_Cargos_List(plan1);

// Пошук вантажів
let pat1 = mod.find_Cargo("Cargo_2_1", "Cargo_2_2", plan1);
console.log(`Пошук вантажу - Cargo_2: ${plan1 !== -1 ? "знайдено" : "не знайдено"}`);
let pat2 = mod.find_Cargo("Cargo_7_1", "Cargo_7_2", plan1);
console.log(`Пошук вантажу - Cargo_7: ${plan2 !== -1 ? "знайдено" : "не знайдено"}`);