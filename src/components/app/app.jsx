import Container from 'components/container';
import { Component } from 'react';
import styles from './index.module.scss';

export default class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        icon: 'highlight',
        category: 1,
        description: 'Доделать проект',
        location: 'Офис',
        date: new Date(),
        done: false
      },
      {
        id: 2,
        icon: 'walk',
        category: 2,
        description: 'Сходить к друзьям',
        location: 'метро "Пушкинская',
        date: new Date(),
        done: false
      },
      {
        id: 3,
        icon: 'shop',
        category: 3,
        description: "Сходить за покупками",
        location: 'Гипермаркет Глобус',
        date: new Date(),
        done: false
      }
    ]
  }

  render() {
    return (
      <div className={styles.root} >
        <Container todos={this.state.todos} />
      </div>
    );
  }
}