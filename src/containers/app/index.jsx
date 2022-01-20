import Todos from 'containers/Todos';
import { Component } from 'react';
import styles from './index.module.scss';


export default class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        icon: 'highlight',
        category: '1',
        description: 'Доделать проект',
        location: 'Офис',
        date: new Date(),
        done: false
      },
      {
        id: 2,
        icon: 'walk',
        category: '2',
        description: 'Сходить к друзьям',
        location: 'метро "Пушкинская',
        date: new Date(),
        done: false
      },
      {
        id: 3,
        icon: 'shop',
        category: '3',
        description: "Сходить за покупками",
        location: 'Гипермаркет Глобус',
        date: new Date(),
        done: false
      },
      {
        id: 4,
        icon: 'calculator',
        category: '1',
        description: "Посчитать смету",
        location: 'Офис',
        date: new Date(),
        done: false
      },
      {
        id: 5,
        icon: 'envelope',
        category: '2',
        description: "Отправить письмо бабушке",
        location: 'Дом',
        date: new Date(),
        done: false
      }
    ],
    addNew: false
  }

  handleClick = () => this.setState({ addNew: !this.state.addNew })

  render() {
    return (
      <div className={styles.root}>
        <Todos />
      </div>
    );
  }
}