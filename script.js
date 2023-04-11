function getFormvalue() {
    //Write your code here
	 // Get the form inputs using their names
  const firstName = document.forms["form1"]["fname"].value;
  const lastName = document.forms["form1"]["lname"].value;

  // Display the first and last name using alert
  alert(`First Name: ${firstName}\nLast Name: ${lastName}`);

}
