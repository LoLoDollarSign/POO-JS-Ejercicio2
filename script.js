// Definición de la clase (Molde) [1]
class Mascota {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.energia = 100; // Estado inicial [5]
    }

    // Métodos: Acciones que modifican las propiedades [6]
    jugar() {
        this.energia -= 20;
        if (this.energia < 0) this.energia = 0; // Validación de rango
    }

    comer() {
        this.energia += 10;
        if (this.energia > 100) this.energia = 100; // Validación de máximo
    }

    dormir() {
        this.energia = 100;
    }

    estado() {
        return `${this.nombre} (${this.tipo}) - Energía: ${this.energia}%`;
    }
}

// Crear la instancia única [7]
const miMascota = new Mascota("Fido", "Perro");

// Función para conectar el objeto con la página web (DOM) [2]
function actualizarPantalla() {
    document.getElementById("info").innerText = miMascota.estado();
    const barra = document.getElementById("barra");
    barra.style.width = miMascota.energia + "%";
}

// Funciones que llaman a los métodos del objeto
function hacerJugar() { miMascota.jugar(); actualizarPantalla(); }
function hacerComer() { miMascota.comer(); actualizarPantalla(); }
function hacerDormir() { miMascota.dormir(); actualizarPantalla(); }

// Mostrar estado inicial
actualizarPantalla();