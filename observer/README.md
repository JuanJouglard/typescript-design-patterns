# Observer

This pattern lets us have mutliple parts of our application to be subscribed to the emittion of a value. Here with define a module that will emit values and the modules that are subscribed to this emitter, will receive the new value and perform an action with it. This is a very common pattern in Web Development, it's used to perform request to an API and show the response in the UI, or to wait for the user to interact with our app, and react accordingly.
  In this example, i implemented a basic `Observer` that performs an Http Request and then notifies all the consumers. It's very similar to what Angular does with `Observables` and `Subscriptions`.
  
  You can find more information about this pattern here: [Observer](https://en.wikipedia.org/wiki/Observer_pattern)

## Espanol

Este patron nos permite subscibirnos desde varios lugares en nuestra aplicacion a un mismo emisor de valores. En este ejemplo, se definio un modulo que va a emitir valores y los otros modulos que estan subscriptos al mismo recibiran estos valores para realizar algun procesamiento con ellos. Este es un patron muy comun en el desarrollo web, es utilizado tanto para realizar request HTTP y "escuchar" su valor desde un componente, o cuando se espera que el usuario interactua con la aplicacion para actuar en consecuencia. En este ejemplo, se implemento un `Observer` basico que realiza un Request HTTP y luego notifica a todos los oyentes. Es muy similar al manejo que hace Angular para `Observables` y `Subscriptions`.


  Podes encontrar mas informacion acerca de este patron en: [Observer](https://es.wikipedia.org/wiki/Observer_(patr%C3%B3n_de_dise%C3%B1o))

