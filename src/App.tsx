import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import './App.css'
import pyLogo from './assets/pylogo.png'
import jsLogo from './assets/JavaScript-logo.png'
import tsLogo from './assets/tslogo.png'
import swiftLogo from './assets/swiftlogo.png'
import csharpLogo from './assets/csharplogo.png'
import pekoe1 from './assets/pekoe1.jpg'
import pekoe2 from './assets/pekoe2.jpg'
import githubLogo from './assets/github.png'
import linkedinLogo from './assets/linkedin.svg'
import instagramLogo from './assets/iglogo.webp'


function App() {
  const mountRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef(0)
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => { scrollRef.current = window.scrollY }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.domElement.style.cssText = 'position:fixed;top:0;left:0;z-index:-1'
    mountRef.current!.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const geometry = new THREE.PlaneGeometry(2, 2)

    const material = new THREE.ShaderMaterial({
      uniforms: {
        cr: { value: -0.35 },
        ci: { value: 0.2 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float cr;
        uniform float ci;
        uniform vec2 resolution;

        void main() {
          vec2 uv = (gl_FragCoord.xy / resolution) * 4.0 - 2.0;
          float sx = uv.x;
          float sy = uv.y;

          int i = 0;

          for (int j = 0; j < 100; j++) {
            float real = sx * sx - sy * sy;
            float imag = 2.0 * sx * sy;
            sx = real + cr;
            sy = imag + ci;
            if (sx * sx + sy * sy > 4.0) {
              i = j;
              break;
            }
            i = j;
          }

          float t = float(i) / 100.0;

          vec3 a = vec3(1, 1, 1);
          vec3 b = vec3(0.78, 0.85, 0.98);
          vec3 c = vec3(0.0, 0.0, 0.0);
          vec3 dark = vec3(0.65, 0.78, 0.68);

          vec3 col = mix(a, b, t);
          col = mix(col, c, t * t);
          if (i == 99) col = dark;

          gl_FragColor = vec4(col, 1.0);
        }
      `
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    let currentCr = -0.75
    let currentCi = 0.2

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      material.uniforms.resolution.value.set(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    renderer.setAnimationLoop(() => {
      const maxScroll = document.body.scrollHeight - window.innerHeight
      const t = Math.pow(scrollRef.current / maxScroll, 2)

      const targetCr = -0.8 + t * 0.8
      const targetCi = 0.2 + t * 0.5

      currentCr += (targetCr - currentCr) * 0.05
      currentCi += (targetCi - currentCi) * 0.05

      material.uniforms.cr.value = currentCr
      material.uniforms.ci.value = currentCi

      renderer.render(scene, camera)
    })

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.setAnimationLoop(null)
      renderer.dispose()
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <>
      <div ref={mountRef} />
      <div style={{ position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 10, 
        display: 'flex', 
        gap: '2rem', 
        padding: '1rem',
        backgroundColor: 'rgb(250, 250, 250)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'}}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact Me</a>
      </div>
      <div style={{ position: 'relative', zIndex: 1, marginBottom: '4rem' }}>
        <h1>Jayden Seto</h1>
        <p>Student | Computer Science Major @ SheridanCollege | Software Developer</p>
      </div>
      <div style={{display: 'flex', gap: '2rem', justifyContent: 'space-around', flexWrap: 'wrap', position: 'relative', zIndex: 1}}>
      <div className="aboutMe" id="about">
        <h2>About Me</h2>
        <p>Hello! I'm Jayden Seto, a passionate Computer Science student with a strong interest in software development and web technologies. I enjoy building innovative applications and solving complex problems through code.</p>
      </div>
      <div className="aboutMe">
        <h2>Programming Languages</h2>
        <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center'}}>
        <img className='logo' src={pyLogo} alt="Python" />
        <img className='logo' src={tsLogo} alt="TypeScript" />
        <img className='logo' src={jsLogo} alt="JavaScript" />
        <img className='logo' src={swiftLogo} alt="SwiftUI" />
        <img className='logo' src={csharpLogo} alt="C#" />
          </div>
      </div>
      <div className='aboutMe'>
        <h2>Interests & Hobbies</h2>
        <p>I love music!</p>
        <p>I love fashion!</p>
        <p>I love my dog!</p>
        <p>I love community!</p>
        <p>I love Dark Souls 1!</p>
        <p>I love Dark Souls 2!</p>
        <p>I love Dark Souls 3!</p>
        <p>I love Sekiro!</p>
        <p>I love Bloodborne!</p>
        <p>I love Elden Ring!</p>
        <p>I love hiking and camping!</p>
        <p>I love thrifting and rock climbing!</p>
        </div>

        <div className='aboutMe images'>
          <img
          className='image'
          src={hovered === 'python' ? pekoe2 : pekoe1}
          alt="Python"
          onMouseEnter={() => setHovered('python')}
          onMouseLeave={() => setHovered(null)}
          />
        </div>

        <div  id="projects">
          <h1> Wanna see some projects?</h1>
        </div>

        <div className='aboutMe'>
          <h3>Customer Churn Prediction Model</h3>
          <p>(Python, PyTorch, Pandas, Scikit-learn)</p>
          <p>Built a neural network to predict customer churn on a dataset of 7,000+ telecom customers. Handled data preprocessing, class imbalance, and model tuning using precision, recall, and ROC-AUC metrics. Includes a batch prediction pipeline to flag at-risk accounts.</p>
          <a href="https://github.com/Jayden-gts/churn"><img className='logo' src={githubLogo} alt="github logo" /></a>
        </div>
        <div className='aboutMe'>
          <h3>Shifu - Wellness Companion</h3>
          <p>(C# ASP.NET Core, EF Core, SQLite)</p>
          <p>Built a full-stack web application with C# ASP.NET Core and SQLite featuring role-based authentication for users, mentors, and admins. Includes a web scraper for auto-populating a community events board, real-time mentor chat, journaling, and profile management.</p>
          <a href="https://github.com/Jayden-gts/Shifu---Wellness"><img className='logo' src={githubLogo} alt="github logo" /></a>
        </div>
        <div className='aboutMe' id="contact">
          <h2>Contact Me!</h2>
          <p>Email: otesjayden@live.com</p>
          <p><a href="https://www.linkedin.com/in/jayden-seto/"><img className='logo' src={linkedinLogo} alt="linkedin logo" /></a></p>
          <a href="https://www.instagram.com/uhhhjayden/"><img className='logo' src={instagramLogo} alt="instagram logo" /></a>
        </div>

      </div>
    </>
  )
}

export default App