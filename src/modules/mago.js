export class Mago extends Personagem{
    elementoMagico
    levelMagico
    inteligencia

   constructor(nome,vida,elementoMagico, levelMagico, inteligencia) {
        super(nome,vida) 
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia =  inteligencia
     }

 }
