import React from 'react';
import Course from '../parts/Course'; // Import the Course component

function MATA29() {
  const descriptionCode = `public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello, World!");
    }
  }`;

  return (
    <div>
      <Course
        courseName="MATA29: Calculus I for Life Sciences"
        semester="Fall 2023"
        concepts="Calculus, Linear Algebra, Differential Equations"
        languagesTools="LaTeX"
        difficultyStars={4} // Adjust as needed
        descriptionCode={descriptionCode} // Pass the Java code as a string
      />
    </div>
  );
}

export default MATA29;
