import { Command } from "./command.interface";
export class SyncService {
  commands: Command[];

  runAllCommands() {
    this.commands.forEach((command: Command) => {
      command.execute();
    });
  }

  runCommandsInIntervals(interval: number) {
    let index = 0;
    const timer = setInterval(() => {
      this.commands[index].execute();
      index++;
      if (index == this.commands.length) clearInterval(timer);
    }, interval);
  }

  addNewCommand(newCommand: Command) {
    this.commands.push(newCommand);
  }
}
