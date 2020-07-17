# Strategy

This is a pattern that let's us abstract and encapsulate different algorithms to perform the same action in classes. Maybe we have diffrent ways of handling something in our project, and which will be executed depends on different variables. With this pattern we can change the approach that we want to take at runtime.

In this project, i've used this pattern in order to have different ways of dealing with an iamge when the user clicks on it. I defined three strategies, they all implement the Strategy interface, that has a method handleImage. Each of the classes implements this method differently, the first one NewTabStrategy it opens the image on a new browser tab. The second one, DownloadStrategy, it downloads the image to the user's computer. And last but not least, EmailStrategy, this one sends the image to the user's email address. Then, i passed the strategy that i want to use to the ImageScreen, which doesn't know which strategy is being used, it simple uses it. 

You can find more information about this pattern here: [Strategy](https://en.wikipedia.org/wiki/Strategy_pattern)
