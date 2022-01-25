function welcome(firstName, lastName) {
    const fullName = firstName.concat(" ", lastName);

    function displayFullName(fullName) {
        alert("Welcome".concat(" ", fullName, "!"));
    }
    displayFullName(fullName)
}
