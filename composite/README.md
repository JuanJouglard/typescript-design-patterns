# Composite

This pattern lets us define object and groups of object, this two types should be treated the same way, meaning that they should respond to the same interface. In this project, i created an abstract class called `DOMElement`. Then, inheriting from that class are the classes `Image` and `Paragraph`, which define simple objects. But also, the class Div inherits from the `DOMElement` class, and this class has a group of DOM elements as one of its attributes. This gives us the flexibility to use this types of object in our app and not knowing if they are simple objects or objects that's the resulte of composing several others. Here, the classes implemented represent the way html handles declaration of `DomElements`.

You can find more information about this pattern here: [Composite](https://en.wikipedia.org/wiki/Composite_pattern)

## Espanol

