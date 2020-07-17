# Command

This is a pattern that lets us encapsulate an action into an object. Then we can define abstractions for our commands, that can be used across all of our application. The modules that use this command, don't have to know how they are implemented, the can only call the execute method, and the command will have all the information required to perform the desired task. Here i created, a synchronization service that receives commands and then it executes them all at once. The service also has the ability to run the commands in a given interval.

You can find more information about this pattern here: [Command](https://en.wikipedia.org/wiki/Command_pattern)
