// Підключаємо необхідні файли
const planet = require("./planet");
const station   = require("./station");
const cargo  = require("./cargo");

// Доступні операції з планетами
exports.find_Planet      = planet.find_Planet;
exports.add_Planet       = planet.add_Planet;
exports.remove_Planet    = planet.remove_Planet;
exports.edit_Planet      = planet.edit_Planet;
exports.get_Planets_List = planet.get_Planets_List;

// Доступні операції з станціями
exports.find_Station        = station.find_Station;
exports.add_Station         = station.add_Station;
exports.remove_Station      = station.remove_Station;
exports.edit_Station        = station.edit_Station;
exports.get_Stations_List   = station.get_Stations_List;

// Доступні операції з вантажами
exports.find_Cargo       = cargo.find_Cargo;
exports.add_Cargo        = cargo.add_Cargo;
exports.remove_Cargo     = cargo.remove_Cargo;
exports.edit_Cargo       = cargo.edit_Cargo;
exports.get_Cargos_List  = cargo.get_Cargos_List;