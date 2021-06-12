import React from "react";

class Tasks extends React.Component {
  state = {
    tasks: [],
    throwLine : false,
  };

  myRef = React.createRef();

  componentDidMount() {
    this.setState({
      tasks: [{ id: 1, task: "Тестовое задание 1", clas: "liN" }],
    });
  }

  addTask = () => {
    let task = this.myRef.current.value;
    this.setState({
      tasks: [
        ...this.state.tasks,
        { id: this.state.tasks.length + 1, task: task },
      ],
    });
    this.myRef.current.value = "";
  };

  deleteTask = () =>
    this.setState({
      tasks: this.state.tasks.filter(
        ({ id }) => id !== this.state.tasks.length
      ),
    });

 /*  editClas = (targetId) =>
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === targetId && task.clas === "liN"
          ? { clas: "liT" }
          : task.id === targetId && task.clas === "liT"
          ? { clas: "liN" }
          : task
      ),
    });
 */
    editClas1 = () => this.setState({throwLine : !this.state.throwLine})

  render() {
    const { tasks } = this.state;
    return (
      <>
        <div>
          <textarea ref={this.myRef}></textarea>
          <button onClick={this.addTask}>Добавить</button>
          <button onClick={this.deleteTask}>Удалить</button>
        </div>
        <ul>
          {tasks.map(({ id, task, clas }) => (
/*             <li key={id} className={clas}> */
            <li key={id} className={this.state.throwLine ? 'liT' : 'liN'}>
{/*               {task} <button onClick={this.editClas(id)}>Edit</button> */}
              {task} <button onClick={this.editClas1}>Edit</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Tasks;
