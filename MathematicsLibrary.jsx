import React, { useState } from 'react';

// Font import (you must add in your index.html)
// <link href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap" rel="stylesheet">

const SUBJECTS = [
  {
    name: 'Calculus',
    topics: [
      {
        title: 'History and Founders of Calculus',
        content: (
          <>
            <h2>History and Founders of Calculus</h2>
            <p>
              Calculus emerged independently in the late 17th century, primarily through the work of Isaac Newton and Gottfried Wilhelm Leibniz. Newton developed the method of "fluxions" to describe rates of change, focusing on instantaneous motion—a revolution for physics and astronomy. Leibniz, meanwhile, introduced the now-fundamental notation <b>dy/dx</b>, formalizing the process of differentiation and integration. Their independent discoveries led to a contentious priority dispute, but both contributed deeply to the discipline.
            </p>
            <p>
              Calculus rapidly transformed science by enabling the modeling of change and accumulation—critical for physics, engineering, and astronomy. Augustin-Louis Cauchy and Karl Weierstrass, later, established rigorous foundations by formalizing the concept of limits, ensuring mathematical soundness and clarity.
            </p>
            <p><b>Key Contributors:</b> Newton (fluxions, instantaneous change), Leibniz (notation, structure), Cauchy (analysis, rigor), Weierstrass (limits).</p>
            <p>
              The methods and frameworks of calculus have become indispensable in quantifying motion, change, and growth, and underpin nearly all advanced physical sciences.
            </p>
          </>
        ),
        youtube: "https://www.youtube.com/watch?v=dJLOzYJQp2s"
      },
      {
        title: 'Functions and Graphs',
        content: (
          <>
            <h2>Functions and Graphs</h2>
            <p>
              A function is a rule that assigns to each input exactly one output. Functions are central to calculus; graphing them reveals behaviors such as growth, decay, maxima, and minima. Their academic importance lies in modeling relationships in mathematics, science, and engineering.
            </p>
            <p>
              Formally, a function f maps a domain D to a codomain C, written as <b>f: D → C</b>. Functions may be linear, quadratic, exponential, or otherwise, and are classified by their behavior and algebraic forms.
            </p>
            <p>
              Graphs illustrate functions visually, aiding intuition and allowing predictions of real-world phenomena. Recognizing symmetry, intercepts, and critical points is foundational.
            </p>
            <b>Key Formulas:</b>
            <ul>
              <li>Linear: f(x) = mx + b</li>
              <li>Quadratic: f(x) = ax² + bx + c</li>
              <li>Exponential: f(x) = a·e^(bx)</li>
            </ul>
            <b>Step-by-step Example:</b>
            <p>
              For f(x) = 2x + 1, plug x = 3: f(3) = 2*3 + 1 = 7. The graph is a straight line with slope 2 and y-intercept 1.
            </p>
            <b>Real-life Application:</b>
            <ul>
              <li>Population modeling: exponential functions</li>
              <li>Financial growth: linear and exponential</li>
            </ul>
          </>
        ),
        youtube: "https://www.youtube.com/watch?v=dZ0l9rQy1Nc"
      },
      // ...repeat for other Calculus topics
    ],
  },
  {
    name: 'Algebra',
    topics: [
      {
        title: 'History and Founders of Algebra',
        content: (
          <>
            <h2>History and Founders of Algebra</h2>
            <p>
              Algebra traces its roots to the mathematician <b>Muhammad ibn Musa al-Khwarizmi</b>, who lived during the 9th century. His seminal text, <i>Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala</i>, introduced systematic solutions for linear and quadratic equations and gave rise to the term "algebra" (al-jabr, meaning "restoration").
            </p>
            <p>
              François Viète and René Descartes later expanded algebra with symbols and abstract reasoning, transitioning from rhetorical (written text) to symbolic algebra, forming the foundation for modern algebraic manipulation.
            </p>
            <p>
              Algebra is the backbone of all advanced mathematics, allowing for generalization and systematic solving of equations.
            </p>
            <b>Key Contributions:</b> al-Khwarizmi (methods, terminology), Viète (symbolism), Descartes (coordinate system).
          </>
        ),
        youtube: "https://www.youtube.com/watch?v=_R8V1cD5v6E"
      },
      {
        title: 'Real Number System',
        content: (
          <>
            <h2>Real Number System</h2>
            <p>
              The real number system encompasses rational and irrational numbers, providing a continuum for algebraic operations. Understanding the properties (closure, associativity, distributivity, identity, inverse) is foundational for solving equations and modeling phenomena.
            </p>
            <p>
              Real numbers include integers, fractions, and non-repeating decimals like π and √2. The completeness of the real number line ensures the existence of solutions to many algebraic equations.
            </p>
            <b>Key Formulas:</b>
            <ul>
              <li>√2 is irrational</li>
              <li>Any integer is rational: n ∈ ℤ ⊆ ℚ ⊆ ℝ</li>
            </ul>
            <b>Example:</b>
            <p>
              Prove √2 is irrational: Assume it’s rational, then can be written as p/q. Contradiction follows from prime factorization.
            </p>
            <b>Application:</b>
            <ul>
              <li>Geometry (lengths, areas)</li>
              <li>Finance (decimal representation)</li>
            </ul>
          </>
        ),
        youtube: "https://www.youtube.com/watch?v=uKeUXXr2liE"
      },
      // ...repeat for other Algebra topics
    ]
  },
  {
    name: 'Geometry',
    topics: [
      {
        title: 'History and Founders of Geometry',
        content: (
          <>
            <h2>History and Founders of Geometry</h2>
            <p>
              Geometry’s classical origins lie with Euclid, whose <i>Elements</i> defined axioms, logical proofs, and the axiomatic method. Pythagoras and Archimedes advanced methods and theorems. Carl Friedrich Gauss, in the 19th century, revolutionized geometry by founding non-Euclidean structures, broadening the landscape far beyond Euclid’s initial five postulates.
            </p>
            <p>
              Geometry evolved from basic measurements to complex analytic frameworks, underpinning architecture, engineering, and natural science.
            </p>
            <b>Key Contributions:</b> Euclid (axioms, proofs), Pythagoras (theorem), Archimedes (area/volume), Gauss (non-Euclidean geometry).
          </>
        ),
        youtube: "https://www.youtube.com/watch?v=k6WqnTn1LsA"
      },
      {
        title: 'Points, Lines, Planes',
        content: (
          <>
            <h2>Points, Lines, Planes</h2>
            <p>
              The core primitives of geometry are points (locations), lines (unbounded one-dimensional paths), and planes (flat two-dimensional surfaces). Their interplay forms the basis for all geometric constructs.
            </p>
            <p>
              In Euclidean geometry, axioms describe how points and lines relate. Logical proofs derive all subsequent theorems from these underlying assumptions.
            </p>
            <b>Theorem Statement:</b>
            <ul>
              <li>Through any two points, there is exactly one line</li>
            </ul>
            <b>Example:</b>
            <p>
              Given points A and B, the line AB is unique.
            </p>
            <b>Application:</b>
            <ul>
              <li>CAD design</li>
              <li>GPS mapping</li>
            </ul>
          </>
        ),
        youtube: "https://www.youtube.com/watch?v=wIv0u4QbHqY"
      },
      // ...repeat for other Geometry topics
    ]
  },
  {
    name: 'Resources',
    topics: [
      {
        title: 'Calculus',
        content: (
          <>
            <h2>Calculus Resources</h2>
            <ul>
              <li><a href="https://www.khanacademy.org/math/calculus-1" target="_blank" rel="noopener noreferrer">Khan Academy Calculus</a></li>
              <li><a href="https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/" target="_blank" rel="noopener noreferrer">MIT OpenCourseWare Calculus</a></li>
              <li><a href="https://www.youtube.com/@ProfessorLeonard" target="_blank" rel="noopener noreferrer">Professor Leonard</a></li>
            </ul>
          </>
        )
      },
      {
        title: 'Algebra',
        content: (
          <>
            <h2>Algebra Resources</h2>
            <ul>
              <li><a href="https://www.khanacademy.org/math/algebra" target="_blank" rel="noopener noreferrer">Khan Academy Algebra</a></li>
              <li><a href="https://www.youtube.com/@OrganicChemistryTutor" target="_blank" rel="noopener noreferrer">The Organic Chemistry Tutor</a></li>
            </ul>
          </>
        )
      },
      {
        title: 'Geometry',
        content: (
          <>
            <h2>Geometry Resources</h2>
            <ul>
              <li><a href="https://www.khanacademy.org/math/geometry" target="_blank" rel="noopener noreferrer">Khan Academy Geometry</a></li>
              <li><a href="https://www.youtube.com/@MathAntics" target="_blank" rel="noopener noreferrer">Math Antics</a></li>
            </ul>
          </>
        )
      }
    ]
  }
];

// Watermark SVG Component
function MathWatermark() {
  return (
    <svg width="100vw" height="100vh" style={{position: 'absolute', top:0, left:0, zIndex:0, pointerEvents:'none'}}>
      <text x="25%" y="50%" fill="#e3e7f1" opacity="0.2" fontSize="8vw" fontFamily="Poppins, Roboto, sans-serif">
        ∫ Σ π ∆ 𝔄
      </text>
    </svg>
  );
}

// Fade transition wrapper
function Fade({ visible, children }) {
  // Simple fade using inline style
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.4s",
        height: '100%',
      }}
    >{children}</div>
  );
}

export default function MathematicsLibrary() {
  const [selectedSubject, setSelectedSubject] = useState(SUBJECTS[0].name);
  const [selectedTopicIdx, setSelectedTopicIdx] = useState(0);

  // find subject object
  const currentSubject = SUBJECTS.find(s => s.name === selectedSubject);
  const currentTopic = currentSubject.topics[selectedTopicIdx];

  // handle clicks
  function handleSubject(subjectName) {
    setSelectedSubject(subjectName);
    setSelectedTopicIdx(0); // default to first topic
  }
  function handleTopic(idx) {
    setSelectedTopicIdx(idx);
  }

  return (
    <div style={{
      fontFamily: "'Poppins', 'Roboto', sans-serif",
      height: '100vh',
      margin: '0',
      background: '#f8f9fb',
      color: '#2c3e50',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <MathWatermark />
      {/* HEADER */}
      <header style={{
        height: '12vh',
        boxShadow: '0 2px 8px rgba(92,104,128,0.04)',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '4vw',
        borderBottom: '1px solid #e3e7f1',
        zIndex: 1,
      }}>
        <h1 style={{
          fontSize: '2.8em',
          fontWeight: 600,
          letterSpacing: '0.02em',
          margin: '0'
        }}>Mathematics Library</h1>
        <span style={{
          fontSize: '1.15em', fontWeight: 400, color:'#5d8aa8', marginTop: '0.3em'
        }}>Comprehensive Digital Lessons in Calculus, Algebra, and Geometry</span>
      </header>

      {/* MAIN BODY */}
      <main style={{
        display:'flex',
        height:'88vh',
        position:'relative',
        zIndex: 1
      }}>
        {/* LEFT PANEL - Sidebar */}
        <aside style={{
          width: '25%',
          height:'100%',
          background:'#f8f9fb',
          borderRight: '1px solid #e3e7f1',
          padding:'2vh 0 2vh 2vw',
          overflowY: 'auto',
          boxShadow: '1px 0 8px 0 #e3e7f1',
          zIndex: 2
        }}>
          {/* Subject tabs */}
          <div style={{marginBottom:'2vh'}}>
            {SUBJECTS.map(subject => (
              <button
                key={subject.name}
                onClick={() => handleSubject(subject.name)}
                style={{
                  display:'block',
                  width:'100%',
                  padding:'1vh 1vw',
                  marginBottom:'0.7vh',
                  border:'none',
                  background: selectedSubject === subject.name ? '#e3e7f1' : '#fff',
                  color: selectedSubject === subject.name ? '#5d8aa8' : '#2c3e50',
                  fontWeight: selectedSubject === subject.name ? 600 : 400,
                  fontSize:'1.05em',
                  borderRadius: '8px',
                  cursor:'pointer',
                  transition:'background 0.16s',
                  boxShadow: selectedSubject === subject.name ? '0 2px 14px 0 #cfdbe9' : 'none'
                }}
              >{subject.name}</button>
            ))}
          </div>
          {/* Topics */}
          <nav style={{marginTop:'2vh'}}>
            {currentSubject.topics.map((topic, idx) => (
              <button
                key={topic.title}
                onClick={() => handleTopic(idx)}
                style={{
                  display:'block',
                  width:'95%',
                  textAlign:'left',
                  fontSize:'1em',
                  padding:'1.1vh 1vw',
                  marginBottom:'0.4vh',
                  border:'none',
                  background: selectedTopicIdx === idx ? '#5d8aa8' : '#fff',
                  color: selectedTopicIdx === idx ? '#fff' : '#2c3e50',
                  fontWeight: selectedTopicIdx === idx ? 600 : 400,
                  borderRadius:'8px',
                  cursor:'pointer',
                  boxShadow: selectedTopicIdx === idx ? '0 2px 12px rgba(92,104,128,0.12)' : 'none',
                  transition:'background 0.16s'
                }}
              >{topic.title}</button>
            ))}
          </nav>
        </aside>

        {/* RIGHT PANEL - Dynamic lesson */}
        <section style={{
          width: '75%',
          height:'100%',
          padding:'2vh 4vw 2vh 2vw',
          overflow:'hidden',
          // Card styling
          display:'flex',
          flexDirection:'column',
        }}>
          <Fade visible={true}>
              <div style={{
                background:'#fff',
                borderRadius:'8px',
                boxShadow:'0 5px 20px 0 #e3e7f1',
                padding:'2.5vw 2.5vw 2vw 2vw',
                margin:'auto',
                minHeight:'60vh',
                maxHeight:'66vh',
                overflow:'auto'
              }}>
                {currentTopic.content}
                {/* YouTube Link if present */}
                {currentTopic.youtube &&
                  <div style={{marginTop: '1.5em'}}>
                    <a
                      href={currentTopic.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background:'#5d8aa8',
                        color:'#fff',
                        borderRadius:'6px',
                        padding:'0.7em 1.2em',
                        fontWeight:600,
                        textDecoration:'none',
                        boxShadow:'0 2px 8px 0 #bdd7e7',
                        fontSize:'1em',
                      }}>
                      YouTube Learning Link
                    </a>
                  </div>
                }
              </div>
          </Fade>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{
        position:'absolute',
        bottom:0,
        width:'100%',
        height:'6vh',
        background:'#f8f9fb',
        textAlign:'center',
        padding:'1em 0 0 0',
        fontSize:'1.04em',
        color:'#2c3e50',
        letterSpacing:'0.01em',
        borderTop:'1px solid #e3e7f1',
        zIndex: 4
      }}>
        Created by: Ciara Christille Bagayan | Maryshe Genetiano | Nathaniel Ceralde
      </footer>
    </div>
  );
}