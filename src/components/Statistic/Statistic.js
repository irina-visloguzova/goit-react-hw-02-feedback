import React from "react"
import PropTypes from "prop-types"
import s from "./Statistic.module.css"

const Statistic = ({ label, value }) => (
  <li className={s.Elem}>
    <span className={s.textStat}>{label}</span>
    {label !== "Positive feedback" ? <div>{value}</div> : <div>{value} &#37;</div>}
  </li>
)

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default Statistic
