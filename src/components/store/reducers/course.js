const INITIAL_STATE_COURSES = {
    activeLesson: {},
    activeModule: {},
    modules:[
        { id: 1, title: 'Iniciando com react', lessons: [
            { id: 1, title: 'Primeira aula' },
            { id: 2, title: 'Segunda aula' },
            { id: 3, title: 'Terceira aula' }
        ]},
        { id: 2, title: 'Aprendendo Redux', lessons: [
            { id: 4, title: 'Quarta aula' },
            { id: 5, title: 'Quinta aula' }
        ]}
    ]
};

export default function course(state = INITIAL_STATE_COURSES, action) {
    console.log(state);
    console.log(action);

    if (action.type === 'TOGGLE_LESSON')
    {
        return { ...state, activeLesson: action.lesson, activeModule: action.module };
    }

    //Initial state
    return state;
}
