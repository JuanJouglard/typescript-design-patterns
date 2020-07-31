# Iterator

This is a pattern that helps as to go through properties of a data structure in a given order. To do this, we have to provide an `Iterator`. This iterator should have methods to get the next element in the chain and to know if the iteration has come to and end. In this project, i've used this pattern to present the user with a carousel of images. The next image to show when the user clicks on the 'Next' button is given by the iterator.The `Carousel` component has no idea how the data structure were the images are stored is implemented. This means that this data structure can change without affecting the carousel. The only thing that we will havo to do in order to provide a new data structure is implement the Iterable interface.

This pattern is implemented in vanilla Javascript since ES6. It's a very similar idea to what i have done here. In order for a class to be Iterable it has to provide an implementation for the `Symbol.Iterator` method. This method, will return a `next` function, which will iterate through all the elements in the structure. This `next()` function will return an object with two properties: the `value` of the next element (`undefined` if there are no more) and a `done` property which will be a boolean that indicates whether we have finished with our iteration or not. 

To use this iterator, we don't have to call the `next()` function everytime we want to advance, instead javascript provides a very simple syntax to do this.
```
for (let element of structure) {
  
}
```

You can find more information about this pattern here: [Iterator](https://en.wikipedia.org/wiki/Iterator_pattern)

## Espanol
Este patron nos ayuda a recorrer una estructura de datos en un orden determinado. Para poder usar esto, debemos implementar un `Iterator` . Este iterador debe proveer metodos para obtener el proximo elemento de la estructura y para indicar si se ha llegado al final del recorrido. En este proyecto se ha utilizado este patron para mostrar un carousel de imagenes al usuario. El usuario solo podra ver una imagen en pantalla, y cuando presione el boton 'Next', se obtendra una nueva imagen a traves del iterador. El componente `Carousel` no tiene conocimiento de como esta implementada la estructura de datos que almacena las imagenes, solo sabe que provee un iterador, que es el que usa para el recorrido. Esto significa que esta estructura podra cambiar en el tiempo y no habria que modificar el componente `Carousel`, solo proveer una estructura que implemente el metodo `iterator()`.

    Este patron esta implementado en ES6. Si queremos que nuestra clase pueda ser iterada en JS, lo unico que debemos hacer es proveer una implementacion para el metodo `[Symbol.Iterator]()`. Este metodo, debe retornar una function `next()`, la cual sera usada para recorrer la estructura, a su vez, este metodo retornara el valor siguiente y un 'Flag' para indicar si se llego al final. 
    Luego, para usar este iterador, no hace falta llamar al metodo next cada vez que querramos avanzar en la iteracion. En su lugar, Javascript provee una sintaxis muy simple para realizar el recorrido: 

```
for (let element of structure) {
  
}
```
Podes encontrar mas informacion acerca de este patron en: [Iterator](https://es.wikipedia.org/wiki/Iterador_(patr%C3%B3n_de_dise%C3%B1o))
