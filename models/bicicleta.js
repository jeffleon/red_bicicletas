var Bicicleta = function(id, color, modelo, ubicacion)
{
    this.id = id
    this.color = color
    this.modelo = modelo
    this.ubicacion = ubicacion
}

Bicicleta.prototype.toString = function(){
    return "id" + this.id + " | color" + this.color
}

Bicicleta.allBicis = []

Bicicleta.add = Bici=>Bicicleta.allBicis.push(Bici);

Bicicleta.findById = function(bici){
    var find = Bicicleta.allBicis.find(x=> x.id == bici)
    if (find)
        return find
    else
        throw new Error(`No existe una bicicleta con el id ${bici}`)
}

Bicicleta.removeById = function(bici){
    for(i = 0; i < Bicicleta.allBicis.length; i++)
    {
        if(bici == Bicicleta.allBicis[i].id)
        {
            Bicicleta.allBicis.splice(i, 1)
            break
        }
    }
}

var bici = new Bicicleta(1, "gris", "sport", [-34.56, 98.23])
var bici2 = new Bicicleta(2, "roja", "sport", [-70.5, -20.74])
var bici3 = new Bicicleta(4, "Azul", "todo terreno", [-20.0, 48.52])
Bicicleta.add(bici)
Bicicleta.add(bici2)
Bicicleta.add(bici3)


module.exports = Bicicleta 