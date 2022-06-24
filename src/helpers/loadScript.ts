import { promisify } from './promisify';

const mapScripts = new Map();

const loadScript = (src: string, callback: any) => {
  if (mapScripts.has(src)) {
    callback(null, mapScripts.get(src));
    return mapScripts.get(src);
  }

  const script = document.createElement('script');
  script.crossOrigin = '';
  script.src = src;
  script.async = true;

  script.onload = () => {
    callback(null, script);
  };

  script.onerror = () => {
    document.head.removeChild(script);
    mapScripts.delete(src);
    callback(new Error('failed download script'));
  };

  if (!mapScripts.has(src)) {
    console.log(src, 'src');
    mapScripts.set(src, script);
    document.head.appendChild(script);
  }
};

const loadScriptPromise = promisify(loadScript);

export { loadScript, loadScriptPromise };
