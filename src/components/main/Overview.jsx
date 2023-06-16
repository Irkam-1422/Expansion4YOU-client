import React, {useState, useRef, useEffect} from 'react'
import styles from '../../styles/Main.module.css'
import animStyles from '../../styles/Animation.module.css'
import {observer} from '../../observers.js'

export const Overview = () => {

  const title1 = useRef(null)
  const title2 = useRef(null)
  const text = useRef(null)
  const stop = useRef(null)
  const remark = useRef(null)

  useEffect(() => {
    let elements = [title1.current,title2.current]
    let elements2 = [text.current,stop.current]
    for (let elm of elements) {
      if (elm) observer(`${animStyles.hiddenLeft}`).observe(elm);
    }
    for (let elm of elements2) {
      if (elm) observer(`${animStyles.hiddenOp}`).observe(elm);
    }
    if (remark.current) observer(`${animStyles.hiddenRight}`).observe(remark.current);
})



  return (
    <div className={styles.overviewCont}>
        {/*     max-height: 400px;
    margin-top: 25vh; */}
        <div className={`${styles.title1} ${animStyles.hiddenLeft}`} ref={title1}>Oh, wait!</div>
        {/* background: #caaa7e; color: black; */}
        <div className={`${styles.title2} ${animStyles.hiddenLeft}`} ref={title2}>Just a quick warning before we start...</div>
        {/*      background: #85a3a9; color: black;  */}
        <div id="typed-strings" className={`${styles.textCont} ${animStyles.hiddenOp}`} ref={text}>
            <span>Beware, boosting your digital marketing strategy can <span className={styles.span}>attract new customers significantly</span>.</span> <br />
            <span>This can cause <span className={styles.span}>severe growth</span> of your <span className={styles.span}>revenue</span> and <span className={styles.span}>customer loyality</span>. </span><br />
            <span>All the content we are showing here is based on <span className={styles.span}>real life cases</span>, </span><br />
            <span>and may cause the addiction to admiring the digital marketing, </span><br />
            <span>and the will to <span className={styles.span}>change your business for the best</span>.</span><br />
        </div>
        <div  className={styles.stopCont}>
            <div className={`${styles.stop} ${animStyles.stop} ${animStyles.hiddenOp}`} ref={stop}>
                STOP NOW!
            </div>
            <span  className={`${styles.remark} ${animStyles.hiddenRight}`} ref={remark}>*Or you might upset your competition...</span>
        </div>
    </div>
  )
}
