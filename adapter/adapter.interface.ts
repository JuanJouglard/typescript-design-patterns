export interface Adapter {
  getrequest(api: string): Promise<any>;

  postrequest(api: string, body: any): Promise<any>;
}
