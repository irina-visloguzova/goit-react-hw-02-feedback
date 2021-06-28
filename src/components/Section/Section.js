import React from "react"
import PropTypes from 'prop-types'
import s from './Section.module.css'


const Section = ({ title, children }) => (
  <section className={s.Section}>
    <h2>{title}</h2>
    {children}
  </section>
)

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section
