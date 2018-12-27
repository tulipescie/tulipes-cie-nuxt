<template>
  <div>
    <div id="canvas"></div>
  </div>
</template>

<script>
import THREE from '~/plugins/three.js'

export default {
  name: 'Webgl',
  mounted() {
    this.createScene()
    this.onResize()
    this.addListeners()
  },
  methods: {
    addListeners() {
      window.addEventListener('resize', this.onResize)
    },

    removeListeners() {
      window.removeEventListener('resize', this.onResize)
    },

    createScene() {
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )

      this.renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      })
      this.setRendererSize()
      this.$el.appendChild(this.renderer.domElement)

      this.geometry = new THREE.SphereGeometry(1, 32, 32)
      this.material = new THREE.MeshBasicMaterial({
        color: 0x1a1a1a,
        wireframe: true
      })
      this.sphere = new THREE.Mesh(this.geometry, this.material)

      this.scene.add(this.sphere)

      this.camera.position.z = 5

      this.animate()
    },

    animate() {
      requestAnimationFrame(this.animate)

      this.sphere.rotation.x += 0.01
      this.sphere.rotation.y += 0.01

      this.renderer.render(this.scene, this.camera)
    },

    setRendererSize() {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.renderer.setSize(this.width, this.height)
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()
    },

    onResize() {
      this.setRendererSize()
    }
  },

  beforeDestroy() {
    this.removeListeners()
  }
}
</script>

<style scoped>
</style>
