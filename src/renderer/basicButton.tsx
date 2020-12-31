import ReactDom from 'react-dom';
import React from 'react';

type Props = {
    init: string;
};

type State = {
    command: string;
    result: string;
};

/**
 * Button created by react
 */
class BasicButton extends React.Component<Props, State> {

    constructor(prop: Props) {
        super(prop);
        this.state = {command: prop.init, result: ""};
    }
    // detect when the text change
    textChange:(event :React.ChangeEvent<HTMLInputElement>) => void = (event) => {
        this.setState({command:event.target.value});
    }

    clickAction:()=>void = () => {
        console.log('react button clicked!');
        if(this.state.command) {
            window.mainProcessFunc(this.state.command).then(res=>{
                this.setState({result: res});
            }).catch(err=>{
                this.setState({result: "error"});
            });
        }
    }

    render: () => JSX.Element = () => {
        return (
            <div>
                <input type="text" name="text" onChange={this.textChange} value={this.state.command} width={"300px"} ></input>
                <button onClick={this.clickAction}>Submit !!</button>
                <div id="resultArea">{this.state.result}</div>
            </div>
        );
    }
}

// call from preload.ts
export function loadToDom() {
    ReactDom.render(<BasicButton init={'write command here'}></BasicButton>, document.getElementById("main-content"));
}
