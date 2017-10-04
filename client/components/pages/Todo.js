import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, Col, Button } from 'reactstrap';
import { getTodos } from '../../actions/todo-actions';
class Todo extends Component {

    constructor(props) {

        super(props);

        this.listTodos = this.listTodos.bind(this);

    }

    componentDidMount() {

        this.props.getTodos()
            .then(res => {

                console.log('Yep Todos', res)

            })
            .catch(err => {

                console.log('Nope Todos', err);
            })
    }

    listTodos() {

        let { todos } = this.props;

        if(todos && todos.length) {

            return todos.map((todo,i) => {

                return <ListGroupItem key={i}>
                        <ListGroupItemHeading>
                            {todo.title}
                        </ListGroupItemHeading>
                        <ListGroupItemText>{todo.description}</ListGroupItemText>
                    </ListGroupItem>
            })
        }

        return(<div>No Todos</div>)

    }

    render() {

        return(<div>
            Todos { this.props.todos.length }
            <ListGroup>
                {this.listTodos()}
            </ListGroup>
            
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        todos: state.todo
    }
}
export default  connect(mapStateToProps,{getTodos})(Todo)