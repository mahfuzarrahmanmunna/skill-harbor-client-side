import React, { use, useState } from 'react';
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";
import { FaBookOpen, FaCalendarAlt, FaChalkboardTeacher, FaMoneyBillWave } from "react-icons/fa";
import CourseTable from './CourseTable';


const EnrolledCourseTable = ({ enrolledCoursePromiseApi }) => {
    const initialMyCourse = use(enrolledCoursePromiseApi)
    const [courses, setCourses] = useState(initialMyCourse)

    return (
        <>
            {courses.map((course, index) => <CourseTable course={course} index={index} key={index} setCourses={setCourses} />)}
        </>
    );
};

export default EnrolledCourseTable;