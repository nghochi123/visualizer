class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    // Inserts an element into the queue
    enqueue(element) {
        // Expecting element to be an object or array with at least one value
        this.heap.push(element);
        this.heapifyUp();
    }

    // Removes and returns the highest priority element
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Priority queue is empty");
        }
        const min = this.heap[0];
        const last = this.heap.pop();
        if (!this.isEmpty()) {
            this.heap[0] = last;
            this.heapifyDown();
        }
        return min;
    }

    // Moves the last element up to its correct position
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][0] <= this.heap[index][0]) {
                break;
            }
            [this.heap[parentIndex], this.heap[index]] = [
                this.heap[index],
                this.heap[parentIndex],
            ];
            index = parentIndex;
        }
    }

    // Moves the first element down to its correct position
    heapifyDown() {
        let index = 0;
        while (index < this.heap.length) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallestIndex = index;

            if (
                leftChildIndex < this.heap.length &&
                this.heap[leftChildIndex][0] < this.heap[smallestIndex][0]
            ) {
                smallestIndex = leftChildIndex;
            }
            if (
                rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex][0] < this.heap[smallestIndex][0]
            ) {
                smallestIndex = rightChildIndex;
            }
            if (smallestIndex === index) {
                break;
            }
            [this.heap[index], this.heap[smallestIndex]] = [
                this.heap[smallestIndex],
                this.heap[index],
            ];
            index = smallestIndex;
        }
    }

    // Checks if the priority queue is empty
    isEmpty() {
        return this.heap.length === 0;
    }

    // Returns the highest priority element without removing it
    peek() {
        if (this.isEmpty()) {
            throw new Error("Priority queue is empty");
        }
        return this.heap[0];
    }
}

export default PriorityQueue;

// Example usage
// const pq = new PriorityQueue();
// pq.enqueue([3, "a", true]);
// pq.enqueue([1, "b", false]);
// pq.enqueue([2, "c", true]);

// console.log(pq.heap.length);
// console.log(pq.dequeue()); // [1, 'b', false]
// console.log(pq.dequeue()); // [2, 'c', true]
// console.log(pq.dequeue()); // [3, 'a', true]
