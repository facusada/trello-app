import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      boards: [
        {
          id: 'todo',
          title: 'Por hacer',
          tasks: [
            { id: 'task1', title: 'Tarea 1', description: 'Descripción de la tarea 1' },
            { id: 'task2', title: 'Tarea 2', description: 'Descripción de la tarea 2' }
          ]
        },
        {
          id: 'inprogress',
          title: 'En progreso',
          tasks: [
            { id: 'task3', title: 'Tarea 3', description: 'Descripción de la tarea 3' }
          ]
        },
        {
          id: 'done',
          title: 'Hecho',
          tasks: []
        }
      ]
    };
  },
  mutations: {
    UPDATE_BOARD_TASKS(state, { boardId, tasks }) {
      const board = state.boards.find((board) => board.id === boardId);
      debugger
      let taskSelected = tasks.find((task) => {
        
      });
      // if (board) {
      //   debugger
      //   board.tasks.push(tasks);
      // }
    },
  },
  actions: {
    updateBoardTasks({ commit }, { boardId, tasks }) {
      commit('UPDATE_BOARD_TASKS', { boardId, tasks });
    },
  },
});

export default store;