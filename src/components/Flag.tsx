import * as THREE from "three";
import { useEffect, useRef, useMemo } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    pTorus3: THREE.Mesh;
    pTorus2: THREE.Mesh;
    pTorus1: THREE.Mesh;
    FlagMesh: THREE.SkinnedMesh;
    FlagPole: THREE.Mesh;
    FlagJoint_1: THREE.Bone;
    // ...
    FlagJoint_231: THREE.Bone;
  };
  materials: {
    lambert1: THREE.MeshStandardMaterial;
    Flag: THREE.MeshStandardMaterial;
    FlagPole1: THREE.MeshStandardMaterial;
  };
  animations: THREE.AnimationClip[];
};

const Flag = (props: any) => {
  const group = useRef<THREE.Group>(null);
  const flagMesh = useRef<THREE.SkinnedMesh>(null);
  const woodMesh = useRef<THREE.Mesh>(null);

  const { nodes, materials, animations } = useGLTF(
    "/models/flag-compressed.glb"
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Joints|Take 001|BaseLayer"]?.play();
  }, [actions]);

  const position = useMemo<[number, number, number]>(
    () => (window.innerWidth < 600 ? [0.58, -0.5, 2.1] : [1.58, 0, 2.1]),
    []
  );
  const scale = useMemo(() => 0.1, []);

  // const rotationFlagRig = useMemo<[number, number, number]>(() => [Math.PI / 2, 0, 0], []);
  const scaleFlagRig = useMemo(() => 0.546, []);

  const jointsPosition = useMemo<[number, number, number]>(
    () => [-2.842, 0.038, -5.84],
    []
  );
  const jointsRotation = useMemo<[number, number, number]>(
    () => [0.031, -0.496, 0.035],
    []
  );

  return (
    <group
      ref={group}
      position={position}
      scale={scale}
      name="flag"
      dispose={null}
      {...props}
    >
      <group name="Scene">
        <group
          name="FlagRig"
          rotation={[Math.PI / 2, 0, 0]}
          scale={scaleFlagRig}
        >
          <group
            name="Joints"
            position={jointsPosition}
            rotation={jointsRotation}
          >
            {Array.from({ length: 231 }, (_, i) => {
              const jointName = `FlagJoint_${i + 1}` as keyof typeof nodes;
              const jointObject = nodes[jointName];
              if (!jointObject) return null;
              return <primitive key={jointName} object={jointObject} />;
            })}

            <skinnedMesh
              name="FlagMesh"
              ref={flagMesh}
              geometry={nodes.FlagMesh.geometry}
              material={materials.Flag}
              skeleton={nodes.FlagMesh.skeleton}
              material-transparent={true}
              material-opacity={1}
            />
          </group>
          <mesh
            ref={woodMesh}
            name="FlagPole"
            geometry={nodes.FlagPole.geometry}
            material={materials.FlagPole1}
            material-transparent={true}
            material-opacity={1}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/flag-compressed.glb");
export default Flag;
