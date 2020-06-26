package com.talentpath.springboot.springbootfscrudwmaven.course;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CoursesService {

    private static List<Course> courses = new ArrayList<>();
    private static long idCounter = 0;

    static { // hardcoded courses
        courses.add(new Course(++idCounter, "Biology 101", "BIOL101", "First Semester Introductory Course to Biology", 92L));
        courses.add(new Course(++idCounter, "Biology 102", "BIOL102", "Second Semester Introductory Course to Biology", 91L));
        courses.add(new Course(++idCounter, "Chemistry 111", "CHEM111", "First Semester Introductory Course to Chemistry", 87L));
        courses.add(new Course(++idCounter, "Chemistry 112", "CHEM112", "Second Semester Introductory Course to Chemistry", 79L));
        courses.add(new Course(++idCounter, "English 101", "ENGL101", "First Semester Introductory Course to English", 92L));
        courses.add(new Course(++idCounter, "English 102", "ENGL102", "Second Semester Introductory Course to English", 95L));
        courses.add(new Course(++idCounter, "Calculus 141", "MATH141", "First Semester Introductory Course to Calculus", 75L));
        courses.add(new Course(++idCounter, "Statistics 205", "STAT205", "First Semester Introductory Course to Applied Statistics", 93L));
        courses.add(new Course(++idCounter, "History 112", "HIST112", "First Semester Introductory Course to Post Civil War American History", 88L));
        courses.add(new Course(++idCounter, "History 298", "HIST298", "First Semester Introductory Course to Global History", 96L));
    }

    public List<Course> findAll() { //Show all courses
        return courses;
    }

    public Course save(Course course){
        if (course.getId() <= 0) {
            course.setId(++idCounter);
            courses.add(course);
        } else {
            deleteById(course.getId());
            courses.add(course);
        }
        return course;
    }

    public Course deleteById(long id) {
        Course course = findById(id);

        if (course == null)
            return null;

        if (courses.remove(course)) {
            return course;
        }

        return null;
    }

    public Course findById(long id) {
        for (Course course : courses) {
            if (course.getId() == id) {
                return course;
            }
        }

        return null;
    }
}
