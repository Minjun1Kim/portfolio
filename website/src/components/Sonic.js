import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Sonic from '../sonic.glb';

async function loadSonic() {
  const loader = new GLTFLoader();
  const sonicData = await loader.loadAsync(Sonic);
  const sonic = setupModel(sonicData);
  return { sonic };
}

function setupModel(data) {
  const model = data.scene.children[0];
  return model;
}

export { loadSonic };
