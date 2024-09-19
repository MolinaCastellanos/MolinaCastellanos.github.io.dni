
function validar(form) {
    let array = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let numdni = form.numdni.value.trim();
    let letradni = form.letradni.value.trim();
    let index = numdni % 23;
    let letracorrecta = array[index];
    
    if (numdni <= 0 || numdni>99999999 || Number.isNaN(index)) {
        alert("El número de DNI no es válido.");
        return false;
    }
    
    if (letradni != letracorrecta) {
        alert("La letra del DNI es incorrecta.");
        return false;
    }

    alert("El número y la letra de DNI son correctos");
    return true;
}
