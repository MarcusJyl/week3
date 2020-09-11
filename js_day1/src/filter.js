
let navne = ["Lars", "Peter", "Jan", "Bo", "Frederik"]
console.log(navne)
let filtreretnavne = navne.filter(navne => navne.length <=3)
console.log(filtreretnavne)

let storeNavne = navne.map(navne => navne.toUpperCase())
console.log(storeNavne)

let test = navne.map(function (navne) {
	return '<li>' + navne + '</li>';
}).join('');

console.log(test)

