import React from 'react'
import { Component } from 'react';
import CourseDataService from '../service/CourseDataService';

const STUDENT = 'javalo'

class ListCoursesComponent extends Component{

    constructor(props) {
        super(props)
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        CourseDataService.retrieveAllCourses(STUDENT)//HARDCODED
            .then(
                response => {
                    console.log(response);
                }
            )
    }

    render() {
        return(
            <div className="courseList container">
                <h3>All Courses</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#Value</td>
                                <td>#Description</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListCoursesComponent