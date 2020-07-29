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
      if (index == this.commands.length) clearInterval(timer);
      this.commands[index].execute();
      index++;
    }, interval);
  }

  addNewCommand(newCommand: Command) {
    this.commands.push(newCommand);
  }
}
