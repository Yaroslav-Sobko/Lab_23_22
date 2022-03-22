// Клас - планета
class Planet {

    constructor (name, coordinates) {

        this.name = name;
        this.coordinates = coordinates;
        this.stations_list = [];
        this.cargos_list = [];

        if (typeof name === 'undefined')    { this.name = "Невідома планета"; }
        if (typeof coordinates === 'undefined') { this.coordinates = "Невідомі координати"; }

    }

}

// Список усіх планет
let global_planets_list = new Array();

// Знайти планету в колекції
function find_Planet (name, coordinates) {

    for (let Planet of global_planets_list) {

        if (name === Planet.name &&
            coordinates === Planet.coordinates) { return Planet; }

    }

    return -1;

}

// Додавання нової планети
function add_Planet (name, coordinates) {

    let planet = new Planet(name, coordinates);
    global_planets_list.push(planet);

    return planet;

}

// Видалити планету з колекції
function remove_Planet (name, coordinates) {

    for (let id = 0; id < global_planets_list.length; id++) {

        let planet = global_planets_list[id];

        if (planet.name === name &&
            planet.coordinates === coordinates) { global_planets_list.splice(id, 1);
            return 1; }

    }

    return -1;

}

// Редагувати планету в колекції
function edit_Planet (name, coordinates, new_name, new_coordinates) {

    for (let id = 0; id < global_planets_list.length; id++) {

        let planet = global_planets_list[id];

        if (planet.name === name &&
            planet.coordinates === coordinates) { global_planets_list[id].name = new_name;
            global_planets_list[id].coordinates = new_coordinates;
            return 1; }

    }

    return -1;

}

// Отримати список планет
function get_Planets_List() {

    console.log("\n" + "Список усіх планет:");

    for (let id = 0; id < global_planets_list.length; id++) {

        let plan = global_planets_list[id];
        console.log(`Назва планети: ${plan.name}, координати планети: ${plan.coordinates}`);

    }

    console.log();

    return global_planets_list;

}

// Експортуємо функції
exports.find_Planet      = find_Planet;
exports.add_Planet       = add_Planet;
exports.remove_Planet    = remove_Planet;
exports.edit_Planet      = edit_Planet;
exports.get_Planets_List = get_Planets_List;