import React from 'react';
    
    export default class TodoBox extends React.Component {
        render() {
            return (
                <div className="todoBox">
                    <h1>Todos</h1>
                    <TodoList />
                    <TodoForm />
                </div>
            );
        }
    }
    
    class TodoList extends React.Component {
    	render(){
    		return (
    			<div>
      				I am a TodoList.
    			</div>
    		);
    	}
    }
    
    class TodoForm extends React.Component {
    	render(){
    		return(
    		<div>
      			I am a TodoForm.
    		</div>
    		);
    	}
    }
