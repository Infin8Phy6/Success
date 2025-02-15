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
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence uses the correct example of code-switching?",
    "options": [
  "I went to the store, and then I saw my friend.",
  "I went to the store, y luego vi a mi amigo.",
  "I went to the store and I saw a friend.",
  "I went to the store, and then I came back."
],
    "correctAnswer": "I went to the store, y luego vi a mi amigo.",
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence demonstrates a dialect variation?",
    "options": [
  "She is gonna be there in an hour.",
  "She will be there in an hour.",
  "She is going to be there in an hour.",
  "She'll be there in an hour."
],
    "correctAnswer": "She is gonna be there in an hour.",
    "explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To be followed",
    "question": "Which sentence uses a non-standard English form?",
    "options": [
  "She ain't going nowhere.",
  "She isn't going anywhere.",
  "She isn’t going nowhere.",
  "She is not going anywhere."
],
    "correctAnswer": "She ain't going nowhere."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To be followed",
    "question": "Which sentence uses gender-neutral language?",
    "options": [
  "Everyone should bring their own lunch.",
  "Everyone should bring his or her own lunch.",
  "Everyone should bring his lunch.",
  "Everyone should bring her lunch."
],
    "correctAnswer": "Everyone should bring their own lunch."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To be followed",
    "question": "Which sentence uses professional jargon?",
    "options": [
  "We need to synchronize the data across platforms.",
  "We should make sure the data matches.",
  "Let’s ensure the data is correct.",
  "We should update the system."
],
    "correctAnswer": "We need to synchronize the data across platforms."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To be followed",
    "question": "Which sentence uses an example of code-mixing?",
    "options": [
  "I was walking and luego I found a shop.",
  "I walked and then I found a shop.",
  "I was walking and I found a shop.",
  "I found a shop while walking."
],
    "correctAnswer": "I was walking and luego I found a shop."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence demonstrates an informal tone?",
    "options": [
  "I’ll give you a call later, if that’s okay.",
  "I would be honored to call you later, if that’s fine.",
  "I’ll call you later.",
  "I will give you a call later if you wish."
],
    "correctAnswer": "I’ll give you a call later, if that’s okay."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence uses slang?",
    "options": [
  "That party was totally lit!",
  "The party was amazing.",
  "The party was great.",
  "That party was enjoyable."
],
    "correctAnswer": "That party was totally lit!"
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence uses a formal register?",
    "options": [
  "I would be happy to assist you with that.",
  "Let me help you with that.",
  "I’ll take care of that for you.",
  "I can help with that."
],
    "correctAnswer": "I would be happy to assist you with that."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence is an example of linguistic accommodation?",
    "options": [
  "I can adjust my pace to match yours.",
  "I will speak more slowly.",
  "I cannot change how I speak.",
  "I will keep speaking fast."
],
    "correctAnswer": "I can adjust my pace to match yours."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence uses a regional accent?",
    "options": [
  "I'm gonna grab some coffee.",
  "I am going to grab some coffee.",
  "I am getting some coffee.",
  "I will grab some coffee."
],
    "correctAnswer": "I'm gonna grab some coffee."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence demonstrates language shift?",
    "options": [
  "I speak both English and Spanish fluently.",
  "I speak mostly English now.",
  "I speak only Spanish at home.",
  "I speak both languages but prefer English."
],
    "correctAnswer": "I speak mostly English now."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence demonstrates an example of language prestige?",
    "options": [
  "He speaks in a formal tone to convey authority.",
  "He talks in a casual manner to sound friendly.",
  "He uses slang with his friends.",
  "He uses formal language at work."
],
    "correctAnswer": "He speaks in a formal tone to convey authority."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence demonstrates language from a specific social class?",
    "options": [
  "I am going to take the bus to the city.",
  "I am taking a taxi to the city.",
  "I will take a taxi to the city.",
  "I will go by bus to the city."
],
    "correctAnswer": "I am taking a taxi to the city."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence uses an example of diglossia?",
    "options": [
  "He speaks formal Arabic with his elders and informal Arabic with his friends.",
  "He speaks formal Arabic only.",
  "He speaks informal Arabic only.",
  "He speaks one language at home and another at school."
],
    "correctAnswer": "He speaks formal Arabic with his elders and informal Arabic with his friends."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence reflects speech style differences?",
    "options": [
  "She spoke differently to the judge than she did to her friends.",
  "She spoke politely to everyone.",
  "She used the same tone to everyone.",
  "She talked casually to everyone."
],
    "correctAnswer": "She spoke differently to the judge than she did to her friends."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence uses standard language?",
    "options": [
  "I am going to the store tomorrow.",
  "I’m gonna go to the store tomorrow.",
  "I am going store tomorrow.",
  "I go to the store tomorrow."
],
    "correctAnswer": "I am going to the store tomorrow."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence is an example of linguistic relativity?",
    "options": [
  "The language you speak influences how you perceive the world.",
  "Language is just a tool for communication.",
  "The way we think does not influence how we speak.",
  "Language has no influence on perception."
],
    "correctAnswer": "The language you speak influences how you perceive the world."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence uses an example of linguistic prestige?",
    "options": [
  "He prefers to use a dialect that is considered prestigious in his community.",
  "He prefers to use a local dialect.",
  "He speaks with a foreign accent.",
  "He speaks casually at home."
],
    "correctAnswer": "He prefers to use a dialect that is considered prestigious in his community."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence demonstrates the use of a pidgin language?",
    "options": [
  "We no like work, we want holiday.",
  "We don’t like working, we want a holiday.",
  "We don’t like work, we want a holiday.",
  "I do not like to work, I need a break."
],
    "correctAnswer": "We no like work, we want holiday."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence demonstrates an example of language ideology?",
    "options": [
  "People believe that English is the language of success.",
  "Everyone speaks the same language in the office.",
  "People speak many languages in the city.",
  "Everyone speaks English and Spanish."
],
    "correctAnswer": "People believe that English is the language of success."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence reflects an example of taboo language?",
    "options": [
  "He used profanity in his speech.",
  "He used polite words in his speech.",
  "He avoided swearing in his speech.",
  "He spoke formally in his speech."
],
    "correctAnswer": "He used profanity in his speech."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence reflects the use of politeness strategies?",
    "options": [
  "Could you possibly help me with this task?",
  "I need help with this task.",
  "Help me with this task.",
  "I need assistance."
],
    "correctAnswer": "Could you possibly help me with this task?"
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence uses an example of sociolinguistic variation?",
    "options": [
  "I’ll take the bus to work today.",
  "I’m taking the bus to work today.",
  "I will take the bus to work today.",
  "I’m going to work today."
],
    "correctAnswer": "I’m taking the bus to work today."
,
"explanation":"To follow: wait for new app release/updates"
},
  
  {
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What is 'linguistic anthropology' concerned with?",
    "options": ["The relationship between language and culture in human societies.", "The formal rules and grammar of languages.", "The development of new languages in isolated communities.", "The study of how accents influence communication."],
    "correctAnswer": "The relationship between language and culture in human societies."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What is 'ethnography of communication'?",
    "options": ["A method for studying language use in social and cultural contexts.", "The study of the formal rules of grammar in different languages.", "The analysis of language change over time.", "A way to teach language through cultural immersion."],
    "correctAnswer": "A method for studying language use in social and cultural contexts."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What does 'linguistic profiling' involve?",
    "options": ["Judging a person's social background or identity based on their speech.", "Creating a profile of a language's historical evolution.", "A technique for teaching pronunciation in non-native speakers.", "The process of identifying a regional accent in a foreign language."],
    "correctAnswer": "Judging a person's social background or identity based on their speech."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What is 'lexical variation'?",
    "options": ["Differences in vocabulary usage depending on social class, region, or group.", "The way language structure changes in different regions.", "The introduction of new words through technological advancements.", "The simplification of language to ensure clarity."],
    "correctAnswer": "Differences in vocabulary usage depending on social class, region, or group."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What does the term 'social network theory' refer to in sociolinguistics?",
    "options": ["The idea that individuals within strong social networks tend to use language more similarly.", "The study of how social media platforms influence language change.", "The formal structure of social hierarchies in language communities.", "The study of how language adapts to social and technological changes."],
    "correctAnswer": "The idea that individuals within strong social networks tend to use language more similarly."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What is 'register' in sociolinguistics?",
    "options": ["A variety of language used for a particular purpose or in a specific social setting.", "A regional variation of language that changes over time.", "The use of formal language in informal settings.", "A way to identify the social class of a speaker."],
    "correctAnswer": "A variety of language used for a particular purpose or in a specific social setting."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What does 'speech community' mean?",
    "options": ["A group of people who share a common language or dialect and use it in similar ways.", "A community that exclusively uses formal language.", "A group of people who do not share any common linguistic features.", "A virtual community where language is used primarily for writing."],
    "correctAnswer": "A group of people who share a common language or dialect and use it in similar ways."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following sentences demonstrates code-switching?",
    "options": ["I can't go to the party, it’s too far away.", "I was talking to my mom in English, then switched to Spanish to speak to my cousin.", "My friend is very good at soccer.", "I studied for the test and aced it."],
    "correctAnswer": "I was talking to my mom in English, then switched to Spanish to speak to my cousin."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How can the concept of 'language shift' be identified in a community?",
    "options": ["When people in the community begin to adopt the local dialect more frequently.", "When a community gradually adopts a new language and abandons its native language.", "When a community creates a new dialect.", "When people learn and use a language exclusively for work."],
    "correctAnswer": "When a community gradually adopts a new language and abandons its native language."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What does the term 'linguistic relativity' suggest about the relationship between language and thought?",
    "options": ["Language has no impact on the way we think.", "Different languages reflect different ways of understanding the world.", "Language dictates the thoughts we have about the world.", "Thought is independent of language."],
    "correctAnswer": "Different languages reflect different ways of understanding the world."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How can a community's use of a 'prestige dialect' affect social interactions?",
    "options": ["It may elevate the social status of individuals who use it.", "It creates a barrier for people outside the community.", "It promotes language diversity.", "It is unrelated to social status."],
    "correctAnswer": "It may elevate the social status of individuals who use it."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which scenario best illustrates the concept of 'diglossia'?",
    "options": ["A person uses formal language in business meetings and informal language with family.", "A bilingual community speaks both a formal and a colloquial variety of the same language.", "An individual speaks only one language for all occasions.", "A person switches between two languages based on context."],
    "correctAnswer": "A bilingual community speaks both a formal and a colloquial variety of the same language."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How can linguistic profiling be identified in real-world scenarios?",
    "options": ["An individual is judged based on their accent or dialect, leading to assumptions about their social background.", "People are treated equally, regardless of their speech patterns.", "Everyone is expected to speak in a standardized accent.", "A person is required to speak only in formal language."],
    "correctAnswer": "An individual is judged based on their accent or dialect, leading to assumptions about their social background."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following is an example of a 'creole' language?",
    "options": ["A fully developed language that combines elements from several languages and becomes native to a community.", "A regional variation of a language.", "A language learned by immigrants for communication.", "A dialect with unique vocabulary and grammar."],
    "correctAnswer": "A fully developed language that combines elements from several languages and becomes native to a community."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How does the concept of 'language ideology' influence societal views on language?",
    "options": ["It refers to the belief that some languages or dialects are superior to others.", "It means that everyone must speak in the same dialect.", "It promotes linguistic diversity in all settings.", "It encourages people to adopt a single global language."],
    "correctAnswer": "It refers to the belief that some languages or dialects are superior to others."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following best explains the concept of 'linguistic determinism'?",
    "options": ["The idea that language limits the way people can perceive and think about the world.", "The belief that everyone should speak the same language.", "The development of language based on technological advancements.", "The freedom of individuals to speak any language they choose."],
    "correctAnswer": "The idea that language limits the way people can perceive and think about the world."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which scenario best illustrates 'code-mixing'?",
    "options": ["Switching between two different languages within the same conversation or sentence.", "Changing the tone of speech based on social context.", "Switching from formal language to informal language in professional settings.", "Using regional slang in academic writing."],
    "correctAnswer": "Switching between two different languages within the same conversation or sentence."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "In what way does the phenomenon of 'language death' affect a community?",
    "options": ["It results in the complete disappearance of a language from daily use and social functions.", "It leads to the expansion of a community's linguistic repertoire.", "It causes people to adopt formal language practices in informal settings.", "It creates a movement to revive endangered languages."],
    "correctAnswer": "It results in the complete disappearance of a language from daily use and social functions."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How can 'ethnography of communication' be applied to sociolinguistics?",
    "options": ["It is a method for studying how people use language in various social contexts and cultural settings.", "It focuses on the grammatical rules of a language.", "It studies the physical sounds and pronunciations in a language.", "It focuses on how language changes over time."],
    "correctAnswer": "It is a method for studying how people use language in various social contexts and cultural settings."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which scenario best demonstrates 'linguistic anthropology' in practice?",
    "options": ["A researcher studying the role of language in shaping cultural identity.", "A linguist analyzing the phonetic structure of a language.", "A sociologist examining language use in formal education.", "A historian documenting the evolution of a dialect."],
    "correctAnswer": "A researcher studying the role of language in shaping cultural identity."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What does 'register' refer to in sociolinguistics?",
    "options": ["A variation of language used for specific purposes or in particular social contexts.", "A type of dialect that is only used in formal settings.", "A method of simplifying language for broader communication.", "A unique accent that people adopt in social interactions."],
    "correctAnswer": "A variation of language used for specific purposes or in particular social contexts."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How can the social concept of 'speech community' be identified?",
    "options": ["It refers to a group of people who share a common language and social practices related to language.", "It is a community that speaks multiple languages without a specific linguistic connection.", "It refers to a group of people who speak only formal language.", "It describes a community where dialects are prohibited."],
    "correctAnswer": "It refers to a group of people who share a common language and social practices related to language."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What does the study of 'sociolect' focus on?",
    "options": ["The variation in language based on social class, education, or other social factors.", "The way language changes over time in historical contexts.", "The study of language evolution from a regional perspective.", "The use of language in formal settings."],
    "correctAnswer": "The variation in language based on social class, education, or other social factors."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What does 'linguistic profiling' aim to identify?",
    "options": ["It involves making assumptions about someone’s background based on their accent or speech patterns.", "It refers to how individuals profile their own dialects.", "It is used to track how languages spread across regions.", "It refers to the creation of a universal language to be used in all situations."],
    "correctAnswer": "It involves making assumptions about someone’s background based on their accent or speech patterns."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following illustrates the concept of 'lexical variation'?",
    "options": ["The use of different words in different regions to express the same concept.", "The consistent use of formal language in academic writing.", "The standardization of grammar rules across dialects.", "The creation of new words for technological advancements."],
    "correctAnswer": "The use of different words in different regions to express the same concept."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How can the 'social network theory' be applied to sociolinguistics?",
    "options": ["It suggests that individuals within a close-knit social network tend to use language similarly.", "It predicts that people will always use standardized language.", "It claims that language change happens randomly within a community.", "It emphasizes that everyone should speak the same dialect."],
    "correctAnswer": "It suggests that individuals within a close-knit social network tend to use language similarly."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What does the term 'linguistic insecurity' refer to?",
    "options": ["A speaker's anxiety or uncertainty about their language use due to perceptions of social judgment.", "The process of learning a new language.", "A social movement to promote a particular dialect.", "The ability of speakers to switch between languages without fear of judgment."],
    "correctAnswer": "A speaker's anxiety or uncertainty about their language use due to perceptions of social judgment."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How does 'genderlect' differ from standard language use?",
    "options": ["It refers to language variations based on gender differences in speech patterns.", "It is a language used by individuals from specific social classes.", "It refers to a dialect spoken by people of different age groups.", "It is a form of language that is used exclusively in formal settings."],
    "correctAnswer": "It refers to language variations based on gender differences in speech patterns."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What does the term 'accent' refer to in sociolinguistics?",
    "options": ["The way a person pronounces words based on regional or social factors.", "The structure and rules of a language.", "A variety of a language used in specific contexts.", "The syntax of a particular dialect."],
    "correctAnswer": "The way a person pronounces words based on regional or social factors."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following demonstrates the use of a prestige dialect?",
    "options": ["A person uses formal language in a job interview.", "A person switches to a more informal style of speaking when meeting friends.", "A person uses slang and regional expressions in a corporate meeting.", "A person speaks in a local dialect in a professional context."],
    "correctAnswer": "A person uses formal language in a job interview."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which example best illustrates the concept of code-switching?",
    "options": ["Switching from formal to informal speech based on the setting.", "Speaking a language you have learned as an adult in a professional context.", "Switching between languages or dialects within the same conversation.", "Using a mixture of two languages for formal written communication."],
    "correctAnswer": "Switching between languages or dialects within the same conversation."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following is an example of linguistic anthropology?",
    "options": ["A study of how dialects evolve over time.", "An analysis of how language reflects cultural practices and social norms.", "Research on the grammatical rules of different languages.", "A comparison of phonetic differences in regional dialects."],
    "correctAnswer": "An analysis of how language reflects cultural practices and social norms."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following demonstrates a feature of diglossia?",
    "options": ["A community uses one language for formal settings and another for informal contexts.", "A group of people develops a unique set of linguistic rules that are not used by outsiders.", "A single language is spoken in both formal and informal settings.", "A person alternates between different accents within the same conversation."],
    "correctAnswer": "A community uses one language for formal settings and another for informal contexts."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which scenario best exemplifies linguistic relativity?",
    "options": ["People from different linguistic backgrounds use language differently in expressing emotions.", "A speaker changes dialects based on social class.", "A speaker uses formal language when speaking to authority figures.", "A community adopts a common language to foster communication."],
    "correctAnswer": "People from different linguistic backgrounds use language differently in expressing emotions."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which example illustrates linguistic profiling?",
    "options": ["A person’s social status is judged based on their accent or dialect.", "A community uses a specific form of language for rituals.", "A language is adapted to different contexts, such as formal and informal.", "A speaker adjusts their language to fit the norms of a particular social group."],
    "correctAnswer": "A person’s social status is judged based on their accent or dialect."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following describes a language shift?",
    "options": ["A community abandons its native language in favor of a dominant language.", "A person speaks a different dialect when traveling abroad.", "A community maintains its traditional language while incorporating elements of a new language.", "A group of people creates a new language from two existing ones."],
    "correctAnswer": "A community abandons its native language in favor of a dominant language."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which situation demonstrates code-mixing?",
    "options": ["A person uses two languages interchangeably within a sentence.", "A group of people speaks the same dialect at all times.", "A person shifts between formal and informal speech depending on the audience.", "A person speaks exclusively in one language while with family and another at work."],
    "correctAnswer": "A person uses two languages interchangeably within a sentence."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following is an example of a creole language?",
    "options": ["A new language that develops in a community combining elements of several languages.", "A regional dialect spoken by people within a specific area.", "A formal language used for writing and literature.", "A language learned by immigrants for communication with locals."],
    "correctAnswer": "A new language that develops in a community combining elements of several languages."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following statements reflects linguistic determinism?",
    "options": ["Language shapes the way people think and perceive the world.", "People use language to express complex ideas.", "The use of a certain dialect reflects a person's social class.", "Different languages are used for different social situations."],
    "correctAnswer": "Language shapes the way people think and perceive the world."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which scenario demonstrates the use of a sociolect?",
    "options": ["A person uses specific language features based on their social class.", "A speaker alternates between two languages in a conversation.", "A community creates a shared dialect for communication within the group.", "A person uses formal language in a professional setting."],
    "correctAnswer": "A person uses specific language features based on their social class."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which scenario illustrates the concept of linguistic insecurity?",
    "options": ["A person feels anxious about using their native accent in a formal setting.", "A speaker changes their dialect when speaking to different people.", "A person uses slang in an academic context.", "A speaker uses multiple languages depending on the social setting."],
    "correctAnswer": "A person feels anxious about using their native accent in a formal setting."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following demonstrates a feature of a pidgin language?",
    "options": ["A simplified version of a language that develops for communication between groups with different native languages.", "A language that evolves within a specific geographic region.", "A form of a language used only in academic contexts.", "A language spoken exclusively by a community with a specific cultural background."],
    "correctAnswer": "A simplified version of a language that develops for communication between groups with different native languages."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which example best represents a linguistic feature influenced by social identity?",
    "options": ["A person alters their speech patterns based on the people they are interacting with.", "A speaker changes their language according to the topic of conversation.", "A community adopts a standardized language for formal settings.", "A person learns a new language to integrate into a different culture."],
    "correctAnswer": "A person alters their speech patterns based on the people they are interacting with."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following best explains the concept of a 'linguistic market'?",
    "options": ["The value placed on certain forms of language in different social contexts.", "The way people change their language use in different geographical regions.", "A system of using language as a tool for gaining social status.", "The influence of global languages on local dialects."],
    "correctAnswer": "The value placed on certain forms of language in different social contexts."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which scenario best exemplifies the social role of language in a multicultural society?",
    "options": ["A person uses a mixture of languages to communicate with individuals from various cultural backgrounds.", "A community adopts a single language for official use, while preserving other languages informally.", "People use the same language for both formal and informal communication.", "Individuals learn a second language to fit into a social group."],
    "correctAnswer": "A person uses a mixture of languages to communicate with individuals from various cultural backgrounds."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which example demonstrates the concept of 'language ideology'?",
    "options": ["A community believes that speaking the national language is a sign of modernity.", "A group of people speaks only in their regional dialect.", "A society promotes the use of slang in casual communication.", "A speaker adjusts their speech to reflect their level of education."],
    "correctAnswer": "A community believes that speaking the national language is a sign of modernity."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following illustrates a situation of 'linguistic assimilation'?",
    "options": ["An immigrant community gradually adopts the language of the dominant society, while losing their native language.", "A person uses their native language in all social contexts.", "A community speaks multiple languages based on the situation.", "A speaker maintains their original language while adopting a second language."],
    "correctAnswer": "An immigrant community gradually adopts the language of the dominant society, while losing their native language."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which scenario demonstrates a situation of 'language revitalization'?",
    "options": ["A community works to restore the use of an endangered language through education and cultural programs.", "A region shifts to speaking a global language as its primary mode of communication.", "People adopt a standardized form of language for official use.", "A group of people adopts a slang language as a way to express identity."],
    "correctAnswer": "A community works to restore the use of an endangered language through education and cultural programs."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following best describes the concept of 'sociophonetics'?",
    "options": ["The study of how social factors influence the way sounds are produced and perceived in speech.", "The analysis of phonological rules in different dialects.", "The comparison of different accents across geographical regions.", "The exploration of the relationship between grammar and phonology."],
    "correctAnswer": "The study of how social factors influence the way sounds are produced and perceived in speech."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following is an example of a 'prestige' language variant?",
    "options": ["A formal, standardized language used in government and education.", "A regional dialect spoken only in small rural communities.", "A slang term used by teenagers in informal settings.", "A pidgin language used for communication between diverse language speakers."],
    "correctAnswer": "A formal, standardized language used in government and education."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following is an example of a linguistic feature influenced by social class?",
    "options": ["A person uses formal language in a job interview.", "A speaker uses specific lexical choices based on their social standing.", "A community creates new words based on trends.", "A person switches to a regional dialect when with family."],
    "correctAnswer": "A speaker uses specific lexical choices based on their social standing."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which scenario best applies the concept of linguistic accommodation?",
    "options": ["A speaker adjusts their language style to match the formality of the setting.", "A group uses a non-standard dialect in an academic setting.", "A speaker uses a second language in a community gathering.", "A speaker uses complex vocabulary to sound more intelligent."],
    "correctAnswer": "A speaker adjusts their language style to match the formality of the setting."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How would a bilingual speaker demonstrate code-switching in a conversation?",
    "options": ["A person uses both English and Spanish within a single sentence when talking to friends.", "A person speaks English in all professional settings, but switches to Spanish at home.", "A person speaks only in one language throughout a conversation.", "A person uses different accents based on the region they are in."],
    "correctAnswer": "A person uses both English and Spanish within a single sentence when talking to friends."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How might a speaker adapt their language in a high-stakes job interview?",
    "options": ["They might use formal language and avoid regional dialects.", "They will use slang to demonstrate informality.", "They will rely on a local dialect to connect with the interviewer.", "They will switch between different languages to show proficiency."],
    "correctAnswer": "They might use formal language and avoid regional dialects."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "In a multicultural classroom, how could a teacher apply principles of linguistic relativity?",
    "options": ["By considering how different students may interpret language and culture differently.", "By teaching students the importance of speaking only one language.", "By encouraging all students to adopt a standardized accent.", "By teaching students to use their native languages exclusively."],
    "correctAnswer": "By considering how different students may interpret language and culture differently."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following actions reflects linguistic profiling?",
    "options": ["A job applicant is judged based on their accent during an interview.", "A community adopts a new language for better integration into society.", "A student changes their language depending on the subject being taught.", "A group of people from the same region uses the same dialect when speaking."],
    "correctAnswer": "A job applicant is judged based on their accent during an interview."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What is an example of linguistic assimilation in a community?",
    "options": ["The younger generation shifts from speaking a regional dialect to the dominant national language.", "A community decides to speak multiple languages at home.", "An immigrant family maintains their native language while learning the local language.", "People continue to speak a creole language in informal settings."],
    "correctAnswer": "The younger generation shifts from speaking a regional dialect to the dominant national language."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How could a speaker demonstrate linguistic insecurity?",
    "options": ["By avoiding speaking their native dialect in formal situations.", "By constantly switching between languages to fit in with different social groups.", "By feeling more confident when speaking in their second language.", "By using multiple regional accents depending on their audience."],
    "correctAnswer": "By avoiding speaking their native dialect in formal situations."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How could a speaker use a sociolect in a conversation?",
    "options": ["By using specialized vocabulary that signals their social class.", "By switching between languages based on the setting.", "By adapting their language to match the perceived social status of their audience.", "By using the same language regardless of the social context."],
    "correctAnswer": "By using specialized vocabulary that signals their social class."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How would a teacher apply a feature of diglossia in a classroom?",
    "options": ["By encouraging students to use formal language in academic contexts and informal language at home.", "By teaching students to use the same language for both formal and informal settings.", "By only teaching students the formal version of the national language.", "By promoting the use of informal slang in classroom discussions."],
    "correctAnswer": "By encouraging students to use formal language in academic contexts and informal language at home."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following represents an example of linguistic accommodation?",
    "options": ["A speaker modifies their accent based on the formality of the situation.", "A bilingual person speaks only in their second language in public.", "A speaker uses the same dialect in both formal and informal settings.", "A person speaks louder to make themselves understood in a noisy environment."],
    "correctAnswer": "A speaker modifies their accent based on the formality of the situation."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How could a researcher apply the concept of linguistic anthropology to a study?",
    "options": ["By examining how language reflects the cultural practices and values of a community.", "By comparing grammatical structures across different languages.", "By analyzing the phonetic differences between dialects.", "By focusing on how language evolves over time in different regions."],
    "correctAnswer": "By examining how language reflects the cultural practices and values of a community."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which example best applies the concept of linguistic determinism?",
    "options": ["A language shapes the way a speaker perceives and experiences the world.", "A community speaks in different languages based on social roles.", "A person changes their accent depending on the group they are with.", "A community adopts a new language for educational purposes."],
    "correctAnswer": "A language shapes the way a speaker perceives and experiences the world."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How could a speaker demonstrate the use of a pidgin language?",
    "options": ["By using a simplified version of a language with speakers from different linguistic backgrounds.", "By using a mix of regional dialects within a single conversation.", "By switching between languages in different contexts.", "By using a formal language exclusively in professional settings."],
    "correctAnswer": "By using a simplified version of a language with speakers from different linguistic backgrounds."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How would a community apply linguistic revitalization?",
    "options": ["By teaching and encouraging the use of an endangered language in schools.", "By shifting entirely to a more globally dominant language.", "By adopting a pidgin language for communication with outsiders.", "By using slang and informal language in all settings."],
    "correctAnswer": "By teaching and encouraging the use of an endangered language in schools."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How can a bilingual person apply the concept of code-mixing in daily life?",
    "options": ["By inserting words or phrases from one language into another during casual conversations.", "By using one language at home and another at work.", "By speaking one language when formal and the other in informal situations.", "By teaching children a second language at home."],
    "correctAnswer": "By inserting words or phrases from one language into another during casual conversations."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "In a multilingual society, how might a government apply principles of diglossia?",
    "options": ["By promoting the use of one language in government and another in everyday life.", "By encouraging the use of multiple languages for social functions.", "By enforcing one language as the sole medium of communication.", "By making all languages equally acceptable in both formal and informal settings."],
    "correctAnswer": "By promoting the use of one language in government and another in everyday life."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How might a speaker demonstrate language ideology?",
    "options": ["By associating the use of a 'standard' language with intelligence or sophistication.", "By choosing a language to use exclusively in formal situations.", "By using multiple dialects based on social context.", "By switching between languages depending on the country of residence."],
    "correctAnswer": "By associating the use of a 'standard' language with intelligence or sophistication."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following best illustrates the application of sociophonetics?",
    "options": ["A researcher studies how different social groups pronounce vowels.", "A community adjusts their speech based on the context of communication.", "A speaker shifts between different dialects in formal settings.", "A person uses formal language in a casual setting."],
    "correctAnswer": "A researcher studies how different social groups pronounce vowels."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How can a multilingual person apply the concept of linguistic diversity?",
    "options": ["By using different languages depending on the people they are interacting with.", "By using one language exclusively for all interactions.", "By sticking to a single dialect in all social settings.", "By avoiding any code-switching during conversations."],
    "correctAnswer": "By using different languages depending on the people they are interacting with."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How would a researcher apply the principle of linguistic relativity in analyzing language?",
    "options": ["By investigating how different languages shape thought and perception.", "By focusing on the grammatical structures across languages.", "By comparing the vocabulary of various dialects.", "By analyzing the phonetic differences in speech."],
    "correctAnswer": "By investigating how different languages shape thought and perception."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following represents an example of linguistic imperialism?",
    "options": ["A country imposes a dominant language on its minority language speakers.", "A bilingual community adopts multiple languages for social harmony.", "A group of people switches to a more prestigious language for better job opportunities.", "A nation develops a new language to preserve cultural identity."],
    "correctAnswer": "A country imposes a dominant language on its minority language speakers."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which example best illustrates the concept of linguistic accommodation?",
    "options": ["A speaker adapts their accent to match the person they are speaking with.", "A speaker consistently uses formal language in all settings.", "A person speaks only in their native dialect regardless of the audience.", "A speaker changes their accent based on geographic location."],
    "correctAnswer": "A speaker adapts their accent to match the person they are speaking with."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which situation demonstrates code-switching?",
    "options": ["A bilingual person switches between Spanish and English in the middle of a sentence.", "A speaker uses only one language throughout the conversation.", "A person uses slang in formal meetings to sound more relaxed.", "A community exclusively speaks in their native language regardless of the context."],
    "correctAnswer": "A bilingual person switches between Spanish and English in the middle of a sentence."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How might a speaker demonstrate linguistic insecurity in a conversation?",
    "options": ["By avoiding using their native dialect in formal settings.", "By speaking confidently in both formal and informal settings.", "By using a mixture of languages in casual conversations.", "By intentionally using slang to fit in with others."],
    "correctAnswer": "By avoiding using their native dialect in formal settings."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What is an example of linguistic profiling in real life?",
    "options": ["A person is judged based on their accent during a job interview.", "A group of friends uses regional slang when talking to each other.", "A community speaks in multiple languages during social events.", "A bilingual person chooses the language that is most convenient in the context."],
    "correctAnswer": "A person is judged based on their accent during a job interview."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which scenario demonstrates the concept of linguistic relativity?",
    "options": ["A language shapes how speakers think about time and space.", "A bilingual speaker switches languages based on the audience.", "A community embraces the use of a standardized language for education.", "A person adapts their accent when speaking to individuals from different regions."],
    "correctAnswer": "A language shapes how speakers think about time and space."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How would a researcher studying sociolinguistics apply the concept of diglossia?",
    "options": ["By studying the use of two distinct varieties of a language in different contexts.", "By examining how one language evolves into a more standardized form.", "By analyzing how speakers shift between different languages based on the social setting.", "By focusing on how dialects influence social mobility."],
    "correctAnswer": "By studying the use of two distinct varieties of a language in different contexts."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which example best demonstrates linguistic assimilation?",
    "options": ["A speaker adopts the standard dialect of the country they moved to.", "A person uses a creole language to communicate with people from different regions.", "A bilingual speaker alternates between languages based on their environment.", "A community refuses to adopt the dominant language of the country."],
    "correctAnswer": "A speaker adopts the standard dialect of the country they moved to."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What does the concept of 'language ideology' refer to?",
    "options": ["The beliefs and attitudes about language and its role in society.", "The structural rules that govern how languages are used in communication.", "The way different dialects evolve based on geographic regions.", "The ability to switch between languages in multilingual settings."],
    "correctAnswer": "The beliefs and attitudes about language and its role in society."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "In a multilingual society, how might a speaker apply the concept of code-mixing?",
    "options": ["By mixing languages in conversation to communicate more effectively.", "By using one language exclusively in all settings.", "By avoiding the use of a second language in formal contexts.", "By relying on one language for all academic purposes."],
    "correctAnswer": "By mixing languages in conversation to communicate more effectively."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How does a researcher studying linguistic anthropology apply their methods?",
    "options": ["By observing how language reflects and shapes cultural practices.", "By focusing on phonetic differences across dialects.", "By studying how people learn and use language in various contexts.", "By comparing the written forms of different languages."],
    "correctAnswer": "By observing how language reflects and shapes cultural practices."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How can a community apply linguistic revitalization?",
    "options": ["By teaching the endangered language in schools and encouraging its use in everyday life.", "By promoting the use of a dominant language in all social settings.", "By encouraging bilingualism in schools without emphasizing the endangered language.", "By eliminating the use of minority languages in public spheres."],
    "correctAnswer": "By teaching the endangered language in schools and encouraging its use in everyday life."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following is an example of a community demonstrating linguistic diversity?",
    "options": ["A multilingual community uses different languages based on social contexts.", "A community sticks to one language for both formal and informal interactions.", "A community restricts language use to only the most prestigious form.", "A community enforces the use of a single language in all settings."],
    "correctAnswer": "A multilingual community uses different languages based on social contexts."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How would a teacher apply sociolinguistic principles to address language barriers in a classroom?",
    "options": ["By using diverse teaching methods that recognize the different language backgrounds of students.", "By encouraging all students to speak only in the official language.", "By only teaching formal language structures to avoid confusion.", "By promoting the use of a single dialect throughout the school."],
    "correctAnswer": "By using diverse teaching methods that recognize the different language backgrounds of students."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What would an example of linguistic imperialism look like?",
    "options": ["A dominant language is imposed on minority language speakers by the government.", "A community decides to switch from one language to another for practical purposes.", "A society promotes multilingualism in all public spaces.", "A group of speakers opts to mix two languages to communicate more effectively."],
    "correctAnswer": "A dominant language is imposed on minority language speakers by the government."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How can a person use a sociolect in a social setting?",
    "options": ["By using specialized vocabulary and expressions associated with a particular social group.", "By speaking in a formal tone to show respect for the audience.", "By avoiding the use of informal language in public settings.", "By switching between languages based on the social context."],
    "correctAnswer": "By using specialized vocabulary and expressions associated with a particular social group."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which situation demonstrates the concept of linguistic determinism?",
    "options": ["The structure of a language influences how its speakers conceptualize and perceive the world.", "A language changes over time due to external social influences.", "A person speaks multiple languages but prefers one in formal settings.", "A community adopts a new language to integrate into a larger society."],
    "correctAnswer": "The structure of a language influences how its speakers conceptualize and perceive the world."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following situations demonstrates the use of a pidgin language?",
    "options": ["A group of speakers develops a simplified version of a language to communicate with each other.", "A speaker alternates between two languages based on social context.", "A community speaks a creole language with a formalized grammar.", "A speaker uses a regional dialect in all settings."],
    "correctAnswer": "A group of speakers develops a simplified version of a language to communicate with each other."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How can a bilingual speaker demonstrate the concept of language prestige?",
    "options": ["By using a language that is viewed as more prestigious in a formal setting.", "By mixing multiple languages freely in conversation.", "By exclusively using one language in all interactions.", "By speaking a regional dialect to connect with local communities."],
    "correctAnswer": "By using a language that is viewed as more prestigious in a formal setting."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following is an example of a language shift?",
    "options": ["A community transitions from using a local dialect to a dominant national language.", "A speaker uses a non-standard dialect to sound more casual.", "A person chooses to speak in a second language in all public settings.", "A group of people mix two languages to create a new form of communication."],
    "correctAnswer": "A community transitions from using a local dialect to a dominant national language."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How would a researcher apply the concept of linguistic anthropology?",
    "options": ["By studying how language shapes social structures and cultural practices.", "By analyzing the grammatical rules of different languages.", "By investigating how language affects individual behavior.", "By examining phonetic variations in speech."],
    "correctAnswer": "By studying how language shapes social structures and cultural practices."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which situation demonstrates a community's resistance to language shift?",
    "options": ["A community continues to use their native language despite external pressure to adopt a dominant language.", "A community switches to a dominant language to access better economic opportunities.", "A group of speakers shifts to a more prestigious language for social mobility.", "A community adopts a second language but retains the first for cultural events."],
    "correctAnswer": "A community continues to use their native language despite external pressure to adopt a dominant language."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How does sociolinguistics inform the way we understand accents?",
    "options": ["It studies how accents reflect social identity and cultural background.", "It examines the phonetic features of accents without considering social context.", "It focuses only on the regional differences in pronunciation.", "It aims to eliminate accent-based biases in communication."],
    "correctAnswer": "It studies how accents reflect social identity and cultural background."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence best demonstrates code-switching?",
    "options": ["I’m going to the store, ¿quieres venir?", "She loves reading books in English.", "I like to hang out with my friends on weekends.", "He was talking about his experience in the job interview."],
    "correctAnswer": "I’m going to the store, ¿quieres venir?"
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which example illustrates linguistic accommodation?",
    "options": ["A speaker adjusts their accent to match the person they are speaking to.", "A bilingual person always uses English at home.", "A group of friends speaks in their local dialect only.", "A community decides to use a standardized language in education."],
    "correctAnswer": "A speaker adjusts their accent to match the person they are speaking to."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence demonstrates linguistic profiling?",
    "options": ["The job candidate was rejected based on their accent.", "She switched to a more formal language in the meeting.", "He chose to speak in his native language when he saw his friend.", "They agreed to use standard English in their essay."],
    "correctAnswer": "The job candidate was rejected based on their accent."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following is an example of diglossia?",
    "options": ["A community uses formal language in official settings and informal language in casual settings.", "A group of bilingual speakers switches between languages based on context.", "A society speaks two distinct languages depending on the social context.", "A person adapts their language to be understood by their audience."],
    "correctAnswer": "A community uses formal language in official settings and informal language in casual settings."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which scenario illustrates the concept of linguistic relativity?",
    "options": ["Speakers of different languages conceptualize time and space differently.", "A person who speaks more than one language alternates between them.", "A community shifts from one language to another due to cultural pressure.", "A group of people chooses a common language for communication."],
    "correctAnswer": "Speakers of different languages conceptualize time and space differently."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence demonstrates language ideology?",
    "options": ["The belief that certain accents sound more prestigious than others.", "A speaker uses their native dialect to express cultural identity.", "A community agrees to teach a second language to children.", "A group prefers to speak only in their native tongue."],
    "correctAnswer": "The belief that certain accents sound more prestigious than others."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which situation demonstrates language shift?",
    "options": ["A community stops speaking their native dialect and adopts the national language.", "A speaker chooses to use the local language with their family.", "A group of friends uses both their native language and English interchangeably.", "A bilingual community maintains both languages without preference."],
    "correctAnswer": "A community stops speaking their native dialect and adopts the national language."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which example demonstrates a pidgin language?",
    "options": ["A group of speakers creates a simplified language to communicate across cultural boundaries.", "A bilingual speaker alternates between two languages depending on the social context.", "A speaker uses their native dialect to communicate with others.", "A community uses a formal language in education but speaks informally in daily life."],
    "correctAnswer": "A group of speakers creates a simplified language to communicate across cultural boundaries."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which situation best exemplifies language revitalization?",
    "options": ["A community actively teaches and promotes their endangered language in schools.", "A group of speakers shifts to a more widely spoken language for practicality.", "A speaker avoids using their native dialect in public settings.", "A community resists adopting a new language despite economic benefits."],
    "correctAnswer": "A community actively teaches and promotes their endangered language in schools."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following demonstrates a community’s linguistic resistance?",
    "options": ["A community continues to speak their indigenous language despite government pressure to switch to the national language.", "A bilingual group uses their second language to access better economic opportunities.", "A community decides to stop using an indigenous language in favor of a global language.", "A group of speakers uses a standardized language in formal settings."],
    "correctAnswer": "A community continues to speak their indigenous language despite government pressure to switch to the national language."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of these demonstrates linguistic imperialism?",
    "options": ["A dominant language is imposed on a minority group by the state or a colonial power.", "A speaker chooses a language that they believe will provide more opportunities.", "A community adopts a second language to connect with a larger global network.", "A bilingual society allows both languages to coexist without preference."],
    "correctAnswer": "A dominant language is imposed on a minority group by the state or a colonial power."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which scenario demonstrates the use of a sociolect?",
    "options": ["A speaker uses a distinct vocabulary to fit in with a specific social group.", "A person switches between languages depending on the social context.", "A community speaks the same language in both formal and informal settings.", "A group of friends communicates with each other using standard language."],
    "correctAnswer": "A speaker uses a distinct vocabulary to fit in with a specific social group."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which example best demonstrates linguistic determinism?",
    "options": ["The structure of a language shapes how its speakers think about the world.", "A bilingual person uses both languages based on the context of the conversation.", "A person chooses a formal language to sound more educated.", "A group of speakers uses slang to connect with one another."],
    "correctAnswer": "The structure of a language shapes how its speakers think about the world."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence illustrates linguistic insecurity?",
    "options": ["A person tries to avoid using their native dialect in a formal setting.", "A speaker confidently uses their regional dialect in informal contexts.", "A group of friends switches to a dominant language for convenience.", "A community embraces the use of their traditional language."],
    "correctAnswer": "A person tries to avoid using their native dialect in a formal setting."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which scenario demonstrates the concept of linguistic anthropology?",
    "options": ["A researcher studies how language affects cultural practices and social behavior.", "A community adopts a new language to better integrate with mainstream society.", "A group of speakers shifts from using one dialect to another.", "A speaker learns a language to improve job prospects."],
    "correctAnswer": "A researcher studies how language affects cultural practices and social behavior."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which situation best exemplifies bilingualism?",
    "options": ["A person fluently speaks two languages and switches between them depending on the situation.", "A group speaks a single language in all formal settings.", "A community only uses a local language in informal settings.", "A speaker prefers one language but occasionally uses another in social situations."],
    "correctAnswer": "A person fluently speaks two languages and switches between them depending on the situation."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which example illustrates a creole language?",
    "options": ["A community develops a stable, fully developed language from a pidgin.", "A group of speakers mixes elements from two languages to create a new one.", "A bilingual person alternates between two languages based on social context.", "A person adapts their accent to match that of the people they are speaking to."],
    "correctAnswer": "A community develops a stable, fully developed language from a pidgin."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following best describes language ideology?",
    "options": ["A set of beliefs about the superiority of one language over others.", "A process by which languages evolve over time.", "A theory that languages shape the cognitive abilities of their speakers.", "A practice where speakers switch between dialects depending on the situation."],
    "correctAnswer": "A set of beliefs about the superiority of one language over others."
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Easy",
  "bloomstaxonomy": "Remembering",
  "ytlink": "To follow",
   "qid": "",
  "question": "What is the past tense of 'go'?",
  "options": ["Went", "Gone", "Going", "Goes"],
  "correctAnswer": "Went",
"explanation":"To follow: wait for new app release/updates"
},
// English - Grammar - Remembering - Moderate
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Moderate",
  "bloomstaxonomy": "Remembering",
  "ytlink": "To follow",
   "qid": "",
  "question": "What is the plural form of 'child'?",
  "options": ["Childs", "Children", "Childes", "Child"],
  "correctAnswer": "Children",

"explanation":"To follow: wait for new app release/updates"
},
// English - Grammar - Remembering - Difficult
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Remembering",
  "ytlink": "To follow",
   "qid": "",
  "question": "What is the past tense of 'run'?",
  "options": ["Ran", "Run", "Running", "Runs"],
  "correctAnswer": "Ran",

"explanation":"To follow: wait for new app release/updates"
},
// English - Grammar - Understanding - Easy
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Easy",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
   "qid": "",
  "question": "Which word is a synonym for 'happy'?",
  "options": ["Sad", "Joyful", "Angry", "Bored"],
  "correctAnswer": "Joyful",

"explanation":"To follow: wait for new app release/updates"
},
// English - Grammar - Understanding - Moderate
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Moderate",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
   "qid": "",
  "question": "What is the opposite of 'begin'?",
  "options": ["Start", "End", "Continue", "Pause"],
  "correctAnswer": "End",

"explanation":"To follow: wait for new app release/updates"
},
// English - Grammar - Understanding - Difficult
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
   "qid": "",
  "question": "What is the meaning of 'benevolent'?",
  "options": ["Kind", "Cruel", "Selfish", "Greedy"],
  "correctAnswer": "Kind",

"explanation":"To follow: wait for new app release/updates"
},
// English - Grammar - Applying - Easy
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Easy",
  "bloomstaxonomy": "Applying",
  "ytlink": "To follow",
   "qid": "",
  "question": "Which sentence is in the present tense?",
  "options": ["I go to school.", "I went to school.", "I will go to school."],
  "correctAnswer": "I go to school.",

"explanation":"To follow: wait for new app release/updates"
},
// English - Grammar - Applying - Moderate
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Moderate",
  "bloomstaxonomy": "Applying",
  "ytlink": "To follow",
   "qid": "",
  "question": "Which sentence is in the past tense?",
  "options": ["I go to school.", "I went to school.", "I will go to school."],
  "correctAnswer": "I went to school.",

"explanation":"To follow: wait for new app release/updates"
},
// English - Grammar - Applying - Difficult
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Applying",
  "ytlink": "To follow",
   "qid": "",
  "question": "Which sentence is in the future tense?",
  "options": ["I go to school.", "I went to school.", "I will go to school."],
  "correctAnswer": "I will go to school.",

"explanation":"To follow: wait for new app release/updates"
},
// English - Grammar - Analyzing - Easy
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Easy",
  "bloomstaxonomy": "Analyzing",
  "ytlink": "To follow",
   "qid": "",
  "question": "What is the main idea of the sentence?",
  "options": ["The dog is happy.", "The dog is sad.", "The dog is angry."],
  "correctAnswer": "The dog is happy.",

"explanation":"To follow: wait for new app release/updates"
},
// English - Grammar - Analyzing - Moderate
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Moderate",
  "bloomstaxonomy": "Analyzing",
  "ytlink": "To follow",
   "qid": "",
  "question": "Identify the subject in the sentence: 'The cat chased the mouse.'",
  "options": ["The cat", "Chased", "The mouse", "None of the above"],
  "correctAnswer": "The cat",

"explanation":"To follow: wait for new app release/updates"
},
// English - Grammar - Analyzing - Difficult
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Analyzing",
  "ytlink": "To follow",
   "qid": "",
  "question": "What is the effect of the author's word choice in the sentence?",
  "options": ["It creates a happy tone.", "It creates a sad tone.", "It creates a neutral tone."],
  "correctAnswer": "It creates a happy tone.",

"explanation":"To follow: wait for new app release/updates"
},
// English - Grammar - Evaluating - Easy
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Easy",
  "bloomstaxonomy": "Evaluating",
  "ytlink": "To follow",
   "qid": "",
  "question": "Which sentence is more persuasive?",
  "options": ["You should try this product.", "This product is the best."],
  "correctAnswer": "This product is the best.",

"explanation":"To follow: wait for new app release/updates"
},
// English - Grammar - Evaluating - Moderate
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Moderate",
  "bloomstaxonomy": "Evaluating",
  "ytlink": "To follow",
   "qid": "",
  "question": "Which argument is stronger?",
  "options": ["Cats are better pets than dogs.", "Dogs are better pets than cats."],
  "correctAnswer": "Cats are better pets than dogs.",

"explanation":"To follow: wait for new app release/updates"
},
// English - Grammar - Evaluating - Difficult
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Evaluating",
  "ytlink": "To follow",
   "qid": "",
  "question": "Assess the effectiveness of the following argument: 'Reading improves vocabulary.'",
  "options": ["Strong", "Weak", "Neutral"],
  "correctAnswer": "Strong",

"explanation":"To follow: wait for new app release/updates"
},
// English - Grammar - Creating - Easy
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Easy",
  "bloomstaxonomy": "Creating",
  "ytlink": "To follow",
   "qid": "",
  "question": "Create a sentence using the word 'beautiful'.",
  "options": ["The sky is beautiful.", "Beautiful is the sky.", "Sky beautiful is."],
  "correctAnswer": "The sky is beautiful.",

"explanation":"To follow: wait for new app release/updates"
},
// English - Grammar - Creating - Moderate
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Moderate",
  "bloomstaxonomy": "Creating",
  "ytlink": "To follow",
   "qid": "",
  "question": "Write a short paragraph about your favorite season.",
  "options": ["Summer is hot.", "Winter is cold.", "Spring is beautiful."],
  "correctAnswer": "Spring is beautiful.",

"explanation":"To follow: wait for new app release/updates"
},
// English - Grammar - Creating - Difficult
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Creating",
  "ytlink": "To follow",
   "qid": "",
  "question": "Compose a poem about nature.",
  "options": ["Nature is beautiful.", "I love nature.", "Nature is life."],
  "correctAnswer": "Nature is beautiful.",

"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Easy",
  "bloomstaxonomy": "Remembering",
  "ytlink": "To follow",
   "qid": "",
  "question": "Identify the correct form of the possessive adjective 'its' in the sentence 'The cat chased ______ tail'.",
  "options": ["it's", "its", "its'", "it's'"],
  "correctAnswer": "its",

"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Moderate",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
   "qid": "",
  "question": "Which of the following sentences is in the passive voice?",
  "options": ["The dog bites the man.", "The man was bitten by the dog.", "The dog is biting the man.", "The man bites the dog."],
  "correctAnswer": "The man was bitten by the dog.",

"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Easy",
  "bloomstaxonomy": "Remembering",
  "ytlink": "To follow",
   "qid": "",
  "question": "What is the correct form of the verb 'to be' in the present tense for the subject 'they'?",
  "options": ["is", "are", "am", "be"],
  "correctAnswer": "are",

"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Moderate",
  "bloomstaxonomy": "Understanding",
  "ytlink": "To follow",
   "qid": "",
  "question": "Which of the following sentences is an example of a complex sentence?",
  "options": ["I went to the store.", "I went to the store because I needed milk.", "I went to the store, and I bought milk.", "I went to the store, but I forgot my wallet."],
  "correctAnswer": "I went to the store because I needed milk.",
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Easy",
  "bloomstaxonomy": "Remembering",
  "ytlink": "To follow",
   "qid": "",
  "question": "What is the correct form of the verb 'to have' in the present perfect tense for the subject 'I'?",
  "options": ["have", "has", "had", "having"],
  "correctAnswer": "have",
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "Grammar",
  "difficulty": "Difficult",
  "bloomstaxonomy": "Analyzing",
  "ytlink": "To follow",
   "qid": "",
  "question": "Which of the following sentences is an example of a sentence with a dangling modifier?",
  "options": ["Having studied all night, the exam was easy.", "Having studied all night, I felt confident.", "The exam was easy because I had studied all night.", "I felt confident because I had studied all night."],
  "correctAnswer": "Having studied all night, the exam was easy.",
  "explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
    "question": "Identify the simple subject in the sentence: 'The quick brown fox jumps over the lazy dog.'",
    "options": ["The quick brown", "fox", "jumps", "dog"],
    "correctAnswer": "fox"
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
    "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
    "question": "Which sentence is in the passive voice?",
    "options": ["The teacher graded the essays.", "The essays were graded by the teacher.", "The students wrote the essays.", "The teacher is grading the essays."],
    "correctAnswer": "The essays were graded by the teacher."
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
    "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
    "question": "Choose the correct sentence with a reflexive pronoun.",
    "options": ["I completed the project by me.", "I completed the project by myself.", "I completed the project by mine.", "I completed the project by I."],
    "correctAnswer": "I completed the project by myself."
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
    "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
    "question": "What is the function of a conjunction in a sentence?",
    "options": ["To connect words or groups of words", "To show action", "To modify nouns", "To express emotion"],
    "correctAnswer": "To connect words or groups of words"
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
    "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
    "question": "Identify the type of pronoun used in the sentence: 'This is the book I was talking about.'",
    "options": ["Personal pronoun", "Demonstrative pronoun", "Relative pronoun", "Reflexive pronoun"],
    "correctAnswer": "Demonstrative pronoun"
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
    "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
    "question": "Select the sentence with the correct use of 'who' or 'whom': 'He is the person _____ helped me.'",
    "options": ["who", "whom", "whose", "who's"],
    "correctAnswer": "who"
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
    "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
    "question": "What is an adjective?",
    "options": ["A word that expresses an action", "A word that describes a noun", "A word that connects clauses", "A word that modifies a verb"],
    "correctAnswer": "A word that describes a noun"
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
    "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
    "question": "Choose the sentence that contains an adverb.",
    "options": ["She runs every day.", "She is an athlete.", "She quickly ran to the store.", "The run was long."],
    "correctAnswer": "She quickly ran to the store."
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
    "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
    "question": "Which sentence is punctuated correctly?",
    "options": ["Before he left, he said goodbye.", "Before, he left he said goodbye.", "Before he left he, said goodbye.", "Before he left he said, goodbye."],
    "correctAnswer": "Before he left, he said goodbye."
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
    "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
    "question": "Select the correct verb form: 'Neither the cat nor the dogs _____ hungry.'",
    "options": ["is", "are", "was", "be"],
    "correctAnswer": "are"
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
    "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
    "question": "What is the correct form of the sentence? 'Every student and teacher ____ required to attend.'",
    "options": ["is", "are", "have", "were"],
    "correctAnswer": "is"
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
    "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
    "question": "Which of the following sentences uses an interjection?",
    "options": ["Wow! That was amazing.", "He was amazed by the view.", "She walked silently.", "He wondered aloud."],
    "correctAnswer": "Wow! That was amazing."
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
    "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
    "question": "What is the term for a word that modifies a noun?",
    "options": ["Adjective", "Adverb", "Conjunction", "Verb"],
    "correctAnswer": "Adjective"
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
    "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
    "question": "Identify the direct object in the sentence: 'She baked a cake.'",
    "options": ["She", "baked", "cake", "a"],
    "correctAnswer": "cake"
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
    "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
    "question": "Choose the correct sentence: 'Each of the students _____ a textbook.'",
    "options": ["has", "have", "are", "were"],
    "correctAnswer": "has"
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
    "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
    "question": "What type of word is 'happily'?",
    "options": ["Noun", "Adjective", "Verb", "Adverb"],
    "correctAnswer": "Adverb"
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
    "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
    "question": "What is the plural of 'analysis'?",
    "options": ["analysis", "analyses", "analysises", "analys"],
    "correctAnswer": "analyses"
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
    "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
    "question": "Which of these is an example of an imperative sentence?",
    "options": ["What time is it?", "I love reading books.", "Close the door.", "The cat is sleeping."],
    "correctAnswer": "Close the door."
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
    "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
    "question": "Which sentence uses an infinitive?",
    "options": ["He wants to learn Spanish.", "She is learning Spanish.", "He learned Spanish last year.", "She learns Spanish every day."],
    "correctAnswer": "He wants to learn Spanish."
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
    "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
    "question": "Which of the following is an example of a linear communication model?",
    "options": [
      "A conversation between two people.",
      "A radio broadcast where listeners cannot respond.",
      "A group discussion where everyone shares ideas.",
      "A teacher asking students for feedback during class."
    ],
    "correctAnswer": "A radio broadcast where listeners cannot respond."
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
    "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
    "question": "In the Shannon-Weaver model, what does the 'noise' refer to?",
    "options": [
      "The message content that is being communicated.",
      "Any barrier that disrupts communication, like poor signal.",
      "The medium through which the message is transmitted.",
      "The receiver of the message."
    ],
    "correctAnswer": "Any barrier that disrupts communication, like poor signal."
  ,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Which sentence demonstrates correct pronoun usage?",
  "options": ["Each student must submit their homework.", "Each student must submit his or her homework.", "Each student must submit they homework.", "Each student must submit they're homework."],
  "correctAnswer": "Each student must submit his or her homework."
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "What is the superlative form of 'happy'?",
  "options": ["more happy", "happier", "most happy", "happiest"],
  "correctAnswer": "happiest"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Identify the error in the sentence: 'He don't want to attend the meeting.'",
  "options": ["He", "don't", "want", "attend"],
  "correctAnswer": "don't"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "What is the plural form of 'phenomenon'?",
  "options": ["phenomenons", "phenomenon", "phenomena", "phenomenas"],
  "correctAnswer": "phenomena"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Choose the correctly punctuated sentence.",
  "options": ["Yes I am coming to the event.", "Yes, I am coming to the event.", "Yes I, am coming to the event.", "Yes I am, coming to the event."],
  "correctAnswer": "Yes, I am coming to the event."
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Select the sentence that uses the past perfect tense.",
  "options": ["I had walked to the park before it rained.", "I walked to the park before it rained.", "I have walked to the park before it rained.", "I am walking to the park before it rained."],
  "correctAnswer": "I had walked to the park before it rained."
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "What part of speech is the word 'quickly' in the sentence: 'She quickly finished her homework.'?",
  "options": ["Noun", "Adjective", "Verb", "Adverb"],
  "correctAnswer": "Adverb"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Identify the prepositional phrase in the sentence: 'The book on the shelf is mine.'",
  "options": ["The book", "on the shelf", "is mine", "the shelf is"],
  "correctAnswer": "on the shelf"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Which of the following sentences is correct?",
  "options": ["Who's hat is this?", "Whose hat is this?", "Whose hat is it's?", "Who's hat is it's?"],
  "correctAnswer": "Whose hat is this?"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Choose the sentence that correctly uses parallel structure.",
  "options": ["She likes dancing, to swim, and jogging.", "She likes to dance, to swim, and jogging.", "She likes dancing, swimming, and jogging.", "She likes to dance, swimming, and jog."],
  "correctAnswer": "She likes dancing, swimming, and jogging."
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "What is the correct plural form of 'crisis'?",
  "options": ["crises", "crisises", "crisis'", "crisis"],
  "correctAnswer": "crises"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Which sentence uses a coordinating conjunction?",
  "options": ["I will go to the park when it stops raining.", "I like both cats and dogs.", "Although I am tired, I will keep working.", "I ran quickly but fell."],
  "correctAnswer": "I ran quickly but fell."
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "What is an example of an interjection?",
  "options": ["However", "Run", "Wow", "If"],
  "correctAnswer": "Wow"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Select the sentence that is punctuated correctly.",
  "options": ["It's going to be a great day, isn't it?", "Its going to be a great day isn't it?", "It's going to be a great day isnt it?", "Its' going to be a great day, isn't it?"],
  "correctAnswer": "It's going to be a great day, isn't it?"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Which of the following is an example of a complex sentence?",
  "options": ["I went to the park.", "I went to the park and had a picnic.", "Although it was raining, we still went to the beach.", "We went to the mall, but it was crowded."],
  "correctAnswer": "Although it was raining, we still went to the beach."
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Choose the correctly spelled word.",
  "options": ["recieve", "receive", "recive", "receeve"],
  "correctAnswer": "receive"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Which sentence correctly uses an adverb?",
  "options": ["She sings beautiful.", "She sings beautifully.", "She beautiful sings.", "She sings more beautiful."],
  "correctAnswer": "She sings beautifully."
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "What is the function of the pronoun 'whom'?",
  "options": ["Subject", "Object", "Possessive", "Adjective"],
  "correctAnswer": "Object"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Choose the sentence with correct parallel structure.",
  "options": ["She enjoys reading, to write, and swimming.", "She enjoys reading, writing, and swimming.", "She enjoys to read, writing, and to swim.", "She enjoys reading, writing, and to swim."],
  "correctAnswer": "She enjoys reading, writing, and swimming."
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Which sentence is correctly punctuated?",
  "options": ["My sister, who lives in Paris has sent me a gift.", "My sister who lives in Paris, has sent me a gift.", "My sister who lives in Paris has sent me a gift.", "My sister, who lives in Paris, has sent me a gift."],
  "correctAnswer": "My sister, who lives in Paris, has sent me a gift."
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "What is the past tense of 'lie' when it means 'to recline'?",
  "options": ["lied", "lain", "lay", "lied down"],
  "correctAnswer": "lay"
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Identify the sentence that uses an auxiliary verb.",
  "options": ["She sings beautifully.", "They went to the market.", "He is running fast.", "Birds fly in the sky."],
  "correctAnswer": "He is running fast."
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Select the correctly punctuated sentence.",
  "options": ["After lunch, we went for a walk.", "After lunch we, went for a walk.", "After, lunch we went for a walk.", "After lunch we went, for a walk."],
  "correctAnswer": "After lunch, we went for a walk."
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Choose the correct use of 'who' or 'whom': '_____ did you give the keys to?'",
  "options": ["Who", "Whom", "Who's", "Whose"],
  "correctAnswer": "Whom"
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Which of these sentences is an example of a compound sentence?",
  "options": ["I went home early because I was tired.", "I went home early; I was tired.", "I went home early, and I was tired.", "I was tired when I went home early."],
  "correctAnswer": "I went home early, and I was tired."
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "What type of conjunction is 'although'?",
  "options": ["Coordinating", "Subordinating", "Correlative", "Conjunctive adverb"],
  "correctAnswer": "Subordinating"
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Choose the correct sentence using the possessive form.",
  "options": ["The dogs bone is missing.", "The dog's bone is missing.", "The dogs' bone is missing.", "The dog bone is missing."],      "correctAnswer": "The dog's bone is missing."
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "What is the plural form of 'thesis'?",
  "options": ["theses", "thesises", "thesis'", "thesis"],
  "correctAnswer": "theses"
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Which word is an example of a preposition?",
  "options": ["walk", "slowly", "beside", "beautiful"],
  "correctAnswer": "beside"
  ,
"explanation":"To follow: wait for new app release/updates"
},
  {
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "What part of speech is the word 'and'?",
  "options": ["Noun", "Adjective", "Conjunction", "Verb"],
  "correctAnswer": "Conjunction"
  ,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "What is the comparative form of the adjective 'good'?",
  "options": ["gooder", "more good", "better", "best"],
  "correctAnswer": "better"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Choose the correct sentence.",
  "options": ["Everyone has their own opinion.", "Everyone have their own opinion.", "Everyone are having their own opinion.", "Everyone had their own opinion."],
  "correctAnswer": "Everyone has their own opinion."
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "What is the correct form of the verb in this sentence? 'If she ____ more careful, she wouldn't have made that mistake.'",
  "options": ["was", "were", "is", "be"],
  "correctAnswer": "were"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Which of the following sentences is punctuated correctly?",
  "options": ["My favorite colors are blue green, and yellow.", "My favorite colors are blue, green, and yellow.", "My favorite colors are, blue, green and yellow.", "My favorite colors are blue, green and yellow."],
  "correctAnswer": "My favorite colors are blue, green, and yellow."
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "What is the correct past participle of 'swim'?",
  "options": ["swimmed", "swum", "swim", "swam"],
  "correctAnswer": "swum"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Select the sentence with the correct use of 'fewer' or 'less'.",
  "options": ["There are less students in the class this year.", "There are fewer students in the class this year.", "There is fewer traffic on Sundays.", "There are less cars on the road."],
  "correctAnswer": "There are fewer students in the class this year."
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "What is an infinitive verb?",
  "options": ["A verb that is in its past form", "A verb that functions as an adjective", "A verb preceded by 'to' and used as a noun, adjective, or adverb", "A verb in its continuous form"],
  "correctAnswer": "A verb preceded by 'to' and used as a noun, adjective, or adverb"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Choose the correct form of the sentence: 'Neither John nor his friends ____ going to the party.'",
  "options": ["is", "are", "was", "has"],
  "correctAnswer": "are"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "What is the function of an appositive in a sentence?",
  "options": ["To modify a verb", "To modify an adjective", "To rename or further explain a noun", "To act as a conjunction"],
  "correctAnswer": "To rename or further explain a noun"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "Which is an example of a violation of Grice's Maxim of Manner?",
  "options": ["Using ambiguous language", "Giving irrelevant details", "Speaking too briefly", "Being too vague"],
  "correctAnswer": "Using ambiguous language"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "What is the term for the idea that the meaning of a sentence is not just the sum of the meanings of its parts but involves context and interpretation?",
  "options": ["Compositional semantics", "Pragmatics", "Deixis", "Entailment"],
  "correctAnswer": "Pragmatics"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "Which of the following best exemplifies the Maxim of Relation?",
  "options": ["I need a pencil. Do you have one?", "It’s raining outside, so I’ll stay inside.", "I don’t like the food. I’m leaving.", "I’m going to the store. Do you need anything?"],
  "correctAnswer": "I’m going to the store. Do you need anything?"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "What is the concept of 'context' in pragmatics?",
  "options": ["The syntactic structure of a sentence", "The physical environment in which the utterance occurs", "The historical meaning of words", "The emotional tone of the speaker's voice"],
  "correctAnswer": "The physical environment in which the utterance occurs"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "Which of the following is an example of indirect speech act?",
  "options": ["Can you pass the salt?", "I declare you husband and wife.", "Please be quiet.", "I promise to finish the report by tomorrow."],
  "correctAnswer": "Can you pass the salt?"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "What is the difference between a 'direct' and an 'indirect' speech act?",
  "options": ["Direct speech acts make clear intentions, while indirect ones rely on context or politeness.", "Direct speech acts use formal language, while indirect speech acts use casual language.", "Direct speech acts are always affirmative, while indirect ones are always negative.", "There is no difference between them."],
  "correctAnswer": "Direct speech acts make clear intentions, while indirect ones rely on context or politeness."
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "In the context of relevance theory, what does the term 'optimal relevance' refer to?",
  "options": ["A message that provides the greatest cognitive effect with the least processing effort", "A message that is grammatically correct", "A message that requires extensive prior knowledge", "A message that is complex and informative"],
  "correctAnswer": "A message that provides the greatest cognitive effect with the least processing effort"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "Which theory of meaning focuses on the mental processes and inferences that lead to interpreting meaning in communication?",
  "options": ["Relevance theory", "Speech act theory", "Pragmatics", "Grice’s Cooperative Principle"],
  "correctAnswer": "Relevance theory"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "What is the concept of 'face' in Brown and Levinson's politeness theory?",
  "options": ["The social image that an individual projects in communication", "The facial expressions used during speech", "The ability to assert dominance in conversation", "The literal facial expression accompanying a speech act"],
  "correctAnswer": "The social image that an individual projects in communication"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "Which of the following illustrates a violation of the Maxim of Quality?",
  "options": ["Saying something that is obviously false", "Giving too much information", "Speaking in a convoluted manner", "Being too vague in explanation"],
  "correctAnswer": "Saying something that is obviously false"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "In Grice's theory, what is the primary function of the Maxim of Quality?",
  "options": ["To ensure that information provided is truthful", "To ensure that the message is not too long", "To ensure that the conversation stays on topic", "To ensure that communication is indirect"],
  "correctAnswer": "To ensure that information provided is truthful"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "What is the term for a situation where a speaker indirectly communicates an assumption or implication, such as 'Could you close the window?' implying 'Please close the window.'?",
  "options": ["Implicature", "Presupposition", "Entailment", "Metaphor"],
  "correctAnswer": "Implicature"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "Which term describes a conversational implicature that is inferred based on the assumption of cooperative behavior between the speakers?",
  "options": ["Conversational implicature", "Presupposition", "Entailment", "Logical inference"],
  "correctAnswer": "Conversational implicature"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "What does the concept of 'implicature' involve in pragmatics?",
  "options": ["The suggestion or inference made by a speaker indirectly", "The literal meaning of an utterance", "The grammatical structure of a sentence", "The physical context of the conversation"],
  "correctAnswer": "The suggestion or inference made by a speaker indirectly"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "Which of the following best describes a 'face-threatening act' in Brown and Levinson's theory?",
  "options": ["An act that challenges or damages the social image of the listener", "An act that provides extra information", "An act that maintains politeness", "An act that implies direct orders"],
  "correctAnswer": "An act that challenges or damages the social image of the listener"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "What is the relationship between syntax and pragmatics in sentence interpretation?",
  "options": ["Syntax provides the structure for meaning, while pragmatics shapes how meaning is inferred from context.", "Syntax and pragmatics are unrelated.", "Pragmatics only deals with sentence structure.", "Syntax is more important than pragmatics in meaning construction."],
  "correctAnswer": "Syntax provides the structure for meaning, while pragmatics shapes how meaning is inferred from context."
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "What term refers to the phenomenon where words or phrases are used in a way that goes beyond their literal meanings?",
  "options": ["Implicature", "Presupposition", "Connotation", "Metaphor"],
  "correctAnswer": "Metaphor"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "Which is an example of a conversational implicature?",
  "options": ["Saying 'Can you pass the salt?' when you want the listener to pass the salt", "Saying 'I don’t want to talk about it.' to avoid a subject", "Saying 'She’s a good cook' when you want to imply she’s a bad cook", "Saying 'I forgot the meeting.' and implying a lack of responsibility"],
  "correctAnswer": "Saying 'Can you pass the salt?' when you want the listener to pass the salt"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Which sentence uses the correct subject-verb agreement?",
  "options": ["The team are winning the match.", "The team is winning the match.", "The team were winning the match.", "The team be winning the match."],
  "correctAnswer": "The team is winning the match."
,
"explanation":"To follow: wait for new app release/updates"
},

{
  "major": "English",
  "subject": "",
  "difficulty": "Easy",
  "bloomstaxonomy": "",
  "ytlink": "To follow",
 "qid": "",
  "question": "Identify the type of clause in the sentence: 'I will go to the park if it doesn't rain.'",
  "options": ["Independent clause", "Dependent clause", "Noun clause", "Adjective clause"],
  "correctAnswer": "Dependent clause"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "What does Grice's Maxim of Relevance suggest about conversational implicatures?",
  "options": ["The information must be directly relevant to the topic.", "The speaker should provide as much information as possible.", "The speaker must avoid contradiction.", "The listener must infer meaning from context."],
  "correctAnswer": "The information must be directly relevant to the topic."
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "Which of the following is an example of a violation of the Maxim of Quantity in Grice's Cooperative Principle?",
  "options": ["Giving more information than necessary", "Providing no additional information", "Saying something irrelevant", "Using ambiguous language"],
  "correctAnswer": "Giving more information than necessary"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "What is the difference between presupposition and entailment?",
  "options": ["Presupposition is background information assumed by the speaker, while entailment is logically inferred from a statement.", "Presupposition refers to shared knowledge, and entailment is a contradiction.", "Entailment always follows from the meaning of words, while presupposition can be canceled.", "Entailment is based on context, while presupposition is not."],
  "correctAnswer": "Presupposition is background information assumed by the speaker, while entailment is logically inferred from a statement."
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "What is a speech act that aims to change the world by asserting something about the world?",
  "options": ["Assertive", "Directive", "Commissive", "Expressive"],
  "correctAnswer": "Assertive"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "Which of the following is an example of a performative utterance?",
  "options": ["I promise to help you.", "Can you pass the salt?", "It’s raining outside.", "I believe this is true."],
  "correctAnswer": "I promise to help you."
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "What does the term 'deixis' refer to in pragmatics?",
  "options": ["The use of context-dependent expressions such as 'here', 'there', 'you', and 'I'.", "The relationship between words with opposite meanings.", "The way speakers use politeness strategies in conversation.", "The study of how meaning changes over time."],
  "correctAnswer": "The use of context-dependent expressions such as 'here', 'there', 'you', and 'I'."
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "Which speech act theory focuses on how speakers perform actions by making utterances?",
  "options": ["Speech act theory", "Pragmatics theory", "Grice's theory of implicature", "Relevance theory"],
  "correctAnswer": "Speech act theory"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "In the context of politeness theory, what does 'positive politeness' mean?",
  "options": ["Showing respect and deference to the listener's desires", "Acknowledging the listener’s power and authority", "Appealing to the listener’s sense of solidarity and approval", "Using formal language to maintain social distance"],
  "correctAnswer": "Appealing to the listener’s sense of solidarity and approval"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "What is the term for the presupposition that arises when a speaker mentions something that implies a known or assumed context?",
  "options": ["Presupposition triggers", "Inference", "Gricean implicature", "Speech act"],
  "correctAnswer": "Presupposition triggers"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "Which of the following is NOT a maxim from Grice's Cooperative Principle?",
  "options": ["Maxim of Quantity", "Maxim of Quality", "Maxim of Manner", "Maxim of Elegance"],
  "correctAnswer": "Maxim of Elegance"
,
"explanation":"To follow: wait for new app release/updates"
},
{
  "major": "English",
"subject": "",
"difficulty": "Easy",
"bloomstaxonomy": "",
"ytlink": "To follow",
 "qid": "",
  "question": "What term describes the process by which speakers use context to determine meaning beyond the literal interpretation of words?",
  "options": ["Contextual inference", "Speech act theory", "Pragmatic inference", "Presupposition theory"],
  "correctAnswer": "Pragmatic inference"
,
"explanation":"To follow: wait for new app release/updates"
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
