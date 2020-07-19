# Strategy

This is a pattern that let's us abstract and encapsulate different algorithms to perform the same action in classes. Maybe we have diffrent ways of handling something in our project, and which will be executed depends on different variables. With this pattern we can change the approach that we want to take at runtime.

In this project, i've used this pattern in order to have different ways of dealing with an image when the user clicks on it. I defined three strategies, they all implement the `Strategy` interface, that has a method `handleImage`. Each of the classes implements this method differently, the first one `NewTabStrategy` it opens the image on a new browser tab. The second one, `DownloadStrategy`, it downloads the image to the user's computer. And last but not least, `EmailStrategy`, this one sends the image to the user's email address. Then, i passed the strategy that i want to use to the `ImageScreen`, which doesn't know which strategy is being used, it simple uses it. 

You can find more information about this pattern here: [Strategy](https://en.wikipedia.org/wiki/Strategy_pattern)

## Espanol

Este patron nos permite abstraer el algoritmo que sera utilizado para completar cierta tarea. Tal vez, en nuestro proyecto tenemos situaciones en que la aplicacion debe tener distintos comportamientos dependiendo de variables dinamicas. Este patron, nos permitira elegir que algorimto utilizar en runtime.

Para este proyecto, utilice este Strategy para definir distintas formas de respuesta ante el click del usuario en una imagen. Para esto se creo una interfaz Strategy, que tiene un metodo handleImage. Luego, fueron implementadas tres diferentes estrategias que cumplen con esta interfaz. Las estrategias son las siguientes:
    - NewTabStrategy: abre la imagen en una nueva pestana.
    - DownloadStrategy: descarga la imagen a la computadora del usuario.
    - EmailStrategy: envia la imagen por email, a la direccion del usuario.

Luego, para utilizar estas estrategias, se creo un componente ImageScreen, que acepta una estrategia de tipo Strategy como una de sus props. Esta estrategia, sera la utilizada al momento de que el usuario interaccione con la imagen. Notese que a este componente no le interesa cual es la estrategia a aplicar, solo requiere una que cumpla con la interfaz Strategy. Por lo que, si en un futuro queremos agregar una nueva forma de realizar este procedimiento, solo basta con crear una nueva clase que implemente a la interfaz. Esta abstraccion se puede observar en el componente HomeScreen, donde se utiliza el componente ImageScreen con pasandole tres estrategias diferentes.

Mas informacion acerca de este patron: [Strategy](https://en.wikipedia.org/wiki/Strategy_pattern)
