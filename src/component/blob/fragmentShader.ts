const fragmentShader = `
    uniform vec3 color;
    uniform float time;
    varying vec2 vUv;

    void main() {
        float distort = vUv.y * sin(vUv.x * 10.0 + time) * 0.1;
        vec3 baseColor = vec3(0.1, 0.1, 0.1); // blackish color
        vec3 diffuseColor = vec3(0.0, 0.5 + abs(vUv.y - 0.3) * 2.5, 0.4); // greenish color
        vec3 specularColor = vec3(0.4, 0.4, 0.4); // white specular color
        vec3 lightDirection = vec3(0.0, 0.2, 1.3); // light coming from the camera

        vec3 normal = normalize(vec3(vUv - 0.5, distort));
        vec3 lightReflection = normalize(reflect(lightDirection, normal));

        float shininess = 30.0;
        float metallic = 0.8;
        float specularIntensity = pow(max(0.0, dot(lightReflection, vec3(0.0, 0.0, 1.0))), shininess);

        vec3 finalColor = mix(baseColor, diffuseColor, 0.7) + specularColor * specularIntensity;

        gl_FragColor = vec4(mix(vec3(0.0), finalColor, metallic), 1.0);
    }
`;

export default fragmentShader;
