
var pokemons = ['Ivysaur', 'Charmander', 'Charizard', 'Wartortle', 'Caterpie', 'Butterfree', 'Kakuna', 'Pidgey', 'Pidgeot', 'Raticate']
var myRowData = document.getElementById('myrowdatas');
var commonClass = myrowdatas.getElementsByClassName('commonClass');


var displaySearch = function (search){
	var searchVal = search.value.toUpperCase() ;
	if(searchVal.length){
		for (let i = 0 ; i< pokemons.length ; i++ ) {
			var list = pokemons[i].toUpperCase();
		    if(!list.includes(searchVal)){
		        commonClass[i].style.display = "none"
		    }
		}
	} else {
		for (let i = 0 ; i< pokemons.length ; i++ ) {
		    commonClass[i].style.display = "block"
		}
	}
}
// Code starts here
