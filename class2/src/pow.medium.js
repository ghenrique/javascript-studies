// Changes number operators (+, -)
const inverse = ( x ) => x * -1


// Add function
const add = ( y ) => ( x ) => x + y

// Subtract function
const subtract = ( y ) => ( x ) => add( inverse( y ) )( x )


// Multipy function
const multiply = ( y ) => ( x ) => {

	// Init result in 0, so it could be incremented with the real value
	let result = 0

	// Adding the value defined on parameter to the result into the while
	const addX = add( x )
	// Subtract 1 from Y value so the while could stop when y = 1
	const decrement1 = subtract( 1 )

	// Creates the lace checking if y is > 0
	while ( y > 0 ) {

		// Adds the parameter value to result
		result = addX( result )
		// Removes 1 from the total time that the while function should execute
		y = decrement1( y )
	}

	// Returns the final result
	return result

}

// Function pow
// const pow = ( y ) => ( x ) => {

// 	// Set result to 1
// 	let result = 1

// 	// Creates a lace that will end when y = 1
// 	while( y > 0 ) {
// 		// Multiply result with the paramenter passed value
// 		result = multiply( result )( x )

// 		// Removes 1 interaction from the lace
// 		y = subtract( 1 )( y )
// 	}

// 	// returns result value
// 	return result

// }


const pow = ( y ) => ( x ) => Math.pow( x, y )


console.log( '3 ^ 2 = ', pow( 2 )( 3 ) )
console.log( '3 ^ 3 = ', pow( 3 )( 3 ) )
console.log( '3 ^ 4 = ', pow( 4 )( 3 ) )
console.log( '3 ^ 5 = ', pow( 5 )( 3 ) )