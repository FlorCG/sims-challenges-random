const FAMILY_STRUCTURE = [{
    title: "Padre soltero",
    description: "El padre soltero debe criar solo a todos los hijos requeridos, lo que significa que un cónyuge/pareja no puede vivir en el mismo hogar que el padre soltero y los hijos. El padre soltero puede tener tanto romance como quiera, pero mudarse con una pareja para ayudar a criar a esos niños es lo que está prohibido.<br><br>Tu Sim monoparental puede casarse o tener una pareja viva antes de que nazca el primer hijo o adoptado, pero ese cónyuge/pareja debe ser trasladado fuera del hogar dentro de las 24 horas posteriores al nacimiento o adopción del primer hijo. <br>Después de que nazca el primer hijo, los Sims varones solteros pueden mudarse con las madres de los hijos biológicos posteriores únicamente durante el embarazo. La madre debe abandonar el hogar dentro de las 24 horas siguientes al nacimiento del bebé. Los hombres solteros también pueden usar otros métodos, incluidas modificaciones o trampas, para agregar a sus bebés al hogar sin siquiera trasladar a la madre.<br><br>La restricción de mudarse con la pareja del padre soltero se elimina una vez que su hijo menor ha alcanzado el punto medio de la etapa de la adolescencia (7 días para la vida normal inalterada; si ha modificado la etapa de la adolescencia, es el punto medio de su etapa personalizada). Después de que el más joven haya alcanzado el punto medio de la etapa de la adolescencia, serás soltero.<br><br>El Sim podrá entonces mudarse o casarse con una pareja, si así lo desea (esto no es obligatorio).<br><br> Si tu Sim soltero tiene una pareja que vive con él antes del primer nacimiento o después de que el menor sea adolescente, esa pareja puede conservar cualquier progresión laboral que se le haya asignado. Si ese Sim está desempleado, debe permanecer desempleado, pero puede ganar dinero a través de oportunidades. ¡No hagas una carrera por ellos!",
    roll: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
},
{
    title: "Pareja",
    description: "Su sim debe tener un cónyuge o pareja romántica que viva con él en el hogar. Técnicamente, el segundo sim no tiene que ser el padre o la madre de los niños, pero debe estar presente en el hogar.<br><br>Aquí técnicamente no existe ninguna restricción sobre la 'monogamia en serie'. Si realmente desea reemplazar a la pareja/cónyuge por uno diferente, puede hacerlo. Esto puede resultar inconveniente ya que la nueva pareja/cónyuge debe mudarse poco después de que el último se vaya (para preservar la lista de estructura familiar) y tener la misma carrera que la del último. Él/ella está sujeto a la misma tirada en todos los aspectos, con la excepción de que si saca carreras perfectas, solo se requiere que el último socio/cónyuge complete ese objetivo.",
    roll: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
},
{
    title: "Pareja mixta",
    description: "Esta tirada funciona exactamente como Pareja, con el requisito adicional de que los hijos sean una mezcla de hijos biológicos y adoptados.<br><br>Debes engendrar al menos un hijo biológico y adoptar al menos un hijo. Es posible que tenga más hijos que la cantidad que obtuvo para cumplir con esta regla. es decir, si obtienes 1 hijo, tendrás que tener un hijo adicional para poder tener tanto hijos adoptados como biológicos. Si tienes dos hijos y tienes gemelos biológicos antes de adoptar, aún necesitas adoptar uno más. Si lo deseas, puedes utilizar un clon del centro científico (Generations EP) en lugar de un niño adoptado.",
    roll: [22, 23]
},
{
    title: "Padre soltero mixto",
    description: "Este rol funciona como padre soltero, con el requisito adicional de que los hijos sean una mezcla de hijos biológicos y adoptados. (Consulte 'pareja mixta' para obtener más aclaraciones).",
    roll: [24]
},
{
    title: "Hijastros",
    description: "Esto funciona exactamente como Pareja, con el requisito adicional de que el cónyuge o pareja de hecho ya debe tener uno o más hijos que no sean hijos biológicos de su heredero. Estos niños deben venir con sus padres a su hogar.<br>Se le permite exceder la cantidad de niños obtenidos en la sección B cuando se muda con el cónyuge (ejemplo: si obtuvo 2 niños y el cónyuge/pareja tiene 3 pequeños , puedes asimilarlos todos). <br>También se puede exceder el límite para tener hijos biológicos con el nuevo cónyuge, pero sólo por un embarazo, y sólo si no tener un heredero biológico le molesta. Si el cónyuge/pareja le trae menos hijos de los requeridos en su lista, su sim debe compensar la diferencia para alcanzar el total que obtuvo. El heredero puede ser cualquiera de los hijos.",
    roll: [25, 26]
},
{
    title: "Padre soltero 'con ayuda'",
    description: "No puede casarse ni mudarse con una pareja romántica. En lugar de eso, traiga a un amigo o familiar para que le ayude a criar a los niños. Este 'ayudante' puede tener sus propios hijos en su hogar, pero, al igual que su heredero, no puede casarse ni mudarse con una pareja (de todos modos, hasta la mitad de la etapa de adolescencia del hijo menor; para obtener más aclaraciones al respecto, consulte Padre soltero). arriba).<br><br>Cualquier niño que el ayudante críe en el hogar cuenta para el número total de niños que obtuvo. Entonces, si sacas dos hijos, tu Sim puede tener dos y el ayudante ninguno, o pueden tener uno cada uno, etc.<br>Todos los niños de la casa deben vivir según las reglas de esa generación.",
    roll: [27, 28]
},
{
    title: "Segunda chance",
    description: "Esto funciona como Pareja, con el requisito adicional de que tu sim debe tener al menos dos parejas o cónyuges a lo largo de su generación. Su heredero debe tener al menos un hijo del primer cónyuge/pareja. El primer socio/cónyuge debe mudarse y todo. ... En algún momento después de haber tenido al menos un hijo con la primera pareja/cónyuge, esa pareja/cónyuge debe irse, por cualquier medio (muerte, ruptura, separación, etc.). Su heredero debe entonces encontrar otra pareja romántica. para tomar su lugar.<br><br>Si tiras para un solo niño, debe ser del primer compañero. Si obtienes más de uno, puedes dividirlos entre los dos socios como quieras, siempre y cuando al menos uno sea del primer socio.<br><br>Si obtienes Carreras perfectas o Cumplidas como objetivos, puedes elegir volver a tirar, ya que es posible que sus socios no tengan tiempo suficiente para alcanzar el máximo de carreras o cumplir un LTW. Pero puedes conservar esas tiradas si crees que puedes gestionarlas. Si eliges mantener uno de esos objetivos, solo un socio tiene que cumplirlo, el que esté bajo tu control durante más tiempo.",
    roll: [29, 30, 31]
},
{
    title: "Pareja y amigos",
    description: "Básicamente tienes a la pareja y luego también tienes a un amigo o pariente adulto en la casa. El sim no emparejado puede tener un romance, pero no puede trasladar a su pareja al hogar. El amigo funciona igual que el sim asistente en Single Parent with Help. Todos los Sims pueden tener hijos en el hogar, siempre que hayas obtenido suficientes niños.<br>Para mayor diversión, tu sim podría ser el único; ¡Quizás sus amigos que viven allí sean la pareja felizmente casada! ¡Oh! ¡Qué giro!",
    roll: [32, 33]
},
{
    title: "Padre soltero con ayuda doble",
    description: "Funciona exactamente como Padre soltero con ayuda, excepto que hay dos ayudantes y ninguno de estos tres puede tener un romance entre sí.",
    roll: [34]
},
{
    title: "Casa llena",
    description: "En este rollo, tienes tu sim y otros tres. Sí, otros TRES. Se han eliminado todas las restricciones en cuanto a la relación que tienen los cuatro Sims entre sí.<br>Si obtienes Full House y cinco hijos, puedes volver a tirar para # de niños o volver a tirar la estructura familiar. No ambos.<br><br>NOTA: si has obtenido una estructura familiar que impide que tus Sims (herederos o ayudantes) tengan parejas románticas viviendo con ellos, esta restricción se elimina cuando el niño más pequeño del hogar está en la mitad del período. etapa de adolescencia (7 días para etapas de adolescencia inalteradas). Esto se aplica a los padres solteros y también se aplica a cualquier otro rol con restricciones románticas.<br>Estas incorporaciones tardías al hogar pueden conservar cualquier carrera que Story Progression les haya asignado, pero trate de no hacer trampa al respecto. No hagas una carrera para ellos. Tenga en cuenta que no es necesario que agregue estas personas adicionales a su hogar; la opción sólo está ahí para fines narrativos.",
    roll: [35, 36, 37]
}

];


export { FAMILY_STRUCTURE };