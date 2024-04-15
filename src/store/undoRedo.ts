
export const UNDO = 'UNDO';
export const REDO = 'REDO';

const undoRedoMiddleware = store => next => action => {
    const { past, present, future } = store.getState().grid; 
  
  switch (action.type) {
    case UNDO:
      if (past.length > 0) {
        const previous = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);
        store.dispatch({ type: 'SET_STATE', payload: { grid: { past: newPast, present: previous, future: [present, ...future] } } });
      }
      break;

    case REDO:
      if (future.length > 0) {
        const next = future[0];
        const newFuture = future.slice(1);
        store.dispatch({ type: 'SET_STATE', payload: { grid: { past: [...past, present], present: next, future: newFuture } } });
      }
      break;

    default:
      // Let the action pass through unchanged
      return next(action);
  }
};

export default undoRedoMiddleware;