import React, { Component } from "react";
import styles from './Button.module.css'

export default class Button extends Component {
  render() {
    const { onClick, loading } = this.props;

    return (
      <button type="button" onClick={onClick} className={styles.button} disabled={loading}>
        {loading ? 'Loading...' : 'Load More'}
      </button>
    );
  }
}