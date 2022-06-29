const students = 'student'
const admin = 'admin'
const teacher = 'teacher'

type roleType = typeof students | typeof admin | typeof teacher

export {
    students,
    admin,
    teacher,
    roleType
}