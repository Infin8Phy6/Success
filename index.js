const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for frontend connections
app.use(cors()); 
app.use(express.json()); // Middleware for parsing JSON requests

// Corrected CORS Headers Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins, change * to specific domain if needed
  res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE"); // Allowed HTTP methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); // Allowed headers
  next();
});

// Define the Question type
const questions = [
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Knowledge",
      "ytlink": "To follow",
      "qid": "q1",
      "question": "Who is considered the father of Behaviorism?",
      "options": ["John Watson", "B.F. Skinner", "Ivan Pavlov", "Edward Thorndike"],
      "correctAnswer": "John Watson",
      "explanation": "John Watson founded the school of Behaviorism, emphasizing observable behaviors over internal processes."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Knowledge",
      "ytlink": "To follow",
      "qid": "q2",
      "question": "Which experiment by Ivan Pavlov demonstrated the principle of classical conditioning?",
      "options": ["The Little Albert Experiment", "Operant Conditioning Chamber", "Dog Salivation Experiment", "Trial-and-Error Learning"],
      "correctAnswer": "Dog Salivation Experiment",
      "explanation": "Ivan Pavlov’s Dog Salivation Experiment demonstrated classical conditioning by pairing a neutral stimulus with a natural response."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Knowledge",
      "ytlink": "To follow",
      "qid": "q3",
      "question": "What type of reinforcement strengthens a behavior by adding a positive stimulus after the desired behavior?",
      "options": ["Negative Reinforcement", "Positive Reinforcement", "Punishment", "Extinction"],
      "correctAnswer": "Positive Reinforcement",
      "explanation": "Positive reinforcement strengthens behaviors by adding favorable outcomes or stimuli following the behavior."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Understanding",
      "ytlink": "To follow",
      "qid": "q4",
      "question": "How does negative reinforcement differ from punishment in behavior modification?",
      "options": ["Punishment weakens behavior, while negative reinforcement strengthens it.", "Punishment uses positive stimuli, negative reinforcement uses neutral stimuli.", "Negative reinforcement weakens behavior, punishment strengthens it.", "They are the same in effect but vary in application."],
      "correctAnswer": "Punishment weakens behavior, while negative reinforcement strengthens it.",
      "explanation": "Negative reinforcement removes unpleasant stimuli to encourage behavior, whereas punishment seeks to decrease or suppress undesired behavior."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Understanding",
      "ytlink": "To follow",
      "qid": "q5",
      "question": "What role does extinction play in classical conditioning?",
      "options": ["Extinction strengthens the conditioned response.", "Extinction introduces punishment to suppress responses.", "Extinction gradually reduces the conditioned response when reinforcement stops.", "Extinction applies operant conditioning principles."],
      "correctAnswer": "Extinction gradually reduces the conditioned response when reinforcement stops.",
      "explanation": "Extinction occurs when the conditioned stimulus no longer elicits the conditioned response due to a lack of reinforcement."
    }

  ];

// Route to fetch questions
app.get("/api/questions", (req, res) => {
  res.json(questions); // Send the list of questions as the response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
