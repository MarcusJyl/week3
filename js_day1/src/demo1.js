var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

var all = boys.concat(girls)
console.log(all)

console.log(all.join("-"))

all.push("lone","Gitte");
all.unshift("hans","Kurt")
console.log(all)

all.shift("hans")
all.pop("Gitte")
console.log(all)

all.splice(3,2)
console.log(all)

all.reverse();
console.log(all)

all.sort();

console.log(all)

const upper = all.map(x => x.toUpperCase())
console.log(upper)

