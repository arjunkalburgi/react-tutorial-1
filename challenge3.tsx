import { createStore, Action } from 'redux';
import { connect, Provider } from 'react-redux';
import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
// REDUX

const ADD = "ADD";
const MINUS = "MINUS";

interface FizzBuzzState {
    number: number
}

/*
    reducer - takes in state and action 
    keeping an "action" allows you to keep history. 
    
    Reducer delievers to 
    
*/ 
function numberReducer(state: FizzBuzzState = { number: 0}, action: Action): FizzBuzzState {
    // return new state
    // action = { type: "ADD" }
    if (action.type == ADD) {
        return {
            number: state.number + 1
        }; 
    } 
    if (action.type == MINUS) {
        return {
            number: state.number - 1
        }; 
    }
    return state;
}

interface ReduxStore<T> {
    state: T;
    subscribe: (f: () => void) => void;
    dispatch: (action: Action) => void;
}

// let store = createStore(numberReducer);
const store = createStore(numberReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// REACT

interface FizzBuzzDisplayProps {
	number: number
}

class FizzBuzzDisplay extends Component<FizzBuzzDisplayProps,{}> {
	render() {
		if ((this.props.number) % 3 == 0) {
			return <div>"Fizz"</div>
		}
		else if ((this.props.number) % 5 == 0) {
			return <div>"Buzz"</div>
		} else {
			return <div>{this.props.number}</div>
		}
	}
}

interface FizzBuzzProps {
    plus: () => void;
    minus: () => void;
}

class FizzBuzz extends Component<FizzBuzzProps, {}> {
	constructor(props) {
		super(props);
	}
	render() {
		return (<div>
					<ConnectedFizzBuzzDisplay />
					<button onClick={this.props.minus}>-</button><button onClick={this.props.plus}>+</button>
				</div>)
	}
}

class BuzzFizzDisplay extends Component<FizzBuzzDisplayProps,{}> {
	render() {
		if ((this.props.number) % 3 == 0) {
			return <div>"Buzz"</div>
		}
		else if ((this.props.number) % 5 == 0) {
			return <div>"Fizz"</div>
		} else {
			return <div>{this.props.number}</div>
		}
	}
}

class BuzzFizz extends Component<FizzBuzzProps, {}> {
	constructor(props) {
		super(props);
	}
	render()  {
		return (<div>
					<ConnectedBuzzFizzDisplay />
					<button onClick={this.props.minus}>-</button><button onClick={this.props.plus}>+</button>
				</div>)
	}
}

function mapDispatchToFizzBuzzProps(dispatch, ownProp) {
    return {
        plus: () => dispatch({ type: ADD }),
        minus: () => dispatch({ type: MINUS })
    }
}

function mapStateToFizzBuzzDisplayProps(state, ownProp) {
    return {
        number: state.number
    }
}


let fizzBuzzFactory = connect(() => {}, mapDispatchToFizzBuzzProps);
let ConnectedFizzBuzz = fizzBuzzFactory(FizzBuzz);

let fizzBuzzDisplayFactory = connect(mapStateToFizzBuzzDisplayProps);
let ConnectedFizzBuzzDisplay = fizzBuzzDisplayFactory(FizzBuzzDisplay);

let ConnectedBuzzFizz = fizzBuzzFactory(BuzzFizz); 
let ConnectedBuzzFizzDisplay = fizzBuzzDisplayFactory(FizzBuzzDisplay);

render(<Provider store={store}><ConnectedFizzBuzz /></Provider>, document.getElementById("root"));

