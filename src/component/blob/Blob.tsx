import { ReactThreeFiber, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Mesh, MathUtils, ShaderMaterial } from "three";
import fragmentShader from "./fragmentShader";
import vertexShader from "./vertexShader";

const Blob = () => {
	const mesh = useRef<Mesh>(null);
	const hover = useRef(false);
	const uniforms = useMemo(() => {
		return {
			u_time: { value: 0 },
			u_intensity: { value: 0.5 },
		} as { [uniform: string]: THREE.IUniform<any> };
	}, []);

	useFrame((state) => {
		const { clock } = state;
		if (mesh.current) {
			if (Array.isArray(mesh.current.material)) {
				mesh.current.material.forEach((material) => {
					if (material instanceof ShaderMaterial) {
						material.uniforms.u_time.value =
							0.4 * clock.getElapsedTime();
						material.uniforms.u_intensity.value = MathUtils.lerp(
							material.uniforms.u_intensity.value,
							hover.current ? 1 : 0.15,
							0.02
						);
					}
				});
			} else {
				if (mesh.current.material instanceof ShaderMaterial) {
					mesh.current.material.uniforms.u_time.value =
						0.4 * clock.getElapsedTime();
					mesh.current.material.uniforms.u_intensity.value =
						MathUtils.lerp(
							mesh.current.material.uniforms.u_intensity.value,
							hover.current ? 1 : 0.15,
							0.02
						);
				}
			}
		}
	});

	return (
		<mesh
			ref={mesh}
			scale={1.5}
			position={[0, 0, 0]}
			onPointerOver={() => (hover.current = true)}
			onPointerOut={() => (hover.current = false)}
		>
			<icosahedronBufferGeometry args={[2, 20]} />
			<shaderMaterial
				vertexShader={vertexShader}
				fragmentShader={fragmentShader}
				uniforms={uniforms}
			/>
		</mesh>
	);
};

declare global {
	namespace JSX {
		interface IntrinsicElements {
			mesh: ReactThreeFiber.Object3DNode<Mesh, typeof Mesh>;
		}
	}
}

export default Blob;
