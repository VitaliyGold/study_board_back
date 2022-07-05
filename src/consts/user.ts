type adminData = {
    email: string,
    password: string,
    fio: string,
}

type studentData = {
    email: string,
    password: string,
    student_fio: string;
    study_field: string;
    student_group: string;
    student_course: number
}

export {
    adminData,
    studentData
}