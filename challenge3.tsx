interface FizzBuzzState {
	number: number
}

interface FizzBuzzProps {
	number: number
}

class FizzBuzzDisplay extends React.Component<FizzBuzzProps,{}> {
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

class FizzBuzz extends React.Component<{},FizzBuzzState> {
	constructor(props) {
		super(props); 
		this.state = {number: 1}
		this.minus = this.minus.bind(this);
		this.plus = this.plus.bind(this);
	}
	minus() {
		this.setState(prevState => ({number: prevState.number-1}))
	}
	plus() {
		this.setState(prevState => ({number: prevState.number+1}));
	}
	render() {
		return (<div>
					<FizzBuzzDisplay number={this.state.number} />
					<button onClick={this.minus}>-</button><button onClick={this.plus}>+</button>
				</div>)
	}
}

ReactDOM.render(<FizzBuzz />, document.getElementById("root"));