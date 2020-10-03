import { useState } from 'react';
import styles from '../styles/colors.module.scss'
import classnames from 'classnames'

const Colors = () => {
  const [counter, setCounter] = useState(0);
  var containerStyle = classnames(
    styles.container,
    [styles.red, styles.white, styles.blue][counter % 3],
  )
  console.log(containerStyle)
  return (
    <div onClick={() => setCounter(counter + 1)} className={containerStyle}></div>
  )
}

export default Colors;