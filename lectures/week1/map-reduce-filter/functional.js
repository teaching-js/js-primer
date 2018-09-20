const data = require('./course_data_2019.json');

//console.log(data[0]);

const courses = data[0].courses.map(({ name, code, study_level: level }) => {
    return {
        name,
        code,
        level
    };
});

//console.log(courses);