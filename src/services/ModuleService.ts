import { loadScriptPromise } from '../helpers';
import { request } from '../http';

export class MicroFrontendService {
  private scope: string;
  private host: string;
  private readonly history: any;
  script: any;

  constructor(scope: string, host: string, history?: any) {
    console.log('MODULE UPDATED ');
    this.scope = scope;
    this.host = host;
    this.history = history;
  }

  get containerId() {
    return `${this.scope}-container`;
  }

  scriptIsLoaded() {
    return document.getElementById(this.host);
  }

  async loadModule() {
    const { files } = await request(`asset-manifest.json`);
    await loadScriptPromise(`${this.host}${files['main.js']}`).then(
      (script) => {
        // @ts-ignore
        script.id = this.host;
      },
    );
  }

  async render() {
    if (!document.getElementById(this.host)) {
      await this.loadModule();
    }

    try {
      // @ts-ignore
      window?.[`render${this.scope}`]?.(this.containerId, this.history);
    } catch (err) {
      console.log('err render', this.containerId);
    }
  }

  unmount = () => {
    try {
      // @ts-ignore
      window[`unmount${this.scope}`](this.containerId);
    } catch (err) {
      console.log('err unmount', this.containerId);
    }
  };

  static setup(scope: string, host: string, history?: any) {
    return new MicroFrontendService(scope, host, history);
  }
}
