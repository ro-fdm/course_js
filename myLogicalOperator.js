// Conditions with Logical Operators

// Logical Operators

/*
  Operator    Desc
  &&          and
  ||          or
  !           not
*/

var studentAge = 16;
var studentGenedar = "M"; // M for male

// Logical AND operator
if ( ( studentAge  >= 18) && ( studentGenedar == "M") ) {
  document.write("Student age is greater than or equal to 18 AND student geneder is male");
}

//Logical OR operator
if ( ( studentAge  >= 18) || ( studentGenedar == "M") ) {
  document.write("Student age is greater than or equal to 18 OR student geneder is male <br>");
}

//Logical NOT operator
if ( ! ( studentAge  > 18) ) {
  document.write("Student age is less than 18");
}