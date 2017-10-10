import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
    it('should add course when passed CREATE_COURSE_SUCCESS', () => {
        const initialState = [
            {id: 'A', title: 'A'},
            {id: 'B', title: 'B'},
            {id: 'C', title: 'C'}
        ]
        const course = {id: 'B', title: 'New Title'}
        const action = actions.createCourseSuccess(course)

        const newState = courseReducer(initialState, action)
        const updatedCourse = newState.find(a => a.id == course.id)
        const untouchedCourse = newState.find(a => a.id == 'A')

    })
})