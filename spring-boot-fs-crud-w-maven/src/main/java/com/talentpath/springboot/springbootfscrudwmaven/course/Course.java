package com.talentpath.springboot.springbootfscrudwmaven.course;

public class Course {
    private Long id;
    private String courseName;
    private String courseCode;
    private String description;

    public Course(){

    }


    public Course (long id, String courseName, String courseCode, String description){
        super();
        this.id = id;
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseCode() {
        return courseCode;
    }

    public void setCourseCode(String courseCode) {
        this.courseCode = courseCode;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


}
