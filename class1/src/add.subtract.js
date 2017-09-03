// Defines x
const f = ( x ) => x
// Changes number operators (+, -)
const inverse = ( x ) => x * -1

// Add function
const add = ( y ) => ( x ) => x + y
// Subtract function
const subtract = ( y ) => ( x ) => add( inverse( y ) )( x )

console.log( add( 4 )( 6 ) ) 
console.log( subtract( 4 )( 6 ) )

// const PA = ( y ) => ( x ) => x + 2
// const PG = ( y ) => ( x ) => x * 2

// const PA_razao2 = PA( 2 ) // ( x ) => x + 2
// const PA_razao5 = PA( 5 ) // ( x ) => x + 5

// console.log( PA_razao2( 5 ) )
// console.log( PA_razao5( 5 ) )