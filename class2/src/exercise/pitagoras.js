// Setting pow function
const pow = ( y ) => ( x ) => Math.pow( x, y )
// Add function
const add = ( y ) => ( x ) => x + y
// Root funtion
const root = ( y ) => ( x ) => Math.pow( x, 1/y )
// Set squared root
const squareRoot = root( 2 )


// Pitagoras function
const teoremaDePitagoras = ( b, c ) => {

	// Defines Hipotenusa
	let hipotenusa

	// Get the pow value from Cateto B
	const b2 = pow( 2 )( b )
	// Get the pow value from Cateto C
	const c2 = pow( 2 )( c )
	// Defines Hipotenusa pow2 value, that is equal to adding b2 to c2
	const x2 = add( c2 )( b2 )
	
	// Set Hipotenusa squareroot to get final value
	hipotenusa = squareRoot( x2 )

	// Returns hipotenusa value
	return hipotenusa

}

console.log( teoremaDePitagoras( 9, 12 ) )
console.log( teoremaDePitagoras( 1, 1 ) )