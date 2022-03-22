// Клас - станція
class Station {

    constructor (name, st_coordinates) {

        this.name = name;
        this.st_coordinates = st_coordinates;

        if (typeof name === 'undefined') { this.name = "Невідома станція"; }

    }

}

// Знайти станцію планети
function find_Station (name, st_coordinates, planet) {

    for (let id = 0; id < planet.stations_list.length; id++) {

        let station = planet.stations_list[id];

        if (name === station.name &&
            st_coordinates === station.st_coordinates) { return station; }

    }

    return -1;

}

// Додавання новогї станції
function add_Station (name, st_coordinates, planet) {

    let station = new Station(name, st_coordinates);
    planet.stations_list.push(station);

    return station;

}

// Видалення станції планети
function remove_Station (name, st_coordinates, planet) {

    let station = find_Station(name, st_coordinates, planet);

    if (station === -1) { return -1; }

    let id = planet.stations_list.indexOf(station);
    planet.stations_list.splice(id, 1);

    return 1;

}

// Редагувати станції планети
function edit_Station (name, st_coordinates, planet, new_name, new_st_coordinates) {

    let station = find_Station(name, st_coordinates, planet);

    if (station === -1) { return -1; }

    let id = planet.stations_list.indexOf(station);

    planet.stations_list[id].name = new_name;
    planet.stations_list[id].st_coordinates = new_st_coordinates;

    return 1;

}

// Отримати список станцій конкретної планети
function get_Stations_List (planet) {

    console.log("\n" + `Список усіх станцій планети ${planet.name}:`);

    for (let id = 0; id < planet.stations_list.length; id++) {

        let station = planet.stations_list[id];
        console.log(`\tНазва станції: ${station.name}, координати: ${station.st_coordinates}`);

    }

    console.log();

    return planet.stations_list;

}

// Експортуємо функції
exports.find_Station      = find_Station;
exports.add_Station       = add_Station;
exports.remove_Station    = remove_Station;
exports.edit_Station      = edit_Station;
exports.get_Stations_List = get_Stations_List;