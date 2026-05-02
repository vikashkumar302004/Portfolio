'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

const NeuralConnections = ({ count }: { count: number }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10
      p[i * 3 + 1] = (Math.random() - 0.5) * 10
      p[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return p
  }, [count])

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const linePoints = []
    // Create some random connections between nearby points
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = points[i * 3] - points[j * 3]
        const dy = points[i * 3 + 1] - points[j * 3 + 1]
        const dz = points[i * 3 + 2] - points[j * 3 + 2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        
        if (dist < 2) {
          linePoints.push(points[i * 3], points[i * 3 + 1], points[i * 3 + 2])
          linePoints.push(points[j * 3], points[j * 3 + 1], points[j * 3 + 2])
        }
      }
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePoints, 3))
    return geometry
  }, [points, count])

  const linesRef = useRef<THREE.LineSegments>(null!)
  const pointsRef = useRef<THREE.Points>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    linesRef.current.rotation.y = t * 0.05
    pointsRef.current.rotation.y = t * 0.05
  })

  return (
    <group>
      <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#818cf8"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#4c1d95" transparent opacity={0.2} />
      </lineSegments>
    </group>
  )
}

const Scene = () => {
  // No mesh to rotate


  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#7c3aed" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#22d3ee" />
      
      {/* Removed the central void sphere to focus on the profile image */}


      <NeuralConnections count={150} />
    </>
  )
}

const HeroScene = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  )
}

export default HeroScene
