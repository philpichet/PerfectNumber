
var form = document.getElementById('select-quantity');
var ulElement = document.getElementById('perfect-list')
console.log(ulElement)

form.addEventListener("submit", function (event) {
	event.preventDefault();

	// We transform the value in int
	var number = parseInt(form.elements.quantity.value);

	
	// Check if number is an integer
	if (typeof number === "number" && number >= 1 && number <= 8) {

		var perfectList = getPerfects(number);
		displayPerfectList(perfectList)
		
	} else {
		alert("Veuillez rentrer un chiffre compris entre 1 et 8");
	}
	return false;
})



function isPrime(x) {
	racine = Math.sqrt(x);
        var b = 1;
                    do {
                        b++;
                    } while (b <= racine && x%b != 0);
                    
                if (x == 2 && x%2 != 0 && !Number.isInteger(racine)) 
                    {
                        return true;  
                    } else if(b > racine)
		    {
			return true;                  
                    }
        else return false;
}


function getPerfects(number) {
	// Create array for storage
	var perfectNumbers = [];
	var i = 2
	// We make a boucle for the p value
	while(true) {

		first = Math.pow(2, i- 1); 
		second = Math.pow(2, i) - 1;
		
		// if first and second are prime we have this form
		// perfect = 2exp(i-1)exp(2exp(i))
		if(isPrime(first) && isPrime(second)){
			perfectNumbers.push( first * second)
		}
		// We have the number of perfect number
		if(perfectNumbers.length == number) {
			// we break the boucle
			break
		}
		i++;
	}
	return perfectNumbers;
}

function displayPerfectList(perfectList) {
	// We assure that ul is empty
		while(ulElement.firstChild) {
			ulElement.removeChild(ulElement.firstChild);
		}
	perfectList.forEach(function (perfectNumber) {
		// We create a li element for content a perfect number and we display it in ul list
		var liElement = document.createElement("li");
		liElement.innerHTML = perfectNumber;

		

		ulElement.append(liElement);
	} )
}
