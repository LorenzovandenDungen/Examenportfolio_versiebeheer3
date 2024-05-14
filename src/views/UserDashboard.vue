<template>
    <div class="container dashboard">
      <h1 class="my-4">Dashboard</h1>
      <div class="progress-section">
        <h2>Website Development Progress</h2>
        <ul>
          <li v-for="task in tasks" :key="task.id">
            {{ task.description }} - <span :class="task.completed ? 'completed' : 'pending'">{{ task.completed ? 'Completed' : 'Pending' }}</span>
          </li>
        </ul>
      </div>
      <div class="feedback-section">
        <h2>Feedback</h2>
        <textarea v-model="feedback" placeholder="Provide your feedback..."></textarea>
        <button @click="submitFeedback" class="btn btn-primary">Submit Feedback</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: [
          { id: 1, description: 'Design User Interface', completed: true },
          { id: 2, description: 'Setup Package Selection System', completed: false },
          { id: 3, description: 'Integrate Payment Gateway', completed: false },
          { id: 4, description: 'Implement Progress Tracking', completed: false }
        ],
        feedback: ''
      };
    },
    methods: {
      submitFeedback() {
        // Handle feedback submission
        alert('Feedback submitted: ' + this.feedback);
        this.feedback = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .dashboard {
    padding: 20px;
  }
  .progress-section ul {
    list-style-type: none;
    padding: 0;
  }
  .progress-section li {
    margin: 10px 0;
  }
  .completed {
    color: green;
  }
  .pending {
    color: red;
  }
  .feedback-section {
    margin-top: 20px;
  }
  .feedback-section textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
  }
  </style>
  