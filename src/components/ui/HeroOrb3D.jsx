import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float, Environment } from '@react-three/drei'

function DistortedOrb() {
  const mesh = useRef(null)

  useFrame((state) => {
    if (!mesh.current) return
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.x = t * 0.15
    mesh.current.rotation.y = t * 0.25
    // Gentle cursor-follow parallax
    const { x, y } = state.pointer
    mesh.current.position.x += (x * 0.3 - mesh.current.position.x) * 0.04
    mesh.current.position.y += (y * 0.2 - mesh.current.position.y) * 0.04
  })

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={mesh} scale={1.6}>
        <icosahedronGeometry args={[1, 24]} />
        <MeshDistortMaterial
          color="#6366f1"
          emissive="#4f46e5"
          emissiveIntensity={0.35}
          distort={0.45}
          speed={1.8}
          roughness={0.25}
          metalness={0.4}
        />
      </mesh>
    </Float>
  )
}

function SecondaryOrb() {
  const mesh = useRef(null)
  useFrame((state) => {
    if (!mesh.current) return
    const t = state.clock.getElapsedTime()
    mesh.current.position.x = Math.sin(t * 0.3) * 2.8
    mesh.current.position.y = Math.cos(t * 0.4) * 1.6
    mesh.current.rotation.y = t * 0.3
  })
  return (
    <mesh ref={mesh} scale={0.55}>
      <icosahedronGeometry args={[1, 12]} />
      <MeshDistortMaterial
        color="#22d3ee"
        emissive="#22d3ee"
        emissiveIntensity={0.6}
        distort={0.55}
        speed={2.4}
        roughness={0.15}
        metalness={0.6}
      />
    </mesh>
  )
}

export default function HeroOrb3D({ className = '' }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 3, 5]} intensity={1.2} color="#a855f7" />
        <pointLight position={[-4, -2, 3]} intensity={1.8} color="#22d3ee" />
        <Suspense fallback={null}>
          <DistortedOrb />
          <SecondaryOrb />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  )
}
