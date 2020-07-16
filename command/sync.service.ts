import { Command } from "./command.interface";
export class SyncService {
  commands: Command[];

  runAllCommands() {
    this.commands.forEach((command: Command) => {
      command.execute();
    });
  }

  addNewCommand(newCommand: Command) {
    this.commands.push(newCommand);
  }
}
