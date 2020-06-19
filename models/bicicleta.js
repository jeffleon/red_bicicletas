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

var bici = new Bicicleta(1, "gris", "sport", [4.653703, -74.085937])
var bici2 = new Bicicleta(2, "roja", "sport", [4.651821, -74.094777])
var bici3 = new Bicicleta(4, "Azul", "todo terreno", [4.637278, -74.089026])
Bicicleta.add(bici)
Bicicleta.add(bici2)
Bicicleta.add(bici3)


module.exports = Bicicleta 