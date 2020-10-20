// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;


//for interview, js array can do alot more than a queue, but in interview we use js array to build queue, we just restrict the amount of js array methods it can use. just adding, and removing,
//unshift, add to start of array, pop, removes from end and returns it

//one reason to use queue, would be for performance as array with all methods would be less performant, and by calling it a queue other engineers would know not to use all types of array methods
class Queue { }

module.exports = Queue;
