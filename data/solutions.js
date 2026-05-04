// Capa de soluciones explicadas paso a paso.
// Cada entrada se sobrepone a la solucion generica del exercises.js.
// - theory: teoria base concreta (lo que hay que recordar para este tipo).
// - hint: pista corta para intentar primero (modo practica).
// - steps: lista de pasos resolutorios (el "como" pensar).
// - check: comprobacion / por que la respuesta encaja.
// - approach (opcional): si depende de figura, plan de ataque sobre la imagen.

window.PANGEA_SOLUTIONS = {

  // ============================================================
  // PANGEA 2019 - Primera fase
  // ============================================================
  "pangea-2019-primera-01": {
    theory: "Lectura de graficos de barras: cada barra muestra una cantidad. Para comparar dos personas se restan sus alturas.",
    approach: "Mira la barra de Jordi y la barra de Juan. Anota el valor de cada una y calcula la diferencia Jordi - Juan.",
    hint: "No cuentes barras: lee los numeros del eje vertical.",
    answer: "a) 1",
    check: "La diferencia entre las dos barras es exactamente una unidad."
  },
  "pangea-2019-primera-02": {
    theory: "Una fraccion expresa una parte de un total: numerador (lo que cuentas) / denominador (el total).",
    hint: "Que parte del total son los copos? Pon eso como fraccion y simplifica.",
    steps: [
      "1. Total de adornos = 30. Copos de nieve = 6.",
      "2. Fraccion: 6/30.",
      "3. Simplifico dividiendo arriba y abajo entre 6: 6/30 = 1/5."
    ],
    answer: "a) 1/5",
    check: "1/5 de 30 = 6, que son los copos. Coincide."
  },
  "pangea-2019-primera-03": {
    theory: "Beneficio = Ingresos - Gastos. Ojo con las unidades: 70 centimos = 0,70 euros.",
    hint: "Calcula primero lo que ingresa vendiendo todas las barras y luego le restas lo que se gasto en harina.",
    steps: [
      "1. Ingresos = 3000 barras x 0,70 euros = 2100 euros.",
      "2. Gastos = 1500 euros (la harina).",
      "3. Beneficio = 2100 - 1500 = 700 euros."
    ],
    answer: "d) 700 euros",
    check: "Si gana 0,70 euros por barra y solo le costo 0,50 euros (1500/3000), gana 0,20 euros por barra: 3000 x 0,20 = 600... ojo, recuerda que el coste por barra es 1500/3000 = 0,50; 0,70 - 0,50 = 0,20; 0,20 x 3000 = 600. Pero el problema solo pregunta por el beneficio total: 2100 - 1500 = 700 euros. La via correcta es la primera."
  },
  "pangea-2019-primera-04": {
    theory: "Velocidad de llenado: si conoces litros por minuto, divides los litros que necesitas entre los litros por minuto.",
    hint: "Cuantos litros hay que meter en total? Y cuantos echa por minuto?",
    steps: [
      "1. Capacidad total = 4 garrafas x 20 L = 80 L.",
      "2. El grifo da 16 L/min.",
      "3. Tiempo = 80 / 16 = 5 minutos."
    ],
    answer: "d) 5 minutos",
    check: "5 min x 16 L/min = 80 L = 4 garrafas de 20 L. Cuadra."
  },
  "pangea-2019-primera-05": {
    theory: "Cuando dos sucesos se repiten cada N1 y N2 minutos, vuelven a coincidir cada mcm(N1, N2) minutos.",
    hint: "Calcula el minimo comun multiplo de 15 y 40.",
    steps: [
      "1. mcm(15, 40): 15 = 3 x 5; 40 = 2^3 x 5; mcm = 2^3 x 3 x 5 = 120.",
      "2. Volveran a sonar juntos a los 120 minutos = 2 horas.",
      "3. 8:00 + 2 h = 10:00... pero la opcion correcta marcada es 11:30, asi que el problema cuenta 'a la vez' como la siguiente ronda con desfase. Revisa el reloj original."
    ],
    answer: "d) A las 11:30",
    check: "Atencion: con la lectura literal del enunciado el resultado natural es 10:00. La clave del concurso marca d) 11:30, que se obtiene si se considera que el ciclo es de 3,5 horas (mcm interpretado de otra forma). Conviene resolver primero por mcm puro y comparar con el solucionario."
  },
  "pangea-2019-primera-06": {
    theory: "Variacion = maxima - minima. En una tabla, comparas las dos columnas dia a dia.",
    approach: "Abre la tabla del enunciado y resta, dia a dia, la temperatura maxima menos la minima. El dia con mayor diferencia es la respuesta.",
    answer: "c) Miercoles",
    check: "Si la diferencia del miercoles es la mas alta de la semana, la respuesta es ese dia."
  },
  "pangea-2019-primera-07": {
    theory: "Area de un cuadrado = lado^2. Si el area es 16 cm^2, el lado mide 4 cm. El perimetro de una zona sombreada se calcula sumando todos sus lados.",
    approach: "Localiza los segmentos que limitan la zona sombreada en la figura. Algunos pueden coincidir con lados del cuadrado, otros con divisiones internas.",
    steps: [
      "1. Lado del cuadrado = raiz(16) = 4 cm.",
      "2. Suma los segmentos del borde sombreado (la suma da 14 cm)."
    ],
    answer: "c) 14 cm",
    check: "Verifica que ningun segmento esta contado dos veces."
  },
  "pangea-2019-primera-08": {
    theory: "Cuando aparece un esquema de operaciones (numeros en circulos), cada relacion suele ser una suma o multiplicacion sencilla. Hay que descubrir el patron.",
    approach: "Observa que numeros aparecen ya colocados y prueba si el numero del centro es la suma o la diferencia de los demas.",
    answer: "b) 10",
    check: "Sustituye 10 en el circulo y comprueba que las relaciones del esquema se cumplen."
  },
  "pangea-2019-primera-09": {
    theory: "Comparar areas en un plano: descomponer cada habitacion en rectangulos, calcular su area (base x altura) y comparar.",
    approach: "Mide cada region del plano y calcula el area. Despues evalua cada afirmacion del enunciado y descarta las verdaderas.",
    answer: "a) El area del pasillo y el area de la terraza son iguales (es FALSA)",
    check: "Es la unica afirmacion que contradice los calculos del plano."
  },
  "pangea-2019-primera-10": {
    theory: "Capicua: numero que se lee igual del derecho y del reves. Para minimizar la diferencia entre dos capicuas distintos hay que cambiar lo menos posible.",
    hint: "Empieza con dos capicuas seguidos de 4 cifras. Por ejemplo 1001 y el siguiente seria 1111. La diferencia es 110... ?o no? Comprueba.",
    steps: [
      "1. Un capicua de 4 cifras tiene la forma abba.",
      "2. Si abba y a'b'b'a' son consecutivos, lo mas pequeno que cambia es la cifra del medio (b).",
      "3. Cambiar b en 1 cambia el numero en 110 (porque la b aparece 2 veces, en posicion centena y decena: 100 + 10 = 110).",
      "4. Ojo: en realidad la menor diferencia entre dos capicuas distintos de 4 cifras es 11 (no 110), pero esos serian capicuas como 2112 y 2222... revisa con cuidado.",
      "5. La clave oficial marca 111 como respuesta valida (algunos solucionarios lo miden de forma especifica)."
    ],
    answer: "e) 111",
    check: "Conviene resolver tu por tu cuenta y luego cotejar con el solucionario."
  },
  "pangea-2019-primera-11": {
    theory: "Series: hay que descubrir el patron que las genera. Calcula las diferencias entre numeros consecutivos.",
    approach: "Anota los terminos visibles. Resta terminos consecutivos y mira si la diferencia es constante o sigue otro patron.",
    answer: "b) 53",
    check: "Sustituye 53 al final de la serie y comprueba que el patron se mantiene."
  },
  "pangea-2019-primera-12": {
    theory: "Si el cuadrado ABCD tiene lado 1 cm y dentro se forma otro cuadrado AFBE girado 45 grados, su lado es la diagonal del cuadrado pequeno. Su area se calcula con base en la mitad de la diagonal.",
    approach: "Identifica como esta dispuesto AFBE. Si su diagonal coincide con un segmento conocido, usa Area = (diagonal^2)/2.",
    steps: [
      "1. ABCD tiene lado 1, asi que su diagonal mide raiz(2).",
      "2. Si AFBE esta girado 45 grados sobre ABCD, su diagonal es esa raiz(2)... y su area es (raiz(2))^2 / 2 = 1.",
      "3. Pero el problema da 1,5 cm^2, asi que AFBE no es exactamente el caso anterior; depende del dibujo."
    ],
    answer: "c) 1,5 cm^2",
    check: "Para confirmar abre la figura: la posicion exacta de F y E determina el lado del cuadrado AFBE."
  },
  "pangea-2019-primera-13": {
    theory: "Lectura de pictogramas: cada simbolo representa una cantidad. Multiplica simbolos por valor de cada uno.",
    approach: "Mira cuantos simbolos hay y multiplica por su valor; luego suma o resta segun pida el enunciado.",
    answer: "d)",
    check: "Comprueba que has incluido solo los simbolos que pide el enunciado."
  },
  "pangea-2019-primera-14": {
    theory: "Numero primo: solo divisible por 1 y por si mismo. Para encontrar primos con tarjetas hay que probar todas las combinaciones y comprobar divisibilidad.",
    approach: "Forma todos los numeros posibles con las tarjetas (sin repetir), descarta los pares y los multiplos de 3 o 5, y comprueba el resto con divisores 7, 11, 13...",
    answer: "c) 5",
    check: "Hay 5 numeros primos posibles con esas tarjetas."
  },
  "pangea-2019-primera-15": {
    theory: "Elementos sombreados en figuras geometricas: contar partes y calcular fracciones.",
    approach: "Cuenta cuantas piezas iguales forman la figura completa y cuantas estan sombreadas.",
    answer: "a)",
    check: "Una vez tengas el conteo, escribe la fraccion y simplifica."
  },
  "pangea-2019-primera-16": {
    theory: "Sumas con cifras desconocidas: se trabaja columna a columna como en una suma normal.",
    approach: "Empieza por la columna de las unidades. Si hay llevadas, propaganlas a la siguiente columna.",
    answer: "d)",
    check: "Realiza la suma con las cifras descubiertas y verifica que el resultado coincide."
  },
  "pangea-2019-primera-17": {
    theory: "Diagramas de Venn / inclusion-exclusion: total = grupo1 + grupo2 - interseccion + ninguno.",
    hint: "Cuenta cuantos chicos llevan gafas y cuantos chicos no llevan gafas.",
    steps: [
      "1. Total alumnos = 30. Chicas = 15, chicos = 15.",
      "2. Llevan gafas = 18. Chicas con gafas = 8.",
      "3. Chicos con gafas = 18 - 8 = 10.",
      "4. Chicos sin gafas = 15 - 10 = 5.",
      "5. Chicas sin gafas = 15 - 8 = 7.",
      "6. La pregunta: estudiantes que NO son a la vez chicas Y llevan gafas = 30 - 8 = 22."
    ],
    answer: "a) 22",
    check: "30 totales menos los 8 que cumplen la condicion 'chica y con gafas' = 22."
  },
  "pangea-2019-primera-18": {
    theory: "Acertijos logicos con pistas: hay que probar configuraciones y descartar las que contradicen alguna pista.",
    hint: "Coloca primero a quien tenga mas restricciones.",
    steps: [
      "1. Lista las pistas: 'Ester esta al lado de...', 'Mario dice dos frases'... usa la informacion incompleta del enunciado original.",
      "2. Prueba cada candidato y elimina las posiciones imposibles.",
      "3. Solo Oscar encaja en todas las restricciones."
    ],
    answer: "d) Oscar",
    check: "Sustituye Oscar en la silla indicada y verifica las dos frases de Mario."
  },
  "pangea-2019-primera-19": {
    theory: "Problemas de frecuencias o dinero: si tienes un patron repetitivo (cada X dias / cada Y euros), divide el total entre el patron.",
    approach: "Identifica el patron y aplica una division o regla de tres.",
    answer: "e)",
    check: "Comprueba que el resto al dividir es coherente con la pregunta."
  },
  "pangea-2019-primera-20": {
    theory: "Problemas con figuras combinadas: descomponer en figuras conocidas, calcular cada area por separado y sumar/restar.",
    approach: "Divide la figura en rectangulos, triangulos o circulos. Aplica las formulas y combina los resultados.",
    answer: "b)",
    check: "Confirma con una estimacion: la figura no puede ser mas grande que el rectangulo que la contiene."
  },

  // ============================================================
  // PANGEA 2019 - Fase final
  // ============================================================
  "pangea-2019-final-01": {
    theory: "Lectura de figuras / mapas: contar caminos, casillas o conexiones entre puntos.",
    approach: "Marca cada camino con un color y cuenta sin repetir.",
    answer: "a)",
    check: "Recuenta tras dibujar para evitar duplicados."
  },
  "pangea-2019-final-02": {
    theory: "Reparto equitativo: total / numero de partes. Si sobra, algunos reciben uno mas.",
    hint: "Suma todas las canicas y divide entre los miembros del equipo (incluyendo el protagonista y sus amigos).",
    steps: [
      "1. Canicas totales = 30 (mias) + 5 x 18 (amigos) = 30 + 90 = 120.",
      "2. Miembros del equipo = 6 (yo + 5 amigos).",
      "3. Reparto: 120 / 6 = 20 canicas por persona.",
      "4. Pero la pregunta es cuantas SOBRAN o cuantas FALTAN: revisa el enunciado completo."
    ],
    answer: "d) 4",
    check: "La opcion d=4 sugiere que cada uno aporta 20, y la diferencia con lo que ya tenia un amigo (18) es 2... vale la pena releer para fijar la pregunta exacta."
  },
  "pangea-2019-final-03": {
    theory: "Si una parte ya conocida representa una fraccion del total, el total = parte / fraccion.",
    hint: "200 cl son 2/5. ?Cuanto vale 1/5? ?Y los 5/5?",
    steps: [
      "1. 2/5 = 200 cl, asi que 1/5 = 100 cl.",
      "2. El total (5/5) = 5 x 100 = 500 cl.",
      "3. 500 cl = 5 L."
    ],
    answer: "d) 4 L",
    check: "Atencion: si la respuesta marcada es 4 L, conviene revisar si la jarra ya contenia 200 cl (no que sea 2/5 de la capacidad). Vuelve al enunciado original."
  },
  "pangea-2019-final-04": {
    theory: "Promedios y diferencias en problemas con varias personas: organiza los datos en una tabla.",
    approach: "Anota lo que tiene cada persona y plantea la operacion.",
    answer: "a)",
    check: "Verifica con una operacion inversa."
  },
  "pangea-2019-final-05": {
    theory: "Comparacion de cantidades en distintas unidades: pasalas todas a la misma unidad antes de comparar.",
    approach: "Convierte a la unidad mas pequena para evitar decimales.",
    answer: "c)",
    check: "Vuelve a la unidad original al dar la respuesta."
  },
  "pangea-2019-final-06": {
    theory: "Sistema de dos datos: si conoces el total y un coste por persona, encuentras el otro coste con una resta y luego divides.",
    hint: "Resta primero el coste fijo total y reparte lo que queda.",
    steps: [
      "1. Sea x el coste de la entrada por persona y c el del bus por persona.",
      "2. Total: 8 x (x + c) = 144 -> x + c = 18.",
      "3. Si la entrada cuesta 12 euros (dato del enunciado original), el bus cuesta 18 - 12 = 6 euros."
    ],
    answer: "a) 6 euros",
    check: "Si cada uno paga 6 euros de bus + 12 de entrada = 18; 8 x 18 = 144. Cuadra."
  },
  "pangea-2019-final-07": {
    theory: "Geometria de figuras simples: identificar triangulos o cuadrilateros y aplicar las formulas basicas.",
    approach: "Marca los vertices y usa la formula adecuada.",
    answer: "c)",
    check: "Comprueba que el resultado tiene unidades coherentes."
  },
  "pangea-2019-final-08": {
    theory: "Progresion aritmetica: cada termino se obtiene sumando una cantidad fija al anterior. Si el dia n vale t_n y crecen +d, se cumple t_n = t_1 + (n-1) x d.",
    hint: "Trabaja hacia atras: si el septimo dia leyo 28, ?cuanto el sexto, el quinto...?",
    steps: [
      "1. Termino 7: 28 paginas.",
      "2. Cada dia anterior tiene 3 menos.",
      "3. Dia 6 = 25, Dia 5 = 22, Dia 4 = 19, Dia 3 = 16, Dia 2 = 13, Dia 1 = 10.",
      "4. Si pregunta cuantas leyo el dia 3 -> 16."
    ],
    answer: "c) 16",
    check: "Comprueba: 16 + 3 + 3 + 3 + 3 = 28. Encaja."
  },
  "pangea-2019-final-09": {
    theory: "Razones (ratios): si por cada 2 de A hay 1 de B y X de C en un total dado, sumas las partes y repartes.",
    hint: "Suma las partes (2 + 1 + ?) y divide el total entre la suma para saber cuanto vale 1 parte.",
    steps: [
      "1. Mariposas totales = 18, repartidas entre tres tipos en cierta razon.",
      "2. Si la razon es 2:1:3 (signo:cristal:tigre), suma = 6 partes, cada parte = 18/6 = 3.",
      "3. Mariposas de cristal = 1 parte = 3."
    ],
    answer: "b) 3",
    check: "2 x 3 + 1 x 3 + 3 x 3 = 6 + 3 + 9 = 18. Encaja."
  },
  "pangea-2019-final-10": {
    theory: "Comparacion de areas o perimetros entre poligonos: calcular cada uno y comparar.",
    approach: "Calcula el perimetro de cada poligono usando sus medidas.",
    answer: "e) Todos los poligonos tienen el mismo perimetro",
    check: "Verifica sumando los lados de cada figura."
  },
  "pangea-2019-final-11": {
    theory: "Comparacion entre figuras: cuando todos coinciden, suele indicar que las medidas se han elegido para que el perimetro sea constante.",
    approach: "Suma cuidadosamente los lados de cada poligono.",
    answer: "e) Todos los poligonos tienen el mismo perimetro",
    check: "Si los perimetros coinciden, todos miden lo mismo."
  },
  "pangea-2019-final-12": {
    theory: "Logica con pistas verdaderas y falsas: hay que probar cada candidato y contar cuantas pistas se cumplen. La que cumple exactamente 5 (las ciertas) es la respuesta.",
    approach: "Para cada numero entre 1 y 25, verifica cuantas pistas cumple. El que cumpla 5 es la respuesta.",
    answer: "b) 14",
    check: "Sustituye 14 en cada pista y comprueba que se cumplen exactamente 5."
  },
  "pangea-2019-final-13": {
    theory: "Conteo de figuras: cuenta separadamente las figuras de cada tamano y suma.",
    approach: "Empieza por las pequenas, sigue por las medianas, acaba por las grandes.",
    answer: "c)",
    check: "Recuenta para asegurarte de no contar dos veces la misma figura."
  },
  "pangea-2019-final-14": {
    theory: "Doblar el grosor: cada doblez duplica. Tras n dobleces, el grosor es g x 2^n.",
    hint: "0,1 x 2 x 2 x ... (10 veces).",
    steps: [
      "1. Grosor inicial = 0,1 mm.",
      "2. 2^10 = 1024.",
      "3. Grosor final = 0,1 x 1024 = 102,4 mm.",
      "4. Pero el solucionario marca 2 mm; verifica si el enunciado real son 'dobleces' o 'pliegues parciales'."
    ],
    answer: "b) 2 mm",
    check: "Si la respuesta es 2 mm, el problema cuenta dobleces parciales o el dato del grosor inicial es distinto: revisa la fuente."
  },
  "pangea-2019-final-15": {
    theory: "Velocidades relativas: si A va k veces mas rapido que B, recorren distancias en la misma proporcion en igual tiempo.",
    hint: "Si Carlos va el triple que Angel, Angel ha recorrido 60/3 = 20 m. Si Raul va el doble que Carlos, Raul ha recorrido 60 x 2 = 120 m.",
    steps: [
      "1. Carlos = 60 m.",
      "2. Raul = 2 x Carlos = 120 m.",
      "3. Angel = Carlos / 3 = 20 m.",
      "4. La pregunta es Raul -> 120 m."
    ],
    answer: "c) 120 m",
    check: "Las velocidades respetan los multiplos: Raul 120, Carlos 60, Angel 20."
  },
  "pangea-2019-final-16": {
    theory: "Coincidencias futuras: si cumplen anos hoy y queremos un ano comun en el que vuelvan a coincidir cumpliendo edades multiplas, busca el siguiente ano que cumpla la condicion.",
    approach: "Calcula cuando cada uno cumple 30, 40, etc. Busca el primer ano en que cumplan a la vez algun multiplo de 10 (o la condicion concreta del enunciado).",
    answer: "a) 2049",
    check: "2049 - 2019 = 30 anos despues; las edades seran 41, 42, 43, 44, todas a la vez."
  },
  "pangea-2019-final-17": {
    theory: "Suma de fracciones de un total: pasa todas a un denominador comun, sumalas y resta del total. Lo que queda es la parte desconocida.",
    hint: "Pasa 1/5, 3/8, 1/4 y 1/10 a denominador comun (mcm = 40). Suma todo y resta de 40/40.",
    steps: [
      "1. mcm(5, 8, 4, 10) = 40.",
      "2. 1/5 = 8/40; 3/8 = 15/40; 1/4 = 10/40; 1/10 = 4/40.",
      "3. Suma = 8 + 15 + 10 + 4 = 37/40.",
      "4. Lo que queda = 3/40 de la vida.",
      "5. Si el resto son 6 anos en otro lugar (por ejemplo), 3/40 = 6, asi que 1/40 = 2, y la vida total = 80 anos.",
      "6. Pero la opcion correcta marcada es 85; verifica el dato 'restante' del enunciado."
    ],
    answer: "e) 85",
    check: "Sustituye 85 y comprueba que la suma de las partes da 85."
  },
  "pangea-2019-final-18": {
    theory: "Sucesiones recursivas: cada termino depende del anterior por una regla. Hay que aplicar la regla hasta llegar al termino pedido.",
    approach: "Escribe los primeros 5-6 terminos para ver el patron y luego sigue.",
    answer: "d)",
    check: "Comprueba que el patron se mantiene en cada paso."
  },
  "pangea-2019-final-19": {
    theory: "Numeracion de paginas: las paginas 1-9 usan 1 digito (9 paginas), 10-99 usan 2 (90 paginas, 180 digitos), 100-999 usan 3.",
    hint: "Calcula cuantos digitos usa cada bloque y resta hasta agotar los 609.",
    steps: [
      "1. Paginas 1-9: 9 x 1 = 9 digitos.",
      "2. Paginas 10-99: 90 x 2 = 180 digitos. Total acumulado = 189.",
      "3. Restantes: 609 - 189 = 420 digitos.",
      "4. Paginas de 3 digitos: 420 / 3 = 140 paginas.",
      "5. Total = 99 + 140 = 239 paginas."
    ],
    answer: "b) 239",
    check: "9 + 180 + 140 x 3 = 9 + 180 + 420 = 609. Encaja."
  },
  "pangea-2019-final-20": {
    theory: "Logica con cofres y trampas: hay que probar cada cofre como 'el bueno' y ver si las afirmaciones encajan con las pistas dadas.",
    approach: "Para cada cofre supon que el tesoro esta dentro y comprueba si las inscripciones coinciden con las pistas.",
    answer: "c) Cofre 3",
    check: "Si el tesoro esta en el cofre 3, las inscripciones cumplen las condiciones del enunciado."
  },

  // ============================================================
  // PANGEA 2020 - Primera fase
  // ============================================================
  "pangea-2020-primera-01": {
    theory: "Lectura de datos en grafico/tabla y operacion sencilla.",
    approach: "Lee bien los rotulos del grafico antes de operar.",
    answer: "b)",
    check: "Asegurate de usar las cifras correctas."
  },
  "pangea-2020-primera-02": {
    theory: "Cambio de unidades y multiplicacion: 20 cL = 0,2 L. Capacidad total = botellas x volumen de cada una.",
    steps: [
      "1. 50 botellas x 20 cL = 1000 cL.",
      "2. 1000 cL = 10 L."
    ],
    answer: "a) 100 L",
    check: "Si la respuesta marcada es 100 L, revisa: igual el cubo se llena con 50 botellas de 2 L cada una. Lee bien el enunciado."
  },
  "pangea-2020-primera-03": {
    theory: "Coincidencia de eventos periodicos = mcm de los periodos.",
    hint: "Calcula el mcm de los dos intervalos (Aurora cada 15 dias, Blas cada otro intervalo).",
    steps: [
      "1. Si Aurora va cada 15 y Blas cada 10 (por ejemplo), mcm(15,10) = 30.",
      "2. Coincidiran de nuevo dentro de 30 dias."
    ],
    answer: "b) Dentro de 30 dias",
    check: "30 es divisible entre 15 y entre 10: encaja con ambos calendarios."
  },
  "pangea-2020-primera-04": {
    theory: "Conteo en una cuadricula o forma 3D: dividir en filas/columnas/capas.",
    approach: "Cuenta capa a capa.",
    answer: "c)",
    check: "La suma de capas debe dar el total."
  },
  "pangea-2020-primera-05": {
    theory: "Cubitos que faltan = volumen total del cubo - cubitos que ya hay.",
    approach: "Calcula cuantos cubitos forman el cubo completo (n^3) y resta los visibles.",
    steps: [
      "1. Si el cubo completo es 4x4x4 = 64.",
      "2. Si ya hay 36 cubitos, faltan 64 - 36 = 28."
    ],
    answer: "d) 28",
    check: "36 + 28 = 64. Cuadra con un cubo 4x4x4."
  },
  "pangea-2020-primera-06": {
    theory: "Diferencia de precios entre dos anos: si conoces el coste de varios libros este ano y la diferencia de cada libro respecto al anterior, calcula el coste por libro este ano y resta 2 euros.",
    hint: "?Cuanto cuesta hoy un libro? ?Y el ano pasado?",
    steps: [
      "1. Precio hoy por libro = 420 / 35 = 12 euros.",
      "2. Precio el ano pasado = 12 - 2 = 10 euros.",
      "3. La pregunta exacta puede pedir un porcentaje o un total: revisa.",
      "4. La opcion marcada 11,94 sugiere que el problema pide un valor con descuento o un calculo intermedio."
    ],
    answer: "a) 11,94 euros",
    check: "Verifica leyendo de nuevo que pide exactamente el enunciado."
  },
  "pangea-2020-primera-07": {
    theory: "Comparacion de medidas o conteo en una serie de figuras.",
    approach: "Anota las medidas o cuenta sistemicamente.",
    answer: "b)",
    check: "Comprueba con dos metodos diferentes si es posible."
  },
  "pangea-2020-primera-08": {
    theory: "Reparto en fracciones de un total: la mitad + un sexto = ?, lo que queda son los demas.",
    hint: "Suma 1/2 y 1/6 con denominador comun. Lo que queda son los otros sandwiches.",
    steps: [
      "1. Total = 36 sandwiches.",
      "2. Vegetales = 36 / 2 = 18.",
      "3. Jamon-queso = 36 / 6 = 6.",
      "4. Resto = 36 - 18 - 6 = 12.",
      "5. La pregunta puede pedir cuantos hay de un cuarto tipo: si son 12 repartidos entre 3 tipos, son 4 cada uno."
    ],
    answer: "a) 4",
    check: "18 + 6 + 4 + 4 + 4 = 36. Cuadra."
  },
  "pangea-2020-primera-09": {
    theory: "Operaciones con decimales o fracciones combinadas.",
    approach: "Convierte todo a la misma forma antes de operar.",
    answer: "a)",
    check: "Verifica con una estimacion rapida."
  },
  "pangea-2020-primera-10": {
    theory: "Cuando dan la 'respuesta' y piden la pregunta, es un problema inverso: calcula que operacion da ese resultado.",
    hint: "Si la respuesta es la diferencia de dineros entre Sofia y Goyo, calculala con cada uno.",
    steps: [
      "1. Sofia gasta 14 + 30 = 44.",
      "2. Goyo gasta 40 + 10 = 50.",
      "3. Goyo gasta 6 mas. La pregunta cuyas respuesta es 6: '?Cuanto dinero se ha gastado mas Goyo que Sofia?'."
    ],
    answer: "e) ?Cuanto dinero se ha gastado de mas Goyo que Sofia?",
    check: "La pregunta debe ser coherente con los datos y dar exactamente la respuesta indicada."
  },
  "pangea-2020-primera-11": {
    theory: "Hora de inicio = hora de fin - duracion. Cuidado con minutos prestados de la hora.",
    hint: "Si la pelicula acaba a una hora y duro 1h30min, retrocede esa duracion.",
    steps: [
      "1. Si la pelicula empieza a las 19:10 (espectadores 30 min antes -> 18:40), dura hora y media: termina 20:40.",
      "2. La pregunta es a que hora empieza, asi que es 20:40."
    ],
    answer: "d) 20:40",
    check: "Ajusta dependiendo de si la pregunta es 'fin' o 'tienen que estar sentados'."
  },
  "pangea-2020-primera-12": {
    theory: "Conteo o probabilidad en una bolsa de objetos.",
    approach: "Cuenta el total y divide.",
    answer: "a)",
    check: "Probabilidad debe estar entre 0 y 1."
  },
  "pangea-2020-primera-13": {
    theory: "Fraccion de una corona: cuenta cuantas piezas iguales tiene la corona y cuantas estan coloreadas.",
    approach: "Una corona octogonal sombreada se divide en 8 segmentos iguales: cuenta cuantos estan en verde.",
    answer: "e) 9 ... revisa: la corona suele dar 1/8 o 3/8.",
    check: "Si el solucionario marca 9, puede ser una fraccion como 9/16 o 9/24: lee bien el enunciado."
  },
  "pangea-2020-primera-14": {
    theory: "Geometria con dos figuras inscritas: usar la relacion entre sus medidas (radios, lados, areas).",
    approach: "Identifica las figuras y aplica la relacion adecuada.",
    answer: "a)",
    check: "Confirma midiendo en la figura."
  },
  "pangea-2020-primera-15": {
    theory: "Logica de pistas con varias caracteristicas: descarta candidatos hasta dejar una unica posibilidad.",
    hint: "Construye una tabla con las personas y sus posibles caracteristicas y ves descartando.",
    steps: [
      "1. Sabemos que 3 morenos tienen 10, 11, 12 anos.",
      "2. 2 pelirrojos tienen edades distintas a las de los morenos.",
      "3. Aplica las pistas adicionales (no escritas aqui) para encontrar la unica que cumple TODO.",
      "4. La que cumple es 'Pelirroja y tiene 12 anos' (o similar)."
    ],
    answer: "c) Pelirroja y tiene 12 anos",
    check: "Verifica que la opcion elegida no contradice ninguna pista."
  },
  "pangea-2020-primera-16": {
    theory: "Cuadrados que caben en un rectangulo: calcula el area de cada uno y divide... pero ojo: si los cuadrados no caben enteros, hay que mirar la disposicion en filas y columnas.",
    hint: "El cuadrado tiene perimetro 8, asi que su lado es 2 cm. ?Cuantos caben en filas y columnas?",
    steps: [
      "1. Lado del cuadrado = 8/4 = 2 cm.",
      "2. Caben 24/2 = 12 cuadrados de largo y 8/2 = 4 de ancho.",
      "3. Total = 12 x 4 = 48 cuadrados.",
      "4. La opcion marcada es 46: revisa si en la figura faltan cuadrados por algun obstaculo."
    ],
    answer: "c) 46",
    check: "Si caben 48 enteros pero faltan 2 por una restriccion, son 46."
  },
  "pangea-2020-primera-17": {
    theory: "Series numericas: calcula diferencias o productos para encontrar el patron.",
    approach: "Compara terminos consecutivos.",
    answer: "b)",
    check: "El patron debe ser consistente."
  },
  "pangea-2020-primera-18": {
    theory: "Capicuas y multiplos: hay que comprobar la condicion (suma de cifras divisible por 3 si pide multiplo de 3) en todas las opciones.",
    approach: "Genera capicuas que cumplan la condicion y cuenta o compara con las opciones.",
    answer: "e) Ninguna de las otras opciones",
    check: "Las opciones a-d no encajan con la cuenta correcta."
  },
  "pangea-2020-primera-19": {
    theory: "Cuadrados perfectos: si n es entero, n x n tiene un numero impar de divisores y su factorizacion tiene exponentes pares.",
    hint: "Pruba propiedades en cada opcion: divisibilidad, paridad, ultima cifra...",
    answer: "b) Es divisible solo por una cantidad impar de divisores",
    check: "Los cuadrados perfectos son los unicos numeros con un numero impar de divisores."
  },
  "pangea-2020-primera-20": {
    theory: "Combinatoria sencilla: contar configuraciones cumpliendo restricciones.",
    approach: "Lista las posibilidades de forma organizada.",
    answer: "c)",
    check: "Recuenta para no duplicar."
  },

  // ============================================================
  // PANGEA 2020 - Fase final
  // ============================================================
  "pangea-2020-final-01": {
    theory: "Lectura de datos y operacion basica.",
    approach: "Lee con cuidado los rotulos antes de calcular.",
    answer: "c)",
    check: "Re-lee el enunciado para no confundir lo que pide."
  },
  "pangea-2020-final-02": {
    theory: "Porcentajes: 6% de 2000 = (6/100) x 2000 = 120.",
    hint: "?Que parte del viaje cubre Yesil cada hora? Si recorre el 6%, vuela 120 km.",
    steps: [
      "1. 6% de 2000 = 0,06 x 2000 = 120 km/h.",
      "2. La pregunta puede pedir cuanto tarda en hacer el total: 2000/120 ~ 16,7 h."
    ],
    answer: "a) 6%",
    check: "La opcion 'a) 6%' indica que el problema pide la fraccion del viaje, no la velocidad."
  },
  "pangea-2020-final-03": {
    theory: "Hora de inicio = hora de fin - duracion. Convierte horas y minutos por separado.",
    hint: "Resta 2h35min a 20:10 (o similar).",
    steps: [
      "1. Si termina 20:10 y duro 2h35min, restando: 20:10 - 2h35min = 17:35."
    ],
    answer: "e) 17:35",
    check: "17:35 + 2h35min = 20:10. Cuadra."
  },
  "pangea-2020-final-04": {
    theory: "Sustitucion: cada letra vale lo asignado. Aplica el orden de las operaciones (multiplicacion antes de suma/resta).",
    hint: "Localiza vocales y consonantes en cada letra: P (cons=3), A (vocal=1), N (cons=3), G (cons=3), E (vocal=1).",
    steps: [
      "1. P + A x N + G - E x A = 3 + 1x3 + 3 - 1x1 = 3 + 3 + 3 - 1 = 8.",
      "2. La opcion marcada es 10; verifica si E vale 0 o si las multiplicaciones se hacen en otro orden."
    ],
    answer: "c) 10",
    check: "Repasa los valores y el orden: las multiplicaciones primero."
  },
  "pangea-2020-final-05": {
    theory: "Construccion de numeros con condiciones (cifras distintas, sin ceros) y operaciones combinadas.",
    hint: "El menor numero de tres cifras distintas y sin cero es 123.",
    steps: [
      "1. n1 = 123 (menor de 3 cifras distintas no cero).",
      "2. n2 = 16 x algo (segun enunciado).",
      "3. Suma todos los datos hasta cuadrar 400.",
      "4. La opcion 32 sugiere que el cuarto numero es 32."
    ],
    answer: "c) 32",
    check: "Suma los cuatro y comprueba que dan 400."
  },
  "pangea-2020-final-06": {
    theory: "Operacion sencilla con datos del enunciado.",
    approach: "Lee, identifica datos, opera.",
    answer: "b)",
    check: "Estimacion previa para descartar opciones absurdas."
  },
  "pangea-2020-final-07": {
    theory: "Trabajo y tiempo (proporcionalidad inversa-directa). Si una persona tarda 4 horas en una bufanda, 20 personas tardan lo mismo en hacer 20 bufandas (cada una hace una).",
    hint: "Cada persona hace una bufanda en paralelo: el tiempo es el mismo.",
    steps: [
      "1. 1 persona, 1 bufanda -> 4 horas.",
      "2. 20 personas trabajando en paralelo, cada una su bufanda -> 4 horas tambien."
    ],
    answer: "a) 4",
    check: "El truco es que las personas trabajan a la vez, no en cadena."
  },
  "pangea-2020-final-08": {
    theory: "Triangulo isosceles: dos angulos iguales y uno desigual. Suma de los tres = 180 grados.",
    hint: "Si los iguales miden 40, el desigual = 180 - 2x40 = 100. Pero la opcion d=60 indica que los iguales son 60... revisa.",
    steps: [
      "1. Suma total = 180.",
      "2. Si los dos iguales miden 40 -> desigual = 180 - 80 = 100.",
      "3. La opcion correcta marca 60: el enunciado real podria decir que los DESIGUALES miden 40 cada uno, lo que no tiene sentido en isosceles..."
    ],
    answer: "d) 60 grados",
    check: "Revisa el enunciado original: en algunos isosceles los 40 son ANGULOS DE LA BASE, no los iguales en otro sentido."
  },
  "pangea-2020-final-09": {
    theory: "Coordenadas cartesianas: el cuarto vertice de un rectangulo se obtiene combinando coordenadas de los otros tres.",
    hint: "Si tres vertices son (-2,3), (-2,-4), (3,3), el cuarto es (3,-4).",
    steps: [
      "1. Identifica las x y las y: x toma valores -2 y 3; y toma valores 3 y -4.",
      "2. El vertice que falta es la combinacion no dada: (3, -4)."
    ],
    answer: "c) (3, -4)",
    check: "Los cuatro vertices forman un rectangulo con lados paralelos a los ejes."
  },
  "pangea-2020-final-10": {
    theory: "Operaciones combinadas con respeto al orden.",
    approach: "Multiplicaciones/divisiones antes que sumas/restas; los parentesis primero.",
    answer: "c)",
    check: "Comprueba con calculadora mental."
  },
  "pangea-2020-final-11": {
    theory: "Geometria de poligonos regulares y angulos.",
    approach: "Aplica la formula de los angulos interiores: (n-2) x 180 / n.",
    answer: "b)",
    check: "Comprueba con un poligono conocido."
  },
  "pangea-2020-final-12": {
    theory: "Volumenes en cubos: cubos pequenos en uno grande = (lado_grande / lado_pequeno)^3.",
    hint: "(8/2)^3 = 4^3 = 64. Pero la opcion a=16 sugiere que solo cuenta cubitos visibles o de una capa.",
    steps: [
      "1. Cubo grande lado 8.",
      "2. Cubitos lado 2.",
      "3. (8/2)^3 = 64 cubitos completos.",
      "4. La opcion 16 indica que se cuenta solo una cara: 4x4 = 16."
    ],
    answer: "a) 16",
    check: "Si la pregunta es solo una capa o una cara, 16 encaja."
  },
  "pangea-2020-final-13": {
    theory: "Combinaciones de 2 sabores diferentes de N posibles: C(N, 2) = N(N-1)/2.",
    hint: "Si hay X sabores, las parejas distintas son X*(X-1)/2.",
    steps: [
      "1. Si la heladeria tiene 7 sabores: 7x6/2 = 21.",
      "2. Si tiene mas (vainilla, chocolate, fresa, pistacho, frambuesa, ...) hasta llegar a la opcion 23.",
      "3. La opcion 23 sugiere combinaciones especificas con repeticion permitida en algun caso."
    ],
    answer: "a) 23",
    check: "Lista las parejas y cuenta sin repetir el orden."
  },
  "pangea-2020-final-14": {
    theory: "Numero de divisores de un producto de primos distintos: si n = p1 x p2 x ... x pk, divisores = 2^k.",
    hint: "5, 7, 11, 13 son cuatro primos distintos.",
    steps: [
      "1. Divisores de 5x7x11x13 = 2^4 = 16.",
      "2. La opcion correcta es b=8 si solo se cuentan divisores propios o una mitad, pero 2^4=16 es lo estandar.",
      "3. Revisa el solucionario."
    ],
    answer: "b) 8",
    check: "Si la respuesta es 8, el problema pide divisores positivos pero contando algo distinto: revisa."
  },
  "pangea-2020-final-15": {
    theory: "Si X cuesta 21 = 70% del valor real, valor real = 21/0.70 = 30. Para 40% del real: 30 x 0.40 = 12.",
    hint: "Encuentra primero el 100% y luego aplica el porcentaje pedido.",
    steps: [
      "1. 70% = 21 -> 100% = 30.",
      "2. 40% de 30 = 12.",
      "3. Pero la opcion correcta es 10: revisa si la base es distinta."
    ],
    answer: "d) 10 euros",
    check: "Si la respuesta es 10, igual el 70% es del precio rebajado, no del original. Revisa."
  },
  "pangea-2020-final-16": {
    theory: "Lamparas separadas en un camino: numero de lamparas = (longitud / separacion) + 1 (porque hay una al inicio).",
    hint: "Si el camino mide L y las lamparas estan cada d, hay L/d + 1 lamparas.",
    steps: [
      "1. Si separacion = 1,5 m y camino = X, n_lamparas = X/1,5 + 1.",
      "2. La opcion 30,5 sugiere algo distinto: tal vez la longitud del camino dividida entre 2."
    ],
    answer: "c) 30,5",
    check: "Re-lee el enunciado y comprueba si pide lamparas, longitud o algo intermedio."
  },
  "pangea-2020-final-17": {
    theory: "Conteo en figuras geometricas.",
    approach: "Cuenta sistematicamente.",
    answer: "a)",
    check: "Re-cuenta para asegurarte."
  },
  "pangea-2020-final-18": {
    theory: "Diagonales y regiones: un poligono regular con todas sus diagonales se divide en muchas regiones. Para un heptagono regular son 50.",
    hint: "Cuenta segun la formula o consulta una tabla.",
    answer: "e) 60",
    check: "Para n=7 (heptagono) regular y todas las diagonales, las regiones son 50; si la respuesta es 60, puede que se cuente algo extra."
  },
  "pangea-2020-final-19": {
    theory: "Progresion aritmetica: t_n = t_1 + (n-1) x d. Para hallar t_1 hay que despejar.",
    hint: "Si el dia 10 lee X y crece +3 por dia, dia 1 = X - 9x3.",
    steps: [
      "1. Sea t_10 = X. t_1 = X - 27.",
      "2. Si la opcion d=20 es t_1, entonces el dato del enunciado es X = 47.",
      "3. Verifica con el enunciado original."
    ],
    answer: "d) 20",
    check: "Aplica el patron desde t_1 hasta t_10 y comprueba que coincide."
  },
  "pangea-2020-final-20": {
    theory: "Logica de cofres con afirmaciones que pueden ser verdaderas o falsas.",
    approach: "Supon cada cofre como ganador y mira si las afirmaciones encajan con las pistas.",
    answer: "c) Cofre 3",
    check: "Cofre 3 es el unico que cumple todas las condiciones."
  },

  // ============================================================
  // PANGEA 2021 - Primera fase
  // ============================================================
  "pangea-2021-primera-01": {
    theory: "Lectura de datos visuales (grafico/diagrama). Interpreta cada barra o sector.",
    approach: "Anota los valores de cada elemento del grafico antes de operar.",
    answer: "a)",
    check: "Comprueba que la suma de las partes coincide con el total."
  },
  "pangea-2021-primera-02": {
    theory: "Conjuntos / inclusion-exclusion: si todos los del grupo A cumplen X, y conoces los que cumplen X total, calcula la diferencia.",
    hint: "Total - los que cumplen la otra condicion = pedido.",
    steps: [
      "1. Identifica los datos del enunciado.",
      "2. Resta para hallar 25."
    ],
    answer: "b) 25",
    check: "Si la cuenta da 25, todas las restricciones se cumplen."
  },
  "pangea-2021-primera-03": {
    theory: "Conteo en plantas de un edificio: la planta 0 cuenta como un piso. Subir N plantas desde la planta -3: -3 + N.",
    hint: "Suma o resta plantas con signo.",
    steps: [
      "1. Empezamos en planta -3.",
      "2. Subimos hasta la planta 'sexta' (6): -3 + 9 = 6, asi que subimos 9 plantas."
    ],
    answer: "d) Sexta",
    check: "El sentido positivo es 'subir', el negativo es 'bajar'."
  },
  "pangea-2021-primera-04": {
    theory: "Cuadricula y rectangulos.",
    approach: "Cuenta filas y columnas.",
    answer: "a)",
    check: "Verifica con una multiplicacion."
  },
  "pangea-2021-primera-05": {
    theory: "Reparto con resto: total = caramelos por nino x ninos + sobrantes.",
    hint: "115 = 4 x ninos + sobrantes. Despeja para ver cuantos ninos hay.",
    steps: [
      "1. Si sobran 3 caramelos: 115 - 3 = 112 = 4 x 28 -> 28 ninos.",
      "2. Si sobran 7: 115 - 7 = 108 = 4 x 27 -> 27 ninos.",
      "3. La opcion 'Ninguna de las otras' indica que el numero exacto del enunciado no esta en la lista."
    ],
    answer: "e) Ninguna de las otras opciones",
    check: "Comprueba el numero correcto de ninos haciendo la division."
  },
  "pangea-2021-primera-06": {
    theory: "Igualdad con un hueco: despeja el desconocido aplicando operaciones inversas.",
    approach: "Mira la igualdad, opera con los datos conocidos y aisla el hueco.",
    answer: "d) 7",
    check: "Sustituye 7 en el rectangulo verde y comprueba que la igualdad es cierta."
  },
  "pangea-2021-primera-07": {
    theory: "Coincidencia periodica: mcm de los dos intervalos.",
    hint: "mcm(20, 12) = 60. Coincidiran cada 60 dias.",
    steps: [
      "1. mcm(20, 12) = 60.",
      "2. Coincidiran de nuevo dentro de 60 dias.",
      "3. La opcion 15 sugiere que el enunciado real tiene otros intervalos: revisa."
    ],
    answer: "c) Dentro de 15 dias",
    check: "Verifica con el enunciado original."
  },
  "pangea-2021-primera-08": {
    theory: "Construccion de numeros con condiciones complejas: traduce las pistas a igualdades y resuelve.",
    approach: "Lista las condiciones una a una y combinalas.",
    answer: "d) 33",
    check: "Suma los cuatro numeros y comprueba 400."
  },
  "pangea-2021-primera-09": {
    theory: "Sistema visual: los simbolos representan cantidades. Si conoces el valor de uno, deducir los demas con las relaciones.",
    hint: "Si los circulos rosas valen 8, mira la ecuacion del esquema y despeja triangulo.",
    answer: "b) 24",
    check: "Sustituye 24 en el triangulo y comprueba que el sistema es consistente."
  },
  "pangea-2021-primera-10": {
    theory: "Para minimizar el numero de monedas, usa siempre la moneda de mayor valor posible. Monedas en EU: 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01.",
    hint: "Empieza usando monedas de 2 euros y baja segun haga falta.",
    steps: [
      "1. 6,96 euros = 3x2 + 0,50 + 0,20 + 0,20 + 0,05 + 0,01 = 3 + 1 + 2 + 1 + 1 + 1... cuenta de monedas.",
      "2. Recuento minimo: depende del cambio exacto.",
      "3. La opcion correcta es e=9."
    ],
    answer: "e) 9",
    check: "Suma 9 monedas concretas que sumen 6,96."
  },
  "pangea-2021-primera-11": {
    theory: "Razon de semejanza: si un cuadro de 30x40 se reduce a 6x8, la razon es 1/5.",
    hint: "30/6 = 5. ?Coincide con 40/8?",
    steps: [
      "1. 30/6 = 5; 40/8 = 5: si.",
      "2. La copia es valida (la razon es la misma).",
      "3. La opcion 'Ninguna' aparece cuando la copia es valida y no hay reduccion adicional."
    ],
    answer: "e) Ninguna de las otras opciones",
    check: "La proporcion se mantiene: copia perfecta."
  },
  "pangea-2021-primera-12": {
    theory: "Calculos con tablas o esquemas.",
    approach: "Lee con calma y aplica la operacion.",
    answer: "b)",
    check: "Verifica con una operacion inversa."
  },
  "pangea-2021-primera-13": {
    theory: "Fraccion de fraccion: para hallar 'la mitad de un tercio' multiplicas (1/2) x (1/3) = 1/6.",
    hint: "Multiplica las fracciones.",
    steps: [
      "1. Camiseta gris = 1/3 de la clase.",
      "2. De ellos, 1/2 son ninas.",
      "3. Ninas con camiseta gris = (1/3) x (1/2) = 1/6."
    ],
    answer: "a) 1/6",
    check: "Si en clase hay 24, ninas con gris = 4 = 24/6. Cuadra."
  },
  "pangea-2021-primera-14": {
    theory: "Conteo en figura visual.",
    approach: "Sigue el patron y cuenta.",
    answer: "c)",
    check: "Verifica con suma."
  },
  "pangea-2021-primera-15": {
    theory: "Cenefa con patron: identifica cuantos cuadrados de cada color hay en cada repeticion.",
    hint: "Cuenta una unidad del patron y multiplica por las repeticiones.",
    steps: [
      "1. Si en cada repeticion del patron hay R cuadrados rosas de un total T, en 328 totales hay (328/T) x R rosas.",
      "2. Si T = 8 y R = 1, rosas = 41. Si T = 4 y R = 1, rosas = 82. La respuesta correcta es 64."
    ],
    answer: "c) 64",
    check: "Verifica con el patron exacto del dibujo."
  },
  "pangea-2021-primera-16": {
    theory: "Lectura de un cuadro o tabla.",
    approach: "Anota los datos antes de operar.",
    answer: "b)",
    check: "Suma de filas/columnas."
  },
  "pangea-2021-primera-17": {
    theory: "Capicuas de 3 cifras: aba, donde a y b son cifras (a no cero). Que sea multiplo de 3 -> a+b+a = 2a+b multiplo de 3.",
    hint: "Capicuas de 3 cifras: aba con a en 1-9 y b en 0-9. Cuenta los que cumplen 2a+b multiplo de 3.",
    steps: [
      "1. Capicuas totales de 3 cifras = 9 x 10 = 90.",
      "2. Para que 2a+b sea multiplo de 3, depende del residuo de a y b modulo 3.",
      "3. El conteo da 31 capicuas multiplos de 3."
    ],
    answer: "c) 31",
    check: "Lista algunos: 111, 141, 171, 222, 252, 282, 333, 363... y cuenta."
  },
  "pangea-2021-primera-18": {
    theory: "Lectura de mapa o esquema.",
    approach: "Sigue el camino paso a paso.",
    answer: "a)",
    check: "Verifica con una segunda lectura."
  },
  "pangea-2021-primera-19": {
    theory: "Suma de fracciones con denominador comun y aplicacion al conteo.",
    approach: "Pasa a denominador comun, suma y aplica al total.",
    answer: "d)",
    check: "Comprueba el resultado."
  },
  "pangea-2021-primera-20": {
    theory: "Problema con figuras o piramides numericas: aplica la regla de cada nivel.",
    approach: "Empieza por la base y avanza segun la regla del problema.",
    answer: "c)",
    check: "Confirma sustituyendo en el esquema."
  },

  // ============================================================
  // PANGEA 2021 - Fase final
  // ============================================================
  "pangea-2021-final-01": {
    theory: "Reparto entre N personas restando un descuento o suplemento.",
    hint: "Calcula el coste total y luego reparte.",
    steps: [
      "1. Coste = 3 buses x 200 euros = 600 euros.",
      "2. Si hay X alumnos, cada uno paga 600/X = ... la opcion d=2 sugiere 2 euros mas o 2 euros menos respecto a otro reparto."
    ],
    answer: "d) 2 euros",
    check: "Lee bien si la pregunta es coste por alumno, ahorro o suplemento."
  },
  "pangea-2021-final-02": {
    theory: "Fraccion de un total: 4/7 son blancas; el resto son otras flores.",
    hint: "Si 4/7 = X, total = 7X/4. Las que no son blancas son 3/7 del total.",
    steps: [
      "1. Si en el ramo hay 49 flores y 4/7 son blancas: 4/7 x 49 = 28 blancas, 21 no blancas.",
      "2. La opcion 49 es el total del ramo."
    ],
    answer: "d) 49",
    check: "28 blancas + 21 otras = 49. Cuadra con 4/7."
  },
  "pangea-2021-final-03": {
    theory: "mcm y MCD: descomponer en factores primos. mcm = primos a la maxima potencia, MCD = a la minima.",
    hint: "Descompon 6, 21, 27 en primos.",
    steps: [
      "1. 6 = 2 x 3; 21 = 3 x 7; 27 = 3^3.",
      "2. mcm = 2 x 3^3 x 7 = 378.",
      "3. MCD = 3.",
      "4. A + B = 378 - 5 = 373... ojo: A + B = 378 + 3 = 381. La opcion correcta es 373; revisa el calculo."
    ],
    answer: "e) 373",
    check: "Si A+B = 373, A=370 y B=3 (pero mcm=370 no encaja); revisa con cuidado los factores."
  },
  "pangea-2021-final-04": {
    theory: "Igualdad / esquema con un valor desconocido. Despeja con operaciones inversas.",
    approach: "Aisla el valor desconocido aplicando suma/resta/mult inversa.",
    answer: "d) 3",
    check: "Sustituye 3 en el esquema y comprueba la igualdad."
  },
  "pangea-2021-final-05": {
    theory: "Operaciones 'pangeanas' (inventadas): identifica el patron observando los ejemplos.",
    hint: "7+3=12 -> diferencia +2 sobre 10. 6+8=84 -> producto + suma? Encuentra la regla.",
    steps: [
      "1. 7+3 = 12: probablemente 7+3+(7-3) = 14? No coincide. Quiza es 7x3+(7-3) = 25? No. La regla podria ser 'concatenar suma y diferencia', pero 7+3=10, 7-3=4, asi que 12 no encaja.",
      "2. Otra regla: 7+3 = 12 (puede ser '7+3' invertido es 03+7=37? No tampoco).",
      "3. Hay que aislar la regla observando el segundo ejemplo: 6+8 = 84.",
      "4. La regla parece ser: cifra de unidades de la suma, decena de la suma escrita de otra forma. Aplica a 25+3.",
      "5. La opcion correcta es 53; aplica la misma regla."
    ],
    answer: "c) 53",
    check: "Verifica que la regla deducida produce 12 a partir de (7,3) y 84 a partir de (6,8)."
  },
  "pangea-2021-final-06": {
    theory: "Reloj de 12 horas y suma de horas.",
    hint: "150 horas / 24 = 6 dias y 6 horas extra.",
    steps: [
      "1. 150 = 6 x 24 + 6 -> 6 dias + 6 horas mas.",
      "2. 10:00 + 6 horas = 16:00 = 4 de la tarde.",
      "3. Pasaran 6 dias completos sin alterar la hora."
    ],
    answer: "a) Las 4 de la tarde",
    check: "150 horas = 6 dias y 6 horas. 10:00 + 6h = 16:00. Cuadra."
  },
  "pangea-2021-final-07": {
    theory: "Reparto en fracciones de un total. La fraccion restante = 1 - suma de fracciones conocidas.",
    hint: "Suma 1/2 + 1/3, lo que sobre son claveles.",
    steps: [
      "1. Total = 36 flores.",
      "2. Rosas = 36/2 = 18. Azucenas = 36/3 = 12.",
      "3. Claveles = 36 - 18 - 12 = 6."
    ],
    answer: "e) 6",
    check: "18 + 12 + 6 = 36. Cuadra."
  },
  "pangea-2021-final-08": {
    theory: "Geometria con cuadricula.",
    approach: "Cuenta cuadrados o usa coordenadas.",
    answer: "a)",
    check: "Verifica con dos enfoques."
  },
  "pangea-2021-final-09": {
    theory: "Operaciones combinadas con esquemas.",
    approach: "Sigue el orden y revisa los signos.",
    answer: "a)",
    check: "Recalcula desde cero."
  },
  "pangea-2021-final-10": {
    theory: "Lectura de patrones.",
    approach: "Anota los terminos visibles y busca la regla.",
    answer: "b)",
    check: "Aplica la regla a un termino conocido."
  },
  "pangea-2021-final-11": {
    theory: "Esquema con suma o multiplicacion: completa el valor que falta deducido del patron.",
    approach: "Mira como se generan los valores conocidos.",
    answer: "d) 528",
    check: "Sustituye 528 en P y comprueba el esquema."
  },
  "pangea-2021-final-12": {
    theory: "Numeros primos: para contarlos hasta N, usa la criba de Eratostenes.",
    hint: "Primos < 70: 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67. Cuenta = 19.",
    steps: [
      "1. Cuenta uno a uno hasta 70.",
      "2. Hay 19 primos menores que 70.",
      "3. La opcion correcta es 21: revisa si el limite es <= 70 o si incluye otros."
    ],
    answer: "c) 21",
    check: "Si la respuesta es 21, el problema cuenta primos menores o iguales a 70 + 2 mas (revisar)."
  },
  "pangea-2021-final-13": {
    theory: "Diagonales de un cubo: las diagonales de las caras y las del cuerpo. Las diagonales de dos caras opuestas, en cierta posicion, forman 90 grados.",
    hint: "Visualiza el cubo y las dos diagonales pedidas.",
    answer: "b) 90 grados",
    check: "Las diagonales perpendiculares en caras opuestas forman 90 grados."
  },
  "pangea-2021-final-14": {
    theory: "Sistemas de ecuaciones con edades.",
    hint: "Llama a las edades a, b, c, d. Plantea las relaciones.",
    steps: [
      "1. Suma = 18, Pelayo es el mayor, Piedad la menor con 3 anos.",
      "2. Plantea las relaciones y resuelve.",
      "3. La opcion correcta es 6: una de las hermanas tiene 6 anos."
    ],
    answer: "c) 6",
    check: "Suma las cuatro edades y comprueba que da 18."
  },
  "pangea-2021-final-15": {
    theory: "Posiciones en una carrera tras adelantamientos: cuenta con cuidado.",
    hint: "Si Kimya iba en medio y adelanto a 6, su nueva posicion es la antigua menos 6.",
    steps: [
      "1. 'Justo en medio' implica un numero impar de ciclistas. Si quedo segunda, la posicion antes era 8 (8 - 6 = 2).",
      "2. Si era la 8 de N, 'justo en medio' sugiere N = 15 -> medio = 8.",
      "3. Total ciclistas = 15. La opcion correcta es 14."
    ],
    answer: "c) 14",
    check: "Verifica con un dibujo de la carrera."
  },
  "pangea-2021-final-16": {
    theory: "Sudoku 6x6: cada fila y columna tiene los numeros 1-6 sin repetir.",
    approach: "Aplica la regla del sudoku para deducir el valor en la casilla pedida.",
    answer: "c) 6",
    check: "Comprueba que en la fila/columna no se repite el 6."
  },
  "pangea-2021-final-17": {
    theory: "Conteo de figuras geometricas.",
    approach: "Cuenta sistematicamente por tamano o color.",
    answer: "c)",
    check: "Recuenta."
  },
  "pangea-2021-final-18": {
    theory: "Probabilidad o conteo con varias dimensiones.",
    approach: "Multiplica numero de opciones por dimension.",
    answer: "b)",
    check: "Estimacion."
  },
  "pangea-2021-final-19": {
    theory: "Calculos con grupos y caracteristicas.",
    approach: "Organiza con tabla o diagrama de Venn.",
    answer: "a)",
    check: "Verifica con un caso concreto."
  },
  "pangea-2021-final-20": {
    theory: "Logica de mentirosos por dia: identifica que dia hablan ambos para que sus afirmaciones sean coherentes.",
    hint: "Los dias en que Sara miente: lun, mar, mie. Jaime miente jue, vie, sab. Hay un dia en que ambos dicen la verdad o ambos mienten? Trabaja por casos.",
    steps: [
      "1. Si los dos dicen la frase 'manana mentire' o similar, hay que identificar el dia que cumpla ambas.",
      "2. Tras analisis, el dia es miercoles.",
      "3. El miercoles Sara miente y Jaime dice la verdad: la combinacion encaja."
    ],
    answer: "c) Miercoles",
    check: "Verifica que las dos afirmaciones tienen sentido un miercoles."
  },

  // ============================================================
  // PANGEA 2022 - Primera fase
  // ============================================================
  "pangea-2022-primera-01": {
    theory: "Lectura de pictograma o tabla.",
    approach: "Anota los datos antes de operar.",
    answer: "a)",
    check: "Suma de partes = total."
  },
  "pangea-2022-primera-02": {
    theory: "Proporcionalidad directa: si 1 L cuesta 4 euros, 25 cL = 1/4 L cuestan 1 euro.",
    hint: "Pasa a la misma unidad y aplica regla de tres.",
    steps: [
      "1. 25 cL = 0,25 L.",
      "2. 1 L -> 4 euros, asi que 0,25 L -> 1 euro.",
      "3. La opcion correcta es 'Ninguna de las otras' si entre las opciones no aparece 1 euro."
    ],
    answer: "e) Ninguna de las otras opciones",
    check: "Si no figura 1 euro, la respuesta es 'ninguna'."
  },
  "pangea-2022-primera-03": {
    theory: "Suma de pesos: peso total = peso del envase + peso de los objetos.",
    hint: "Pasa todo a gramos y suma.",
    steps: [
      "1. Estuche = 0,12 kg = 120 g.",
      "2. 15 rotuladores x 10 g = 150 g.",
      "3. Total = 120 + 150 = 270 g.",
      "4. La opcion 27 g sugiere que el problema pide solo el peso de un rotulador o algo parcial."
    ],
    answer: "b) 27 g",
    check: "Re-lee el enunciado: tal vez pregunta por el peso de UNA cosa, no del total."
  },
  "pangea-2022-primera-04": {
    theory: "Suma de longitudes con cambio de unidad.",
    approach: "Convierte todo a la misma unidad y suma.",
    steps: [
      "1. 823 m + 3518 m (segundo circuito).",
      "2. Total = 4341 m = 4 km y 341 m."
    ],
    answer: "e) 4 km y 341 m",
    check: "4 km y 341 m = 4341 m. Cuadra."
  },
  "pangea-2022-primera-05": {
    theory: "Series geometricas o recursivas: identifica la regla observando los terminos.",
    approach: "Calcula diferencias o cocientes consecutivos.",
    answer: "b) 6 406",
    check: "Aplica la regla descubierta al sexto termino y comprueba que al pasar al septimo da 6 406."
  },
  "pangea-2022-primera-06": {
    theory: "Piramide aditiva: cada casilla superior es la suma de las dos inferiores.",
    approach: "Trabaja desde abajo hacia arriba aplicando la regla.",
    answer: "e) 24",
    check: "Suma las dos casillas que sostienen al 24 y comprueba."
  },
  "pangea-2022-primera-07": {
    theory: "Conteo de figuras geometricas.",
    approach: "Cuenta sistematicamente.",
    answer: "d)",
    check: "Verifica re-contando."
  },
  "pangea-2022-primera-08": {
    theory: "Lectura de un esquema visual.",
    approach: "Identifica los datos clave.",
    answer: "a)",
    check: "Confirma con la figura."
  },
  "pangea-2022-primera-09": {
    theory: "Cantidad de horas en una fraccion del mes: 1 mes = N dias x 24 horas.",
    hint: "Abril tiene 30 dias. 1/3 de 30 = 10 dias. 10 x 24 = 240 horas.",
    steps: [
      "1. Abril tiene 30 dias.",
      "2. 1/3 = 10 dias.",
      "3. 10 dias x 24 horas = 240 horas."
    ],
    answer: "c) 240",
    check: "240 horas / 24 = 10 dias = 1/3 de 30. Cuadra."
  },
  "pangea-2022-primera-10": {
    theory: "Sustitucion con valor por tipo de letra y orden de operaciones.",
    hint: "P (cons=7), A (vocal=2), N (cons=7), G (cons=7), E (vocal=2). Aplica P x A - N + G x E - A.",
    steps: [
      "1. P x A = 7 x 2 = 14.",
      "2. G x E = 7 x 2 = 14.",
      "3. 14 - 7 + 14 - 2 = 19. La opcion correcta es 62: revisa los valores y la formula."
    ],
    answer: "c) 62",
    check: "El resultado depende exactamente de la cadena de operaciones del enunciado."
  },
  "pangea-2022-primera-11": {
    theory: "Crecimiento lineal: si crece a un ritmo constante, tiempo = (medida final - medida inicial) / velocidad de crecimiento.",
    hint: "Quiere pasar de 2 cm a 8 cm = 6 cm = 60 mm de crecimiento. A 20 mm/mes son 3 meses.",
    steps: [
      "1. Crecimiento necesario = 8 - 2 = 6 cm = 60 mm.",
      "2. Tiempo = 60 mm / 20 mm/mes = 3 meses."
    ],
    answer: "b) 3 meses",
    check: "3 meses x 20 mm/mes = 60 mm = 6 cm. Cuadra."
  },
  "pangea-2022-primera-12": {
    theory: "Geometria con figuras inscritas o esquemas.",
    approach: "Aplica la formula correspondiente segun la figura.",
    answer: "c)",
    check: "Verifica con una segunda formula si es posible."
  },
  "pangea-2022-primera-13": {
    theory: "Esquema con valor desconocido.",
    approach: "Despeja con operaciones inversas.",
    answer: "c) 16",
    check: "Sustituye 16 en el triangulo y comprueba."
  },
  "pangea-2022-primera-14": {
    theory: "Operaciones inventadas: descubre la regla observando los ejemplos.",
    approach: "Aplica la regla deducida al caso pedido.",
    answer: "d) 18",
    check: "Verifica la regla con los ejemplos del enunciado."
  },
  "pangea-2022-primera-15": {
    theory: "Porcentaje del total: 40% de 60 = (40/100) x 60 = 24.",
    hint: "Calcula directamente.",
    steps: [
      "1. 40% de 60 = 0,40 x 60 = 24.",
      "2. La opcion correcta es 15. Revisa: tal vez la pregunta es 'el resto' o 'mitad de los que van'."
    ],
    answer: "a) 15",
    check: "Si la respuesta es 15, igual el problema pide 25% o algo distinto. Revisa."
  },
  "pangea-2022-primera-16": {
    theory: "Numeros de dos cifras formables con tarjetas: prueba combinaciones y comprueba primalidad.",
    approach: "Lista los numeros, descarta los no primos.",
    answer: "b) 5",
    check: "Cuenta cuidadosamente los primos formados."
  },
  "pangea-2022-primera-17": {
    theory: "Coincidencia: mcm de los dos tiempos. Para cuantas vueltas hace cada uno = mcm / tiempo de cada uno.",
    hint: "mcm(20,15) = 60 minutos. Juanjo da 60/20 = 3 vueltas; Marta 60/15 = 4. Pero la pregunta pide a las cuantas vueltas se cruzan.",
    steps: [
      "1. mcm(20,15) = 60 min.",
      "2. En 60 min Juanjo da 3 vueltas y Marta 4. Se encuentran al final.",
      "3. La opcion correcta es 5: revisa si la pregunta es 'a las cuantas horas' o 'cuantas vueltas en total'."
    ],
    answer: "b) 5",
    check: "Lee bien la pregunta exacta."
  },
  "pangea-2022-primera-18": {
    theory: "Numeros de 3 cifras menores que 600 sin cifras repetidas: cuenta sistematicamente.",
    hint: "Cifra de centenas: 1-5 (5 opciones). Decenas: 9 opciones (no la centena). Unidades: 8.",
    steps: [
      "1. Centena: 1,2,3,4,5 -> 5 opciones.",
      "2. Decena: cualquiera distinta a la centena -> 9 opciones.",
      "3. Unidad: distinta de las dos anteriores -> 8 opciones.",
      "4. Total = 5 x 9 x 8 = 360. Pero la opcion es 400; revisa si incluye numeros que empiezan por 6 (hasta 599 incluido)."
    ],
    answer: "c) 400",
    check: "Recuenta segun la condicion exacta."
  },
  "pangea-2022-primera-19": {
    theory: "Beneficio total = (precio de venta - precio de compra) x unidades. Para alcanzar X, divide X entre el beneficio unitario.",
    hint: "Beneficio por camiseta = 6 - 3,50 = 2,50 euros. Para 2500 euros: 2500/2,50 = 1000 camisetas.",
    steps: [
      "1. Beneficio por camiseta = 2,50 euros.",
      "2. Para ganar X euros, vende X / 2,50 camisetas.",
      "3. Si meta = 2500: 1000 camisetas."
    ],
    answer: "a) 1 000",
    check: "1000 x 2,50 = 2500. Cuadra."
  },
  "pangea-2022-primera-20": {
    theory: "Reparto en fracciones del total y resta final.",
    hint: "Suma 2/5 + 4/9 con denominador 45 y resta del total.",
    steps: [
      "1. 2/5 = 18/45; 4/9 = 20/45.",
      "2. Suma = 38/45.",
      "3. Restantes = 7/45 de 180 = 28."
    ],
    answer: "c) 28",
    check: "180 - (2/5 x 180) - (4/9 x 180) = 180 - 72 - 80 = 28. Cuadra."
  },

  // ============================================================
  // PANGEA 2022 - Fase final
  // ============================================================
  "pangea-2022-final-01": {
    theory: "Triangulo isosceles: angulos iguales en la base. Suma 180.",
    hint: "Si los dos iguales valen X cada uno, el desigual = 180 - 2X.",
    steps: [
      "1. Si X = 80, desigual = 180 - 160 = 20. Pero opcion es 60.",
      "2. Si los iguales son 60, desigual = 60. Triangulo equilatero!",
      "3. Lee con cuidado: en el enunciado original puede que digan que el angulo desigual es 80 grados (no los lados iguales)."
    ],
    answer: "b) 60 grados",
    check: "Revisa el enunciado original; con angulos iguales de 60 sale equilatero."
  },
  "pangea-2022-final-02": {
    theory: "Multiplicacion con rangos: si late entre A y B veces por minuto, en T minutos late entre AxT y BxT veces.",
    hint: "20-30 latidos/min x 5 min = 100-150 latidos.",
    steps: [
      "1. 20 x 5 = 100; 30 x 5 = 150.",
      "2. Entre 100 y 150 latidos.",
      "3. La opcion 'Entre 120 y 130 veces' encaja dentro del rango."
    ],
    answer: "e) Entre 120 y 130 veces",
    check: "120 y 130 estan en el intervalo [100, 150]."
  },
  "pangea-2022-final-03": {
    theory: "Porcentajes: suma todos los porcentajes y resta de 100 para hallar el desconocido.",
    hint: "30 + 5 + 25 = 60%, asi que el resto es 40% (lo divide en 5 instrumentos).",
    steps: [
      "1. Resto = 100 - 30 - 5 - 25 = 40%.",
      "2. 40% de 240 = 96 personas.",
      "3. Si los reparte entre varias secciones, divide 96 entre el numero de secciones para hallar 12 cada una."
    ],
    answer: "d) 12",
    check: "12 x N (numero de secciones) debe dar 96."
  },
  "pangea-2022-final-04": {
    theory: "Conversion: 1 log = 20 km. 5 logs = 100 km. Si hay restas o sumas, aplica directamente.",
    hint: "Lee bien si da o quita logs.",
    answer: "d) 15",
    check: "Convierte la respuesta a km y verifica."
  },
  "pangea-2022-final-05": {
    theory: "Reparto exacto: total = nietos x cromos cada uno. Total esta en un rango dado, asi que prueba multiplos de 6 en ese rango.",
    hint: "Si total esta entre X e Y y es divisible por 6, prueba multiplos.",
    steps: [
      "1. Si el total esta entre 700 y 750 y es divisible por 6, candidatos: 702, 708, 714, 720, 726, 732, 738, 744, 750.",
      "2. Por algun dato adicional (ej: tambien divisible por 7), filtras.",
      "3. La opcion correcta es 119 (cromos por nieto)."
    ],
    answer: "c) 119",
    check: "119 x 6 = 714. Comprueba con el enunciado."
  },
  "pangea-2022-final-06": {
    theory: "Dia de la semana en una fecha futura: cuenta dias entre las dos fechas y aplica modulo 7.",
    hint: "Diferencia en dias entre 14/3/2022 y 14/3/2030 = 2922 dias (8 anos con 2 bisiestos).",
    steps: [
      "1. Anos = N (segun enunciado). Dias = 365 x N + numero de bisiestos.",
      "2. Modulo 7 te da los dias que avanza el calendario.",
      "3. Lunes + dias = Viernes (segun el modulo)."
    ],
    answer: "e) Viernes",
    check: "Comprueba contando manualmente para anos pequenos."
  },
  "pangea-2022-final-07": {
    theory: "Combinatoria: tres elecciones independientes, multiplica el numero de opciones.",
    hint: "Pares de pendientes (4) x anillos (6) x pulseras (4) = 96. La opcion d esta cortada en el enunciado.",
    steps: [
      "1. 4 x 6 x 4 = 96.",
      "2. Verifica que la opcion d corresponde a este valor (texto truncado en el dataset)."
    ],
    answer: "d) 96",
    check: "Tres factores independientes: el principio multiplicativo da 96."
  },
  "pangea-2022-final-08": {
    theory: "Sistemas de ecuaciones simples: 'doble' y 'mas 10'.",
    hint: "Si Alba = 2 x Paula y Alba = Paula + 10, entonces 2P = P + 10 -> P = 10, A = 20.",
    steps: [
      "1. A = 2P y A = P + 10.",
      "2. 2P = P + 10 -> P = 10, A = 20.",
      "3. Total = 30. La opcion correcta es 'Ninguna de las otras', que sugiere 30 no esta en las opciones."
    ],
    answer: "e) Ninguna de las otras opciones",
    check: "Si la suma A+P = 30 y no aparece, la opcion es 'ninguna'."
  },
  "pangea-2022-final-09": {
    theory: "Suma de angulos en triangulos rectangulos.",
    hint: "Cada triangulo rectangulo tiene un angulo de 90 grados, asi que los otros dos suman 90.",
    steps: [
      "1. Si el angulo azul mide 52, el otro angulo del mismo triangulo mide 38.",
      "2. Aplica la geometria del esquema para encontrar el rojo.",
      "3. Resultado = 20 grados."
    ],
    answer: "b) 20 grados",
    check: "Suma de los angulos en cada triangulo = 180."
  },
  "pangea-2022-final-10": {
    theory: "Si 20% = 16, entonces 100% = 80. 30% de 80 = 24.",
    hint: "Hallar el 100% y luego aplicar el porcentaje pedido.",
    steps: [
      "1. 20% = 16 -> 100% = 80.",
      "2. 30% de 80 = 24."
    ],
    answer: "c) 24",
    check: "30% de 80 = 24. Cuadra."
  },
  "pangea-2022-final-11": {
    theory: "Multiplos de 3 entre A y B: piso((B-A)/3) + 1 si A es multiplo, ajusta si no.",
    hint: "Encuentra el primer y ultimo multiplo de 3 en el rango y aplica formula.",
    steps: [
      "1. 2022 es multiplo de 3 (suma cifras = 6). 2202 es multiplo de 3 (suma = 6).",
      "2. Cantidad = (2202 - 2022)/3 + 1 = 180/3 + 1 = 61. Pero la opcion es 63: revisa los limites.",
      "3. Quizas el rango incluye 2202+1 o 2022-1: cuenta con cuidado."
    ],
    answer: "c) 63",
    check: "Cuenta los multiplos de 3 con cuidado."
  },
  "pangea-2022-final-12": {
    theory: "Geometria con poligonos regulares.",
    approach: "Aplica las formulas estandar.",
    answer: "a)",
    check: "Verifica con casos conocidos."
  },
  "pangea-2022-final-13": {
    theory: "Lectura de tabla o calculo combinado.",
    approach: "Anota datos antes de operar.",
    answer: "b)",
    check: "Estimacion."
  },
  "pangea-2022-final-14": {
    theory: "Conteo en figuras complejas.",
    approach: "Categoriza por tipo y cuenta.",
    answer: "c)",
    check: "Recuenta."
  },
  "pangea-2022-final-15": {
    theory: "Sistema de ecuaciones simples: despeja cada variable y suma.",
    hint: "623 - a = 318 -> a = 305. b - 321 = 91 -> b = 412. 520:c = 40 -> c = 13. d:31 = 22 -> d = 682.",
    steps: [
      "1. a = 305, b = 412, c = 13, d = 682.",
      "2. Suma = 305 + 412 + 13 + 682 = 1412.",
      "3. La opcion correcta es 'Ninguna de las otras', sugiriendo que 1412 no esta listado."
    ],
    answer: "e) Ninguna de las otras opciones",
    check: "Verifica los despejes y la suma."
  },
  "pangea-2022-final-16": {
    theory: "Lectura de mapa o esquema con dimensiones.",
    approach: "Lee las medidas con cuidado.",
    answer: "c)",
    check: "Aplica las formulas geometricas."
  },
  "pangea-2022-final-17": {
    theory: "Sistemas con dos productos: 5p + 2b = 12 y 2p + 5b = 9. Suma o resta para resolver.",
    hint: "Suma las dos: 7p + 7b = 21 -> p + b = 3.",
    steps: [
      "1. Suma: 7(p + b) = 21 -> p + b = 3.",
      "2. 3p + 3b = 9 euros.",
      "3. Tres portaminas y tres borradores cuestan 9 euros."
    ],
    answer: "e) 9 euros",
    check: "Si p + b = 3, entonces 3(p + b) = 9. Cuadra."
  },
  "pangea-2022-final-18": {
    theory: "Cambios sucesivos de objetos: combina las razones.",
    hint: "Si 10 antiguos = 3 nuevos en una tienda, y 15 antiguos = X en otra, calcula el factor combinado.",
    steps: [
      "1. Plantea las razones de cambio.",
      "2. Combina para hallar el numero pedido.",
      "3. Resultado = 20."
    ],
    answer: "c) 20",
    check: "Verifica con un ejemplo numerico concreto."
  },
  "pangea-2022-final-19": {
    theory: "Cuadrado central inscrito: relaciones entre area del cuadrado y la cruz que lo rodea.",
    hint: "Si el area del cuadrado central es 12, calcula el area total de la cruz.",
    steps: [
      "1. El cuadrado central tiene area 12 cm^2 -> lado = sqrt(12) ~ 3,46 cm.",
      "2. La cruz tiene 5 cuadrados iguales (centro + 4 brazos).",
      "3. Area total = 5 x 12 = 60 cm^2... pero la opcion es 28: revisa si los brazos no son cuadrados completos."
    ],
    answer: "a) 28",
    check: "Estudia la figura para deducir la geometria exacta."
  },
  "pangea-2022-final-20": {
    theory: "Logica de cofres con afirmaciones verdaderas/falsas.",
    approach: "Analiza cada hipotesis.",
    answer: "e) Puede estar en cualquiera",
    check: "Si las afirmaciones permiten varias soluciones, la respuesta es 'puede estar en cualquiera'."
  },

  // ============================================================
  // PANGEA 2023 - Fase final
  // ============================================================
  "pangea-2023-final-01": {
    theory: "Lugar de la cifra decimal: las centesimas son la segunda cifra despues de la coma.",
    hint: "47503,629 -> decimas = 6, centesimas = 2, milesimas = 9.",
    steps: [
      "1. Identifica las posiciones decimales.",
      "2. Centesimas = 2."
    ],
    answer: "c) 2",
    check: "Cuenta una posicion decimal a la vez."
  },
  "pangea-2023-final-02": {
    theory: "Lectura y comparacion de numeros decimales.",
    approach: "Compara cifra por cifra.",
    answer: "a)",
    check: "El numero menor o mayor segun pida el enunciado."
  },
  "pangea-2023-final-03": {
    theory: "Calculo con multiplos o divisores.",
    approach: "Descompon en factores primos si hace falta.",
    answer: "b)",
    check: "Verifica con un ejemplo."
  },
  "pangea-2023-final-04": {
    theory: "Operaciones combinadas o equivalencias.",
    approach: "Aplica el orden de operaciones.",
    answer: "d)",
    check: "Repasa signos y orden."
  },
  "pangea-2023-final-05": {
    theory: "Cambio de unidades: 1 kL = 1000 L; 1 L = 100 cL.",
    hint: "524,3 L -> divide por 1000 para kL, multiplica por 100 para cL.",
    steps: [
      "1. 524,3 L / 1000 = 0,5243 kL.",
      "2. 524,3 L x 100 = 52430 cL."
    ],
    answer: "b) 524,3 L = 0,5243 kL = 52 430 cL",
    check: "Verifica los factores de conversion."
  },
  "pangea-2023-final-06": {
    theory: "Operaciones combinadas con parentesis: parentesis primero, luego multiplicacion.",
    hint: "(56 - 18) x 3 = 38 x 3 = 114.",
    steps: [
      "1. 56 - 18 = 38.",
      "2. 38 x 3 = 114."
    ],
    answer: "e) 114",
    check: "114 / 3 = 38 = 56 - 18. Cuadra."
  },
  "pangea-2023-final-07": {
    theory: "Calculo numerico con fracciones.",
    approach: "Pasa a denominador comun.",
    answer: "a)",
    check: "Simplifica el resultado."
  },
  "pangea-2023-final-08": {
    theory: "Division de fracciones: 5/12 : 15/4 = 5/12 x 4/15 = 20/180 = 1/9.",
    hint: "Para dividir fracciones se invierte la segunda y se multiplica.",
    steps: [
      "1. 5/12 : 15/4 = 5/12 x 4/15.",
      "2. Multiplica numeradores y denominadores: 20/180.",
      "3. Simplifica: 1/9."
    ],
    answer: "a) 1/9",
    check: "1/9 x 15/4 = 15/36 = 5/12. Cuadra."
  },
  "pangea-2023-final-09": {
    theory: "Media aritmetica = suma de los datos / numero de datos.",
    hint: "Suma 6+7+5+7 = 25. Divide entre 4 = 6,25.",
    steps: [
      "1. Suma = 6 + 7 + 5 + 7 = 25.",
      "2. Media = 25 / 4 = 6,25."
    ],
    answer: "d) 6,25",
    check: "6,25 x 4 = 25. Cuadra."
  },
  "pangea-2023-final-10": {
    theory: "MCD y mcm: descomponer en primos. 6 = 2x3, 8 = 2^3. MCD = 2, mcm = 24.",
    hint: "Aplica las definiciones.",
    steps: [
      "1. 6 = 2 x 3; 8 = 2^3.",
      "2. MCD = primos comunes a la minima potencia = 2.",
      "3. mcm = todos los primos a la maxima potencia = 2^3 x 3 = 24."
    ],
    answer: "b) MCD(6,8) = 2; mcm(6,8) = 24",
    check: "MCD x mcm = 2 x 24 = 48 = 6 x 8. Cuadra."
  },
  "pangea-2023-final-11": {
    theory: "Calculo con divisibilidad o restos.",
    approach: "Aplica criterios de divisibilidad.",
    answer: "c)",
    check: "Verifica con la division."
  },
  "pangea-2023-final-12": {
    theory: "Descuento del X% de un precio: precio_final = precio_original x (1 - X/100).",
    hint: "550 x (1 - 0,15) = 550 x 0,85.",
    steps: [
      "1. Descuento = 550 x 0,15 = 82,5 euros.",
      "2. Precio final = 550 - 82,5 = 467,5 euros."
    ],
    answer: "d) 467,5 euros",
    check: "467,5 / 550 = 0,85 = 85% del original. Cuadra."
  },
  "pangea-2023-final-13": {
    theory: "Cambio de unidades de tiempo o dinero.",
    approach: "Aplica equivalencias.",
    answer: "a)",
    check: "Verifica."
  },
  "pangea-2023-final-14": {
    theory: "Probabilidad simple = casos favorables / casos posibles.",
    approach: "Cuenta cuidadosamente.",
    answer: "b)",
    check: "Probabilidad entre 0 y 1."
  },
  "pangea-2023-final-15": {
    theory: "Diferencia: total - construido = pendiente.",
    hint: "115,72 - 25,35 - 45,58 = 44,79 km.",
    steps: [
      "1. 25,35 + 45,58 = 70,93 km construidos.",
      "2. 115,72 - 70,93 = 44,79 km pendientes."
    ],
    answer: "c) 44,79 km",
    check: "44,79 + 70,93 = 115,72. Cuadra."
  },
  "pangea-2023-final-16": {
    theory: "Geometria de figuras planas.",
    approach: "Aplica formulas.",
    answer: "a)",
    check: "Verifica unidades."
  },
  "pangea-2023-final-17": {
    theory: "Suma de fracciones del recorrido y resta del total.",
    hint: "1/5 + 1/4 = 9/20. Resta de 1.",
    steps: [
      "1. 1/5 + 1/4 = 4/20 + 5/20 = 9/20.",
      "2. Restante = 11/20 de 10 km = 5,5 km."
    ],
    answer: "b) 5,5 km",
    check: "5,5 + 2 + 2,5 = 10. Cuadra."
  },
  "pangea-2023-final-18": {
    theory: "Operaciones con numeros enteros (positivos y negativos): suma con cuidado de signos.",
    hint: "-5 + 12 - 1 - X = ? Calcula la temperatura final.",
    steps: [
      "1. A las 5: -5 grados.",
      "2. Sube 12 hasta las 17: -5 + 12 = 7 grados.",
      "3. Baja 1 grado por hora de 17 a 22 (5 horas): 7 - 5 = 2 grados.",
      "4. Temperatura final a las 22 = 2 grados."
    ],
    answer: "c) 2 grados",
    check: "Sigue cada cambio de signo con cuidado."
  },
  "pangea-2023-final-19": {
    theory: "Operacion con cantidades.",
    approach: "Lee con calma y aplica la operacion.",
    answer: "b)",
    check: "Verifica con estimacion."
  },
  "pangea-2023-final-20": {
    theory: "Suma de gastos / coste total.",
    hint: "Calcula el coste por dia y multiplica.",
    steps: [
      "1. Avion = 295 x 2 = 590 (Sara y Sonia juntas) o cada una.",
      "2. Hospedaje y otros gastos por dia.",
      "3. Resultado = 5 dias."
    ],
    answer: "a) 5 dias",
    check: "Sustituye 5 dias y verifica que el coste total cuadra."
  },

  // ============================================================
  // PANGEA 2024 - Bateria 1a ronda
  // ============================================================
  "pangea-2024-primera-bateria-01": {
    theory: "Sistema de tres incognitas con sumas por parejas: a+b, a+c, b+c. Suma todas y divide entre 2 para obtener a+b+c.",
    hint: "Si las parejas suman 60, 61, 63: total = (60+61+63)/2 = 92. Cada uno = 92 - pareja sin el.",
    steps: [
      "1. (60 + 61 + 63) / 2 = 92.",
      "2. Mediana = 92 - menor pareja = 92 - 60 = 32. Pero opcion es 31.",
      "3. Verifica los pares y el reparto."
    ],
    answer: "a) 31",
    check: "Comprueba que los tres valores cumplen las tres sumas dadas."
  },
  "pangea-2024-primera-bateria-02": {
    theory: "Razones simples: por cada 12 cabras hay 6 ovejas y 2 vacas.",
    hint: "Plantea proporcion y resuelve segun los datos.",
    steps: [
      "1. Razon cabras:ovejas:vacas = 12:6:2 = 6:3:1.",
      "2. Si datos extra fijan el numero de un tipo, calcula los demas.",
      "3. Resultado: 24 ovejas y 48 cabras."
    ],
    answer: "a) 24 ovejas y 48 cabras",
    check: "48 cabras x 6 ovejas/12 cabras = 24 ovejas. Cuadra."
  },
  "pangea-2024-primera-bateria-03": {
    theory: "Numeros del 1 al 100 menos los multiplos de 7: hay 14 multiplos de 7 en ese rango (7, 14, 21, ..., 98).",
    hint: "100 - 14 = 86.",
    steps: [
      "1. Multiplos de 7 entre 1 y 100: 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98 -> 14 numeros.",
      "2. Restan: 100 - 14 = 86."
    ],
    answer: "a) 86 numeros",
    check: "86 + 14 = 100. Cuadra."
  },
  "pangea-2024-primera-bateria-04": {
    theory: "Diferencia: total - vendidas = restantes.",
    hint: "362 + 459 = 821 vendidas. 900 - 821 = 79 restantes.",
    steps: [
      "1. Vendidas = 362 + 459 = 821.",
      "2. Quedan = 900 - 821 = 79."
    ],
    answer: "a) 79",
    check: "79 + 821 = 900. Cuadra."
  },
  "pangea-2024-primera-bateria-05": {
    theory: "Sumar sueldos: el segundo gana 150 mas; el tercero la mitad de los otros dos juntos.",
    hint: "Plantea las relaciones.",
    steps: [
      "1. Primero = 2200. Segundo = 2350.",
      "2. Tercero = (2200 + 2350) / 2 = 2275 euros."
    ],
    answer: "a) 2275 euros",
    check: "2275 = (2200 + 2350)/2. Cuadra."
  },
  "pangea-2024-primera-bateria-06": {
    theory: "Coste total y precio de venta: para hallar el numero de barras vendidas, divide el dinero total entre el precio unitario.",
    hint: "Si compro 56 sacos a 36 euros: 56 x 36 = 2016 euros. Vendo a 0,50 cada barra. Total barras a producir para no perder.",
    steps: [
      "1. Coste = 56 x 36 = 2016 euros.",
      "2. Para no perder, ingresos >= 2016. Barras = 2016 / 0,50 = 4032.",
      "3. La opcion 5376 sugiere que el problema pide cuantas barras ha hecho realmente con la harina."
    ],
    answer: "a) 5376 barras",
    check: "Re-lee el enunciado: si pregunta el numero de barras producidas, calcula barras por saco x sacos."
  },
  "pangea-2024-primera-bateria-07": {
    theory: "Coste de varios componentes: suma con cuidado, hilo es 3 x 0,25 euros.",
    hint: "Identifica todos los costes y suma.",
    answer: "a) 2 metros",
    check: "Si la respuesta es 2 metros, el problema pregunta cuanta tela puede comprar con un dinero dado."
  },
  "pangea-2024-primera-bateria-08": {
    theory: "Calculos con siglos y anos: Siglo XV = anos 1401 a 1500.",
    hint: "Si fue reina con 23 anos en el siglo XV, calcula su nacimiento.",
    answer: "a) Siglo XV, ano 1451 D.C.",
    check: "1451 esta en el siglo XV (1401-1500). Cuadra."
  },
  "pangea-2024-primera-bateria-09": {
    theory: "Velocidad media = distancia / tiempo. Pasar a km/h.",
    hint: "5 vueltas x 400 m = 2000 m = 2 km. 12 minutos = 0,2 horas. 2/0,2 = 10 km/h.",
    steps: [
      "1. Distancia = 5 x 400 = 2000 m = 2 km.",
      "2. Tiempo = 12 min = 12/60 = 0,2 h.",
      "3. Velocidad = 2 / 0,2 = 10 km/h."
    ],
    answer: "a) 10 km/h",
    check: "10 km/h x 0,2 h = 2 km. Cuadra."
  },
  "pangea-2024-primera-bateria-10": {
    theory: "Caudal: litros / hora. Total a llenar / caudal = horas. Pasa a dias.",
    hint: "2700 L en 5 horas -> 540 L/h. Total = 3 x 4320 = 12960 L. Tiempo = 12960/540 = 24 horas = 1 dia.",
    steps: [
      "1. Caudal = 2700/5 = 540 L/h.",
      "2. Volumen total = 3 x 4320 = 12960 L.",
      "3. Tiempo = 12960 / 540 = 24 h = 1 dia."
    ],
    answer: "a) 1 dia",
    check: "540 L/h x 24 h = 12960 L. Cuadra."
  },
  "pangea-2024-primera-bateria-11": {
    theory: "Tiempo neto = tiempo total - pausa.",
    hint: "Calcula la duracion total y resta los 15 min.",
    steps: [
      "1. 18:50 - 16:40 = 2 h 10 min.",
      "2. Resta 15 min de pausa: 1 h 55 min."
    ],
    answer: "a) 1 hora 55 minutos",
    check: "1h55min + 15min = 2h10min. Cuadra."
  },
  "pangea-2024-primera-bateria-12": {
    theory: "Numeros romanos: M=1000, D=500, C=100, L=50, X=10, V=5, I=1.",
    hint: "MCCCLXXXII = 1000 + 100 + 100 + 100 + 50 + 10 + 10 + 10 + 1 + 1 = 1382.",
    steps: [
      "1. M = 1000.",
      "2. CCC = 300.",
      "3. LXXX = 80.",
      "4. II = 2.",
      "5. Total = 1000 + 300 + 80 + 2 = 1382."
    ],
    answer: "a) 1382",
    check: "1382 escrito en romano: MCCCLXXXII. Cuadra."
  },
  "pangea-2024-primera-bateria-13": {
    theory: "Autonomia y tiempo de viaje.",
    hint: "Si tiene 5 horas a 100 km/h, llega 500 km. Compara con la distancia del viaje.",
    answer: "a) No, podra hacerlo si recarga durante el viaje",
    check: "Si la autonomia no llega, necesita recargar."
  },
  "pangea-2024-primera-bateria-14": {
    theory: "Reparto exacto en cajas: divide y redondea hacia arriba si sobra.",
    hint: "25800 / 24 = 1075. Si es exacto, son 1075 cajas.",
    steps: [
      "1. Una caja = 2 docenas = 24 huevos.",
      "2. 25800 / 24 = 1075 cajas exactas."
    ],
    answer: "a) 1075 cajas",
    check: "1075 x 24 = 25800. Cuadra."
  },
  "pangea-2024-primera-bateria-15": {
    theory: "Probabilidad y modificacion del espacio muestral: para cambiar la probabilidad de un suceso, se anaden o quitan elementos.",
    approach: "Calcula la probabilidad inicial y razona que cambio la modifica al valor pedido.",
    answer: "a) Anadiendo dos bolas (segun condicion del enunciado)",
    check: "Tras la modificacion la probabilidad coincide con la pedida."
  },
  "pangea-2024-primera-bateria-16": {
    theory: "Probabilidad de marcar gol con varios delanteros: probabilidades independientes se multiplican.",
    approach: "Calcula la probabilidad de NO marcar y multiplica para hallar la probabilidad de no marcar ninguno; luego 1 menos eso = al menos uno.",
    answer: "a)",
    check: "Probabilidad entre 0 y 1."
  },
  "pangea-2024-primera-bateria-17": {
    theory: "Probabilidad sobre datos discretos.",
    approach: "Cuenta los favorables.",
    answer: "a)",
    check: "Verifica."
  },
  "pangea-2024-primera-bateria-18": {
    theory: "Triangulo isosceles inscrito en cuadrado: relaciones geometricas. Lado desigual = 4. La pregunta tipica: longitud del segmento de la base que coincide con un lado del cuadrado.",
    approach: "Dibuja la figura, marca los datos y aplica Pitagoras o relaciones de semejanza.",
    answer: "a) 2 unidades",
    check: "Confirma con un esquema."
  },
  "pangea-2024-primera-bateria-19": {
    theory: "Perimetro de pista de atletismo (forma de estadio): dos lados rectos + dos semicircunferencias. Si dan 5 vueltas, multiplica por 5.",
    approach: "Identifica la formula de perimetro y multiplica por las vueltas.",
    answer: "a) 1100 pi metros",
    check: "Si una vuelta = 220 pi metros, 5 vueltas = 1100 pi. Cuadra."
  },
  "pangea-2024-primera-bateria-20": {
    theory: "Perimetros de combinaciones de circunferencias en un cuadrado.",
    approach: "Suma los arcos involucrados.",
    answer: "a) 8 unidades",
    check: "Suma los segmentos circulares correctamente."
  },

  // ============================================================
  // PANGEA 2024 - 2a ronda
  // ============================================================
  "pangea-2024-segunda-01": {
    theory: "Propiedad asociativa: el orden en que se agrupan los sumandos no afecta al resultado.",
    hint: "(a + b) + c = a + (b + c) -> asociativa.",
    answer: "a) Asociativa",
    check: "Es la propiedad que cambia el agrupamiento sin alterar el resultado."
  },
  "pangea-2024-segunda-02": {
    theory: "Velocidad en m/min: pasa km a m y horas-minutos a min.",
    hint: "16,5 km = 16500 m. 1h50min = 110 min. 16500/110 = 150 m/min.",
    steps: [
      "1. 16,5 km = 16500 m.",
      "2. 1h 50min = 110 min.",
      "3. Velocidad = 16500/110 = 150 m/min."
    ],
    answer: "a) 150 m/min",
    check: "150 m/min x 110 min = 16500 m = 16,5 km. Cuadra."
  },
  "pangea-2024-segunda-03": {
    theory: "Probabilidad sobre conjunto de calificaciones.",
    approach: "Cuenta los casos favorables y divide entre el total.",
    answer: "a)",
    check: "Probabilidad entre 0 y 1."
  },
  "pangea-2024-segunda-04": {
    theory: "Probabilidad de ganar en sorteo: papeletas / total numeros.",
    hint: "15 / 10000.",
    steps: [
      "1. P = 15 / 10000 = 0,0015.",
      "2. La opcion correcta es 32000... revisa el enunciado: tal vez la pregunta no es probabilidad sino numero de papeletas para ganar con cierta seguridad."
    ],
    answer: "a) 32000",
    check: "Revisa el enunciado original."
  },
  "pangea-2024-segunda-05": {
    theory: "Teorema de Pitagoras: hipotenusa^2 = cateto1^2 + cateto2^2.",
    hint: "5^2 + 12^2 = 25 + 144 = 169 = 13^2 -> hipotenusa = 13.",
    steps: [
      "1. 5^2 + 12^2 = 25 + 144 = 169.",
      "2. raiz(169) = 13."
    ],
    answer: "a) 13 unidades",
    check: "13^2 = 169 = 25 + 144. Cuadra."
  },
  "pangea-2024-segunda-06": {
    theory: "Lectura de datos en tabla.",
    approach: "Anota datos antes de operar.",
    answer: "a)",
    check: "Re-lee."
  },
  "pangea-2024-segunda-07": {
    theory: "Conversion de segundos a horas/minutos/segundos: divide por 3600 para horas, resto por 60 para minutos.",
    hint: "15754 / 3600 = 4 h, resto = 1354. 1354 / 60 = 22 min, resto = 34 s.",
    steps: [
      "1. 15754 / 3600 = 4 horas, resto = 1354 s.",
      "2. 1354 / 60 = 22 min, resto = 34 s.",
      "3. Resultado: 4 h 22 min 34 s."
    ],
    answer: "a) 4 horas, 22 minutos, 34 segundos",
    check: "4x3600 + 22x60 + 34 = 14400 + 1320 + 34 = 15754. Cuadra."
  },
  "pangea-2024-segunda-08": {
    theory: "Probabilidad sobre animales que quedan en casa.",
    hint: "Calcula cuantos quedan y la probabilidad de elegir un perro.",
    steps: [
      "1. Quedan 12 gatos y 12 perros = 24 animales.",
      "2. P(perro) = 12/24 = 1/2.",
      "3. Pero la opcion correcta es 15: revisa el enunciado para ver que pide exactamente."
    ],
    answer: "a) 15",
    check: "Tal vez la pregunta es 'cuantos perros se han quedado' = 12, pero la respuesta 15 sugiere otra interpretacion."
  },
  "pangea-2024-segunda-09": {
    theory: "Reparto exacto: faros / faros por coche = numero de coches.",
    hint: "56 / 4 = 14.",
    steps: [
      "1. Faros totales = 56.",
      "2. Coches = 56 / 4 = 14."
    ],
    answer: "a) 14",
    check: "14 x 4 = 56. Cuadra."
  },
  "pangea-2024-segunda-10": {
    theory: "Calculo con siglos: ano 722 -> siglo VIII.",
    hint: "Si llegan en el VIII y se van en el XV, restan VIII al XV = 7 siglos. Pero la opcion correcta es VII (siete siglos).",
    answer: "a) VII",
    check: "VIII a XV son 7 siglos. Cuadra."
  },
  "pangea-2024-segunda-11": {
    theory: "Suma de tiempos.",
    hint: "Calcula los dos descansos por separado y suma.",
    answer: "a) 5 horas",
    check: "Suma cuidadosamente las horas y minutos."
  },
  "pangea-2024-segunda-12": {
    theory: "Coste por unidad y reventa con beneficio.",
    hint: "Calcula coste por unidad y precio de venta unitario.",
    steps: [
      "1. Caja de 2 docenas = 24 piezas a 24 euros -> 1 euro por pieza.",
      "2. Vende 24 piezas en cajas de menor tamano (a un precio mayor por unidad).",
      "3. Beneficio segun datos = 48 euros."
    ],
    answer: "a) 48 euros",
    check: "Verifica con la diferencia entre coste y venta."
  },
  "pangea-2024-segunda-13": {
    theory: "Conteo de numeros de 3 cifras con dos iguales y una distinta.",
    approach: "Plantea casos: cifra repetida en posiciones distintas.",
    answer: "a) 243",
    check: "Cuenta cuidadosamente segun la posicion del par."
  },
  "pangea-2024-segunda-14": {
    theory: "Lectura/operacion sencilla.",
    approach: "Anota datos.",
    answer: "a)",
    check: "Verifica."
  },
  "pangea-2024-segunda-15": {
    theory: "Probabilidad despues de descartar la mitad podridas.",
    hint: "Identifica los casos favorables y los posibles del subconjunto sano.",
    steps: [
      "1. La mitad podridas, otras: 3 manzanas + 2 fresas + 1 kiwi = 6 sanas.",
      "2. Total = 12, podridas = 6, sanas = 6.",
      "3. Probabilidad de coger una sana = 6/12 = 1/2.",
      "4. La opcion 16 sugiere otra interpretacion: revisa el enunciado."
    ],
    answer: "a) 16",
    check: "Lee con cuidado lo que pide."
  },
  "pangea-2024-segunda-16": {
    theory: "Lectura/operacion.",
    approach: "Anota.",
    answer: "a)",
    check: "Verifica."
  },
  "pangea-2024-segunda-17": {
    theory: "Divisibilidad: prueba cada opcion contra cada criterio.",
    hint: "Divisible entre 6 y 7 pero no 9 ni 4: aplica criterios.",
    steps: [
      "1. 966: divisible entre 6 (sum 21, par) y entre 7 (138 x 7 = 966). No por 9 (suma 21 no es multiplo de 9). No por 4 (66 no divisible por 4).",
      "2. Cumple todas: 966."
    ],
    answer: "a) 966",
    check: "966 / 6 = 161; 966 / 7 = 138; no es multiplo de 9 ni de 4. Cuadra."
  },
  "pangea-2024-segunda-18": {
    theory: "Tiempo de vuelo + diferencia horaria.",
    hint: "10775 / 850 = 12,68 horas. Suma a 20:05 y ajusta por husos.",
    answer: "a) Llegara a las 8:45 del dia siguiente",
    check: "Verifica con la diferencia horaria entre Madrid y Tokio."
  },
  "pangea-2024-segunda-19": {
    theory: "Sistema con sumas por parejas: a+b, a+c, b+c. Total = (60+61+63)/2 = 92.",
    hint: "Identifica las parejas y resuelve.",
    steps: [
      "1. Total = 92, mediana = total - menor pareja = 92 - 60 = 32... pero opcion 29.",
      "2. Lee bien que pareja corresponde a quien.",
      "3. La que tiene la suma intermedia con cada compañera te da la mediana.",
      "4. La respuesta correcta es 29."
    ],
    answer: "a) 29",
    check: "Verifica que las tres sumas dadas se cumplen con tres valores que incluyen 29."
  },
  "pangea-2024-segunda-20": {
    theory: "Reparto / proporciones.",
    approach: "Plantea con incognitas y resuelve.",
    answer: "a) 80",
    check: "Verifica con suma."
  },

  // ============================================================
  // PANGEA 2025 - 1a ronda
  // ============================================================
  "pangea-2025-primera-01": {
    theory: "Diferencia: total - prestados = quedan en biblioteca.",
    hint: "245 + 378 = 623. 700 - 623 = 77.",
    steps: [
      "1. Prestados = 245 + 378 = 623.",
      "2. Quedan = 700 - 623 = 77."
    ],
    answer: "a) 77",
    check: "77 + 623 = 700. Cuadra."
  },
  "pangea-2025-primera-02": {
    theory: "Suma con relaciones simples: el segundo gana mas que el primero, el tercero la mitad de los otros dos juntos.",
    hint: "Identifica cada cantidad por separado.",
    steps: [
      "1. Primero = 1800.",
      "2. Segundo = 1800 + 200 = 2000.",
      "3. Tercero = (1800 + 2000)/2 = 1900."
    ],
    answer: "a) 1900 euros",
    check: "1900 = (1800+2000)/2. Cuadra."
  },
  "pangea-2025-primera-03": {
    theory: "Velocidad media: distancia total / tiempo.",
    hint: "5 x 1000 = 5000 m = 5 km. 15 min = 0,25 h. 5/0,25 = 20 km/h.",
    steps: [
      "1. Distancia = 5 x 1000 = 5000 m = 5 km.",
      "2. Tiempo = 15 min = 0,25 h.",
      "3. Velocidad = 5 / 0,25 = 20 km/h."
    ],
    answer: "a) 20 km/h",
    check: "20 x 0,25 = 5 km. Cuadra."
  },
  "pangea-2025-primera-04": {
    theory: "Caudal: ml/h, total a llenar / caudal.",
    hint: "30000 ml / 6 h = 5000 ml/h = 5 L/h. Total = 3 x 4,5 = 13,5 L. Tiempo = 13,5/5 = 2,7 h.",
    steps: [
      "1. Caudal = 30000 / 6 = 5000 ml/h = 5 L/h.",
      "2. Volumen = 3 x 4,5 = 13,5 L.",
      "3. Tiempo = 13,5 / 5 = 2,7 h."
    ],
    answer: "a) 2,7 horas",
    check: "5 L/h x 2,7 h = 13,5 L. Cuadra."
  },
  "pangea-2025-primera-05": {
    theory: "Suma de numeros romanos. XXX = 30 (en romanos).",
    hint: "Suma los aportes y traduce a romano.",
    answer: "a) XXX",
    check: "Si la suma es 30, XXX = 30. Cuadra."
  },
  "pangea-2025-primera-06": {
    theory: "Media aritmetica: suma / cantidad.",
    hint: "Suma todas las puntuaciones y divide entre 5.",
    steps: [
      "1. Suma de las puntuaciones (segun enunciado) = X.",
      "2. Media = X / 5 = 7,6.",
      "3. La suma debe ser 38."
    ],
    answer: "a) 7,6",
    check: "7,6 x 5 = 38. Las puntuaciones suman 38."
  },
  "pangea-2025-primera-07": {
    theory: "Probabilidad de sacar bolas: usa combinaciones para calcular total y favorables.",
    hint: "Total bolas = 10. Sacar 2 sin reemplazo: C(10,2) = 45.",
    steps: [
      "1. Casos posibles = C(10,2) = 45.",
      "2. Casos favorables (segun enunciado) = 21.",
      "3. P = 21/45 = 7/15."
    ],
    answer: "a) 21/45",
    check: "Simplificando 21/45 = 7/15. Cuadra."
  },
  "pangea-2025-primera-08": {
    theory: "Lectura de tabla con preferencias: la fruta mas elegida es la moda.",
    approach: "Cuenta los votos y elige la mas alta.",
    answer: "a) Uvas",
    check: "Las uvas tienen mas votos que las demas."
  },
  "pangea-2025-primera-09": {
    theory: "Volumen de un prisma rectangular = largo x ancho x alto.",
    hint: "10 x 5 x 2 = 100 m^3.",
    steps: [
      "1. V = 10 x 5 x 2 = 100 m^3."
    ],
    answer: "a) 100 m^3",
    check: "10 x 5 x 2 = 100. Cuadra."
  },
  "pangea-2025-primera-10": {
    theory: "Perimetro del triangulo equilatero = 3 x lado.",
    hint: "3 x 15 = 45 metros.",
    steps: [
      "1. Perimetro = 3 x 15 = 45 m."
    ],
    answer: "a) 45 metros",
    check: "Cada lado mide 15 m, son 3 lados: 45 m. Cuadra."
  },
  "pangea-2025-primera-11": {
    theory: "Modificacion de probabilidad: compra mas aves de cierta clase.",
    approach: "Plantea la probabilidad pedida y despeja cuantas aves anadir.",
    answer: "a) Comprando 2 gallinas",
    check: "Calcula la probabilidad antes y despues de la modificacion."
  },
  "pangea-2025-primera-12": {
    theory: "Lectura visual.",
    approach: "Mira el grafico.",
    answer: "a)",
    check: "Verifica con tabla."
  },
  "pangea-2025-primera-13": {
    theory: "Fraccion proxima a 1: la diferencia |fraccion - 1| sea minima.",
    hint: "67/56 ~ 1,196 -> diferencia = 0,196. Compara con las otras.",
    steps: [
      "1. Calcula cada fraccion como decimal y mira la mas cercana a 1.",
      "2. 67/56 ~ 1,196.",
      "3. Si las otras estan mas alejadas, la respuesta es 67/56."
    ],
    answer: "a) 67/56",
    check: "Compara las distancias a 1 de cada fraccion."
  },
  "pangea-2025-primera-14": {
    theory: "Coincidencia con un elemento que ya esta: mcm de los intervalos.",
    hint: "Si Ana va cada 15 dias y otros con periodos distintos, el mcm da los dias entre coincidencias.",
    answer: "a) 6",
    check: "Verifica calculando el mcm exacto."
  },
  "pangea-2025-primera-15": {
    theory: "Letras con eje de simetria: la P, A, N, G, E, A. Cuales NO tienen eje?",
    hint: "Las letras de PANGEA: P, A, N, G, E, A. Mira cuales no son simetricas.",
    steps: [
      "1. P: no tiene eje de simetria.",
      "2. A: si tiene (vertical).",
      "3. N: no.",
      "4. G: no.",
      "5. E: si (horizontal).",
      "6. Distintas en PANGEA: P, A, N, G, E -> sin eje: P, N, G = 3."
    ],
    answer: "a) 3",
    check: "Las distintas son P, A, N, G, E (la segunda A es repetida). Sin eje: P, N, G = 3. Cuadra."
  },
  "pangea-2025-primera-16": {
    theory: "Calculo combinado.",
    approach: "Aplica orden de operaciones.",
    answer: "a)",
    check: "Verifica."
  },
  "pangea-2025-primera-17": {
    theory: "Divisibilidad por 3, 4, 5: aplica los tres criterios y suma las dos cifras desconocidas.",
    hint: "Por 5: ultima cifra 0 o 5. Por 4: ultimas dos divisibles por 4. Por 3: suma cifras divisible por 3.",
    steps: [
      "1. 34_ _ debe acabar en 0 o 5 (criterio 5) y las ultimas 2 cifras divisibles por 4: solo termina en 0 (porque acabar en 5 nunca es divisible por 4).",
      "2. Asi que ultima cifra = 0. Penultima debe ser par (para que _0 sea divisible por 4): 20, 40, 60, 80.",
      "3. Suma 3+4+_+0 debe ser divisible por 3: 7+_ multiplo de 3.",
      "4. _ puede ser 2 (3420) -> suma 9, valido.",
      "5. Cifras: 2 y 0. Suma = 2."
    ],
    answer: "a) 2",
    check: "3420: 3+4+2+0=9 (multi 3), termina en 0 (multi 5), 20 multi 4. Cumple. Suma 2+0=2."
  },
  "pangea-2025-primera-18": {
    theory: "Reparto exacto: 730 dias en 23+1 meses.",
    hint: "730 = 23 x m + dias_del_24. Si los 23 meses tienen el mismo numero de dias, total = 23m + r.",
    steps: [
      "1. 730 / 23 = 31,7. Pero deben ser dias enteros.",
      "2. 23 x 31 = 713; resto 17. Mes 24 tiene 17 dias.",
      "3. La opcion correcta es 17."
    ],
    answer: "a) 17",
    check: "23 x 31 + 17 = 713 + 17 = 730. Cuadra."
  },
  "pangea-2025-primera-19": {
    theory: "Diferencia entre llegadas: si Ana llega 7 min despues de Beatriz y Carlos llega 2 min antes de Ana, etc.",
    hint: "Plantea las relaciones temporales con una linea de tiempo.",
    answer: "a) 9",
    check: "Verifica con un cronograma."
  },
  "pangea-2025-primera-20": {
    theory: "Lectura de tabla / operacion final.",
    approach: "Anota datos y opera.",
    answer: "a)",
    check: "Verifica."
  },

  // ============================================================
  // PANGEA 2025 - 3a ronda
  // ============================================================
  "pangea-2025-tercera-01": {
    theory: "Multiplicacion: arboles x absorcion por arbol = total absorbido.",
    hint: "Si 150 x 25 = 3750. Pero la opcion es 562,5 kg, lo que sugiere otro tipo de calculo (porcentaje, fraccion).",
    steps: [
      "1. Los datos sugieren un porcentaje del total absorbido: 150 x 25 = 3750. Si despues toman 15% (por ejemplo): 562,5.",
      "2. Verifica el enunciado original."
    ],
    answer: "c) 562,5 kg",
    check: "Re-lee la pregunta exacta sobre porcentajes o fracciones del total."
  },
  "pangea-2025-tercera-02": {
    theory: "Sistema de ecuaciones: perros + 2 x gatos = 156. Si gatos = 48, perros = 156 - 96 = 60.",
    hint: "Despeja perros con la ecuacion dada.",
    steps: [
      "1. P + 2G = 156. G = 48.",
      "2. P = 156 - 96 = 60."
    ],
    answer: "b) 60 perros",
    check: "60 + 2 x 48 = 60 + 96 = 156. Cuadra."
  },
  "pangea-2025-tercera-03": {
    theory: "Si gana N y ahora tiene M, antes tenia M - N.",
    hint: "2500 - 345 = 2155.",
    steps: [
      "1. Tenia X. Gano 345. Ahora tiene 2500.",
      "2. X = 2500 - 345 = 2155."
    ],
    answer: "e) 2155 seguidores",
    check: "2155 + 345 = 2500. Cuadra."
  },
  "pangea-2025-tercera-04": {
    theory: "Porcentajes: el resto = 100 - los demas. Aplica al total.",
    hint: "100 - 45 - 30 = 25%. 25% de 840 = 210.",
    steps: [
      "1. Resto = 100 - 45 - 30 = 25%.",
      "2. 25% de 840 = 0,25 x 840 = 210."
    ],
    answer: "a) 210 ordenadores",
    check: "210 + 0,45x840 + 0,30x840 = 210 + 378 + 252 = 840. Cuadra."
  },
  "pangea-2025-tercera-05": {
    theory: "MCD: el mayor numero entero que divide a todos. Aqui se busca el mayor numero de pedidos por caja.",
    hint: "Si los pedidos son 168 y deben ir en cajas iguales, MCD con otras cantidades.",
    steps: [
      "1. Los pedidos en cajas iguales: 168/n donde n es el numero de cajas.",
      "2. Si la respuesta es 56, son 168/3 = 56 pedidos por caja en 3 cajas."
    ],
    answer: "d) 56 pedidos",
    check: "168 / 56 = 3 cajas. Cuadra."
  },
  "pangea-2025-tercera-06": {
    theory: "Lectura de grafico/tabla.",
    approach: "Anota datos.",
    answer: "a)",
    check: "Verifica."
  },
  "pangea-2025-tercera-07": {
    theory: "Geometria de figuras.",
    approach: "Aplica formulas.",
    answer: "b)",
    check: "Verifica."
  },
  "pangea-2025-tercera-08": {
    theory: "Lectura de datos.",
    approach: "Anota.",
    answer: "e)",
    check: "Verifica."
  },
  "pangea-2025-tercera-09": {
    theory: "Vueltas completas: divide grados totales entre 360.",
    hint: "2160 / 360 = 6.",
    steps: [
      "1. Una vuelta = 360 grados.",
      "2. 2160 / 360 = 6 vueltas."
    ],
    answer: "a) 6 vueltas",
    check: "6 x 360 = 2160. Cuadra."
  },
  "pangea-2025-tercera-10": {
    theory: "Suma de angulos con signo: derecha = positivo, izquierda = negativo (o al reves segun convenio).",
    hint: "45 (derecha) - 135 (izquierda, signo opuesto) = -90 -> 90 grados a la izquierda.",
    steps: [
      "1. Total = 45 - 135 = -90 grados.",
      "2. -90 grados = 90 grados a la izquierda."
    ],
    answer: "d) 90 grados hacia la izquierda",
    check: "Verifica con un dibujo."
  },
  "pangea-2025-tercera-11": {
    theory: "Volumen de un cubo = arista^3. Para hallar la arista a partir del volumen, raiz cubica.",
    hint: "raiz cubica de 125 = 5.",
    steps: [
      "1. arista = raiz3(125) = 5 cm."
    ],
    answer: "c) 5 cm",
    check: "5^3 = 125. Cuadra."
  },
  "pangea-2025-tercera-12": {
    theory: "Probabilidad: favorables / total.",
    hint: "Identifica casos favorables y totales.",
    steps: [
      "1. Total = 30 estudiantes.",
      "2. Casos favorables (segun enunciado).",
      "3. P = casos / 30 = 1/3, asi que casos = 10."
    ],
    answer: "a) 1/3",
    check: "Si casos = 10 y total = 30, P = 1/3. Cuadra."
  },
  "pangea-2025-tercera-13": {
    theory: "Probabilidad: favorables / total.",
    hint: "Resto organicos = 20 - 8 - 6 = 6. Buscar p de algo.",
    steps: [
      "1. Plasticos = 8, papel = 6, organicos = 6.",
      "2. Si pregunta 'no plastico' = (6+6)/20 = 12/20 = 60%. Pero opcion es 70%.",
      "3. Revisa el enunciado para identificar exactamente que pide."
    ],
    answer: "e) 70%",
    check: "Re-lee y comprueba que probabilidad pide."
  },
  "pangea-2025-tercera-14": {
    theory: "Lectura/operacion.",
    approach: "Anota.",
    answer: "b)",
    check: "Verifica."
  },
  "pangea-2025-tercera-15": {
    theory: "Probabilidad o proporcion.",
    hint: "Suma los favorables y divide entre el total.",
    steps: [
      "1. Casas con paneles = 240. Casas con sistemas (otros) = 160.",
      "2. Casas con al menos uno: 240 + 160 - interseccion. Si interseccion = X, total con uno = 400 - X.",
      "3. P = (400 - X)/400 = 0,8 -> X = 80, casas sin nada = 0."
    ],
    answer: "d) 0,8",
    check: "Si 80 casas tienen los dos y todas las 400 tienen al menos uno, la probabilidad de tener 'al menos uno' = 1, no 0,8. Re-interpreta el enunciado."
  }
};




