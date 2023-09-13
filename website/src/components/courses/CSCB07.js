import React from 'react';
import Course from '../parts/Course'; // Import the Course component

function CSCB07() {
  const descriptionCode = `public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello, World!");
    }
  }`;

  return (
    <div>
      <Course
        courseName="CSCB07: Software Design"
        semester="Fall 2023"
        concepts="Web Development, React.js, Node.js"
        languagesTools="JavaScript, HTML, CSS"
        difficultyStars={4} // Adjust as needed
        descriptionCode={descriptionCode} // Pass the Java code as a string
      />
    </div>
  );
}

export default CSCB07;
