import React, { Component } from 'react';
import ListCoursesComponent from './ListCoursesComponent';
import CourseComponent from './CourseComponent';

class StudentApp extends Component {
    render() {
        return (
            <Router>
                <h1>Student Application</h1>
                <Switch>
                    <Route path="/" exact component={ListCoursesComponent} />
                    <Route path="/course" exact component={ListCoursesComponent} />
                    <Route path="/course/:id" component={CourseComponent}/>
                </Switch>
            </Router>
        )
    }
}

export default StudentApp