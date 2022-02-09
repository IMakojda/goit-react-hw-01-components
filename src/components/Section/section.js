import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css'

function Section({ title, children }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;