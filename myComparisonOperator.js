// Conditions with comparison Operators
/*
  Operator    Desc
  ==          Equal to make the conversion of type
  ===         Equal value & type
  !=          Not equal to
  !==         Not equal value & not type
  >           Greater than
  <           Less than
  >=          Greater than equal to
  <=          Less than equal to

  Comparasion between number and string
  if we have a number and the string can be easy convert to number, convert to numer
  if cannot easy convert to number, we get undefined
*/

var studentAge = '16';

// Equal to
if ( studentAge == 18) {
  document.write( "Student age is equal to 18 <br>");
}

// Equal value & type

if ( studentAge === 18) {
    document.write( "Student age value and type are same is equal to 18 <br>");
}

// Not Equal to

if ( studentAge != 18) {
    document.write( "Student age is not equal to 18 <br>");
}

// Not Equal value & type

if ( studentAge !== 18) {
    document.write( "Student age  value or type is not equal to 18 <br>");
}

// Greater than

if ( studentAge > 18) {
    document.write( "Student age is greater to 18 <br>");
}

// Leser than

if ( studentAge < 18) {
    document.write( "Student age is leser to 18 <br>");
}

// Greater than Equal to

if ( studentAge >= 18) {
    document.write( "Student age is greater or equal to 18 <br>");
}

// Leser than equal to

if ( studentAge <= 18) {
    document.write( "Student age is leser  or equal to 18 <br>");
}