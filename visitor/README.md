# Visitor

This pattern is used to abstract the way objects interact with each other. We delegate into a class the definition of how an object with affect another object. With
this approach, we can define several types of interaction and they can be used interchangeably. In this folder i defined a class named `Mouse`, which will interact with
some elements that are present on the screen. This class accepts a `Visitor` as a parameter in it's constructor, and that visitor will be used to interact with the given element.
I defined two types of visitors, one that removes the element from the DOM and an other one that performs some action depending on the element.

You cand find more information here: [Visitor](https://en.wikipedia.org/wiki/Visitor_pattern)

## Espanol

Este patron nos permite abstraer la estrategia a utilizar cuando interactuan dos objetos.  Definimos una interfaz, en la que cada definira la forma de interaccion entre el objeto principal y uno secundario. Luego implementamos tantas clases como formas de interaccion necesitemos, y estas implementaciones pueden ser usadas indistintamente en el proyecto. En este ejemplo, cree una clase llamada `Mouse`, que interactuara con los elementos que estan presentes en la pantalla. Esta clase recibe un objeto `Visitor` en su constructor, que sera usado para la interaccion entre el Mouse y el objeto correspondiente. Defini dos tipos de `Visitor`: El primero remueve el elemente del DOM y el segundo ejecuta una accion diferente dependiendo del elemento con el que se encuentra.

Podes encontras mas info de este patron en: [Visitor](https://es.wikipedia.org/wiki/Visitor_(patr%C3%B3n_de_dise%C3%B1o))
