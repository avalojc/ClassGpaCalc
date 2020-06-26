import React from 'react'
import { Component } from 'react';
import CourseDataService from '../service/CourseDataService';

const STUDENT = 'javalo'

class ListCoursesComponent extends Component{

    constructor(props) {
        super(props)
            this.state = {
            courses: [],
            message: null,
            pointsIncrementer: 0
        }
        this.refreshCourses = this.refreshCourses.bind(this)
        this.updateCourseClicked = this.updateCourseClicked.bind(this)
        this.addCourseClicked = this.addCourseClicked.bind(this)
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        CourseDataService.retrieveAllCourses(STUDENT)//HARDCODED
            .then(
                response => {
                    // console.log(response);
                    this.setState({ courses: response.data })
                }
            )
    }


    deleteCourseClicked(id) {
        CourseDataService.deleteCourse(STUDENT, id)
            .then(
                response => {
                    this.setState({ message: `Delete of course ${id} Successful` })
                    this.refreshCourses()
                }
            )
    }

    updateCourseClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/courses/${id}`)
    }

    addCourseClicked() {
        this.props.history.push(`/courses/-1`)
    }

    convertScoreToLetter(object){
        let letterGrade = null
        let grade = object.grade
        // console.log(object.grade)
        if(grade>=90){
            letterGrade="A"
        }else if(grade>=87){
            letterGrade="B+"
        }else if(grade>=80){
            letterGrade="B"
        }else if(grade>=77){
            letterGrade="C+"
        }else if(grade>=70){
            letterGrade="C"
        }else if(grade>=67){
            letterGrade="D+"
        }else if(grade>=60){
            letterGrade="D"
        }else if(grade<60&&grade>0){
            letterGrade=0
        }else{
            letterGrade="Grade not submitted"
        }
        return letterGrade
        }

        gpaValue(object){
            let GPA = null
            let grade = object.grade
            if(grade>=90){
                GPA="4"
            }else if(grade>=87){
                GPA="3.5"
            }else if(grade>=80){
                GPA="3"
            }else if(grade>=77){
                GPA="2.5"
            }else if(grade>=70){
                GPA="2"
            }else if(grade>=67){
                GPA="1.5"
            }else if(grade>=60){
                GPA="1"
            }else if(grade<60&&grade>0){
                GPA="0"
            }else{
                GPA="Grade not submitted"
            }
            return GPA
            }

        gpaForPoints=()=>{
            // this.setState({pointsIncrementer:0})
            let pointIncr = 0
            let GPA = 0
        
            for(let i=0; i < this.state.courses.length; i++){
                // this.state.courses[i]
            let grade = this.state.courses[i].grade

            if(grade>=90){
                GPA=4
            }else if(grade>=87){
                GPA=3.5
            }else if(grade>=80){
                GPA=3
            }else if(grade>=77){
                GPA=2.5
            }else if(grade>=70){
                GPA=2
            }else if(grade>=67){
                GPA=1.5
            }else if(grade>=60){
                GPA=1
            }else if(grade<60&&grade>0){
                GPA=0
            }
            pointIncr = pointIncr + GPA
            }
            return (pointIncr)
        }

        calculate(){
            let pointIncr = 0
            let hoursAttempted = 0
            let GPA = 0
        
            for(let i=0; i < this.state.courses.length; i++){
                // this.state.courses[i]
                console.log(this.state.courses[i].grade)
            let grade = this.state.courses[i].grade

            if(grade>=90){
                GPA=4
            }else if(grade>=87){
                GPA=3.5
            }else if(grade>=80){
                GPA=3
            }else if(grade>=77){
                GPA=2.5
            }else if(grade>=70){
                GPA=2
            }else if(grade>=67){
                GPA=3
            }else if(grade>=60){
                GPA=1
            }else if(grade<60&&grade>0){
                GPA=0
            }
            pointIncr = pointIncr + GPA
            hoursAttempted = hoursAttempted + 3
            }
            console.log("points"+pointIncr)
            console.log("hours"+hoursAttempted)
            return (((pointIncr*3)/(hoursAttempted)).toFixed(3))
        }

    render() {
        
        return(
            <div className="courseList container">
                <h3>All Courses</h3>
                <div className="container">
                    <table className="table container">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Course Name</th>
                                <th>Course Code</th>
                                <th>Description</th>
                                <th>Letter Grade</th>
                                <th>GPA Value</th>
                                <th>GPA Weight</th>
                                <th>Grade</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                this.state.courses.map(
                                    course =>
                                        <tr key={course.id}> 
                                            <td>{course.id}</td>
                                            <td>{course.courseName}</td>
                                            <td>{course.courseCode}</td>
                                            <td>{course.description}</td>
                                            <td>{this.convertScoreToLetter(course)}</td>
                                            <td>{this.gpaValue(course)}</td>
                                            <td>3 hours</td>
                                            <td>{course.grade}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateCourseClicked(course.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteCourseClicked(course.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                            
                        </tbody>

                    </table>
                    <div className="gpaRow">
                        <div>Calc GPA: {this.calculate()}</div>
                    </div>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addCourseClicked} id="addButton">Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListCoursesComponent