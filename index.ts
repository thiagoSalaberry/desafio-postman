//Esta API sirve para buscar jugadores del plantel de BPMG, resultado de partido e inscribir jugadores
import * as express from "express";

const app = express();
const port = process.env.PORT || 5555;
app.use(express.json())
app.get("/jugadores", (req, res)=>{
    res.json({
        jugadores: []
    });
})

app.get("/jugadores/:dorsal", (req, res)=>{
    res.json({
        nombre: "Nombre del jugador",
        apellido: "Apellido del jugador",
        dorsal: req.params["dorsal"],
        posicion: "Posición del jugador"
    });
})

app.post("/jugadores", (req, res)=>{
    const {nombre, apellido, dni} = req.body;
    if(!nombre || !apellido || !dni) {
        return res.status(400).send("Datos insuficientes")
    } else {
        res.status(201).json({
            message: `El nuevo jugador ${nombre} ${apellido} con DNI:${dni} fue inscripto correctamente`
        })
    }
})

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})