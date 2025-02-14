function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter', //devuelve T o F
        'Validar nombre no validó que el nombre no sea vacío', //el mensaje de error solo lo da si es F
    );

    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );

    console.assert(
        validarNombre("Santiago") ===  '',
        "Validar nombre falló con un nombre válido"
    );
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad("Buenos Aires") === '',
        "Validar ciudad no funcionó con una ciudad válida"
    );

    console.assert(
        validarCiudad("") === "El campo ciudad no puede estar vacío",
        "Validar ciudad no mostró un error cuando la ciudad es vacía"
    )
}

function probarValidarDescripcionRegalo() {

    console.assert(
        validarDescripcionRegalo('') === 'El campo descripcion no puede estar vacío',
        "La función descripción regalo no validó que el campo no esté vacío"
    );

    console.assert(
        validarDescripcionRegalo('asjhdksahdjklhsadoiusadiosadksdamnopkvopxipajrpinrpainspinsafpsfasadkljslkadjlksajdksda') ===
        'El campo descripcion es muy largo',
        "La función validar descripción regalo no validó que el campo no sea muy largo"
    );

    console.assert(
        validarDescripcionRegalo("regalo") === "",
        "La función validar descripción regalo no funcionó con una descripción correcta"
    );

}
