class Actor {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Performs the action and returns a descriptive message
  performAction(action: string): string {
    // Ensure the action is a non-empty string
    if (!action) {
      throw new Error('Action must be a non-empty string');
    }
    
    // Return the message describing the action being performed
    return `${this.name} is ${action}`;
  }
}

// Example usage:
const actor = new Actor('Alice');
console.log(actor.performAction('running')); // Output: Alice is running
