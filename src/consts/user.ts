interface userData {
    email: string;
    password: string;
    fio: string;
}

interface adminData extends userData {
    universe: string
}

interface studentData extends userData {
    study_field: string; 
    group_number: string;
    course_number: number
}

interface teacherData extends userData {
    specialisation: string;
    department: string
}

export {
    adminData,
    studentData,
    teacherData
}