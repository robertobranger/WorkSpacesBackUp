Estos es el readme del repo general areuin. 

**Objetivo Principal**

# Generar continuamente sofware que le agregue valor al cliente areuin y atraiga nuevos.

**Objetivos especificos**

 Software tiene que ser extendible, escalable y robusto.

1. Todo el mundo debe conocer a fondo el dominio areuin.
1. Los repos deben ser la documentacion + un readme por repo.
1. Priorizar la calidad a largo plazo sobre el corto plazo y minimizar el retrabajo.
1. Refactorizacion y nuevos features
1. La deuda tecnica se debe mantener al minimo.

# Kaizen 

Mejora Continua

## 5S.
    - Seiri: Lean everything, no-extra components
    - Seiton: A place for everything and everything in its place. 
    - Seiso: Cero basura, identificar cosas fuera de lugar.
    - Seiketsu: Establecer procedimientos.
    - Shitsuke: Do what must be done.

NOTAS GENERALES

1. Garantizar al máximo que no hayan brincos, muchas veces estoy en el app y me vota para afuera. Tal y como comento Roberto en la reunion del lunes, este detalle es sumamente importante de cara a los inversionistas y usuarios del app. Tenemos que garantizar que esto no ocurra.

2. Revisar cada función que se haga de principio a fin. No solo desde la parte de atrás sino revisar como usuario como es el comportamiento. Somos un equipo pequeño y debemos garantizar todos los aspectos y detalles relacionados. Que la función sea lógica, que tenga un comienzo y un fin, revisar los textos asociados y notificar cuando algo no haga sentido.

3. Garantizar el funcionamiento de las actividades que vayamos terminando. Estamos por entrar en producción y hay que ver la forma de saber rápidamente cuando algo este caído. Ejemplo. El caso de los correos, del registro, etc.

4. Optimizar al máximo la aplicación. Hay lugares que esta tardando demasiado. Ejemplo: pronostico aleatorio. Tenemos que lograr que cada click sea instantáneo. Se que este punto esta considerado luego de finalizar la primera versión, pero hay que hacer todo para lograrlo lo antes posible.

5. No colocar diseños que no sean enviados por la gente de Diseño. Si hay algo que falta un diseño, un paso no contemplado o hasta un simple icono. Se debe solicitar el requerimiento a diseño

# APIs

La ruptura de contratos tiene que ser avisada. El restfull service es basado en los use cases como recursos. NO tratar de representar el dominio a traves del API

# Microservicios

Domain Driven Design no es especialmente compatible con microservicios. Los contratos entre microservicios deben ser backwardsCompatible, la menor cantidad y cambiar lo menos posible.
2 MICROSERVICIOS: servicio de Torneos areuin y servicio de transacciones.
Debe existir un formato de mensajes escricto y desde el principio.

Microservices tienen que conformar al formato de data de otro microservice o tienen que tener un anticorruption layer para poder manejar la data siempre.

2 Opciones:
 BusinessTransactionsService ---- conforms ---> gamesService
gamesService -----------------> anticorruptionLayer, BusinessTransactionsService

anticorruption layer es una puerta de preparacion y traduccion de data.
# API externos

## Clusterizacion

Objetivos: Ser capaz de manejar demanda elasticamente.
Objetivos: Lidiar con errors que tumben algun microservicio.


# Codigo fuente

Objetivos:
* Cada responsable de un repo debe mantener el readme de ese repo.
* El codigo fuente y el readme deben describir el dominio. No debe haber documentacion adicional.
* 
* Todo el Codigo debe estar en ingles

Implementacion:
* La simplicidad es clave para el entendimiento del codigo. (Discutir wet code)
* Los patrones y principios de disenho son herramientas para lograr el objetivo personal. 


## Errores y excepciones

https://codewithstyle.info/advanced-functional-programming-typescript-functional-exceptions/

~50%? del codigo debe ser manejando excepciones.

Errors = uncaughtException | externalCodeBaseException | internalCodeBaseException.

Cada accion tiene inicialmente una cantidad desconocida de errores. El objetivo es manejar todos los posibles errores que puedan ocurrir dando prioridad a los mas comunes, evitando que las librerias externas los manejen en lo posible.
Hay que buscar conseguir el 100 % de los errores relevantes del dominio. 
El objetivo es llevar las errores no manejados a 0 teniendo todas las exepciones especificadas.
Mientras mas subprocesos tiene una accion, mas dificil es de encontrar que sub-accion especifica causo la excepcion. 
La accion mas basica es prender el app, Prender el app tiene que tener excepcion. La siguiente es los controladores, todos tienen que tener manejo de excepciones, hacia adentro 
Las transacciones permiten revertir todos los procesos desde el inico de la transaccion cuando ocurre un error.

Los throws por no estar en la firma deben estar documentados por eso la necesidad de result class

Objetivo: No tener uncaughtExcepctions.
Objetivo: Priorizar el dominio para la definicion y manejo de errores.
Objetivo: Verificar data que entra al sistema.

Los uncaught exceptions pueden ensuciar el estado del app y del anmbiente y pueden causar al node hacer exit.

## Design Patterns

- Singleton
    - Early
    - Lazy
- Factory
    - Static Method
    - Factory Method
    - Abstract Factory
- Builder
- Strategy
- State
- Prototype

## Database Model

Mientras menos referencias entre tablas haya en la bd, mejor. Tener muchas referencias a un mismo objeto implicar encontrarlas todas y borrarlas cuando quieres borrar el objeto al que hacen referencia.

SQL es rapida para writes y data consistency. No-sql es rapida para reads con eventual consistency. El API de los juegos tiene muy pocos writes y MUCHOS reads, pareciera que lo ideal es noSQL para los games, los queries complejos son costosos entonces tiene que estar muy bien definido el schema. Business transactions es acerca de data consistency entonces postgresql es perfecto.

## Naming Conventions

Los nombres de los AggregateRoots, Entities y ValueObjects pueden no contender que tipo de objeto son.
Los nombres de los useCases pueden no contener la palabra useCase.
Todas las clases deben ser nombradas deben ser nombradas con que son a dos niveles. Ej: UserController.
Todas las clases deben nombrarse en PascalCase.
Las variables deben nombrarse en camelCase.
Las constantes definidas en el codigo fuente deben ir en SNAKE_CASE


Esto no debe ir aqui: Las propiedades de los value objects y entities estan encapsulados para identificar con getters las variables que son relevantes al mundo. El autocomplete cuando estas escribiendo una instancia te muestra props encapsulado y solamente las variables que hayas expuesto deliberadamente. 


# Infrastructure

## General Response

## Controllers

SIEMPRE extienden al base controller. Son stateless. Aqui ocurre la creacion de value objects y entites, para ser procesadas por useCase.

Los controller empaquetan y validan la data recibida en el request y se la pasan a los useCases. Este es el ultimo punto donde puede haber un objeto de express.

## Repositories

Caracteristicas:
Manejar obtencion de aggregates pedido por cualquiera de sus miembros o caracteristicas de sus miembros.
Hacer save o update de aggregates como un todo. 

Los repositories NUNCA deben guardar entities individualmente.

Los repositories tienen que ser capaces de reparar objetos que vengan con defectos de la base de datos.

Hay persistance based y collection repositories. Pareciera que los collection based hacen enfasis en como esta guardado el grupo. Ejemplo: Las posiciones de un torneo pudiera ser collection based. Persistance based se refiere mas a las instancias individuales que tienen una misma estructura de datos.

## Event infrastructure.

Cuando un publisher falla se debe aislar el sistema de los clientes del app. Se debe continuar operando hasta que solo queden mensajes por entregar al publisher que fallo, se debe 

Falla catastrofica de la cola:.
1. Volver al ultimo estado seguro conocido del sistema completo.

Publisher o Subscriber critico falla
1. Aislar a servidores del app. Para efectos del app no hay servicio.
1. Guardar estado del pub/sub y hacer dump de la base de datos avisar si no se puede.
1. Manejar todos los eventos cuyos subscribers esten vivos.
1. Guardar estado del pub/sub y hacer dump de la base de datos.

Cuando un publisher falla:

Cuando un Subscriber falla:

Datavalidation en el subscriber, en el publisher o en la cola? No datavalidation porque yo la cree y tengo que haberla creado bien?. Seria ideal que la cola haga el data validation para poder centralizarla. La cola puede vivir con los vo y entities que hagan falta?
deben haber constructores de los  deben estar compartidos en todos los microservicios.

# Domain Layer

## Value Objects

los value Objects se pueden construir con builders. SON INMUTABLES.
// Los entities son varios estados de un mismo elemento unidos por un id. Los values objects son un estado especifico de un elemento.

## Agreggate y sus Roots

Cuando un root evolucina a una clase nueva se hace una composicion con la version anterior usando el mismo id y las propiedades que son relevantes en el futuro. El borrado de las entidades puede ser logico cuando este robusto puede ser fisico y solo mantener historia de los hitos de los aggregate roots. Ejemplo: registro de un pick.



Los aggregate Roots deben enfozar la consistencia de su data al menos cada vez que son saved.
Para hacer referencia entre aggregates usar instanciacion de entity con props vacias (Esto pudiera permitir reconstituir una entitdad (incluyendo aggregate root) dentro de una referencia en otro objeto 
Tambien se pudiera hacer la referencia con un value object con unica propiedad id.

Los aggregates son los unicos que emiten eventos.

Algunos aggregates vale la pena usar factory pattern sea static method o completo TournamentRules profile.

Se puede usar static method factory o clase factory aparte para crear aggregates. tournamentRulesProfile es un buen lugar.

Domain data mutation se origina SIEMPRE a nivel del Root o de entidades. 


State Pattern for tournaments.

## Entities
Las listas de entities y aggregate roots se pueden abstraer.

## Standard Types

Los tournament profiles parecieran ser standard types. Tienen global ID son probablemente inmutables.

## Use Cases

son stateless.

Hacen la funcion de los domain services enfocados desde la funcionalidad requerida del sistema. Despues de los entities y roots pertenecientes a un aggregate son el siguiente lugar donde reside la logica de negocio del dominio.

Si fuera necesario hacer un query SQL puro con logica de negocio metida aqui seria el origen y debe ir encapsulado en un objeto (no se cual es ese objeto todavia) que maneje estos casos especificos. Preferiblemente diferenciar de repositories

Los commands deben ser realizados en transacciones.

## Eventos

# Apps

*Objetivos especifico*

Generar aplicaciones con la mejor experiencia de usuario posible.


1. No pueden haber crashes.
1. Evitar saltos.
1. 


## DTOs

Data externa se entrega como DTOs. Protegen los contratos de los APIs creando una capa intermedia entre el cliente y el dominio.

# Reunion 11 ago

# Devock

1. Levantar produccion en beta cerrado
1. Reparar todos los bugs que salgan
1. Optimizar features claves
1. Conectar con TxOdds
1. Refactorizar preparando para expansion


Responsabilidad de proyectos

BackEnd
FrontEnd

### Lista de repos

areuin-nodejs-baseDDDService
areuin-nodejs-businessTransactionsService
areuin-nodejs-gamesService
areuin-kotlin-AndroidClient
areuin-swift-iOSClient
areuin-cucumber-test
areuin-devops
areuin-docs
areuin-reactJS-AdminClient
areuin-reactJS-WebClient
areuiu-ruby-mockService
areuin-android-certificates
areuin-ios-certificates
areuin-kong-APIGateway