import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FileUpload from 'material-ui/svg-icons/file/file-upload';
import TextField from 'material-ui/TextField';

export default class FileInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue:''
        }
    }

    onChange(e) {
        this.setState({inputValue: e.target.value});
        this.props.onChange(e)
    }

    render() {
        return (
            <div className="file-input">
                <FloatingActionButton mini={true} style={{position:'relative', }}>
                    <label htmlFor={this.props.name || "file"}><FileUpload /></label>
                </FloatingActionButton>
                <input name={this.props.name || "file"} id={this.props.name || "file"} type="file" className="inputfile" onChange={this.onChange.bind(this)} />
                <TextField
                    hintText={this.props.hintText}
                    style={{marginLeft:'1rem'}}
                    value={this.state.inputValue}
                />
            </div>
        );
    }
}