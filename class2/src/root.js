const pow = ( y ) => ( x ) => Math.pow( x, y )
const root = ( y ) => ( x ) => Math.pow( x, 1/y )

const squareRoot = root( 2 )
const cubicRoot = root( 3 )

// console.log( 'Raiz cúbica de 27 =', Math.cbrt( 27 ) )
// console.log( 'Raiz quadrada de 9 =', Math.sqrt( 9 ) )
console.log( 'Raiz quadrada de 9 =', squareRoot( 9 ) )
console.log( 'Raiz cúbica de 27 =', cubicRoot( 27 ) )
