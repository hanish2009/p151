AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "../assets/ARMORED CAR.glb" }
  },
  init: function() {
    this.el.setAttribute("gltf-model", this.data.modelRef);
    const position = { x: 0, y: 10, z: 80 };
    const rotation = { x: 0, y: 60, z: 0 };
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
  }
});