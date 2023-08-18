
import { Component } from "react";
import styles from './Searchbar.module.css'


export default class Searchbar extends Component{
    state={
    photoName:''
    }
    handleNameChange = e => {
        this.setState({ photoName: e.currentTarget.value.toLowerCase()})
    }
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.photoName.trim() === '') {
            alert('Enter photo description!')
            return
        }
        this.props.onSubmit(this.state.photoName)
        this.setState({  photoName: '' });
    };
    render(){
        return (
            <header className={styles.searchbar}>
  <form onSubmit={this.handleSubmit} className={styles.form}>
    <button type="submit" className={styles.button}>
      <span className={styles.button_label}>Search</span>
    </button>

    <input
      className={styles.input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={this.state.photoName}
      onChange={this.handleNameChange}
    />
  </form>
</header>
        )
    }
}