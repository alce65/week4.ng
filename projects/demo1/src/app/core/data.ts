import { Note } from './models/note';
import { Task } from './models/task';

const getTasks = async (): Promise<Task[]> => [
  { id: '1', title: 'Task 1', owner: 'User 1', isDone: true },
  { id: '2', title: 'Task 2', owner: 'User 2', isDone: false },
  { id: '3', title: 'Task 3', owner: 'User 3', isDone: false },
  { id: '4', title: 'Task 4', owner: 'User 4', isDone: false },
  { id: '5', title: 'Task 5', owner: 'User 5', isDone: false },
];

const getNotes = async (): Promise<Note[]> => [
  { id: '1', title: 'Note 1', author: 'User 1', isImportant: true },
  { id: '2', title: 'Note 2', author: 'User 2', isImportant: false },
  { id: '3', title: 'Note 3', author: 'User 3', isImportant: false },
  { id: '4', title: 'Note 4', author: 'User 4', isImportant: false },
  { id: '5', title: 'Note 5', author: 'User 5', isImportant: false },
];

export const repo = {
  getTasks,
  getNotes,
};
