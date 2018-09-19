const data = require('./course_data_2019.json')

console.log(data[0])

const courses = data[0].courses
    .map(course => ({
        name: course.name,
        code: course.code,
        requirements: course.requirements,
        study_level: course.study_level
    })).filter(course => !course.requirements)


console.log(courses)