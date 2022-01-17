import Container from 'components/container';
import { Component } from 'react';
import { Colors } from '@blueprintjs/core'
import styles from './index.module.scss';
import Todos from 'components/todos';
import NewTodo from 'components/newTodo';
import Summary from 'components/summary';
import Overlay from 'components/overlay';
import TodoAdd from 'components/todoAdd';

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
      <div className={styles.root} style={{ background: Colors.LIGHT_GRAY4 }}>
        <Container
          activeRight={this.state.addNew}
          left={<Todos todos={this.state.todos} />}
          right={<NewTodo />}
          overlay={
            <Overlay
              left={<Summary todos={this.state.todos} />}
              right={<TodoAdd />} />
          }
        />
        <button onClick={this.handleClick}>Переключить</button>
      </div>
    );
  }
}