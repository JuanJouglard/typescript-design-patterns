# Observer

This pattern lets us have mutliple parts of our application to be subscribed to the emittion of a value. Here with define a module that will emit values and the modules that are subscribed to this emitter, will receive the new value and perform an action with it. This is a very common pattern in Web Development, it's used to perform request to an API and show the response in the UI, or to wait for the user to interact with our app, and react accordingly.
  In this example, i implemented a basic Observer that performs an Http Request and then notifies all the consumers. It's very similar to what Angular does with Observables and Subscriptions.
  
  You can find more information about this pattern here: [Observer](https://en.wikipedia.org/wiki/Observer_pattern)
