import Todos from 'containers/Todos';
import { Component } from 'react';
import styles from './index.module.scss';


export default class App extends Component {

  render() {
    return (
      <div className={styles.root}>
        <Todos />
      </div>
    );
  }
}