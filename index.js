"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Esta API sirve para buscar jugadores del plantel de BPMG, resultado de partido e inscribir jugadores
var express = require("express");
var app = express();
var port = process.env.PORT || 5555;
app.use(express.json());
app.get("/jugadores", function (req, res) {
    res.json({
        jugadores: []
    });
});
app.get("/jugadores/:dorsal", function (req, res) {
    res.json({
        nombre: "Nombre del jugador",
        apellido: "Apellido del jugador",
        dorsal: req.params["dorsal"],
        posicion: "Posición del jugador"
    });
});
app.post("/jugadores", function (req, res) {
    var _a = req.body, nombre = _a.nombre, apellido = _a.apellido, dni = _a.dni;
    res.status(201).json({
        message: "El nuevo jugador ".concat(nombre, " ").concat(apellido, " con DNI:").concat(dni, " fue inscripto correctamente")
    });
});
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
