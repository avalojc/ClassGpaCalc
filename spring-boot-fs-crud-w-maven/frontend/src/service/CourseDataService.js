import axios from 'axios'

const STUDENT = 'javalo'
const COURSE_API_URL = 'http://localhost:8080'
const STUDENT_API_URL = `${COURSE_API_URL}/student/${STUDENT}`

class CourseDataService {

    retrieveAllCourses(name) {
        return axios.get(`${STUDENT_API_URL}/courses`);
    }

    retrieveCourse(name, id) {
        //console.log('executed service')
        return axios.get(`${STUDENT_API_URL}/courses/${id}`);
    }

    deleteCourse(name, id) {
        //console.log('executed service')
        return axios.delete(`${STUDENT_API_URL}/courses/${id}`);
    }

    updateCourse(name, id, course) {
        //console.log('executed service')
        return axios.put(`${STUDENT_API_URL}/courses/${id}`, course);
    }

    createCourse(name, course) {
        //console.log('executed service')
        return axios.post(`${STUDENT_API_URL}/courses/`, course);
    }
}

export default new CourseDataService()