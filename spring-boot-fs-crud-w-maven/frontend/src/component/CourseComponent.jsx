import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CourseDataService from '../service/CourseDataService';

const STUDENT = 'javalo'

class CourseComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: '',
            courseCode:'', 
            courseName:'', 
            grade: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }
        CourseDataService.retrieveCourse(STUDENT, this.state.id)
            .then(response => this.setState({
                description: response.data.description,
                // dataObject: response.data,
                courseCode: response.data.courseCode,
                courseName: response.data.courseName,
                grade: response.data.grade,
            }))
    }

    onSubmit(values) {
        let username = STUDENT
        let gradeReturn = ''
        if(values.grade=== null){
            gradeReturn = ''
        } else {gradeReturn=values.grade}
        let course = {
            id: this.state.id,
            description: values.description,
            grade: gradeReturn,
            courseCode: values.courseCode,
            courseName: values.courseName,
        }

        if (this.state.id === -1) {
            CourseDataService.createCourse(username, course)
                .then(() => this.props.history.push('/courses'))
        } else {
            CourseDataService.updateCourse(username, this.state.id, course)
                .then(() => this.props.history.push('/courses'))
        }

        console.log(values);
    }

    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a Description'
        } if (values.grade >100 || values.grade < 0) {
            errors.grade = 'Please enter a number between 0 and 100'
        } 
        console.log(errors)
        return errors
    }

    render() {

        let { description, id, courseCode, courseName, grade } = this.state

    
        return (
            <div>
                <h3>Course</h3>
                    <div className="formSpace container">
                            <div className="infoBar container" >
                                <div>id: {id}</div>
                                <div>Description: {description}</div>
                                <div>Course Code: {courseCode}</div>
                                <div>Course Name: {courseName}</div>
                                <div>Grade: {grade}</div>
                            </div>
                            <div className="container">
                                <Formik initialValues={{ id, courseCode, courseName, description, grade }} enableReinitialize
                                        validateOnChange={false}
                                        validateOnBlur={false}
                                        onSubmit ={this.onSubmit}
                                        validate={this.validate}
                                >         
                                    {                       //id name code
                                        (props) => (
                                            <Form>
                                                <fieldset className="form-group">
                                                    <label>Id</label>
                                                    <Field className="form-control" type="text" name="id" disabled />
                                                </fieldset>

                                                <fieldset className="form-group">
                                                    <label>Course Code</label>
                                                    <Field className="form-control" type="text" name="courseCode" />
                                                </fieldset>

                                                <fieldset className="form-group">
                                                    <label>Course Name</label>
                                                    <Field className="form-control" type="text" name="courseName" />
                                                </fieldset>

                                                <fieldset className="form-group">
                                                    <label>Description</label>
                                                    <Field className="form-control" type="text" name="description" />
                                                </fieldset>

                                                <fieldset className="form-group">
                                                    <label>Grade</label>
                                                    <Field className="form-control" type="text" name="grade" />
                                                </fieldset>

                                                <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                                <ErrorMessage name="grade" component="div" className="alert alert-warning" />

                                                <button className="btn btn-success" type="submit">Save</button>
                                            </Form>
                                        )
                                    }
                                </Formik>
                            </div>
                    </div>
            </div>
        )
    }
}

export default CourseComponent
