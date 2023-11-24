interface Config {
  urls: string;
}

declare module "myPackege" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}
