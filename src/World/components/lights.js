import { DirectionalLight, HemisphereLight } from "https://cdn.skypack.dev/three@0.132.2";

function createLights() {
  const ambientLight = new HemisphereLight(
    'white',
    'darkslategrey',
    2,
  );

  const mainLight = new DirectionalLight('red', 0);
  mainLight.position.set(10, 10, 10);

  return { ambientLight, mainLight };
}

export { createLights };
