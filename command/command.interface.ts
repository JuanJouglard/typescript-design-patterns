export interface Command {
  execute(...args: any[]): Promise<any>;
}
