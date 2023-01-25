import {
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
  Vector2,
  Vector3,
  Vector4,
  Quaternion,
  Matrix4,
  Spherical,
  Box3,
  Sphere,
  Raycaster,
  MathUtils,
  MOUSE,
  Clock,
  AmbientLight,
  DirectionalLight,
  MeshPhongMaterial,
  AxesHelper,
  GridHelper,
} from "three";

import CameraControls from "camera-controls";

const subsetOfTHREE = {
  MOUSE,
  Vector2,
  Vector3,
  Vector4,
  Quaternion,
  Matrix4,
  Spherical,
  Box3,
  Sphere,
  Raycaster,
  MathUtils: {
    DEG2RAD: MathUtils.DEG2RAD,
    clamp: MathUtils.clamp,
  },
};

const canvas = document.getElementById("three-canvas");

// 1 Scene
const scene = new Scene();

// 2 The object
const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshPhongMaterial({
  color: 0x8025e0,
  specular: "white",
  shininess: 100,
  flatShading: true,
});
const orangeCube = new Mesh(geometry, material);
orangeCube.position.set(1, 0.5, 0);
scene.add(orangeCube);

const axes = new AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 3;
scene.add(axes);

const grid = new GridHelper(20, 20);
grid.renderOrder = 2;
scene.add(grid);

// 3 The camera
const camera = new PerspectiveCamera(
  75,
  canvas.clientWidth / canvas.clientHeight
);
camera.position.set(5, 4, 2);
scene.add(camera);

// 4 The renderer
const renderer = new WebGLRenderer({
  canvas: canvas,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
renderer.setClearColor(0x282828, 1);

// 5 Lights
const color = 0xffffff;
const intensity = 1;
const ambientLight = new AmbientLight(color, intensity);
scene.add(ambientLight);

const directionalLight = new DirectionalLight(color, intensity);
directionalLight.position.set(-1, 2, -1);
scene.add(directionalLight);

// 6 Resposivity
window.addEventListener("resize", () => {
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
});

// 7 Controls
CameraControls.install({ THREE: subsetOfTHREE });
const clock = new Clock();
const cameraControls = new CameraControls(camera, canvas);

function animate() {
  const delta = clock.getDelta();
  cameraControls.update(delta);
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();

function verHerrA() {
  var estiloA = document.getElementById("btn1");
  estiloA.className = "btnherrpress";

  var mostrarbar2 = document.getElementById("toolbar2");
  mostrarbar2.className = "vflex";

  var mostrarTools1 = document.getElementById("btn1tools");
  mostrarTools1.className = "vsbl";

  var ocultarB = document.getElementById("btn2");
  ocultarB.className = "oclt";
}

function verHerrB() {
  var estiloB = document.getElementById("btn2");
  estiloB.className = "btnherrpress";

  var mostrarbar2 = document.getElementById("toolbar2");
  mostrarbar2.className = "vflex";

  var mostrarTools2 = document.getElementById("btn2tools");
  mostrarTools2.className = "vsbl";

  var ocultarA = document.getElementById("btn1");
  ocultarA.className = "oclt";
}

function verHerrR() {
  var estiloA = document.getElementById("btn1");
  estiloA.className = "btnherr";
  var estiloB = document.getElementById("btn2");
  estiloB.className = "btnherr";

  var mostrarbar2 = document.getElementById("toolbar2");
  mostrarbar2.className = "oclt";

  var mostrarTools1 = document.getElementById("btn1tools");
  mostrarTools1.className = "oclt";
  var mostrarTools2 = document.getElementById("btn2tools");
  mostrarTools2.className = "oclt";
}

document.getElementById("btn1").onclick = verHerrA;
document.getElementById("btn2").onclick = verHerrB;
document.getElementById("btnR1").onclick = verHerrR;
document.getElementById("btnR2").onclick = verHerrR;
