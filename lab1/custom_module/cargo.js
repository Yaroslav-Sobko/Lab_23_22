// Клас - вантаж
class Cargo {

    // Конструктор класу
    constructor (address_1, address_2) {

        this.address_1 = address_1;
        this.address_2 = address_2;

        if (typeof address_1 === 'undefined') { this.address_1 = "Невідомий відправник"; }
        if (typeof address_2 === 'undefined') { this.address_1 = "Невідомий отримувач"; }

    }

}

// Знайти вантаж
function find_Cargo (address_1, address_2, planet) {

    for (let id = 0; id < planet.cargos_list.length; id++) {

        let cargo = planet.cargos_list[id];

        if (address_1 === cargo.address_1 &&
            address_2 === cargo.address_2) { return cargo; }

    }

    return -1;

}

// Додавання нового вантажу
function add_Cargo (address_1, address_2, planet) {

    let cargo = new Cargo(address_1, address_2);
    planet.cargos_list.push(cargo);

    return cargo;

}

// Видалення вантажу
function remove_Cargo (address_1, address_2, planet) {

    let cargo = find_Cargo(address_1, address_2, planet);

    if (cargo === -1) { return -1; }

    let id = planet.cargos_list.indexOf(cargo);
    planet.cargos_list.splice(id, 1);

    return 1;

}

// Редагувати вантаж
function edit_Cargo (address_1, address_2, planet, new_address_1, new_address_2) {

    let cargo = find_Cargo(address_1, address_2, planet);

    if (cargo === -1) { return -1; }

    let id = planet.cargos_list.indexOf(cargo);

    planet.cargos_list[id].address_1 = new_address_1;
    planet.cargos_list[id].address_2 = new_address_2;

    return 1;

}

// Отримати список вантажів
function get_Cargos_List (planet) {

    console.log("\n" + `Список усіх вантажів`);

    for (let id = 0; id < planet.cargos_list.length; id++) {

        let cargo = planet.cargos_list[id];
        console.log(`\tАдреса відправника: ${cargo.address_1}, адреса отримувача: ${cargo.address_2}`);

    }

    console.log();

    return planet.cargos_list;

}

// Експортуємо функції
exports.find_Cargo      = find_Cargo;
exports.add_Cargo       = add_Cargo;
exports.remove_Cargo    = remove_Cargo;
exports.edit_Cargo      = edit_Cargo;
exports.get_Cargos_List = get_Cargos_List;