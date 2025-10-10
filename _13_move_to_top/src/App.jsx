import React, { useRef } from 'react'
import { FaArrowUp } from "react-icons/fa";
import './App.css'
const App = () => {
  const topSectionRef = useRef(null);
  // this internally look like 
  //  const topSectionRef ={current:""}

  const styles = {
    heading: {
      textAlign: "center",
      fontSize: "24px",
      paddingTop: "32px"
    },

    sectionStyle: {
      height: "100vh",
      width: "100%",
      position: 'relative',
      backgroundColor: '#ccc',
    },


  }

  // handler function 
  const scrollToTop = () => {
    // window.scrollTo({
    //   top:0,
    //   scrollBehavior: "'smooth',"
    // })
    topSectionRef.current.scrollIntoView({
      behavior: "smooth",
    })

  }

  return (
    <div>

      <section ref={topSectionRef} style={styles.sectionStyle} >
        <h1 style={styles.heading}>Move to top</h1>
      </section>

      <section style={styles.sectionStyle}></section>

      <section style={styles.sectionStyle} >
        <FaArrowUp style={styles.arrowStyle} className="arrow-icon" onClick={scrollToTop} />
      </section>

    </div>
  )
}

export default App
