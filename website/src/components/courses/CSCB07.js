import React from 'react';
import Course from '../parts/Course'; // Import the Course component
import CourseNotes from '../CourseNotes'; // Import the CourseNotes component

function CSCB07() {

  const descriptionCode = `public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Welcome to my tutorial!");
    }
  }`;

  const notes = ['https://minjun1kim.notion.site/Week1-Introduction-to-Java-ff78c4a8de7c457089690f5d108dab26?pvs=4', 
    ];

  return (
    <div>
      <Course 
        courseName="CSCB07: Software Design"
        semester="Fall 2023"
        concepts="Version Control, OOP, Testing, Design Patterns, SOLID Principles, Android app development"
        languagesTools="Java"
        difficultyStars={3.5} // Adjust as needed
        descriptionCode={descriptionCode} // Pass the Java code as a string
        courseLink='https://utsc.calendar.utoronto.ca/course/cscb07h3'
      />

        <CourseNotes notes={notes} />
    </div>
  );
}

export default CSCB07;
