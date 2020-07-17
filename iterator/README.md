# Iterator

This is a pattern that helps as to go through properties of a data structure in a given order. To do this, we have to provide an Iterator. This iterator should have methods to get the next element in the chain and to know if the iteration has come to and end. In this project, i've used this pattern to present the user with a carousel of images. The next image to show when the user clicks on the 'Next' button is given by the iterator.The Carousel component has no idea how the data structure were the images are stored is implemented. This means that this data structure can change without affecting the carousel. The only thing that we will havo to do in order to provide a new data structure is implement the Iterable interface.

You can find more information about this pattern here: [Iterator](https://en.wikipedia.org/wiki/Iterator_pattern)
