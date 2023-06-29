class celulares {
  constructor(color, peso, tamaño, rdc, ram) {
    this.color = color;
    this.peso = peso;

    this.tamaño = tamaño;
    this.resolucionDeCamara = rdc;
    this.memoriaRam = ram;
    this.encendido = false;
  }
  presionarEncendido() {
    if (this.encendido == false) {
      alert('celular prendido');
      this.encendido = true;
    } else {
      alert('ya esta apagado');
      this.encendido = false;
    }
  }
  reiniciar() {
    if (this.encendido == true) {
      alert('reiniciando celular');
    } else {
      alert('el celular esta apagado');
    }
  }
  tomarFoto() {
    alert(`foto tomada en una resolución de: ${this.resolucionDeCamara}`);
  }
  grabarVideo() {
    alert(`grabando video en ${this.resolucionDeCamara}`);
  }
  mostrarInfo() {
    return `
    color: <b>${this.color}</b><br>
    peso: <b>${this.peso}</b><br>
    Tamaño: <b>${this.tamaño}</b><br>
    Resolución de Cámara: <b>${this.resolucionDeCamara}</b><br>
    Resolución de Video: <b>${this.memoriaRam}</b><br>
    `;
  }
}

const celular1 = new celulares('rojo', '180g', 5, 'full HD', '2GB');
const celular2 = new celulares('negro', '160g', 4.5, 'full HD', '2GB');
const celular3 = new celulares('blanco', '140g', 4, 'HD', '1GB');

// celular1.presionarEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarEncendido();

document.write(`
${celular1.mostrarInfo()}<br>
${celular2.mostrarInfo()}<br>
${celular3.mostrarInfo()}<br>

`);

