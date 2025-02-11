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
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Understanding",
      "ytlink": "To follow",
      "qid": "q6",
      "question": "Why is the concept of reinforcement significant in operant conditioning?",
      "options": ["It introduces variability into behavior patterns.", "Reinforcement exclusively leads to extinction of behaviors.", "It helps strengthen desired behaviors by using rewards or removing aversive stimuli.", "Reinforcement focuses only on punishment-based systems."],
      "correctAnswer": "It helps strengthen desired behaviors by using rewards or removing aversive stimuli.",
      "explanation": "Reinforcement strengthens behaviors by either adding positive stimuli or removing unpleasant stimuli after the behavior occurs."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Understanding",
      "ytlink": "To follow",
      "qid": "q7",
      "question": "In classical conditioning, what is a neutral stimulus (NS)?",
      "options": ["A stimulus that causes an automatic response.", "A stimulus paired with the unconditioned stimulus.", "A stimulus not associated with any conditioned response initially.", "A stimulus used to punish unwanted behavior."],
      "correctAnswer": "A stimulus not associated with any conditioned response initially.",
      "explanation": "A neutral stimulus does not produce a conditioned response until paired with an unconditioned stimulus."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Understanding",
      "ytlink": "To follow",
      "qid": "q8",
      "question": "What distinguishes primary reinforcers from secondary reinforcers?",
      "options": ["Primary reinforcers lose value over time; secondary reinforcers do not.", "Primary reinforcers satisfy basic needs; secondary reinforcers derive value from association.", "Primary reinforcers are learned; secondary reinforcers are innate.", "Primary reinforcers require conditioning; secondary reinforcers do not."],
      "correctAnswer": "Primary reinforcers satisfy basic needs; secondary reinforcers derive value from association.",
      "explanation": "Primary reinforcers, like food or water, satisfy biological needs; secondary reinforcers acquire value through learned association."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Application",
      "ytlink": "To follow",
      "qid": "q9",
      "question": "You want to train a dog to sit using positive reinforcement. What should your process be?",
      "options": ["Provide a treat every time the dog exhibits any behavior.", "Use negative reinforcement by withholding food when the dog does not sit.", "Reward the dog with treats only when it sits on command.", "Apply punishment if the dog disobeys the command."],
      "correctAnswer": "Reward the dog with treats only when it sits on command.",
      "explanation": "Positive reinforcement involves giving a treat to strengthen the sitting behavior whenever the dog follows the command."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Application",
      "ytlink": "To follow",
      "qid": "q10",
      "question": "In a classroom, a teacher uses a point system to encourage homework completion. What is this an example of?",
      "options": ["Punishment", "Negative Reinforcement", "Token Economy", "Classical Conditioning"],
      "correctAnswer": "Token Economy",
      "explanation": "A token economy uses points or tokens as secondary reinforcers, encouraging desired behavior."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Knowledge",
      "ytlink": "To follow",
      "qid": "q11",
      "question": "Who is considered the father of Behaviorism?",
      "options": ["John Watson", "B.F. Skinner", "Ivan Pavlov", "Edward Thorndike"],
      "correctAnswer": "John Watson",
      "Explanation": "John Watson founded the school of Behaviorism, emphasizing observable behaviors over internal processes."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Knowledge",
      "ytlink": "To follow",
      "qid": "q12",
      "question": "Which experiment by Ivan Pavlov demonstrated the principle of classical conditioning?",
      "options": [
        "The Little Albert Experiment",
        "Operant Conditioning Chamber",
        "Dog Salivation Experiment",
        "Trial-and-Error Learning"
      ],
      "correctAnswer": "Dog Salivation Experiment",
      "Explanation": "Ivan Pavlov’s Dog Salivation Experiment demonstrated classical conditioning by pairing a neutral stimulus with a natural response."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Knowledge",
      "ytlink": "To follow",
      "qid": "q13",
      "question": "What type of reinforcement strengthens a behavior by adding a positive stimulus after the desired behavior?",
      "options": [
        "Negative Reinforcement",
        "Positive Reinforcement",
        "Punishment",
        "Extinction"
      ],
      "correctAnswer": "Positive Reinforcement",
      "Explanation": "Positive reinforcement strengthens behaviors by adding favorable outcomes or stimuli following the behavior."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Understanding",
      "ytlink": "To follow",
      "qid": "q14",
      "question": "How does negative reinforcement differ from punishment in behavior modification?",
      "options": [
        "Punishment weakens behavior, while negative reinforcement strengthens it.",
        "Punishment uses positive stimuli, negative reinforcement uses neutral stimuli.",
        "Negative reinforcement weakens behavior, punishment strengthens it.",
        "They are the same in effect but vary in application."
      ],
      "correctAnswer": "Punishment weakens behavior, while negative reinforcement strengthens it.",
      "Explanation": "Negative reinforcement removes unpleasant stimuli to encourage behavior, whereas punishment seeks to decrease or suppress undesired behavior."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Understanding",
      "ytlink": "To follow",
      "qid": "q15",
      "question": "What role does extinction play in classical conditioning?",
      "options": [
        "Extinction strengthens the conditioned response.",
        "Extinction introduces punishment to suppress responses.",
        "Extinction gradually reduces the conditioned response when reinforcement stops.",
        "Extinction applies operant conditioning principles."
      ],
      "correctAnswer": "Extinction gradually reduces the conditioned response when reinforcement stops.",
      "Explanation": "Extinction occurs when the conditioned stimulus no longer elicits the conditioned response due to a lack of reinforcement."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Understanding",
      "ytlink": "To follow",
      "qid": "q1",
      "question": "Why is the concept of reinforcement significant in operant conditioning?",
      "options": [
        "It introduces variability into behavior patterns.",
        "Reinforcement exclusively leads to extinction of behaviors.",
        "It helps strengthen desired behaviors by using rewards or removing aversive stimuli.",
        "Reinforcement focuses only on punishment-based systems."
      ],
      "correctAnswer": "It helps strengthen desired behaviors by using rewards or removing aversive stimuli.",
      "Explanation": "Reinforcement strengthens behaviors by either adding positive stimuli or removing unpleasant stimuli after the behavior occurs."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Understanding",
      "ytlink": "To follow",
      "qid": "q16",
      "question": "In classical conditioning, what is a neutral stimulus (NS)?",
      "options": [
        "A stimulus that causes an automatic response.",
        "A stimulus paired with the unconditioned stimulus.",
        "A stimulus not associated with any conditioned response initially.",
        "A stimulus used to punish unwanted behavior."
      ],
      "correctAnswer": "A stimulus not associated with any conditioned response initially.",
      "Explanation": "A neutral stimulus does not produce a conditioned response until paired with an unconditioned stimulus."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Understanding",
      "ytlink": "To follow",
      "qid": "q17",
      "question": "What distinguishes primary reinforcers from secondary reinforcers?",
      "options": [
        "Primary reinforcers lose value over time; secondary reinforcers do not.",
        "Primary reinforcers satisfy basic needs; secondary reinforcers derive value from association.",
        "Primary reinforcers are learned; secondary reinforcers are innate.",
        "Primary reinforcers require conditioning; secondary reinforcers do not."
      ],
      "correctAnswer": "Primary reinforcers satisfy basic needs; secondary reinforcers derive value from association.",
      "Explanation": "Primary reinforcers, like food or water, satisfy biological needs; secondary reinforcers acquire value through learned association."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Application",
      "ytlink": "To follow",
      "qid": "q18",
      "question": "You want to train a dog to sit using positive reinforcement. What should your process be?",
      "options": [
        "Provide a treat every time the dog exhibits any behavior.",
        "Use negative reinforcement by withholding food when the dog does not sit.",
        "Reward the dog with treats only when it sits on command.",
        "Apply punishment if the dog disobeys the command."
      ],
      "correctAnswer": "Reward the dog with treats only when it sits on command.",
      "Explanation": "Positive reinforcement involves giving a treat to strengthen the sitting behavior whenever the dog follows the command."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Application",
      "ytlink": "To follow",
      "qid": "q19",
      "question": "In a classroom, a teacher uses a point system to encourage homework completion. What is this an example of?",
      "options": [
        "Punishment",
        "Negative Reinforcement",
        "Token Economy",
        "Classical Conditioning"
      ],
      "correctAnswer": "Token Economy",
      "Explanation": "A token economy uses points or tokens as secondary reinforcers, encouraging desired behavior."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Application",
      "ytlink": "To follow",
      "qid": "q20",
      "question": "A student studies to avoid failing. What type of behavior is this according to operant conditioning?",
      "options": [
        "Positive Punishment",
        "Negative Reinforcement",
        "Neutral Response",
        "Extinction"
      ],
      "correctAnswer": "Negative Reinforcement",
      "Explanation": "Studying to avoid failing removes an aversive outcome (failing), which reinforces the studying behavior."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Analysis",
      "ytlink": "To follow",
      "qid": "q21",
      "question": "Compare classical and operant conditioning. How do they fundamentally differ?",
      "options": [
        "Classical involves voluntary responses; operant involves reflexive responses.",
        "Classical associates two stimuli; operant pairs behavior with consequence.",
        "Classical requires reinforcement; operant relies solely on punishment.",
        "Classical conditioning has no applications in education."
      ],
      "correctAnswer": "Classical associates two stimuli; operant pairs behavior with consequence.",
      "Explanation": "Classical conditioning links stimuli with reflexes, while operant conditioning connects actions with consequences."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Analysis",
      "ytlink": "To follow",
      "qid": "q22",
      "question": "Analyze why schedules of reinforcement are more effective than continuous reinforcement.",
      "options": [
        "Schedules weaken responses over time.",
        "Continuous reinforcement ensures no variability.",
        "Schedules promote long-term resistance to extinction.",
        "Schedules rely on punishment rather than reinforcement."
      ],
      "correctAnswer": "Schedules promote long-term resistance to extinction.",
      "Explanation": "Schedules of reinforcement create variability that strengthens learned behaviors and makes them more resistant to extinction."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Evaluation",
      "ytlink": "To follow",
      "qid": "q23",
      "question": "Evaluate the application of operant conditioning in modern classroom management. Which aspect is the most effective?",
      "options": [
        "Using punishments for rule-breaking.",
        "Providing consistent and clear rewards for positive behavior.",
        "Shifting to cognitive development over conditioning.",
        "Eliminating reinforcement entirely to ensure autonomy."
      ],
      "correctAnswer": "Providing consistent and clear rewards for positive behavior.",
      "Explanation": "Operant conditioning is most effective when rewards are consistent, predictable, and tied to clear expectations."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Knowledge",
      "ytlink": "To follow",
      "qid": "q1",
      "question": "Which psychologist is known for his work with operant conditioning and the Skinner box?",
      "options": ["John Watson", "B.F. Skinner", "Ivan Pavlov", "Albert Bandura"],
      "correctAnswer": "B.F. Skinner",
      "Explanation": "B.F. Skinner developed the Skinner box to study operant conditioning and demonstrated how behavior is influenced by reinforcement and punishment."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Knowledge",
      "ytlink": "To follow",
      "qid": "q24",
      "question": "What is the term for a behavior that occurs spontaneously due to conditioning?",
      "options": ["Conditioned Stimulus", "Conditioned Response", "Unconditioned Response", "Neutral Stimulus"],
      "correctAnswer": "Conditioned Response",
      "Explanation": "A conditioned response occurs when a previously neutral stimulus triggers a learned response due to repeated association with an unconditioned stimulus."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Knowledge",
      "ytlink": "To follow",
      "qid": "q25",
      "question": "Which of the following best describes negative reinforcement?",
      "options": [
        "Providing a reward after the desired behavior.",
        "Removing an unpleasant stimulus to encourage a behavior.",
        "Punishing a behavior to decrease its occurrence.",
        "Presenting a neutral stimulus after a behavior."
      ],
      "correctAnswer": "Removing an unpleasant stimulus to encourage a behavior.",
      "Explanation": "Negative reinforcement strengthens a behavior by removing an aversive stimulus or event after the behavior."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Understanding",
      "ytlink": "To follow",
      "qid": "q26",
      "question": "What distinguishes fixed ratio and variable ratio reinforcement schedules?",
      "options": [
        "Fixed ratio is based on the time interval, variable ratio is based on behavior frequency.",
        "Fixed ratio provides reinforcement after a set number of behaviors, variable ratio provides reinforcement after varying numbers of behaviors.",
        "Fixed ratio reinforces after each behavior, variable ratio reinforces at random times.",
        "Fixed ratio depends on primary reinforcement, variable ratio on secondary reinforcement."
      ],
      "correctAnswer": "Fixed ratio provides reinforcement after a set number of behaviors, variable ratio provides reinforcement after varying numbers of behaviors.",
      "Explanation": "Fixed ratio reinforcement rewards after a specific number of behaviors, while variable ratio reinforcement rewards unpredictably after varying numbers of responses."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Understanding",
      "ytlink": "To follow",
      "qid": "q27",
      "question": "Which concept involves learning through observation of others behaviors?",
      "options": [
        "Social Learning",
        "Operant Conditioning",
        "Classical Conditioning",
        "Behavior Shaping"
      ],
      "correctAnswer": "Social Learning",
      "Explanation": "Social learning involves learning behaviors by observing the actions of others, as proposed by Albert Bandura."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Understanding",
      "ytlink": "To follow",
      "qid": "q28",
      "question": "What is the role of a discriminative stimulus in operant conditioning?",
      "options": [
        "It rewards the correct behavior.",
        "It signals when a response will be reinforced.",
        "It punishes the wrong behavior.",
        "It stops the behavior from being learned."
      ],
      "correctAnswer": "It signals when a response will be reinforced.",
      "Explanation": "A discriminative stimulus signals the presence of reinforcement or punishment, helping to guide behavior in the correct context."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Understanding",
      "ytlink": "To follow",
      "qid": "q29",
      "question": "In behavior modification, which of the following describes a token economy?",
      "options": [
        "A system where reinforcers are used to condition reflexes.",
        "A system where behaviors are punished through tokens.",
        "A system where tokens are used as secondary reinforcers.",
        "A system where reinforcement is always fixed."
      ],
      "correctAnswer": "A system where tokens are used as secondary reinforcers.",
      "Explanation": "A token economy involves using tokens as secondary reinforcers, which can be exchanged for desired rewards."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Understanding",
      "ytlink": "To follow",
      "qid": "q30",
      "question": "In operant conditioning, what does shaping mean?",
      "options": [
        "The reinforcement of only the final behavior.",
        "The use of intermittent reinforcement to create complex behaviors.",
        "Reinforcing successive approximations to a target behavior.",
        "The punishment of every wrong response."
      ],
      "correctAnswer": "Reinforcing successive approximations to a target behavior.",
      "Explanation": "Shaping involves reinforcing progressively closer approximations of a desired behavior to encourage more complex actions."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Application",
      "ytlink": "To follow",
      "qid": "q31",
      "question": "How would you apply positive reinforcement to encourage a student to raise their hand before speaking in class?",
      "options": [
        "You would provide extra homework when the student follows the rule.",
        "You reward the student with praise or a treat when they raise their hand.",
        "You ignore the behavior unless the student follows it consistently.",
        "You punish the student when they do not raise their hand."
      ],
      "correctAnswer": "You reward the student with praise or a treat when they raise their hand.",
      "Explanation": "Positive reinforcement involves providing a reward or positive stimulus to encourage the behavior of raising their hand before speaking."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Application",
      "ytlink": "To follow",
      "qid": "q32",
      "question": "A teacher gives a candy every time a student completes an assignment. What is this an example of?",
      "options": [
        "Fixed Interval Reinforcement",
        "Variable Interval Reinforcement",
        "Fixed Ratio Reinforcement",
        "Positive Reinforcement"
      ],
      "correctAnswer": "Fixed Ratio Reinforcement",
      "Explanation": "This example represents a fixed ratio reinforcement schedule because the teacher provides a reward after a set behavior (assignment completion)."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Application",
      "ytlink": "To follow",
      "qid": "q33",
      "question": "If a student stops engaging in disruptive behavior after receiving consistent time-outs, what principle is at play?",
      "options": [
        "Positive Reinforcement",
        "Negative Reinforcement",
        "Punishment",
        "Extinction"
      ],
      "correctAnswer": "Punishment",
      "Explanation": "Punishment is used to decrease unwanted behavior by introducing an unpleasant consequence (time-out)."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Analysis",
      "ytlink": "To follow",
      "qid": "q34",
      "question": "Analyze why reinforcement schedules can result in different rates of behavior learning.",
      "options": [
        "Different schedules create consistent behavior without requiring any motivation.",
        "Certain schedules produce stronger, more sustained responses over time by making reinforcement unpredictable.",
        "All schedules of reinforcement will result in the same rate of behavior acquisition.",
        "Schedules are irrelevant in shaping behavior patterns."
      ],
      "correctAnswer": "Certain schedules produce stronger, more sustained responses over time by making reinforcement unpredictable.",
      "Explanation": "Variable schedules are more effective in reinforcing behavior as they create unpredictable reinforcement, increasing persistence in the behavior."
    },
    
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Behaviorism",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Analysis",
      "ytlink": "To follow",
      "qid": "q35",
      "question": "Compare classical and operant conditioning. How do both approaches influence the development of learned behavior?",
      "options": [
        "Both focus on changing reflexive behaviors through external events.",
        "Operant conditioning involves association between stimuli and response; classical conditioning pairs behaviors with stimuli.",
        "Classical conditioning requires conscious thought, operant does not.",
        "Operant conditioning always involves punishment, while classical conditioning does not."
      ],
      "correctAnswer": "Operant conditioning involves association between stimuli and response; classical conditioning pairs behaviors with stimuli.",
      "Explanation": "Classical conditioning pairs stimuli with reflexive responses, while operant conditioning links behavior with its consequences."
    },
    
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Distributed Cognition",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Knowledge",
      "ytlink": "To follow",
      "qid": "q36",
      "question": "In Distributed Cognition, which concept refers to the use of external resources, such as paper, computers, or social networks, to assist with mental tasks?",
      "options": [
        "Cognitive load",
        "Cognitive amplification",
        "Cognitive dissonance",
        "Cognitive artifacts"
      ],
      "correctAnswer": "Cognitive artifacts",
      "Explanation": "Cognitive artifacts are external resources like tools or technologies that help extend mental capacity, support thinking processes, and make cognitive tasks more efficient."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Distributed Cognition",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Understanding",
      "ytlink": "To follow",
      "qid": "q37",
      "question": "What effect does the use of collaborative tools (e.g., shared documents, social media) have on learning in a Distributed Cognition environment?",
      "options": [
        "It limits individual input and creates confusion.",
        "It facilitates the sharing of knowledge, ideas, and problem-solving strategies.",
        "It discourages interaction among peers.",
        "It only benefits individuals who work independently."
      ],
      "correctAnswer": "It facilitates the sharing of knowledge, ideas, and problem-solving strategies.",
      "Explanation": "Collaborative tools promote knowledge sharing and idea generation by allowing individuals to work together more efficiently, enhancing problem-solving and learning through shared cognitive processes."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Distributed Cognition",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Understanding",
      "ytlink": "To follow",
      "qid": "q38",
      "question": "How can distributed cognition be applied in a classroom environment?",
      "options": [
        "By providing students with digital tools to work independently.",
        "By encouraging individual memorization of facts.",
        "By having students collaborate using shared digital tools like tablets, whiteboards, and documents.",
        "By focusing only on teacher-driven learning."
      ],
      "correctAnswer": "By having students collaborate using shared digital tools like tablets, whiteboards, and documents.",
      "Explanation": "Distributed cognition in the classroom is enhanced by using tools that facilitate collaboration, knowledge sharing, and joint problem-solving, allowing students to work together effectively."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Distributed Cognition",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Understanding",
      "ytlink": "To follow",
      "qid": "q39",
      "question": "Which of the following best describes distributed cognition in an educational technology context?",
      "options": [
        "Knowledge is stored within individual students and retrieved on demand.",
        "The learning process involves interaction with both human agents and technological tools.",
        "Technologies are used solely for individual learning without social interaction.",
        "Learning is purely based on offline, individual study."
      ],
      "correctAnswer": "The learning process involves interaction with both human agents and technological tools.",
      "Explanation": "In educational technology, distributed cognition involves collaboration between students, instructors, and technological tools, supporting interaction and cognitive processing across these elements."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Distributed Cognition",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Application",
      "ytlink": "To follow",
      "qid": "q40",
      "question": "How would a distributed cognition approach improve efficiency in a virtual team working on a large research project?",
      "options": [
        "By focusing only on one persons expertise and limiting group collaboration.",
        "By allowing the use of shared tools, communication platforms, and expertise among team members to distribute tasks and knowledge.",
        "By encouraging every team member to independently complete their part of the project without collaboration.",
        "By limiting communication to occasional meetings to prevent cognitive overload."
      ],
      "correctAnswer": "By allowing the use of shared tools, communication platforms, and expertise among team members to distribute tasks and knowledge.",
      "Explanation": "Distributed cognition enhances efficiency by facilitating shared tasks, knowledge, and communication, making it easier for teams to work on large-scale projects collaboratively, leveraging the expertise of all members."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Distributed Cognition",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Application",
      "ytlink": "To follow",
      "qid": "q41",
      "question": "How can an instructor apply the concept of distributed cognition to enhance group discussions in a classroom?",
      "options": [
        "By facilitating group tasks that require the use of digital tools and collaborative thinking.",
        "By asking students to only work on their own without interacting with peers.",
        "By focusing on individual presentations rather than group activities.",
        "By providing only written materials for students to memorize."
      ],
      "correctAnswer": "By facilitating group tasks that require the use of digital tools and collaborative thinking.",
      "Explanation": "In distributed cognition, an instructor can use technology and group-based problem-solving activities to encourage sharing of information, ideas, and collaborative cognition among students."
    },
    {
      "major": "Prof Ed",
      "subject": "Learning Theory",
      "topic": "Distributed Cognition",
      "difficulty": "Difficult",
      "bloomstaxonomy": "Application",
      "ytlink": "To follow",
      "qid": "q42",
      "question": "Which situation in a corporate setting best demonstrates Distributed Cognition?",
      "options": [
        "A team uses project management software to collaborate on deliverables while communicating via online chat.",
        "An individual working alone on a project with no assistance or shared tools.",
        "Employees working in isolation and never collaborating with each other.",
        "A manager dictating all decisions without feedback or use of shared technology."
      ],
      "correctAnswer": "A team uses project management software to collaborate on deliverables while communicating via online chat.",
      "Explanation": "In a corporate setting, distributed cognition is demonstrated when teams use shared tools and technology to collaborate on tasks and communicate, distributing cognitive load for collective problem-solving."
    },
    
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Distributed Cognition",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Analysis",
  "ytlink": "To follow",
  "qid": "q43",
  "question": "What could happen if distributed cognition mechanisms (e.g., tools, collaboration) are not implemented effectively in a learning environment?",
  "options": [
    "Enhanced problem-solving and critical thinking.",
    "Inefficiencies due to uncoordinated efforts and lack of communication.",
    "An increase in social interaction and knowledge sharing.",
    "Improved individual learning without group interactions."
  ],
  "correctAnswer": "Inefficiencies due to uncoordinated efforts and lack of communication.",
  "Explanation": "When distributed cognition tools are not effectively integrated into learning environments, a lack of coordination and communication can lead to confusion and inefficiencies, hindering effective collaboration."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Distributed Cognition",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Analysis",
  "ytlink": "To follow",
  "qid": "q44",
  "question": "In what way does collaborative problem-solving enhance distributed cognition?",
  "options": [
    "By allowing individuals to take on roles without collaboration.",
    "By utilizing shared tools and perspectives from multiple participants to tackle complex problems.",
    "By working alone and ignoring feedback from peers.",
    "By focusing exclusively on theoretical knowledge without practical application."
  ],
  "correctAnswer": "By utilizing shared tools and perspectives from multiple participants to tackle complex problems.",
  "Explanation": "Collaborative problem-solving enhances distributed cognition by pooling cognitive resources such as knowledge, experiences, and tools from multiple participants, enabling more effective problem-solving."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Distributed Cognition",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Evaluation",
  "ytlink": "To follow",
  "qid": "q45",
  "question": "In which case might the use of distributed cognition tools be harmful to a team’s performance?",
  "options": [
    "When team members do not communicate or collaborate effectively.",
    "When all team members are constantly engaged and have no downtime.",
    "When all team members have access to a large amount of external data and information.",
    "When team members are equally contributing and supporting each other."
  ],
  "correctAnswer": "When team members do not communicate or collaborate effectively.",
  "Explanation": "The success of distributed cognition tools relies on effective collaboration and communication. If team members fail to interact and share their cognitive processes, the tools can become inefficient and hinder performance."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Distributed Cognition",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Synthesis",
  "ytlink": "To follow",
  "qid": "q46",
  "question": "How can the concept of distributed cognition be integrated into the design of a mobile learning environment?",
  "options": [
    "By allowing students to study in isolation without collaborative features.",
    "By incorporating collaborative tools that allow students to share information, ideas, and resources while learning on the go.",
    "By using only individual quizzes and assessments without any external resources.",
    "By preventing students from interacting with each other and focusing solely on individual content."
  ],
  "correctAnswer": "By incorporating collaborative tools that allow students to share information, ideas, and resources while learning on the go.",
  "Explanation": "A mobile learning environment can embody distributed cognition by integrating collaborative tools like messaging, file sharing, and discussion platforms, enabling students to connect, share resources, and learn in collaboration, even in mobile contexts."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q47",
  "question": "Which of the following is a primary objective of the K12 curriculum?",
  "options": [
    "To provide standardized testing for all students.",
    "To address the educational needs of students from kindergarten to 12th grade.",
    "To promote homeschooling as the primary method of education.",
    "To limit the number of extracurricular activities."
  ],
  "correctAnswer": "To address the educational needs of students from kindergarten to 12th grade.",
  "Explanation": "The K12 curriculum is designed to provide comprehensive education to students from kindergarten through 12th grade, addressing academic, social, and emotional learning throughout their developmental years."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q48",
  "question": "The K12 curriculum in the United States typically requires the study of which of the following subjects?",
  "options": [
    "Photography",
    "Art History",
    "English, Mathematics, Science, and Social Studies",
    "Opera"
  ],
  "correctAnswer": "English, Mathematics, Science, and Social Studies",
  "Explanation": "The K12 curriculum ensures that students in the U.S. receive core education in subjects such as English, mathematics, science, and social studies, which form the foundational knowledge needed for further education."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q49",
  "question": "Which education level is the K12 curriculum designed to serve?",
  "options": [
    "Preschool",
    "Kindergarten to 12th grade",
    "University",
    "Graduate school"
  ],
  "correctAnswer": "Kindergarten to 12th grade",
  "Explanation": "The K12 curriculum specifically serves students in grades K through 12, focusing on providing a well-rounded educational foundation in a variety of subjects."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q50",
  "question": "How does the K12 curriculum promote foundational skills in literacy and numeracy?",
  "options": [
    "By focusing solely on reading and writing in early grades.",
    "By integrating literacy and numeracy through practical, real-life applications.",
    "By teaching high-level math and literature from the start.",
    "By limiting math instruction to only algebra."
  ],
  "correctAnswer": "By integrating literacy and numeracy through practical, real-life applications.",
  "Explanation": "The K12 curriculum focuses on providing foundational literacy and numeracy skills through practical applications, making them relevant to everyday life, ensuring that students are prepared for real-world challenges."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q51",
  "question": "What is the purpose of integrating technology into the K12 curriculum?",
  "options": [
    "To replace traditional teaching methods entirely.",
    "To enhance learning by providing students with access to online resources, tools, and collaboration opportunities.",
    "To eliminate the need for teachers.",
    "To introduce students to the gaming industry."
  ],
  "correctAnswer": "To enhance learning by providing students with access to online resources, tools, and collaboration opportunities.",
  "Explanation": "The integration of technology into the K12 curriculum is meant to enrich learning experiences, providing students with valuable access to digital resources, fostering collaboration, and preparing them for a tech-driven world."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q52",
  "question": "How does the K12 curriculum support students with diverse learning needs?",
  "options": [
    "By focusing on uniform education for all students.",
    "By providing additional resources, personalized learning plans, and support structures for students with special needs.",
    "By discouraging special accommodations or modifications.",
    "By teaching at one standardized pace for all students."
  ],
  "correctAnswer": "By providing additional resources, personalized learning plans, and support structures for students with special needs.",
  "Explanation": "The K12 curriculum emphasizes inclusivity by offering personalized plans and providing necessary resources to ensure that all students, including those with diverse learning needs, are adequately supported."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Application",
  "ytlink": "To follow",
  "qid": "q53",
  "question": "In what ways can K12 teachers apply formative assessments in their classrooms?",
  "options": [
    "By using formal exams only at the end of the semester.",
    "By integrating quizzes, discussions, and projects during the learning process to adjust teaching strategies.",
    "By grading assignments based solely on correctness.",
    "By avoiding any assessments until the end of the course."
  ],
  "correctAnswer": "By integrating quizzes, discussions, and projects during the learning process to adjust teaching strategies.",
  "Explanation": "Formative assessments, such as quizzes, projects, and discussions, are used in the K12 curriculum to provide ongoing feedback and allow teachers to adjust their teaching strategies according to student progress."
},  
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Application",
  "ytlink": "To follow",
  "qid": "q54",
  "question": "What is an example of how a K12 teacher might incorporate project-based learning?",
  "options": [
    "By focusing on a single textbook chapter for the entire semester.",
    "By assigning students to work collaboratively on real-world problems while applying knowledge from multiple subjects.",
    "By assigning individual assignments without any group interaction.",
    "By creating standardized multiple-choice tests."
  ],
  "correctAnswer": "By assigning students to work collaboratively on real-world problems while applying knowledge from multiple subjects.",
  "Explanation": "Project-based learning in the K12 curriculum involves students collaborating on real-world problems, allowing them to apply interdisciplinary knowledge to solve complex tasks."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Application",
  "ytlink": "To follow",
  "qid": "q55",
  "question": "How can K12 educators effectively address the different learning styles of students?",
  "options": [
    "By using the same teaching method for all students.",
    "By applying a variety of teaching methods and resources tailored to different learning styles.",
    "By having students study independently without any group interaction.",
    "By limiting the use of multimedia in teaching."
  ],
  "correctAnswer": "By applying a variety of teaching methods and resources tailored to different learning styles.",
  "Explanation": "To address the diverse learning styles within a K12 classroom, teachers can incorporate a variety of methods, such as hands-on activities, visual aids, and group work, to meet the needs of all students."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Analysis",
  "ytlink": "To follow",
  "qid": "q56",
  "question": "What could be a potential consequence of not adhering to state and national standards in the K12 curriculum?",
  "options": [
    "The curriculum may become outdated, inconsistent, and unable to prepare students for higher education or workforce demands.",
    "The curriculum will be universally accepted and successful.",
    "There will be no impact on student outcomes.",
    "The students will automatically gain higher test scores."
  ],
  "correctAnswer": "The curriculum may become outdated, inconsistent, and unable to prepare students for higher education or workforce demands.",
  "Explanation": "Adhering to state and national standards ensures that the K12 curriculum remains current, relevant, and prepares students for future academic and career success by providing necessary skills and knowledge."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Analysis",
  "ytlink": "To follow",
  "qid": "q57",
  "question": "How might the integration of Common Core standards into the K12 curriculum affect teaching practices?",
  "options": [
    "It would standardize curriculum content and expectations across the nation, leading to consistent instruction.",
    "It would eliminate all standardized testing.",
    "It would eliminate flexibility in teaching.",
    "It would discourage differentiated instruction."
  ],
  "correctAnswer": "It would standardize curriculum content and expectations across the nation, leading to consistent instruction.",
  "Explanation": "The integration of Common Core standards aims to standardize curriculum and academic expectations across states, ensuring that students have consistent educational experiences and meeting college and career readiness criteria."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Evaluation",
  "ytlink": "To follow",
  "qid": "q58",
  "question": "Which approach would be most effective in evaluating the success of a K12 curriculum implementation?",
  "options": [
    "By assessing individual test scores alone.",
    "By evaluating student engagement, learning outcomes, and long-term retention in diverse environments.",
    "By focusing on student behavior in the classroom.",
    "By considering only the quantity of content taught."
  ],
  "correctAnswer": "By evaluating student engagement, learning outcomes, and long-term retention in diverse environments.",
  "Explanation": "Evaluating K12 curriculum success involves considering multiple factors such as student engagement, overall learning outcomes, and how effectively knowledge is retained and applied, in different educational settings."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Synthesis",
  "ytlink": "To follow",
  "qid": "q59",
  "question": "How can a K12 educator enhance curriculum delivery by using cross-curricular integration?",
  "options": [
    "By focusing solely on one subject area.",
    "By designing lessons that connect ideas across multiple subjects to make learning more relevant and meaningful.",
    "By using the same content in every grade level.",
    "By reducing the overall length of the curriculum."
  ],
  "correctAnswer": "By designing lessons that connect ideas across multiple subjects to make learning more relevant and meaningful.",
  "Explanation": "Cross-curricular integration allows teachers to design lessons that link concepts across different subject areas, giving students a holistic understanding of the material and making learning more applicable and engaging."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum (Republic Act No. 10533)",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q59",
  "question": "Under the K12 Curriculum in the Philippines, what is the primary aim of adding Kindergarten and extending the education cycle?",
  "options": [
    "To standardize education across all levels.",
    "To ensure a more personalized and relevant learning experience for students.",
    "To increase the number of classroom hours for academic subjects.",
    "To prepare students for vocational training only."
  ],
  "correctAnswer": "To ensure a more personalized and relevant learning experience for students.",
  "Explanation": "The enhanced K12 system in the Philippines extends education to 13 years (from kindergarten to Grade 12) with the aim of ensuring that Filipino students receive relevant, engaging, and personalized learning experiences, preparing them better for both further education and work."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum (Republic Act No. 10533)",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q60",
  "question": "The K12 program in the Philippines incorporates senior high school education (Grade 11 and 12). What is the primary purpose of this additional two years?",
  "options": [
    "To prepare students for university education or technical-vocational training.",
    "To focus exclusively on academic subjects only.",
    "To replace the previous education system entirely.",
    "To remove any specialized training in the curriculum."
  ],
  "correctAnswer": "To prepare students for university education or technical-vocational training.",
  "Explanation": "The two additional years in senior high school allow students to take specialized tracks, such as academic, technical-vocational, and sports, which are designed to prepare them either for higher education or for employment in specific industries."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum (Republic Act No. 10533)",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q61",
  "question": "Under the K12 law, which of the following is emphasized as an integral part of the curriculum?",
  "options": [
    "High-stakes standardized testing.",
    "The development of 21st-century skills such as critical thinking and creativity.",
    "Heavy focus on rote memorization of facts.",
    "More hours spent on sports activities."
  ],
  "correctAnswer": "The development of 21st-century skills such as critical thinking and creativity.",
  "Explanation": "Republic Act No. 10533 stresses the need for developing students 21st-century skills—like critical thinking, communication, creativity, and collaboration—which are necessary to prepare them for the rapidly changing demands of both higher education and the workforce."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum (Republic Act No. 10533)",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q62",
  "question": "Why does the DepEd emphasize mother-tongue-based education in the early years of K12?",
  "options": [
    "To delay the introduction of Filipino and English until later grades.",
    "To enhance the cognitive development and conceptual understanding of students in their early years.",
    "To reinforce foreign languages and encourage multilingualism.",
    "To simplify subjects to make them easier to teach."
  ],
  "correctAnswer": "To enhance the cognitive development and conceptual understanding of students in their early years.",
  "Explanation": "Mother-tongue-based multilingual education is emphasized to provide a better foundation in learning, recognizing that children learn best in their native language during the early stages of education. This practice enhances understanding, cognition, and development."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum (Republic Act No. 10533)",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q63",
  "question": "The senior high school tracks in the K12 curriculum include which of the following academic strands?",
  "options": [
    "Harmonic Science and Computing",
    "Business, Accountancy, Management, and Arts and Design",
    "Literature and Writing",
    "Technology and Sports only"
  ],
  "correctAnswer": "Business, Accountancy, Management, and Arts and Design",
  "Explanation": "In the K12 curriculum, senior high school students are provided options to specialize in tracks such as Accountancy, Business, Management, and other fields like Arts and Design, which give them deeper knowledge and skills based on their career interests."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum (Republic Act No. 10533)",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q64",
  "question": "How does the K12 curriculum address students emotional and social development?",
  "options": [
    "By avoiding integration of social-emotional learning in the classroom.",
    "By incorporating subjects like Values Education and Character Education to foster personal and social growth.",
    "By increasing only academic content without focusing on well-being.",
    "By focusing exclusively on academic tests and examination results."
  ],
  "correctAnswer": "By incorporating subjects like Values Education and Character Education to foster personal and social growth.",
  "Explanation": "In line with the objectives of Republic Act No. 10533, the K12 curriculum incorporates various subjects, including Values Education and Character Education, which aim to support the emotional, social, and moral development of students, helping them become well-rounded individuals."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum (Republic Act No. 10533)",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Application",
  "ytlink": "To follow",
  "qid": "q65",
  "question": "Which of the following would be an appropriate method for teachers to apply the K12 curriculums emphasis on learner-centered education?",
  "options": [
    "Teacher-centered lectures with minimal student interaction.",
    "Collaborative group work, projects, and hands-on learning.",
    "Frequent testing with fixed lesson plans.",
    "Rigid one-size-fits-all instructional materials."
  ],
  "correctAnswer": "Collaborative group work, projects, and hands-on learning.",
  "Explanation": "The K12 curriculum emphasizes learner-centered teaching. Teachers should use strategies like collaborative group work, hands-on activities, and projects to engage students, encourage critical thinking, and enable experiential learning, which are all key components of a student-centered approach."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum (Republic Act No. 10533)",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Application",
  "ytlink": "To follow",
  "qid": "q66",
  "question": "If a teacher wants to integrate technology effectively into the K12 curriculum, which of these would be an appropriate action?",
  "options": [
    "Using only printed textbooks for all subjects.",
    "Incorporating digital tools such as interactive learning platforms and multimedia resources to enhance learning.",
    "Encouraging students to study independently without any technological assistance.",
    "Limiting the use of technology to after-school hours."
  ],
  "correctAnswer": "Incorporating digital tools such as interactive learning platforms and multimedia resources to enhance learning.",
  "Explanation": "Effective use of technology in the K12 curriculum enhances learning opportunities by providing access to diverse resources, interactive platforms, and multimedia tools, fostering greater student engagement and learning outcomes."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum (Republic Act No. 10533)",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Application",
  "ytlink": "To follow",
  "qid": "q67",
  "question": "What is one effective method teachers can use to ensure that K12 students are preparing well for national exams or college admission tests?",
  "options": [
    "Increase classroom hours to cover all topics in great depth.",
    "Provide study guides focusing on past exams only.",
    "Offer focused review sessions, practice exams, and personalized feedback aligned with current curriculum standards.",
    "Limit student involvement in any extracurricular activities."
  ],
  "correctAnswer": "Offer focused review sessions, practice exams, and personalized feedback aligned with current curriculum standards.",
  "Explanation": "A well-rounded approach to preparation for national exams includes offering targeted review sessions and personalized feedback, helping students reflect on their progress and address weaknesses in alignment with the K12 curriculum."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K12 Curriculum (Republic Act No. 10533)",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Analysis",
  "ytlink": "To follow",
  "qid": "q68",
  "question": "Which of the following is a possible outcome if the K12 curriculum does not integrate properly with higher education institutions or industries?",
  "options": [
    "Higher education standards may suffer from disconnection, leaving students inadequately prepared for university-level work or employment.",
    "All students will perform at exceptional levels in higher education.",
    "Employers will have no effect on curriculum content.",
    "Students will only focus on academic topics and will not develop practical skills."
  ],
  "correctAnswer": "Higher education standards may suffer from disconnection, leaving students inadequately prepared for university-level work or employment.",
  "Explanation": "A successful K12 curriculum ensures alignment with higher education institutions and industry needs, preparing students for future academic challenges and workforce requirements. If not properly integrated, students may face difficulties in meeting expectations after graduation."
}
,
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K-12 Curriculum",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q69",
  "question": "Who proposed the K-12 education system in the Philippines?",
  "options": [
    "Department of Education",
    "Republic Act No. 10533",
    "Commission on Higher Education",
    "World Bank"
  ],
  "correctAnswer": "Republic Act No. 10533",
  "Explanation": "Republic Act No. 10533, also known as the Enhanced Basic Education Act of 2013, officially implemented the K-12 system in the Philippines, adding two years to basic education: Senior High School (Grades 11-12)."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K-12 Curriculum",
  "difficulty": "Medium",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q70",
  "question": "Which stage of the K-12 curriculum focuses primarily on providing a specialized educational track for students?",
  "options": [
    "Kindergarten",
    "Senior High School",
    "Junior High School",
    "Elementary"
  ],
  "correctAnswer": "Senior High School",
  "Explanation": "Senior High School (Grades 11-12) in the K-12 curriculum is the stage where students specialize in one of three tracks: Academic, Technical-Vocational-Livelihood, or Arts and Sports."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K-12 Curriculum",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Application",
  "ytlink": "To follow",
  "qid": "q71",
  "question": "A student chooses the Technical-Vocational-Livelihood track in Senior High School. Which of the following would most likely be part of their learning experience?",
  "options": [
    "Advanced Math concepts",
    "Work immersion in an engineering firm",
    "Focus on theoretical sciences",
    "Preparing a business proposal"
  ],
  "correctAnswer": "Work immersion in an engineering firm",
  "Explanation": "The Technical-Vocational-Livelihood track focuses on skills development and provides work immersion programs that enable students to experience hands-on learning in a real-world setting related to their chosen field."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K-12 Curriculum",
  "difficulty": "Medium",
  "bloomstaxonomy": "Analysis",
  "ytlink": "To follow",
  "qid": "q72",
  "question": "Given the implementation of the K-12 curriculum, how might the two additional years in Senior High School benefit a student aiming for higher education?",
  "options": [
    "They will have fewer academic subjects to complete.",
    "They will specialize in technical skills, which may be unnecessary for university education.",
    "They will have more time for internship programs that align with university degrees.",
    "They will study basic concepts that are typically covered in undergraduate courses."
  ],
  "correctAnswer": "They will have more time for internship programs that align with university degrees.",
  "Explanation": "The additional two years of Senior High School are meant to give students the opportunity to explore their interests further through specialized tracks, gaining real-world experience that prepares them for university studies."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K-12 Curriculum",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Evaluation",
  "ytlink": "To follow",
  "qid": "q73",
  "question": "Which of the following best evaluates the impact of Senior High School on the employability of Filipino youth?",
  "options": [
    "It delays the entry of students into the workforce.",
    "It makes students more marketable by providing job-ready skills.",
    "It increases the number of students pursuing college education only.",
    "It has minimal impact, as students prefer going abroad after completing basic education."
  ],
  "correctAnswer": "It makes students more marketable by providing job-ready skills.",
  "Explanation": "Senior High School equips students with both theoretical knowledge and practical skills, providing them with greater opportunities for employment as they gain hands-on experience and certifications in fields related to their track."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K-12 Curriculum",
  "difficulty": "Easy",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q74",
  "question": "In which year of the K-12 curriculum is the transition from Junior High School to Senior High School made?",
  "options": [
    "Grade 6",
    "Grade 7",
    "Grade 10",
    "Grade 12"
  ],
  "correctAnswer": "Grade 10",
  "Explanation": "Students transition from Junior High School (Grade 10) to Senior High School (Grade 11), where they specialize in tracks that align with their future career goals."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K-12 Curriculum",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q75",
  "question": "Why does the K-12 system require students to undergo work immersion during Senior High School?",
  "options": [
    "To gain high school-level certificates for future employment.",
    "To prepare them for the academic challenges of tertiary education.",
    "To experience practical application of their specialized knowledge and skills.",
    "To engage in social studies and research initiatives."
  ],
  "correctAnswer": "To experience practical application of their specialized knowledge and skills.",
  "Explanation": "Work immersion provides Senior High School students with real-life work experiences in industries related to their specialized track, which supports the development of practical skills and makes them more employable."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K-12 Curriculum",
  "difficulty": "Medium",
  "bloomstaxonomy": "Analysis",
  "ytlink": "To follow",
  "qid": "q76",
  "question": "What potential issue might arise due to the implementation of the K-12 curriculum?",
  "options": [
    "Decrease in the quality of education overall.",
    "High number of dropouts due to longer years of study.",
    "Overcrowding of schools due to increased enrollment in senior high school.",
    "Graduates’ technical and vocational skills becoming irrelevant."
  ],
  "correctAnswer": "High number of dropouts due to longer years of study.",
  "Explanation": "Despite the advantages, the extended schooling period (from 10 to 13 years) has led to concerns about the risk of higher dropout rates, as students may choose to enter the workforce earlier due to the additional two years."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K-12 Curriculum",
  "difficulty": "Medium",
  "bloomstaxonomy": "Application",
  "ytlink": "To follow",
  "qid": "q77",
  "question": "A student in Senior High School decides to follow the Humanities and Social Sciences track. What skills would they likely develop?",
  "options": [
    "Business management and leadership skills.",
    "Performing arts and technical craftsmanship.",
    "Analytical and communication skills in areas such as psychology, political science, and philosophy.",
    "Automotive repair and electrical systems skills."
  ],
  "correctAnswer": "Analytical and communication skills in areas such as psychology, political science, and philosophy.",
  "Explanation": "The Humanities and Social Sciences track focuses on developing students understanding of societal issues, as well as honing their analytical and communication skills in fields like psychology, history, and social studies."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "K-12 Curriculum",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Synthesis",
  "ytlink": "To follow",
  "qid": "q78",
  "question": "If the K-12 education system in the Philippines includes multiple learning tracks, how would you combine these tracks to help prepare a student for a successful career in multimedia arts?",
  "options": [
    "Choose the Academic track focusing on science subjects only.",
    "Focus on the Business, Accountancy, and Management track.",
    "Select the Technical-Vocational-Livelihood track with a specialization in multimedia production.",
    "Combine Technical-Vocational-Livelihood with the Arts and Design track."
  ],
  "correctAnswer": "Combine Technical-Vocational-Livelihood with the Arts and Design track.",
  "Explanation": "The Arts and Design track combined with the Technical-Vocational-Livelihood track equips students with both the technical skills and creative insights they need for a successful career in multimedia arts."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Evaluation",
  "ytlink": "To follow",
  "qid": "q79",
  "question": "Evaluate the effectiveness of using punishment in a classroom setting.",
  "options": [
    "Punishment is always the most effective strategy for changing behavior.",
    "Punishment works best when paired with positive reinforcement.",
    "Punishment may create negative emotions or an environment of fear, leading to long-term behavior issues.",
    "Punishment is ineffective when applied inconsistently."
  ],
  "correctAnswer": "Punishment may create negative emotions or an environment of fear, leading to long-term behavior issues.",
  "Explanation": "Punishment may suppress undesired behavior temporarily but can lead to negative side effects, like anxiety or resentment, if used incorrectly."
}
,
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q80",
  "question": "Which of the following terms is used to describe the process of reinforcing a behavior until it is performed consistently?",
  "options": [
    "Shaping",
    "Extinction",
    "Conditioning",
    "Generalization"
  ],
  "correctAnswer": "Shaping",
  "Explanation": "Shaping is a process in which reinforcement is provided for successive approximations to a desired behavior. Over time, these approximations help the learner perform the behavior consistently."
},

{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q81",
  "question": "Who is credited with discovering the principle of classical conditioning?",
  "options": [
    "B.F. Skinner",
    "John Watson",
    "Ivan Pavlov",
    "Albert Bandura"
  ],
  "correctAnswer": "Ivan Pavlov",
  "Explanation": "Ivan Pavlov discovered classical conditioning through his work with dogs, demonstrating that a neutral stimulus could elicit a conditioned response when paired with an unconditioned stimulus."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q82",
  "question": "In behaviorism, which of the following is considered a primary reinforcer?",
  "options": [
    "Food",
    "Money",
    "Grades",
    "Praise"
  ],
  "correctAnswer": "Food",
  "Explanation": "Primary reinforcers are stimuli that satisfy biological needs, such as food, water, and shelter. These reinforcers do not require prior learning to be effective."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q83",
  "question": "What happens during extinction in operant conditioning?",
  "options": [
    "A behavior increases due to reinforcement.",
    "The subject associates an unconditioned stimulus with a conditioned response.",
    "A previously reinforced behavior diminishes when reinforcement is stopped.",
    "A behavior is reinforced intermittently."
  ],
  "correctAnswer": "A previously reinforced behavior diminishes when reinforcement is stopped.",
  "Explanation": "Extinction occurs when a behavior that was once reinforced is no longer followed by reinforcement, causing the behavior to gradually decrease and eventually stop."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q84",
  "question": "What does generalization refer to in classical conditioning?",
  "options": [
    "The tendency to learn behaviors from multiple sources.",
    "The process of transferring learned behavior to a different but similar situation.",
    "The complete extinction of conditioned behavior.",
    "The creation of a conditioned response to a neutral stimulus."
  ],
  "correctAnswer": "The process of transferring learned behavior to a different but similar situation.",
  "Explanation": "Generalization occurs when a conditioned response is triggered by a stimulus that is similar to the original conditioned stimulus, demonstrating that the learned response can transfer to new situations."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q85",
  "question": "In the context of operant conditioning, what is negative reinforcement?",
  "options": [
    "Presenting a reward following a behavior.",
    "Taking away an unpleasant stimulus to strengthen behavior.",
    "Introducing a punishment to decrease behavior.",
    "Providing a constant reinforcement schedule."
  ],
  "correctAnswer": "Taking away an unpleasant stimulus to strengthen behavior.",
  "Explanation": "Negative reinforcement involves the removal of an unpleasant or aversive stimulus when a desired behavior occurs, thus reinforcing that behavior."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q86",
  "question": "What does the term discriminative stimulus mean in operant conditioning?",
  "options": [
    "A signal that a behavior will be reinforced.",
    "A stimulus that results in extinction of a behavior.",
    "A stimulus that directly causes the behavior.",
    "An aversive stimulus meant to punish the behavior."
  ],
  "correctAnswer": "A signal that a behavior will be reinforced.",
  "Explanation": "A discriminative stimulus signals that reinforcement is available for a behavior, helping the learner identify when to engage in specific behaviors to receive a reward."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Application",
  "ytlink": "To follow",
  "qid": "q87",
  "question": "How could you use reinforcement to increase a students participation in class discussions?",
  "options": [
    "Offering praise every time the student contributes to the discussion.",
    "Giving the student an additional assignment for each comment.",
    "Ignoring the students contributions to encourage quieter behavior.",
    "Providing punishment for talking without raising a hand."
  ],
  "correctAnswer": "Offering praise every time the student contributes to the discussion.",
  "Explanation": "Positive reinforcement can be applied by giving praise every time the student participates, reinforcing the behavior and encouraging further involvement."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Application",
  "ytlink": "To follow",
  "qid": "q88",
  "question": "If you want to stop a behavior in a student by removing a distracting toy every time the behavior occurs, which strategy are you using?",
  "options": [
    "Negative reinforcement",
    "Positive punishment",
    "Negative punishment",
    "Extinction"
  ],
  "correctAnswer": "Negative punishment",
  "Explanation": "Negative punishment involves the removal of a desirable stimulus (the toy) to decrease an undesired behavior."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Application",
  "ytlink": "To follow",
  "qid": "q89",
  "question": "Which strategy would be most effective in rewarding a student for consistently finishing their homework on time?",
  "options": [
    "Positive reinforcement, by giving them a treat each time.",
    "Negative reinforcement, by removing restrictions when homework is completed.",
    "Punishment, by deducting points from their grade for delays.",
    "Extinction, by no longer acknowledging the completion of homework."
  ],
  "correctAnswer": "Positive reinforcement, by giving them a treat each time.",
  "Explanation": "By offering positive reinforcement (like a treat) after each successful completion of the homework, the student is encouraged to keep performing the desired behavior."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Analysis",
  "ytlink": "To follow",
  "qid": "q90",
  "question": "How would a teacher use intermittent reinforcement to enhance behavior persistence?",
  "options": [
    "Reinforce the behavior every time it happens.",
    "Reinforce the behavior at random or variable intervals.",
    "Never reinforce the behavior, allowing it to extinguish.",
    "Provide rewards consistently without variation."
  ],
  "correctAnswer": "Reinforce the behavior at random or variable intervals.",
  "Explanation": "Intermittent reinforcement, especially when delivered unpredictably, makes the learned behavior more persistent and resistant to extinction."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Analysis",
  "ytlink": "To follow",
  "qid": "q91",
  "question": "Compare fixed-interval and variable-interval reinforcement schedules in terms of their effectiveness in shaping behavior.",
  "options": [
    "Variable-interval schedules lead to a more consistent response rate compared to fixed-interval schedules.",
    "Fixed-interval reinforcement provides more rewarding schedules, making behavior more persistent.",
    "Both schedules yield identical response rates and patterns in the long run.",
    "Fixed-interval schedules provide random reinforcement, while variable schedules offer predictable rewards."
  ],
  "correctAnswer": "Variable-interval schedules lead to a more consistent response rate compared to fixed-interval schedules.",
  "Explanation": "Variable-interval reinforcement schedules tend to promote more consistent and persistent behavior, as reinforcement is delivered unpredictably, unlike fixed-interval schedules that reinforce at fixed times."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Evaluation",
  "ytlink": "To follow",
  "qid": "q92",
  "question": "Evaluate the pros and cons of using punishment in behavior modification strategies.",
  "options": [
    "Punishment always leads to fast behavior changes without any negative side effects.",
    "Punishment should be used sparingly as it may suppress the behavior without teaching desirable alternatives, potentially causing negative feelings or escape behaviors.",
    "Punishment helps to reinforce the correct behavior immediately by using high-intensity consequences.",
    "Punishment is more effective than reinforcement for creating permanent behavioral changes."
  ],
  "correctAnswer": "Punishment should be used sparingly as it may suppress the behavior without teaching desirable alternatives, potentially causing negative feelings or escape behaviors.",
  "Explanation": "While punishment may be effective in the short term, it does not teach appropriate behavior and can lead to negative emotions, such as fear or resentment."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q93",
  "question": "What is the main difference between classical conditioning and operant conditioning?",
  "options": [
    "Classical conditioning deals with voluntary responses while operant conditioning involves involuntary responses.",
    "Classical conditioning involves pairing stimuli to elicit an automatic response, while operant conditioning is based on consequences following voluntary behavior.",
    "Classical conditioning involves reinforcement, while operant conditioning focuses on punishment.",
    "Classical conditioning teaches new behaviors while operant conditioning modifies existing behaviors."
  ],
  "correctAnswer": "Classical conditioning involves pairing stimuli to elicit an automatic response, while operant conditioning is based on consequences following voluntary behavior.",
  "Explanation": "In classical conditioning, stimuli are paired to produce an involuntary reaction. In operant conditioning, voluntary behaviors are influenced by reinforcement or punishment."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q94",
  "question": "What is an example of an unconditioned stimulus in classical conditioning?",
  "options": [
    "A loud noise",
    "A light bulb",
    "A bell",
    "A whistle"
  ],
  "correctAnswer": "A loud noise",
  "Explanation": "An unconditioned stimulus in classical conditioning naturally triggers a response without prior learning. A loud noise, for example, triggers an automatic response like fear."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q95",
  "question": "Which of the following is NOT an example of negative reinforcement?",
  "options": [
    "Taking away a childs grounding for completing their homework.",
    "Removing a seatbelt alarm when a driver buckles up.",
    "Turning off a loud noise once a behavior is performed.",
    "Providing a cookie as a reward for good behavior."
  ],
  "correctAnswer": "Providing a cookie as a reward for good behavior.",
  "Explanation": "Negative reinforcement involves the removal of an aversive stimulus to increase the likelihood of a desired behavior, whereas providing a reward (like a cookie) is an example of positive reinforcement."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q96",
  "question": "What role does reinforcement play in behaviorism?",
  "options": [
    "It decreases the probability of the behavior occurring.",
    "It encourages a specific behavior to increase.",
    "It extinguishes behaviors completely.",
    "It leads to confusion in the learning process."
  ],
  "correctAnswer": "It encourages a specific behavior to increase.",
  "Explanation": "Reinforcement increases the likelihood that a behavior will occur again by rewarding or reinforcing the action when it is performed."
},

{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q97",
  "question": "In Skinners operant conditioning, what does a token typically represent?",
  "options": [
    "A form of punishment to reduce undesirable behavior.",
    "A reinforcer used to encourage a target behavior.",
    "A neutral stimulus that produces conditioned responses.",
    "A response that is automatically triggered by an unconditioned stimulus."
  ],
  "correctAnswer": "A reinforcer used to encourage a target behavior.",
  "Explanation": "A token in Skinners operant conditioning is a secondary reinforcer used to reward a behavior and can later be exchanged for primary reinforcers, like food or privileges."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q98",
  "question": "What does spontaneous recovery refer to in classical conditioning?",
  "options": [
    "The immediate extinction of a conditioned response.",
    "The sudden return of a conditioned response after extinction.",
    "The formation of new conditioned responses.",
    "The weakening of the unconditioned stimulus."
  ],
  "correctAnswer": "The sudden return of a conditioned response after extinction.",
  "Explanation": "Spontaneous recovery is the reappearance of a conditioned response after a period of non-reinforcement or extinction."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q99",
  "question": "What is the primary difference between negative reinforcement and punishment?",
  "options": [
    "Negative reinforcement encourages a behavior, whereas punishment discourages it.",
    "Negative reinforcement and punishment are essentially the same.",
    "Punishment is always more effective than negative reinforcement.",
    "Negative reinforcement always increases behavior while punishment always decreases behavior."
  ],
  "correctAnswer": "Negative reinforcement encourages a behavior, whereas punishment discourages it.",
  "Explanation": "Negative reinforcement strengthens behavior by removing an aversive stimulus, while punishment weakens behavior by introducing an unpleasant consequence."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Application",
  "ytlink": "To follow",
  "qid": "q100",
  "question": "How could a teacher use operant conditioning to encourage punctuality in students?",
  "options": [
    "By rewarding students with extra recess time for arriving on time.",
    "By removing privileges when a student arrives late.",
    "By punishing the student with detention each time they are late.",
    "By giving praise only to students who leave early."
  ],
  "correctAnswer": "By rewarding students with extra recess time for arriving on time.",
  "Explanation": "Operant conditioning would suggest using reinforcement, such as rewarding on-time students with a privilege, like extra recess, to increase the likelihood of punctual behavior."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Application",
  "ytlink": "To follow",
  "qid": "q101",
  "question": "In an experiment, a dog salivates after hearing a bell, a neutral stimulus paired with food. What process is taking place?",
  "options": [
    "Generalization",
    "Punishment",
    "Classical conditioning",
    "Operant conditioning"
  ],
  "correctAnswer": "Classical conditioning",
  "Explanation": "In this experiment, the dog is exhibiting classical conditioning, as it associates the neutral stimulus (bell) with the unconditioned stimulus (food), leading to a conditioned response (salivation)."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Application",
  "ytlink": "To follow",
  "qid": "q102",
  "question": "How might a teacher use positive reinforcement to increase student engagement in class?",
  "options": [
    "By offering praise or rewards for answering questions or contributing to discussions.",
    "By reprimanding students when they remain quiet.",
    "By providing worksheets only to students who are answering questions correctly.",
    "By ignoring students who do not participate."
  ],
  "correctAnswer": "By offering praise or rewards for answering questions or contributing to discussions.",
  "Explanation": "Positive reinforcement can encourage behavior by providing rewards (such as praise or treats) for desirable actions, like student participation in class activities."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Analysis",
  "ytlink": "To follow",
  "qid": "q103",
  "question": "If an individual learns to fear a harmless object after associating it with an aversive stimulus, which type of classical conditioning has occurred?",
  "options": [
    "Generalization",
    "Discrimination",
    "Higher-order conditioning",
    "Conditioned emotional response"
  ],
  "correctAnswer": "Conditioned emotional response",
  "Explanation": "A conditioned emotional response is when an emotional reaction (like fear) becomes associated with a neutral stimulus through classical conditioning, leading the person to react to that stimulus in an emotional way."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Analysis",
  "ytlink": "To follow",
  "qid": "q104",
  "question": "Which of the following would be considered a form of operant conditioning analysis in a classroom?",
  "options": [
    "Observing the frequency of voluntary behaviors based on positive or negative reinforcement.",
    "Analyzing the physical responses a student has to environmental stimuli.",
    "Examining emotional reactions to various activities in a classroom.",
    "Studying how group dynamics influence student learning."
  ],
  "correctAnswer": "Observing the frequency of voluntary behaviors based on positive or negative reinforcement.",
  "Explanation": "Operant conditioning involves analyzing voluntary behaviors that are influenced by reinforcement or punishment, aiming to understand how different consequences affect the behaviors frequency."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Behaviorism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Evaluation",
  "ytlink": "To follow",
  "qid": "q105",
  "question": "Evaluate the effectiveness of using intermittent reinforcement over continuous reinforcement for behavior modification.",
  "options": [
    "Intermittent reinforcement is less effective for establishing new behaviors but more effective for maintaining behaviors long term.",
    "Continuous reinforcement is more effective in promoting long-term behavior change.",
    "Intermittent reinforcement provides guaranteed and reliable reinforcement for each response.",
    "Continuous reinforcement weakens behavior consistency over time."
  ],
  "correctAnswer": "Intermittent reinforcement is less effective for establishing new behaviors but more effective for maintaining behaviors long term.",
  "Explanation": "While continuous reinforcement works better for establishing new behaviors by rewarding each instance, intermittent reinforcement results in greater resistance to extinction over time."
}
,
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q106",
  "question": "Who is considered the father of cognitive psychology?",
  "options": [
    "Jean Piaget",
    "Lev Vygotsky",
    "John Watson",
    "Sigmund Freud"
  ],
  "correctAnswer": "Jean Piaget",
  "Explanation": "Jean Piaget is regarded as the father of cognitive psychology because of his work on child development and his theory of cognitive stages, which influenced the field deeply."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q107",
  "question": "Which cognitive psychologist developed the concept of schema theory?",
  "options": [
    "Jerome Bruner",
    "B.F. Skinner",
    "Albert Bandura",
    "Noam Chomsky"
  ],
  "correctAnswer": "Jerome Bruner",
  "Explanation": "Jerome Bruner developed the concept of schema theory, which involves the way information is stored in cognitive structures known as schemas."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q108",
  "question": "What is the focus of cognitive learning theory?",
  "options": [
    "Stimulus-response connections",
    "Mental processes such as thinking, memory, and problem-solving",
    "Rewards and punishments",
    "Behavioral changes only"
  ],
  "correctAnswer": "Mental processes such as thinking, memory, and problem-solving",
  "Explanation": "Cognitive learning theory focuses on how individuals perceive, process, and store information, as well as how they use that information for problem-solving and decision-making."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q109",
  "question": "How does Vygotskys theory of cognitive development differ from Piagets?",
  "options": [
    "Vygotsky emphasized the social context and language in development, while Piaget focused on stages of individual development.",
    "Piaget focused on sensory-motor skills, while Vygotsky emphasized abstract thinking.",
    "Vygotsky believed in fixed stages of development, while Piaget thought development was continuous.",
    "Piaget focused on learning through trial and error, while Vygotsky focused on structured learning."
  ],
  "correctAnswer": "Vygotsky emphasized the social context and language in development, while Piaget focused on stages of individual development.",
  "Explanation": "Vygotsky believed cognitive development was largely shaped by social interactions, especially with more experienced peers or adults. Piaget, on the other hand, focused on stages of individual cognitive development."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q110",
  "question": "What is the role of scaffolding in Vygotsky’s social development theory?",
  "options": [
    "Scaffolding serves as an emotional support structure.",
    "Scaffolding provides physical assistance to learners.",
    "Scaffolding helps learners perform tasks they cannot do alone by providing support.",
    "Scaffolding limits the amount of feedback a learner receives."
  ],
  "correctAnswer": "Scaffolding helps learners perform tasks they cannot do alone by providing support.",
  "Explanation": "Scaffolding refers to the support and guidance provided by a more knowledgeable person to help a learner achieve tasks they cannot do independently."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q111",
  "question": "What is the main concept of cognitive load theory?",
  "options": [
    "It emphasizes how much new information can be retained in short-term memory.",
    "It emphasizes managing distractions during the learning process.",
    "It suggests that learning is more effective when cognitive load exceeds capacity.",
    "It asserts that the more working memory demands there are, the less learning will occur."
  ],
  "correctAnswer": "It asserts that the more working memory demands there are, the less learning will occur.",
  "Explanation": "Cognitive load theory suggests that an overload in cognitive resources can hinder learning. It highlights the importance of managing working memory to enhance learning efficiency."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q112",
  "question": "In what way does constructivism relate to cognitivism in the context of learning theories?",
  "options": [
    "Constructivism assumes learners are passive participants, while cognitivism suggests active engagement.",
    "Both theories emphasize the importance of environmental cues in learning.",
    "Both theories view learners as active participants, constructing new knowledge through interaction and mental processes.",
    "Constructivism rejects mental processes in learning, focusing on behavior."
  ],
  "correctAnswer": "Both theories view learners as active participants, constructing new knowledge through interaction and mental processes.",
  "Explanation": "Constructivism and cognitivism both see learners as active creators of knowledge, using their cognitive processes and interactions with their environment to build understanding."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Application",
  "ytlink": "To follow",
  "qid": "q113",
  "question": "How might a teacher apply cognitive learning strategies to enhance comprehension of a new concept in class?",
  "options": [
    "By using behavior rewards when students correctly guess answers.",
    "By engaging students in problem-solving exercises that encourage them to make connections with prior knowledge.",
    "By encouraging memorization of facts without interaction.",
    "By teaching only abstract concepts to force students to think deeply."
  ],
  "correctAnswer": "By engaging students in problem-solving exercises that encourage them to make connections with prior knowledge.",
  "Explanation": "Cognitive strategies involve helping students build new knowledge by relating it to what they already know and by engaging them in higher-order thinking like problem-solving and critical analysis."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Application",
  "ytlink": "To follow",
  "qid": "q114",
  "question": "How can a teacher use dual coding to support student understanding in a lesson on ecosystems?",
  "options": [
    "By providing both verbal descriptions and diagrams of ecosystems, helping students link visual and textual information.",
    "By asking students to create flashcards with single words and their definitions.",
    "By engaging students in debates about the roles of organisms in an ecosystem.",
    "By asking students to draw mental maps without any accompanying visuals or verbal descriptions."
  ],
  "correctAnswer": "By providing both verbal descriptions and diagrams of ecosystems, helping students link visual and textual information.",
  "Explanation": "Dual coding involves presenting information both verbally and visually, which helps students create multiple pathways for understanding and remembering new information."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Application",
  "ytlink": "To follow",
  "qid": "q115",
  "question": "A student is struggling to learn new vocabulary words. Which cognitive strategy would help improve retention?",
  "options": [
    "Rote memorization",
    "Association with known concepts and visual imagery",
    "Overloading working memory with additional new words",
    "Repeating the words to the class without individual reflection"
  ],
  "correctAnswer": "Association with known concepts and visual imagery",
  "Explanation": "By associating new vocabulary words with familiar concepts or using mental imagery, students can improve their retention of the words."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Analysis",
  "ytlink": "To follow",
  "qid": "q116",
  "question": "How would you analyze the process by which information is stored in long-term memory in cognitive theory?",
  "options": [
    "Information is stored automatically once it is encoded.",
    "Information is first stored in short-term memory and then selectively transferred to long-term memory based on rehearsal and meaning.",
    "All new information is transferred to long-term memory instantaneously.",
    "Information is permanently discarded if not revisited or used frequently."
  ],
  "correctAnswer": "Information is first stored in short-term memory and then selectively transferred to long-term memory based on rehearsal and meaning.",
  "Explanation": "Cognitive theory posits that information first enters short-term memory and then is transferred to long-term memory when it is rehearsed or connected with meaningful content."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Analysis",
  "ytlink": "To follow",
  "qid": "q117",
  "question": "Why is chunking an effective strategy for improving cognitive processing in learning?",
  "options": [
    "It breaks complex information into manageable pieces, making it easier to encode and retrieve.",
    "It relies on memorization of individual items without needing deeper processing.",
    "It provides visual representations to increase memory capacity.",
    "It leads to permanent retention of information in one step."
  ],
  "correctAnswer": "It breaks complex information into manageable pieces, making it easier to encode and retrieve.",
  "Explanation": "Chunking helps to organize information into meaningful units, reducing cognitive load and making it easier for the brain to process and retrieve data."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Evaluation",
  "ytlink": "To follow",
  "qid": "q118",
  "question": "Evaluate the effectiveness of the cognitive approach in teaching mathematics compared to a purely behavioral approach.",
  "options": [
    "The cognitive approach is more effective because it encourages active problem-solving and understanding rather than just rote memorization.",
    "The behavioral approach is superior because it enforces strict practice without the need for cognitive processing.",
    "Both approaches are equally effective as they provide direct reinforcement for all types of learners.",
    "The cognitive approach is less effective since it does not rely on rewards and punishment systems."
  ],
  "correctAnswer": "The cognitive approach is more effective because it encourages active problem-solving and understanding rather than just rote memorization.",
  "Explanation": "Cognitive methods encourage learners to think critically, solve problems, and make connections between concepts, making it more effective in promoting deeper understanding in subjects like mathematics."
}
,
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q119",
  "question": "What is the primary role of working memory according to cognitive theory?",
  "options": [
    "It acts as a filter for irrelevant information.",
    "It helps store information long-term.",
    "It processes and manipulates information actively during tasks.",
    "It ensures information is automatically forgotten after use."
  ],
  "correctAnswer": "It processes and manipulates information actively during tasks.",
  "Explanation": "Working memory temporarily stores and processes information actively when solving problems, making decisions, or performing tasks. It allows learners to focus on information relevant to a task."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q120",
  "question": "Which concept explains the process of organizing new information into meaningful units?",
  "options": [
    "Encoding",
    "Chunking",
    "Automatic processing",
    "Rehearsal"
  ],
  "correctAnswer": "Chunking",
  "Explanation": "Chunking refers to the cognitive process of grouping pieces of information into manageable units to enhance memory and retention."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q121",
  "question": "Which of the following is most important for effective problem-solving in cognitive learning?",
  "options": [
    "Individual knowledge alone",
    "Previous experience and knowledge retrieval",
    "The presence of external rewards",
    "Reliance on memorized facts"
  ],
  "correctAnswer": "Previous experience and knowledge retrieval",
  "Explanation": "In cognitive learning, effective problem-solving depends on retrieving prior knowledge and experiences to make connections, identify patterns, and formulate solutions."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q122",
  "question": "How do cognitive theorists explain the learning of complex tasks?",
  "options": [
    "Through repetition until automaticity is achieved",
    "By breaking tasks into smaller, manageable steps and providing feedback",
    "By manipulating the learning environment to reduce external distractions",
    "By memorizing the task with no understanding of underlying principles"
  ],
  "correctAnswer": "By breaking tasks into smaller, manageable steps and providing feedback",
  "Explanation": "Cognitive learning theorists recommend breaking down complex tasks into smaller steps and providing ongoing feedback to build understanding progressively."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q123",
  "question": "What role does rehearsal play in cognitive learning?",
  "options": [
    "It ensures long-term storage by reinforcing neural connections.",
    "It prevents information from entering the brains short-term storage.",
    "It blocks the effect of prior learning.",
    "It enables distraction-free attention to other tasks."
  ],
  "correctAnswer": "It ensures long-term storage by reinforcing neural connections.",
  "Explanation": "Rehearsal is the process by which learners actively review and practice information, reinforcing connections in the brain, and helping to transfer the information from short-term to long-term memory."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q124",
  "question": "According to cognitive learning theory, how does prior knowledge impact new learning?",
  "options": [
    "It inhibits new learning because learners are only interested in what is new.",
    "It helps learners link new concepts to familiar ideas, facilitating understanding.",
    "It hinders understanding by promoting reliance on memorization.",
    "It requires the learner to discard outdated knowledge completely."
  ],
  "correctAnswer": "It helps learners link new concepts to familiar ideas, facilitating understanding.",
  "Explanation": "Cognitive learning theory emphasizes the importance of prior knowledge because it allows learners to make connections between what they already know and what they are learning, helping to integrate new information."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q125",
  "question": "How does cognitive theory view the process of learning?",
  "options": [
    "As a passive activity where learners absorb information from the environment",
    "As a random and uncontrollable process",
    "As an active process where the learner constructs knowledge based on prior experience and new input",
    "As a mechanical process based solely on external reinforcement"
  ],
  "correctAnswer": "As an active process where the learner constructs knowledge based on prior experience and new input",
  "Explanation": "Cognitive theory posits that learners are active participants in their own learning process, constructing and refining knowledge based on new experiences and prior understanding."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Application",
  "ytlink": "To follow",
  "qid": "q126",
  "question": "How might you help a student struggling to remember a list of historical events?",
  "options": [
    "Encourage the student to memorize each event individually.",
    "Provide a timeline with visual cues and help the student relate each event to a broader historical theme.",
    "Tell the student to focus only on the most important events without any explanation.",
    "Ignore the students difficulties and test the student on the list directly."
  ],
  "correctAnswer": "Provide a timeline with visual cues and help the student relate each event to a broader historical theme.",
  "Explanation": "Cognitive strategies such as creating visual representations and relating new information to prior knowledge can aid memory and understanding of complex or lengthy information."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Application",
  "ytlink": "To follow",
  "qid": "q127",
  "question": "How can teachers help students apply metacognitive strategies in a lesson on reading comprehension?",
  "options": [
    "By having them read the material and then simply memorize the text.",
    "By encouraging students to self-assess their understanding and make adjustments to their approach as needed.",
    "By limiting the texts complexity and eliminating the need for critical analysis.",
    "By providing a strict, step-by-step guide that limits student initiative."
  ],
  "correctAnswer": "By encouraging students to self-assess their understanding and make adjustments to their approach as needed.",
  "Explanation": "Metacognitive strategies involve self-awareness of ones thinking process. Encouraging students to reflect on their understanding allows them to adjust strategies to improve learning and comprehension."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Application",
  "ytlink": "To follow",
  "qid": "q128",
  "question": "In teaching critical thinking, how could a teacher facilitate students’ cognitive engagement with the material?",
  "options": [
    "By giving students direct answers so they do not have to think critically.",
    "By asking open-ended questions that challenge students to explore different perspectives.",
    "By limiting discussion to simple facts to ensure clarity.",
    "By encouraging passive note-taking from lecture slides."
  ],
  "correctAnswer": "By asking open-ended questions that challenge students to explore different perspectives.",
  "Explanation": "Cognitive engagement is enhanced when students are prompted to think critically and explore material by considering various viewpoints, thereby encouraging deep processing and analysis."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Analysis",
  "ytlink": "To follow",
  "qid": "q129",
  "question": "When comparing declarative and procedural knowledge, what is the key distinction according to cognitive theory?",
  "options": [
    "Declarative knowledge is factual knowledge that can be verbally expressed, while procedural knowledge involves the processes needed to perform tasks.",
    "Declarative knowledge is abstract and less important, while procedural knowledge is concrete and more valuable.",
    "Declarative knowledge must be memorized before procedural knowledge can be applied.",
    "Procedural knowledge is only applied to physical tasks, while declarative knowledge is for intellectual learning."
  ],
  "correctAnswer": "Declarative knowledge is factual knowledge that can be verbally expressed, while procedural knowledge involves the processes needed to perform tasks.",
  "Explanation": "Declarative knowledge is knowledge about facts, concepts, and information, while procedural knowledge involves knowing how to perform tasks or procedures."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Analysis",
  "ytlink": "To follow",
  "qid": "q130",
  "question": "Why might cognitive load theory suggest minimizing extraneous cognitive load in complex learning tasks?",
  "options": [
    "It increases the amount of information that can be processed without overloading memory.",
    "It reduces the chances of remembering any information at all.",
    "It accelerates the learning process by skipping essential steps.",
    "It guarantees learners retain every detail they encounter."
  ],
  "correctAnswer": "It increases the amount of information that can be processed without overloading memory.",
  "Explanation": "Cognitive load theory emphasizes the need to minimize unnecessary cognitive demands in order to allow learners to effectively process and retain important information."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Evaluation",
  "ytlink": "To follow",
  "qid": "q131",
  "question": "Evaluate the benefits of incorporating cognitive strategies in the classroom over traditional behaviorist methods.",
  "options": [
    "Cognitive strategies lead to more individualized learning, emphasizing problem-solving and deeper understanding.",
    "Behaviorist methods lead to better long-term retention without the need for complex strategies.",
    "Cognitive strategies are ineffective and unnecessary for learning a new skill.",
    "Behaviorist methods are only effective when reinforcing memorization of specific tasks."
  ],
  "correctAnswer": "Cognitive strategies lead to more individualized learning, emphasizing problem-solving and deeper understanding.",
  "Explanation": "Incorporating cognitive strategies focuses on engaging students in more active, meaningful learning, encouraging problem-solving and critical thinking. This fosters a deeper, more integrated understanding compared to simple rote learning under behaviorist methods."
}
,
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q132",
  "question": "Which cognitive process refers to the transformation of sensory information into a form that can be stored in long-term memory?",
  "options": [
    "Retrieval",
    "Encoding",
    "Processing",
    "Rehearsal"
  ],
  "correctAnswer": "Encoding",
  "Explanation": "Encoding is the process of converting sensory input into a format that can be stored in long-term memory. This process is essential for the retention of information in cognitive theory."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q133",
  "question": "In the context of cognitive learning, which of the following best describes schemas?",
  "options": [
    "Memories of specific events or experiences.",
    "Mental frameworks or structures that organize knowledge.",
    "External conditions that influence learning.",
    "Steps in a learning sequence."
  ],
  "correctAnswer": "Mental frameworks or structures that organize knowledge.",
  "Explanation": "Schemas are mental structures that help us organize and categorize information. They are fundamental to cognitive learning as they guide the interpretation and processing of new information."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Knowledge",
  "ytlink": "To follow",
  "qid": "q134",
  "question": "Which theory posits that learners actively construct mental models of the world through cognitive processes like assimilation and accommodation?",
  "options": [
    "Behaviorism",
    "Constructivism",
    "Cognitivism",
    "Humanism"
  ],
  "correctAnswer": "Cognitivism",
  "Explanation": "Cognitivism emphasizes that learning is an active process of constructing mental models or cognitive maps. Learners use existing cognitive structures to interpret and make sense of new information, through processes like assimilation and accommodation."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q135",
  "question": "According to cognitive theory, how does information from long-term memory help in learning new tasks?",
  "options": [
    "It provides immediate feedback to the learner.",
    "It can be recalled to make connections and guide problem-solving.",
    "It slows down the learning process by creating confusion.",
    "It prevents any errors from happening."
  ],
  "correctAnswer": "It can be recalled to make connections and guide problem-solving.",
  "Explanation": "Cognitive learning theory stresses that prior knowledge from long-term memory is crucial for making connections, organizing new information, and guiding learning processes, particularly in problem-solving and understanding new tasks."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q136",
  "question": "What does cognitive load theory suggest about the optimal amount of cognitive effort in learning activities?",
  "options": [
    "Learning tasks should always be as simple as possible.",
    "Excessive cognitive load should be minimized to avoid overload and improve learning.",
    "Cognitive load has no effect on the learning process.",
    "The more cognitive load, the better the learning outcome."
  ],
  "correctAnswer": "Excessive cognitive load should be minimized to avoid overload and improve learning.",
  "Explanation": "Cognitive load theory suggests that learners have limited working memory resources. Effective learning occurs when the cognitive load is balanced, allowing learners to process and store information efficiently without overwhelming their capacity."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q137",
  "question": "How does cognitive learning theory explain the process of conceptual change in learners?",
  "options": [
    "By reinforcing previous concepts until new ideas become unnecessary.",
    "By incorporating new information into existing cognitive structures, sometimes revising them.",
    "By eliminating previously learned knowledge.",
    "By relying on intuition to correct misconceptions."
  ],
  "correctAnswer": "By incorporating new information into existing cognitive structures, sometimes revising them.",
  "Explanation": "Cognitive learning theory posits that when learners are confronted with new information, they either add this to existing mental structures (assimilation) or modify their structures (accommodation) to incorporate the new knowledge."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
  "qid": "q138",
  "question": "Why is feedback essential in the context of cognitive learning?",
  "options": [
    "It serves as a punishment for errors.",
    "It offers an immediate reward for correct responses.",
    "It helps learners identify gaps in their understanding and refine their knowledge.",
    "It replaces the need for active engagement in learning."
  ],
  "correctAnswer": "It helps learners identify gaps in their understanding and refine their knowledge.",
  "Explanation": "Feedback is an essential element in cognitive learning as it allows learners to assess their progress, identify errors, and refine their mental models or understanding of concepts."
},
{
  "major": "Prof Ed",
  "subject": "Learning Theory",
  "topic": "Cognitivism",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Application",
  "ytlink": "To follow",
  "qid": "q139",
  "question": "What strategy would be most effective for teaching a group of students how to solve complex math problems according to cognitive learning theory?",
  "options": [
    "Providing solutions without explanation so students can memorize the process.",
    "Breaking down the steps into smaller components, offering examples, and having students practice.",
    "Letting students solve problems independently without any support or guidance.",
    "Having students write a report on the math concepts learned."
  ],
  "correctAnswer": "Breaking down the steps into smaller components, offering examples, and having students practice.",
  "Explanation": "According to cognitive theory, breaking down complex tasks into manageable steps, offering clear examples, and ensuring practice opportunities helps students internalize information and apply their knowledge effectively."
},
  ];

// Route to fetch questions
app.get("/api/questions", (req, res) => {
  res.json(questions); // Send the list of questions as the response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
