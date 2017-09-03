// Function pow
const pow = ( y ) => ( x ) => {

	// Set result to 1
	let result = 1

	// Creates a lace that will end when y = 1
	while( y > 0 ) {
		// Multiply result with the paramenter passed value
		result *= x

		// Removes 1 interaction from the lace
		y -= 1
	}

	// returns result value
	return result

}


console.log( '3 ^ 2 = ', pow( 2 )( 3 ) )
console.log( '3 ^ 3 = ', pow( 3 )( 3 ) )
console.log( '3 ^ 4 = ', pow( 4 )( 3 ) )
console.log( '3 ^ 5 = ', pow( 5 )( 3 ) )