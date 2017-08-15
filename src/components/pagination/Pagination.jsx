import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Previous from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import Next from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Input from 'material-ui/svg-icons/action/input';
import TextField from 'material-ui/TextField';

export default class Pagination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: props.page
        }
    }

    onSetPage(e) {
        e.preventDefault();
        this.props.onPageChange(this.state.page);
    }

    onPrevious(e) {
        e.preventDefault();
        const prev = this.props.page-1;
        if(prev >=1)
            this.props.onPageChange(prev);
    }

    onFirst(e) {
        e.preventDefault();
        this.props.onPageChange(1);
    }
    onLast(e) {
        e.preventDefault();
        this.props.onPageChange(this.props.total);
    }

    onNext(e) {
        e.preventDefault();
        const next = this.props.page+1;
        if(next <= this.props.total)
            this.props.onPageChange(next);
    }

    onChange(e) {
        e.preventDefault();
        this.setState({page:e.target.value});
    }

    render() {

        const currentPage = this.props.page;
        const hasPrevious = this.props.page > 1;
        const hasNext = this.props.page < this.props.total;
        const isTotal = this.props.total == this.props.page;
        const isFirst = this.props.page == 1;

        return (
            <div className="pagination">
                {hasPrevious && <IconButton onClick={this.onPrevious.bind(this)}><Previous /></IconButton>}
                {!isFirst && <RaisedButton onClick={this.onFirst.bind(this)} label={1} primary={true} />}
                <TextField onChange={this.onChange.bind(this)} name="page" inputStyle={{ textAlign: 'center' }} style={{ width: "60px", marginLeft: '1rem' }} value={this.state.page} />
                <IconButton onClick={this.onSetPage.bind(this)} tooltipPosition="top-center" tooltip="Go to page"><Input /></IconButton>
                {!isTotal && <RaisedButton onClick={this.onLast.bind(this)} label={this.props.total} primary={true} />}
                {hasNext && <IconButton onClick={this.onNext.bind(this)}><Next /></IconButton>}
            </div>
        );
    }
}