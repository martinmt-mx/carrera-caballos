class Caballo {
    constructor(nombre = "Solovino") {
      this.nombre = nombre
      this.camino = 0
    }
    turno() {
      this.tiro = Math.ceil(Math.random()*6)
      if (this.tiro==1) {
        this.camino += 3
        return this.camino
      }
      if (this.tiro0==2 || this.turno==3) {
        this.camino += 1
        return this.camino
      }
      if (this.tiro>3) {
        this.camino += 2
        return this.camino
      }
      return this.camino += 0
    }
  }
  
  class Carrera {
    
    constructor(caballos = [], meta = 100) {
      this.caballos = caballos
      this.meta = meta
    }
    correr() {
      let final = false
      let recorrido = []
      while (final === false) {
        for (let i = 0; i < this.caballos.length; i++) {
          recorrido[i] = this.caballos[i].turno()
          if (recorrido[i]!==0){
            console.log(this.caballos[i].nombre, " va en la posición: ", recorrido[i])
          }
          if(recorrido[i]>=this.meta){
            final = true
            console.log("Ganó")
            console.log(this.caballos[i].nombre)
            return
          }
        }
      }
    }
  }
  let Caballo1 = new Caballo("caballo1")
  let Caballo2 = new Caballo("caballo2")
  let Caballo3 = new Caballo("caballo3")
  
  let competidores = [Caballo1, Caballo2, Caballo3]
  // eslint-disable-next-line
  let carrera = new Carrera(competidores, 100).correr()
  