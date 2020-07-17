# Adapter

This pattern is used to abstract the way objects interact with each other. We delegate into a class the definition of how an object with affect another object. With
this approach, we can define several types of interaction and they can be used interchangeably. In this folder i defined a class named Mouse, which will interact with
some elements that are present on the screen. This class accepts a Visitor as a parameter in it's constructor, and that visitor will be used to interact with the given element.
I defined to types of visitors, one that removes the element form de DOM and an other one that performs some action depending on the element.

You cand find more information here: [Visitor](https://en.wikipedia.org/wiki/Visitor_pattern)
