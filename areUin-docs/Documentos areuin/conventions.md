_Naming Conventions_

Revelar intencion
Eliminar ambiguedad
Clases -> Sustantivos.
Metodos -> Verbos
Constructores estaticos permiten revelar informacion de los inputs (no hace falta gracias a IDES y editores de texto).
Se pueden renombrar las cosas

Si hay mas de un bloque de codigo dentro de un objeto, se debe colocar un enter debajo de la definicion del objeto. Si hay un solo bloque de codigo dentro de un objeto puede seguir la firma del objeto.

create se debe utilizar para constituir una istancia de una entidad
save se debe utilizar para guardar una entidad previamente constituida en la bd.

limite de archivos por carpeta: 8

Non-exported objects and types in modules can be named very simply and use context to describe.
Exported objects and types must contain the must inmediate context.

Si el ticket no lleva referencia del torneo al que pertenece, 

"Excel is the most popular functional language" Simon Peyton-Jones.

Se recomienda importar los settings de visual studio code.
Debe colocarse espacio en entre cada unidad de codigo. 
Nota: las funciones tienen esta estructura: sampleFunction<Tparams>(params: Params) {}
La identacion debe ser de dos espacios

Los archivos deben nombrase, describiendo su contexto de mas alto nivel. Si es un archivo que define una sola clase, normalmente debe nombrarse con el nombre de la clase.
En el nombre de la clase en caso de extender otra clase debe se debe incluir esta ultima.
Los archivos .ts deben empezar con mayuscula.

Types and Interfaces
Dado que las diferencias entre types e interfaces en las ultimas versiones de typescript son minimas (Una de las unicas diferencias en la version actual es que las interfaces se pueden definir en multiples pasos y los types tienen que tener una sola definicion) se va a usar la convencion de que los metodos publicos de las clases se van a definir con interfaces y las propiedes/atributos publicos de una clase se van a definir con types.

Acerca del codigo que se suba a cualquier rama:
Los comentarios estan deben estar limitados al absoluto minimo necesario.
Esta prohibido el codigo comentado en las ramas develop, staging y produccion.

Guidelines:

Hacer commit con frecuencia para poder identificar lo archivos que se van modificando. El mensaje del commit deberia incluir los archivos que se modificaron y en el caso que exista, el proposito con el cual se modificaron.

In recent years I begin, and nearly end, with Beck's rules of simple code. In priority order, simple code:

- Runs all the tests;
- Contains no duplication;
- Expresses all the design ideas that are in the system;
- Minimizes the number of entities such as classes, methods, functions, and the like.

Metodos usados por la clase primero.
Metodos usados por metodos van despues de ser nombrados.
No permitir metodos con side effects. La firma del metodo debe explicar el proposito completo.

Al crear DomainEntities o aggregateRoots si se coloca id se reconstituye el entity. Si no se coloca id se crea un nuevo entity. Esto permite ademas verificar al momento de creacion si la entidad es nueva o no.

Usar useCases en lugar de Domain Services agrega un poquito de intencion en el sentido de los useCases.

Como hacer las cosas?

5S
Seiri (Sort). Naming
Seiton (Systematize). A place for everything and everything in its place.
Seiso (Shine). Lo que no se usa AHORA, a la basura.
Seiketsu (Standarization). Procedimientos y estilo de codigo.
Shutsuke (Self-Disclipine). Hacer lo que hay que hacer, como hay que hacerlo, cuando hay que hacerlo.

Objetivo. Generarle valor al usuario.

Funciones y metodos van de mas generales a mas especificas.

Procedural

public class Square {
public topLeft: Point;
public side: number;
}

public class Circule {
public center: Point;
public radius: number
}

public class Geometry {
public readonly PI = 3.141592653589793;

public area(shape: Circle | Square) {
if(shape instanceof Circle) {
//Calculate circle area
} else if(shape instanceof Square) {
//Calculate square area
}
}
}

OO
public interface Shape {
public area()
}

public class Square implements Shape {
public topLeft: Point;
public side: number;

public area(){
return this.side \*\* 2
}
}

public class Circle implements Shape {
public center: Point;
public radius: number;

public area() {
return PI \* this.radius \*\* 2
}
}

Procedural code (code using data structures) makes it easy to add new functions without changing the existing data structures. OO code, on the other hand, makes it easy to add new classes without changing existing functions.

Procedural code makes it hard to add new data structures because all the functions must change. OO makes it hard to add new functions because all the classes must change.

Class Example

Class ClassExample {

public static publicAndStaticVariable1
public static publicAndStaticVariable2

private static privateAndStaticVariable1
private static privateAndStaticVariable2

private privateVariable1
private privateVariable2

public publicFunction1() {}
public publicFunction2() {}

private privateFunction1() {}
private privateFunction2() {}
}

Single Responsability
Only one reason to change

Cohesion
max cohesion, all methods use all variables.
When variables are using a subset of methods its a hint for a subclass.

Dependency Inversion
Classes should depend con abstractions not on concrete details.
(Flechas de uml apuntan a la interface)

Usar forEach y map deberia estar preferido a for o whiles

Esto es importante: El juicio individual debe ser mas importante que las convenciones. El objetivo principal es satisfacer al cliente.

Command Query Segregation se va a usar a nivel de useCases. Command modifica pero no retorna data, query pide datos y no modifica a nadie.

CQRS Command Query Responsability segregation incluye separacion de bases de datos para querries y para commands.
