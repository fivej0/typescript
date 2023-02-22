interface Config {
  urls: string;
}

declare module "myPackge" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}
