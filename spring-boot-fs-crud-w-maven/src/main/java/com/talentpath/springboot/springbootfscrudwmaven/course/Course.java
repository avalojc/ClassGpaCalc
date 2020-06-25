package com.talentpath.springboot.springbootfscrudwmaven.course;

public class Course {
    private Long id;
    private String courseName;
    private String courseCode;
    private String description;
    private Long grade;

    public Course(){

    }


    public Course (long id, String courseName, String courseCode, String description, Long grade){
        super();
        this.id = id;
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.description = description;
        this.grade = grade;
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

    public Long getGrade() {
        return grade;
    }

    public void setGrade(Long grade) {
        this.grade = grade;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((description == null) ? 0 : description.hashCode());
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((courseName == null) ? 0 : courseName.hashCode());
        result = prime * result + ((courseCode == null) ? 0 : courseCode.hashCode());
        result = prime * result + ((grade == null) ? 0 : grade.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null) return false;
        if (getClass() != obj.getClass()) return false;
        Course other = (Course) obj;
        // description comparison
        if (description == null) {
            if (other.description != null) return false;
        }
        else if (!description.equals(other.description)) return false;
        // id comparison
        if (id == null) {
            if (other.id != null) return false;
        }
        else if (!id.equals(other.id)) return false;
        // courseCode comparison
        if (courseCode == null) {
            if (other.courseCode != null) return false;
        }
        else if (!courseCode.equals(other.courseCode)) return false;
        // courseGrade comparison
        if (grade == null) {
            if (other.grade != null) return false;
        }
        else if (!grade.equals(other.grade)) return false;
        // courseName comparison
        if (courseName == null) {
            if (other.courseName != null) return false;
        }
        else if (!courseName.equals(other.courseName)) return false;
        return true;
    }

}
