
import React from 'react';
import type { Lesson, SetupGuideContent, TriviaQuestion, GlossaryTerm } from './types.ts';

// SVG Icons
const AnacondaIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Z"/><path d="M128 56a72 72 0 1 0 72 72a72.08 72.08 0 0 0-72-72Zm0 128a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56Z"/><path d="M128 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40Zm0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24Z"/></svg>
);

const VscodeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M23.12,9.91,18.36,5.15a2.53,2.53,0,0,0-3.58,0L12.94,7a.5.5,0,0,1-.71,0L10.39,5.15a2.53,2.53,0,0,0-3.58,0L2.09,9.91a2.53,2.53,0,0,0,0,3.58L4.6,16H4.53l-3.2,3.2a.74.74,0,0,0,0,1.05l1.05,1.05a.74.74,0,0,0,1.05,0L6.6,18.33V18.3l11.8,0L21.57,21.5a.74.74,0,0,0,1.05,0l1.05-1.05a.74.74,0,0,0,0-1.05L20.47,16h-.07l2.51-2.51A2.53,2.53,0,0,0,23.12,9.91ZM19.42,15,6.88,15l-4-4L7.6,6.29l2.08,2.08a2.1,2.1,0,0,0,2.9,0l2.08-2.08L19.42,11Z"/></svg>
);

export const ClipboardIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a2.25 2.25 0 0 1-2.25 2.25h-1.5a2.25 2.25 0 0 1-2.25-2.25v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
    </svg>
);

export const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
);


// Content for the setup guide
export const SETUP_GUIDE: SetupGuideContent = {
  title: "Herramientas que Necesitarás",
  description: "Antes de empezar a programar, necesitas preparar tu entorno de desarrollo. Usaremos Anaconda para gestionar Python y sus paquetes, y Visual Studio Code como nuestro editor de código. Esta combinación es potente, popular y muy recomendada tanto para principiantes como para profesionales.",
  tools: [
    {
      name: "Anaconda",
      icon: <AnacondaIcon className="w-8 h-8 text-green-400" />,
      description: "Anaconda es una distribución de Python que simplifica la gestión de paquetes y entornos. Instala Python y cientos de librerías científicas populares de una sola vez, evitando problemas de compatibilidad."
    },
    {
      name: "Visual Studio Code",
      icon: <VscodeIcon className="w-8 h-8 text-blue-500" />,
      description: "VS Code es un editor de código ligero pero potente. Con miles de extensiones, puedes personalizarlo para casi cualquier lenguaje. Su extensión de Python de Microsoft ofrece autocompletado, depuración y mucho más."
    }
  ],
  steps: [
    {
      title: "Paso 1: Instalar Anaconda",
      description: "Sigue estos pasos para tener Python listo en tu sistema.",
      points: [
        "Ve a la página de descargas de Anaconda: anaconda.com/products/distribution",
        "Descarga el instalador para tu sistema operativo (Windows, macOS o Linux).",
        "Ejecuta el instalador y sigue las instrucciones. Acepta las opciones por defecto, especialmente la de añadir Anaconda al PATH de tu sistema si te lo pregunta (aunque a veces no lo recomiendan, para empezar es más fácil)."
      ]
    },
    {
      title: "Paso 2: Instalar Visual Studio Code y la Extensión de Python",
      description: "Ahora configuremos nuestro editor de código.",
      points: [
        "Ve a la página oficial: code.visualstudio.com y descarga el instalador.",
        "Instala VS Code siguiendo las instrucciones.",
        "Abre VS Code, ve a la pestaña de Extensiones (el icono de los cubos en la barra lateral izquierda).",
        "Busca \"Python\" y instala la extensión oficial publicada por Microsoft. Esto te dará superpoderes para programar en Python."
      ]
    },
    {
      title: "Paso 3: Primeros Pasos",
      description: "¡Felicidades! Tu entorno de desarrollo está listo. Ahora estás a solo unos momentos de escribir tu primer programa en Python. Sigue estas instrucciones para empezar:",
      points: [
        "Crea una nueva carpeta en tu escritorio o documentos. Puedes llamarla 'PythonQuest'.",
        "Abre VS Code. Ve a 'Archivo' > 'Abrir Carpeta...' y selecciona la carpeta que acabas de crear.",
        "En la barra lateral izquierda de VS Code (el Explorador), haz clic derecho y selecciona 'Nuevo Archivo'.",
        "Nombra al archivo `dia1.py`. La extensión `.py` es crucial, le dice a VS Code que es un archivo de Python.",
        "¡Ya está todo listo! Ahora puedes ir a la lección del 'Día 1', copiar los ejemplos de código en tu archivo `dia1.py` y ejecutarlos para ver la magia suceder."
      ]
    }
  ]
};

// Content for each lesson day
export const LESSONS: Lesson[] = [
  {
    day: 1,
    title: "¡Hola, Mundo! - Variables y Tipos de Datos",
    description: "Hoy empezarás con lo más básico: cómo dar tus primeras instrucciones en Python y cómo guardar información.",
    concepts: [
      { title: "La función print()", description: "Se usa para mostrar mensajes en la consola." },
      { title: "Comentarios", description: "Notas en el código que Python ignora, marcadas con #." },
      { title: "Variables", description: "\"Cajas\" donde guardas información." },
      { title: "Tipos de Datos Básicos", description: "string (texto), int (enteros), float (decimales)." },
      { title: "La función input()", description: "Permite al usuario introducir datos." },
    ],
    codeExplained: {
      title: "Código Explicado",
      code: {
        code: `# Esto es un comentario. Sirve para explicar el código y Python no lo ejecuta.

# 1. La función print() muestra un mensaje en la pantalla.
print("¡Hola, mundo!")

# 2. Las variables guardan datos. A la variable 'nombre' le asignamos el texto "Ana".
nombre = "Ana"
edad = 25
altura = 1.75

# 3. Podemos imprimir el contenido de las variables.
print("Mi nombre es:", nombre)
print("Tengo", edad, "años y mido", altura, "metros.")

# 4. La función input() recoge lo que el usuario escribe y lo guarda como texto.
nombre_usuario = input("¿Cuál es tu nombre? ")
print("¡Hola,", nombre_usuario, "!")`
      }
    },
    exercise: {
      title: "Ejercicio Práctico",
      description: "Crea un programa que le pida al usuario su nombre, su edad y su ciudad. Luego, debe mostrar un mensaje de bienvenida con toda esa información."
    },
    solution: {
      title: "Solución y Explicación",
      code: {
        code: `# Pedimos al usuario que introduzca su nombre y lo guardamos en una variable.
nombre = input("Introduce tu nombre: ")

# Hacemos lo mismo con la edad.
edad = input("Introduce tu edad: ")

# Y también con la ciudad.
ciudad = input("¿En qué ciudad vives? ")

# Mostramos un mensaje de bienvenida usando los datos que el usuario nos ha dado.
print("¡Bienvenido,", nombre, "!")
print("Veo que tienes", edad, "años y vives en", ciudad, ".")`
      }
    }
  },
  {
    day: 2,
    title: "Operaciones y Textos",
    description: "Hoy aprenderás a realizar cálculos matemáticos y a manipular cadenas de texto.",
    concepts: [
      { title: "Operadores Aritméticos", description: "+ (suma), - (resta), * (multiplicación), / (división)." },
      { title: "Conversión de tipos", description: "Cambiar un tipo de dato a otro (ej. de texto a número con int() o float())." },
      { title: "Operadores de Cadenas", description: "+ (unir textos) y * (repetir un texto)." },
      { title: "F-strings", description: "Una forma moderna y fácil de incluir variables dentro de un texto." }
    ],
    codeExplained: {
      title: "Código Explicado",
      code: {
        code: `# 1. Operadores aritméticos
numero1 = 10
numero2 = 5
print("Suma:", numero1 + numero2)
print("Resta:", numero1 - numero2)
print("Multiplicación:", numero1 * numero2)
print("División:", numero1 / numero2)

# 2. Conversión de tipos. input() siempre devuelve texto.
# Para hacer cálculos, debemos convertir el texto a número.
edad_texto = input("¿Cuántos años tienes? ")
edad_numero = int(edad_texto) # Convertimos el texto a un número entero.
print("El año que viene tendrás", edad_numero + 1, "años.")

# 3. f-strings para formatear texto. Se pone una 'f' antes de las comillas.
nombre = "Carlos"
edad = 30
# Es más fácil que usar comas o el símbolo de suma.
print(f"Hola, me llamo {nombre} y tengo {edad} años.")`
      }
    },
    exercise: {
      title: "Ejercicio Práctico",
      description: "Crea una calculadora simple que pida al usuario dos números, los sume, reste, multiplique y divida, y muestre los resultados de una forma clara."
    },
    solution: {
      title: "Solución y Explicación",
      code: {
        code: `# Pedimos el primer número al usuario.
num1_texto = input("Introduce el primer número: ")
# Pedimos el segundo número.
num2_texto = input("Introduce el segundo número: ")

# Convertimos los textos a números decimales para poder operar con ellos.
num1 = float(num1_texto)
num2 = float(num2_texto)

# Realizamos las operaciones y las guardamos en variables.
suma = num1 + num2
resta = num1 - num2
multiplicacion = num1 * num2
division = num1 / num2

# Usamos f-strings para mostrar los resultados de forma ordenada.
print(f"La suma de {num1} y {num2} es: {suma}")
print(f"La resta de {num1} y {num2} es: {resta}")
print(f"La multiplicación de {num1} y {num2} es: {multiplicacion}")
print(f"La división de {num1} y {num2} es: {division}")`
      }
    }
  },
  {
    day: 3,
    title: "Tomando Decisiones con if",
    description: "Aprenderás a hacer que tu programa tome decisiones y ejecute un código u otro dependiendo de ciertas condiciones.",
    concepts: [
      { title: "Booleanos", description: "Un tipo de dato que solo puede ser True (verdadero) o False (falso)." },
      { title: "Operadores de Comparación", description: "==, !=, <, >, <=, >=" },
      { title: "Sentencia if, elif, else", description: "Permiten ejecutar bloques de código solo si se cumple una condición." }
    ],
    codeExplained: {
      title: "Código Explicado",
      code: {
        code: `# La indentación (el espacio al principio de la línea) es MUY importante en Python.
# Define qué código pertenece al if, elif o else.

edad = int(input("Introduce tu edad: "))

# Si la edad es mayor o igual a 18, se ejecuta este bloque.
if edad >= 18:
    print("Eres mayor de edad.")
# Si la primera condición no se cumple, comprueba esta otra.
elif edad > 0:
    print("Eres menor de edad.")
# Si ninguna de las condiciones anteriores se cumple, se ejecuta este bloque.
else:
    print("La edad no puede ser negativa.")`
      }
    },
    exercise: {
      title: "Ejercicio Práctico",
      description: "Escribe un programa que pida una nota del 0 al 10 y diga si es \"Suspenso\" (menos de 5), \"Aprobado\" (entre 5 y 6), \"Notable\" (entre 7 y 8) o \"Sobresaliente\" (9 o 10)."
    },
    solution: {
      title: "Solución y Explicación",
      code: {
        code: `# Pedimos la nota y la convertimos a número.
nota = float(input("Introduce tu nota (de 0 a 10): "))

# Comprobamos las condiciones en orden.
if nota >= 9 and nota <= 10:
    print("¡Sobresaliente!")
elif nota >= 7:
    print("Notable.")
elif nota >= 5:
    print("Aprobado.")
elif nota >= 0:
    print("Suspenso.")
else:
    # Este 'else' captura cualquier valor que no esté en el rango esperado.
    print("Nota no válida.")`
      }
    }
  },
  {
    day: 4,
    title: "Repitiendo Tareas con Bucles",
    description: "Hoy verás cómo repetir una acción varias veces sin tener que escribir el mismo código una y otra vez.",
    concepts: [
      { title: "Bucle for", description: "Repite un bloque de código un número determinado de veces." },
      { title: "Bucle while", description: "Repite un bloque de código mientras una condición sea verdadera." }
    ],
    codeExplained: {
      title: "Código Explicado",
      code: {
        code: `# 1. Bucle 'for'. La función range(5) genera números del 0 al 4.
print("Inicio del bucle for:")
for i in range(5):
    print(f"Esta es la repetición número {i}")

# 2. Bucle 'while'.
print("\\nInicio del bucle while:")
contador = 0
while contador < 5:
    print(f"El contador vale {contador}")
    contador = contador + 1 # ¡Importante! Hay que cambiar la condición para que el bucle no sea infinito.`
      }
    },
    exercise: {
      title: "Ejercicio Práctico",
      description: "Crea un programa que muestre la tabla de multiplicar del número que elija el usuario. Por ejemplo, si elige el 7, debe mostrar \"7x1=7\", \"7x2=14\", etc., hasta el 10."
    },
    solution: {
      title: "Solución y Explicación",
      code: {
        code: `# Pedimos al usuario el número para la tabla.
numero = int(input("Introduce un número para ver su tabla de multiplicar: "))

print(f"--- Tabla del {numero} ---")

# El bucle 'for' se repetirá para cada número del 1 al 10.
# range(1, 11) genera números desde el 1 hasta el 10 (el 11 no se incluye).
for i in range(1, 11):
    # Calculamos el resultado.
    resultado = numero * i
    # Mostramos la línea de la tabla.
    print(f"{numero} x {i} = {resultado}")`
      }
    }
  },
  {
    day: 5,
    title: "Colecciones de Datos - Listas",
    description: "Aprenderás a guardar múltiples elementos en una sola variable usando listas.",
    concepts: [
      { title: "Listas", description: "Colecciones ordenadas y modificables de elementos. Se crean con corchetes []." },
      { title: "Índices", description: "La posición de un elemento en una lista (empieza en 0)." },
      { title: "Métodos de listas", description: "Acciones como append() (añadir al final) o pop() (eliminar)." },
      { title: "Recorrer listas con for", description: "Para ejecutar una acción en cada elemento de la lista." }
    ],
    codeExplained: {
      title: "Código Explicado",
      code: {
        code: `# 1. Creamos una lista de compras.
compras = ["leche", "pan", "huevos"]
print("Lista inicial:", compras)

# 2. Accedemos a un elemento por su índice. El primer elemento es el 0.
print("El primer elemento es:", compras[0])

# 3. Añadimos un elemento al final de la lista.
compras.append("fruta")
print("Lista después de añadir 'fruta':", compras)

# 4. Recorremos la lista e imprimimos cada elemento.
print("\\nRecorriendo la lista:")
for producto in compras:
    print("-", producto)`
      }
    },
    exercise: {
      title: "Ejercicio Práctico",
      description: "Crea un programa que funcione como una lista de tareas. El usuario debe poder: Añadir una tarea a la lista, ver todas las tareas y salir del programa."
    },
    solution: {
      title: "Solución y Explicación",
      code: {
        code: `# Creamos una lista vacía para guardar las tareas.
tareas = []

# Usamos un bucle 'while True' para que el programa se ejecute hasta que decidamos salir.
while True:
    print("\\n--- MENÚ ---")
    print("1. Añadir tarea")
    print("2. Ver tareas")
    print("3. Salir")
    opcion = input("Elige una opción: ")

    if opcion == "1":
        # Pedimos la nueva tarea y la añadimos a la lista.
        nueva_tarea = input("Escribe la nueva tarea: ")
        tareas.append(nueva_tarea)
        print("¡Tarea añadida!")
    elif opcion == "2":
        print("\\n--- TUS TAREAS ---")
        # Recorremos la lista y mostramos cada tarea.
        for tarea in tareas:
            print("- " + tarea)
    elif opcion == "3":
        # Rompemos el bucle infinito para salir del programa.
        print("¡Hasta luego!")
        break
    else:
        print("Opción no válida. Inténtalo de nuevo.")`
      }
    }
  },
  {
    day: 6,
    title: "Colecciones de Datos - Diccionarios",
    description: "Verás otra forma de guardar datos, esta vez con una estructura de \"clave-valor\".",
    concepts: [
      { title: "Diccionarios", description: "Colecciones no ordenadas de pares clave: valor. Se crean con llaves {}." },
      { title: "Acceder a valores", description: "Se hace a través de su clave." }
    ],
    codeExplained: {
      title: "Código Explicado",
      code: {
        code: `# 1. Creamos un diccionario para guardar información de una persona.
# La clave es el tipo de dato (ej: "nombre") y el valor es el dato en sí (ej: "Elena").
persona = {
    "nombre": "Elena",
    "edad": 28,
    "ciudad": "Valencia"
}
print("Diccionario:", persona)

# 2. Accedemos al valor asociado a una clave.
print("El nombre de la persona es:", persona["nombre"])

# 3. Añadimos un nuevo par clave-valor.
persona["profesion"] = "programadora"
print("Diccionario actualizado:", persona)

# 4. Recorrer un diccionario.
print("\\nDatos de la persona:")
for clave, valor in persona.items():
    print(f"- {clave}: {valor}")`
      }
    },
    exercise: {
      title: "Ejercicio Práctico",
      description: "Crea un programa que almacene información sobre un producto (nombre, precio, cantidad). El programa debe pedir al usuario estos datos, guardarlos en un diccionario y luego mostrarlos de forma ordenada."
    },
    solution: {
      title: "Solución y Explicación",
      code: {
        code: `# Creamos un diccionario vacío.
producto = {}

# Pedimos los datos al usuario y los asignamos a las claves del diccionario.
producto["nombre"] = input("Introduce el nombre del producto: ")
producto["precio"] = float(input("Introduce el precio: "))
producto["cantidad"] = int(input("Introduce la cantidad disponible: "))

print("\\n--- FICHA DEL PRODUCTO ---")
# Mostramos los datos que hemos guardado en el diccionario.
print(f"Nombre: {producto['nombre']}")
print(f"Precio: \${producto['precio']}")
print(f"Cantidad: {producto['cantidad']} unidades")`
      }
    }
  },
  {
    day: 7,
    title: "Organizando el Código con Funciones",
    description: "Aprenderás a agrupar bloques de código en funciones para poder reutilizarlos y hacer tu programa más ordenado y legible.",
    concepts: [
      { title: "Funciones", description: "Bloques de código con un nombre que realizan una tarea específica. Se definen con def." },
      { title: "Parámetros", description: "Información que le pasas a una función para que trabaje con ella." },
      { title: "return", description: "La instrucción que usan las funciones para devolver un resultado." }
    ],
    codeExplained: {
      title: "Código Explicado",
      code: {
        code: `# 1. Definimos una función simple que no necesita parámetros.
def saludar():
    print("¡Hola! Bienvenido a las funciones.")

# 2. Definimos una función que acepta un parámetro.
def saludar_a(nombre):
    print(f"¡Hola, {nombre}!")

# 3. Definimos una función que calcula algo y devuelve un resultado.
def sumar(a, b):
    resultado = a + b
    return resultado

# --- Ahora llamamos a las funciones para que se ejecuten ---
saludar()
saludar_a("Marta")

# Guardamos el resultado de la función 'sumar' en una variable.
resultado_suma = sumar(10, 5)
print("El resultado de la suma es:", resultado_suma)`
      }
    },
    exercise: {
      title: "Ejercicio Práctico",
      description: "Convierte la calculadora del Día 2 en una serie de funciones. Crea una función para sumar, otra para restar, etc. El programa principal debe pedir los números al usuario y luego llamar a estas funciones para mostrar los resultados."
    },
    solution: {
      title: "Solución y Explicación",
      code: {
        code: `# Definimos una función para cada operación matemática.
# Cada función recibe dos números como parámetros y devuelve el resultado.
def sumar(num1, num2):
    return num1 + num2

def restar(num1, num2):
    return num1 - num2

def multiplicar(num1, num2):
    return num1 * num2

def dividir(num1, num2):
    # Comprobamos que no se divida por cero.
    if num2 == 0:
        return "Error: No se puede dividir por cero."
    else:
        return num1 / num2

# --- Programa Principal ---
# Pedimos los números al usuario.
n1 = float(input("Introduce el primer número: "))
n2 = float(input("Introduce el segundo número: "))

# Llamamos a cada función con los números del usuario y mostramos el resultado.
print(f"Suma: {sumar(n1, n2)}")
print(f"Resta: {restar(n1, n2)}")
print(f"Multiplicación: {multiplicar(n1, n2)}")
print(f"División: {dividir(n1, n2)}")`
      }
    }
  }
];

export const TRIVIAS_DATA: { [key: number]: TriviaQuestion[] } = {
  1: [
    {
      question: "¿Para qué se utiliza la función `print()` en Python?",
      options: ["Para recibir datos del usuario", "Para mostrar mensajes en la consola", "Para guardar información en una variable", "Para escribir comentarios"],
      correctAnswerIndex: 1,
      explanation: "La función `print()` es fundamental para mostrar información, como texto o el valor de las variables, en la pantalla o consola."
    },
    {
      question: "¿Cuál de las siguientes es una variable con un nombre válido en Python?",
      options: ["2nd_name", "user-name", "user_name", "$user"],
      correctAnswerIndex: 2,
      explanation: "Los nombres de variables no pueden empezar con números y no pueden contener guiones ni otros símbolos especiales como '$'."
    },
    {
      question: "La función `input()` siempre devuelve los datos como un...",
      options: ["int (entero)", "string (texto)", "float (decimal)", "boolean (booleano)"],
      correctAnswerIndex: 1,
      explanation: "Incluso si el usuario introduce números, `input()` captura todo como una cadena de texto. Por eso se necesita convertir el tipo si quieres hacer operaciones matemáticas."
    }
  ],
  2: [
    {
      question: "¿Qué resultado da la expresión `'Python' + ' ' + 'es genial'`?",
      options: ["Error de sintaxis", "Python es genial", "'Python es genial'", "Nada, es una operación inválida"],
      correctAnswerIndex: 1,
      explanation: "El operador `+` se usa para concatenar (unir) cadenas de texto. Une las partes para formar una nueva cadena."
    },
    {
      question: "¿Cómo conviertes una cadena de texto `s = '10'` a un número entero?",
      options: ["`integer(s)`", "`s.to_int()`", "`int(s)`", "`convert.integer(s)`"],
      correctAnswerIndex: 2,
      explanation: "La función `int()` toma una cadena como argumento y trata de convertirla en un número entero."
    }
  ],
  3: [
    {
      question: "¿Qué operador se usa para comprobar si dos valores son exactamente iguales?",
      options: ["=", "==", "!=", "is"],
      correctAnswerIndex: 1,
      explanation: "El doble signo de igual `==` es el operador de comparación de igualdad, mientras que un solo `=` es para asignar un valor a una variable."
    },
    {
      question: "En una estructura `if-elif-else`, ¿cuándo se ejecuta el bloque `else`?",
      options: ["Siempre se ejecuta", "Solo si la condición del `if` es falsa", "Solo si todas las condiciones anteriores (`if` y `elif`) son falsas", "Solo si la condición del `elif` es verdadera"],
      correctAnswerIndex: 2,
      explanation: "El bloque `else` es la opción por defecto que se ejecuta únicamente si ninguna de las condiciones precedentes se cumple."
    }
  ],
  4: [
    {
      question: "¿Qué imprimirá el código `for i in range(3): print(i)`?",
      options: ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "1, 2"],
      correctAnswerIndex: 1,
      explanation: "`range(3)` genera una secuencia de números desde 0 hasta 2 (no incluye el 3). El bucle `for` itera sobre cada uno de estos números."
    },
    {
      question: "Un bucle `while` se repite mientras su condición sea...",
      options: ["`False`", "`True`", "Diferente de cero", "Una cadena de texto"],
      correctAnswerIndex: 1,
      explanation: "El bucle `while` continúa ejecutando su bloque de código una y otra vez siempre que la condición especificada evalúe como `True`."
    }
  ],
  5: [
    {
      question: "¿Cómo se accede al primer elemento de una lista llamada `mi_lista`?",
      options: ["`mi_lista[1]`", "`mi_lista.first()`", "`mi_lista[0]`", "`first(mi_lista)`"],
      correctAnswerIndex: 2,
      explanation: "La indexación en las listas de Python comienza en 0, por lo que el primer elemento siempre está en el índice 0."
    },
    {
      question: "¿Qué método se usa para añadir un elemento al final de una lista?",
      options: ["`.add()`", "`.push()`", "`.insert()`", "`.append()`"],
      correctAnswerIndex: 3,
      explanation: "El método `.append()` es la forma estándar de añadir un nuevo elemento al final de una lista existente."
    }
  ],
  6: [
    {
      question: "En un diccionario, los datos se almacenan como pares de...",
      options: ["índice y valor", "nombre y tipo", "clave y valor", "elemento y posición"],
      correctAnswerIndex: 2,
      explanation: "Los diccionarios son colecciones que asocian una `clave` única a un `valor` específico, permitiendo un acceso rápido a los datos a través de la clave."
    },
    {
      question: "Si `persona = {'nombre': 'Juan'}`, ¿cómo accedes al nombre?",
      options: ["`persona(0)`", "`persona['nombre']`", "`persona.nombre`", "`persona(nombre)`"],
      correctAnswerIndex: 1,
      explanation: "Se accede a los valores de un diccionario utilizando la clave correspondiente entre corchetes `[]`."
    }
  ],
  7: [
    {
      question: "¿Qué palabra clave se usa para definir una función en Python?",
      options: ["`function`", "`def`", "`fun`", "`define`"],
      correctAnswerIndex: 1,
      explanation: "La palabra clave `def` (de 'define') se utiliza para iniciar la definición de una nueva función."
    },
    {
      question: "¿Qué hace la instrucción `return` dentro de una función?",
      options: ["Imprime un valor en la pantalla", "Detiene la ejecución del programa", "Devuelve un valor que puede ser usado fuera de la función", "Reinicia la función"],
      correctAnswerIndex: 2,
      explanation: "`return` se usa para enviar un resultado o valor desde la función de vuelta al código que la llamó."
    }
  ]
};

export const GLOSSARY_DATA: GlossaryTerm[] = [
    {
        term: "Variable",
        definition: "Es un nombre simbólico que se asocia a un valor. Funciona como un contenedor para almacenar datos que pueden cambiar durante la ejecución de un programa.",
        example: `nombre = "Alice"\nedad = 30`
    },
    {
        term: "String (Cadena)",
        definition: "Un tipo de dato que representa una secuencia de caracteres (texto). En Python, se definen usando comillas simples ('') o dobles (\"\").",
        example: `saludo = "¡Hola, mundo!"`
    },
    {
        term: "Integer (Entero)",
        definition: "Un tipo de dato que representa números enteros, sin parte decimal.",
        example: `cantidad = 100`
    },
    {
        term: "Float (Flotante)",
        definition: "Un tipo de dato para representar números reales, es decir, números con punto decimal.",
        example: `precio = 19.99`
    },
    {
        term: "Boolean (Booleano)",
        definition: "Un tipo de dato que solo puede tener dos valores: `True` (verdadero) o `False` (falso). Se usa para la lógica condicional.",
        example: `es_mayor_de_edad = True`
    },
    {
        term: "Función",
        definition: "Un bloque de código organizado y reutilizable que realiza una tarea específica. Se define con `def` y se puede llamar por su nombre.",
        example: `def saludar(nombre):\n    print(f"Hola, {nombre}")`
    },
    {
        term: "Comentario",
        definition: "Texto en el código que el intérprete de Python ignora. Se usa para explicar el código y hacerlo más legible. Comienza con el símbolo `#`.",
        example: `# Esto es un comentario.`
    },
    {
        term: "Lista",
        definition: "Una colección ordenada y mutable (modificable) de elementos. Se define con corchetes `[]` y los elementos se separan por comas.",
        example: `compras = ["leche", "pan", 5]`
    },
    {
        term: "Diccionario",
        definition: "Una colección no ordenada de pares `clave:valor`. Son mutables y permiten un acceso muy rápido a los valores a través de sus claves. Se definen con llaves `{}`.",
        example: `persona = {"nombre": "Carlos", "edad": 42}`
    },
    {
        term: "Bucle (Loop)",
        definition: "Una estructura de control que repite un bloque de código. Los principales tipos son el bucle `for` (para iterar sobre una secuencia) y el bucle `while` (para repetir mientras una condición sea verdadera).",
        example: `for i in range(5):\n    print(i)`
    },
    {
        term: "Condicional (if/elif/else)",
        definition: "Una estructura de control que ejecuta diferentes bloques de código dependiendo de si una condición es verdadera o falsa.",
        example: `if edad >= 18:\n    print("Es mayor de edad.")\nelse:\n    print("Es menor de edad.")`
    },
    {
        term: "Módulo",
        definition: "Un archivo de Python (con extensión `.py`) que contiene definiciones y declaraciones. Permite organizar el código y reutilizarlo en otros programas mediante la instrucción `import`.",
        example: `import math\n\nprint(math.sqrt(16)) # Usa la función sqrt del módulo math`
    },
    {
        term: "Índice (Index)",
        definition: "La posición de un elemento en una secuencia ordenada como una lista o una cadena. La numeración de los índices en Python siempre comienza en 0.",
        example: `mi_lista = ["a", "b", "c"]\nprint(mi_lista[0]) # Imprime "a"`
    },
];