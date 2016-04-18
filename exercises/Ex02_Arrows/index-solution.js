var setNameIdsEs5 = function(id, name){
    return {
        id: id,
        name: name
    }
};

console.log(setNameIdsEs5(3, "Jon"));

var setNameIdsEs6 = (id, name) => {return {id: id, name: name}} ;

console.log(setNameIdsEs6(3, "Jon"));