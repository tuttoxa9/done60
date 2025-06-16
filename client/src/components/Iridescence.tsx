import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef, useCallback } from "react";

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

varying vec2 vUv;

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;

  uv += (uMouse - vec2(0.5)) * uAmplitude;

  float d = -uTime * 0.5 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  d += uTime * 0.5 * uSpeed;
  vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
  col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5) * uColor;
  gl_FragColor = vec4(col, 1.0);
}
`;

export default function Iridescence({
  color = [1, 1, 1],
  speed = 1.0,
  amplitude = 0.1,
  mouseReact = true,
  ...rest
}) {
  const ctnDom = useRef(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });
  const rendererRef = useRef(null);
  const programRef = useRef(null);
  const animateIdRef = useRef(null);
  const isInitialized = useRef(false);

  // Функция для обновления uniform значений без пересоздания контекста
  const updateUniforms = useCallback(() => {
    if (programRef.current) {
      programRef.current.uniforms.uColor.value = new Color(...color);
      programRef.current.uniforms.uAmplitude.value = amplitude;
      programRef.current.uniforms.uSpeed.value = speed;
    }
  }, [color, speed, amplitude]);

  useEffect(() => {
    updateUniforms();
  }, [updateUniforms]);

  useEffect(() => {
    if (!ctnDom.current || isInitialized.current) return;

    const ctn = ctnDom.current;
    const renderer = new Renderer({
      alpha: true,
      premultipliedAlpha: false,
    });
    rendererRef.current = renderer;

    const gl = renderer.gl;
    gl.clearColor(1, 1, 1, 0); // Прозрачный фон

    let program;

    function resize() {
      const scale = Math.min(window.devicePixelRatio || 1, 2); // Ограничиваем DPR для производительности
      const width = ctn.offsetWidth * scale;
      const height = ctn.offsetHeight * scale;

      renderer.setSize(width, height);
      if (program) {
        program.uniforms.uResolution.value = new Color(
          width,
          height,
          width / height
        );
      }
    }

    const resizeHandler = () => {
      // Debounce resize для производительности
      clearTimeout(resize.timeout);
      resize.timeout = setTimeout(resize, 16);
    };

    window.addEventListener("resize", resizeHandler, { passive: true });
    resize();

    const geometry = new Triangle(gl);
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new Color(...color) },
        uResolution: {
          value: new Color(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height
          ),
        },
        uMouse: { value: new Float32Array([mousePos.current.x, mousePos.current.y]) },
        uAmplitude: { value: amplitude },
        uSpeed: { value: speed },
      },
    });

    programRef.current = program;

    const mesh = new Mesh(gl, { geometry, program });
    let lastTime = 0;
    const targetFPS = 60;
    const frameDelay = 1000 / targetFPS;

    function update(t) {
      animateIdRef.current = requestAnimationFrame(update);

      // Throttle to target FPS для лучшей производительности
      if (t - lastTime >= frameDelay) {
        program.uniforms.uTime.value = t * 0.001;
        renderer.render({ scene: mesh });
        lastTime = t;
      }
    }

    animateIdRef.current = requestAnimationFrame(update);

    // Добавляем canvas с better styling
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    gl.canvas.style.display = 'block';
    ctn.appendChild(gl.canvas);

    function handleMouseMove(e) {
      const rect = ctn.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      mousePos.current = { x, y };

      if (program && program.uniforms.uMouse) {
        program.uniforms.uMouse.value[0] = x;
        program.uniforms.uMouse.value[1] = y;
      }
    }

    if (mouseReact) {
      ctn.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    isInitialized.current = true;

    return () => {
      isInitialized.current = false;

      if (animateIdRef.current) {
        cancelAnimationFrame(animateIdRef.current);
        animateIdRef.current = null;
      }

      window.removeEventListener("resize", resizeHandler);

      if (mouseReact && ctn) {
        ctn.removeEventListener("mousemove", handleMouseMove);
      }

      if (gl.canvas && ctn && ctn.contains(gl.canvas)) {
        ctn.removeChild(gl.canvas);
      }

      // Graceful WebGL cleanup
      try {
        const loseContextExt = gl.getExtension("WEBGL_lose_context");
        if (loseContextExt) {
          loseContextExt.loseContext();
        }
      } catch (e) {
        console.warn('WebGL context cleanup failed:', e);
      }

      rendererRef.current = null;
      programRef.current = null;
    };
  }, []); // Убираем зависимости, чтобы избежать пересоздания

  return (
    <div
      ref={ctnDom}
      className="w-full h-full"
      {...rest}
    />
  );
}
