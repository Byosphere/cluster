import React, { Component } from 'react';
import Card from 'material-ui/Card';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FilterList from 'material-ui/svg-icons/content/filter-list';
import Face from 'material-ui/svg-icons/action/face';
import RaisedButton from 'material-ui/RaisedButton';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Chip from '../../components/chip/Chip.jsx';
import Flag from '../../components/flag/Flag.jsx';
import Pagination from '../../components/pagination/Pagination.jsx';
import { ScaleLoader } from 'halogen';
import Avatar from 'material-ui/Avatar';

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            isLoading: false,
            clusters: [
                {
                    type: 2,
                    members: [
                        { country: 'fr', username:'Jean Renee', genre: 'male', profilepicture:'../../../../public/images/images/main.jpg' },
                        { country: 'na', username:'Hubert', genre: 'male', profilepicture:'../../../../public/images/images/main.jpg' },
                        { country: 'jp', username:'Valerie', genre: 'female', profilepicture:'../../../../public/images/images/main.jpg' },
                        { country: 'na', username:'Hubert', genre: 'male', profilepicture:'../../../../public/images/images/main.jpg' },
                        { country: 'jp', username:'Valerie', genre: 'female', profilepicture:'../../../../public/images/images/main.jpg' },
                        { country: 'na', username:'Hubert', genre: 'male', profilepicture:'../../../../public/images/images/main.jpg' },
                        { country: 'jp', username:'Valerie', genre: 'female', profilepicture:'../../../../public/images/images/main.jpg' }
                    ],
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam commodi, hic quisquam necessitatibus. Deleniti a fugiat necessitatibus odio exercitationem, corporis perspiciatis molestias. Quisquam deleniti obcaecati repellendus tenetur cupiditate hic vero."
                }
            ],
            page: 50,
            total: 100
        };
    }

    handleChange(event, index, value) {
        this.setState({ value });
    }

    pageChange(page) {
        console.log(page);
    }

    render() {
        return (
            <div id="search">
                <div className="main-content">
                    <Card className="card">
                        <Toolbar>
                            <ToolbarGroup>
                                <ToolbarTitle text="Search Clusters" />
                                <FilterList style={{ marginLeft: '0.5rem' }} />
                                <SelectField autoWidth={true} value={this.state.value} onChange={this.handleChange.bind(this)} style={{ width: '140px', marginLeft: '0.5rem' }}>
                                    <MenuItem value={0} primaryText="All" />
                                    <MenuItem value={1} primaryText="Strict" />
                                    <MenuItem value={2} primaryText="Semi-strict" />
                                    <MenuItem value={3} primaryText="Open" />
                                </SelectField>
                                <ToolbarSeparator />
                                <Face style={{ marginLeft: '0.5rem' }} />
                                <SelectField autoWidth={true} value={this.state.value} onChange={this.handleChange.bind(this)} style={{ width: '200px', marginLeft: '0.5rem' }}>
                                    <MenuItem value={0} primaryText="All" />
                                    <MenuItem value={1} primaryText="between 1 and 4 people" />
                                    <MenuItem value={2} primaryText="more than 4 people" />
                                </SelectField>
                            </ToolbarGroup>
                            <ToolbarGroup>
                                <ToolbarSeparator />
                                <RaisedButton label="Refresh" primary={true} />
                            </ToolbarGroup>
                        </Toolbar>
                        {!this.state.isLoading && <Table fixedHeader={true} selectable={false} multiSelectable={false}>
                            <TableHeader displaySelectAll={false} enableSelectAll={false} adjustForCheckbox={false}>
                                <TableRow>
                                    <TableHeaderColumn style={{ width: "15%" }}>Type</TableHeaderColumn>
                                    <TableHeaderColumn style={{ width: "28%" }}>Members</TableHeaderColumn>
                                    <TableHeaderColumn style={{ width: "40%" }}>Description</TableHeaderColumn>
                                    <TableHeaderColumn style={{ width: "15%" }}></TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false} showRowHover={true}>
                                {this.state.clusters.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableRowColumn style={{ width: "15%" }}><Chip type={"type-" + row.type} /></TableRowColumn>
                                        <TableRowColumn className="members" style={{ width: "28%", whiteSpace: "normal" }}>
                                            {row.members.map((member, index) => (
                                                <div key={index} className="avatar-group">
                                                    <Flag nat={member.country} size={30} />
                                                    <Avatar size={30} src={member.profilepicture} />
                                                </div>
                                            ))}
                                        </TableRowColumn>
                                        <TableHeaderColumn style={{ width: "40%", whiteSpace: "normal", paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>
                                            {row.description.length > 150 ? row.description.substr(0, 150) + '...' : row.description}
                                        </TableHeaderColumn>
                                        <TableHeaderColumn style={{ width: "15%", whiteSpace: "normal" }}>
                                            <RaisedButton label="See" primary={true} />
                                        </TableHeaderColumn>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>}
                        {this.state.isLoading && <ScaleLoader color="#18ffff" size="60px" className="loader" />}
                        {!this.state.isLoading && <Pagination onPageChange={this.pageChange.bind(this)} page={this.state.page} total={this.state.total} />}
                    </Card>
                </div>
            </div>
        );
    }
}