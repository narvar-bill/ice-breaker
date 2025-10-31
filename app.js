// Icebreaker Question Generator App
class IcebreakerRoulette {
    constructor() {
        this.STORAGE_KEY = 'icebreaker-used-questions';
        this.questions = [
            {"id": 1, "question": "What was your first job ever?", "category": "Personal & Background"},
            {"id": 2, "question": "What's your favorite family tradition?", "category": "Personal & Background"},
            {"id": 3, "question": "Where did you grow up, and what's one interesting fact about your hometown?", "category": "Personal & Background"},
            {"id": 4, "question": "What was your favorite subject in school?", "category": "Personal & Background"},
            {"id": 5, "question": "Who was your first celebrity crush?", "category": "Personal & Background"},
            {"id": 6, "question": "What's your earliest childhood memory?", "category": "Personal & Background"},
            {"id": 7, "question": "What did you want to be when you grew up?", "category": "Personal & Background"},
            {"id": 8, "question": "What's the best piece of advice your parents or grandparents gave you?", "category": "Personal & Background"},
            {"id": 9, "question": "Do you have any siblings? How many?", "category": "Personal & Background"},
            {"id": 10, "question": "What was your least favorite food as a child? Do you still dislike it?", "category": "Personal & Background"},
            {"id": 11, "question": "What's your favorite holiday?", "category": "Personal & Background"},
            {"id": 12, "question": "Who is your hero?", "category": "Personal & Background"},
            {"id": 13, "question": "What are you looking forward to most right now?", "category": "Personal & Background"},
            {"id": 14, "question": "What has been the best day of your life so far?", "category": "Personal & Background"},
            {"id": 15, "question": "What stresses you out, and how do you deal with it?", "category": "Personal & Background"},
            {"id": 16, "question": "What's your favorite way to exercise?", "category": "Personal & Background"},
            {"id": 17, "question": "What fact about you might surprise people?", "category": "Personal & Background"},
            {"id": 18, "question": "What can you talk about for hours?", "category": "Personal & Background"},
            {"id": 19, "question": "When are you the happiest?", "category": "Personal & Background"},
            {"id": 20, "question": "What's something you have in common with the person next to you?", "category": "Personal & Background"},
            {"id": 21, "question": "What's your favorite work memory?", "category": "Work & Professional"},
            {"id": 22, "question": "What's the most interesting or funny event you experienced on the clock?", "category": "Work & Professional"},
            {"id": 23, "question": "How do you describe your job to a three-year-old?", "category": "Work & Professional"},
            {"id": 24, "question": "What's your go-to office lunch?", "category": "Work & Professional"},
            {"id": 25, "question": "What's your most valuable soft skill for successful teams?", "category": "Work & Professional"},
            {"id": 26, "question": "What's your favorite tool to use for team productivity?", "category": "Work & Professional"},
            {"id": 27, "question": "What's one of the biggest risks you've taken in your career?", "category": "Work & Professional"},
            {"id": 28, "question": "What's a strategy you've found helpful in your recent work?", "category": "Work & Professional"},
            {"id": 29, "question": "What's something our team is good at?", "category": "Work & Professional"},
            {"id": 30, "question": "Who on the team would you like to swap jobs with for a day?", "category": "Work & Professional"},
            {"id": 31, "question": "What makes you feel safe at work?", "category": "Work & Professional"},
            {"id": 32, "question": "What's a signal you look for that indicates good company culture?", "category": "Work & Professional"},
            {"id": 33, "question": "What help could you most use that you haven't asked for?", "category": "Work & Professional"},
            {"id": 34, "question": "What criteria help you decide whether to say 'no' to something or commit to it?", "category": "Work & Professional"},
            {"id": 35, "question": "Do you have a non-work goal you're working toward right now?", "category": "Work & Professional"},
            {"id": 36, "question": "What's your best WFH accessory?", "category": "Remote Work & WFH"},
            {"id": 37, "question": "What's your go-to WFH beverage? Coffee or tea?", "category": "Remote Work & WFH"},
            {"id": 38, "question": "Is there a spot in your house where you feel most productive?", "category": "Remote Work & WFH"},
            {"id": 39, "question": "What's your morning routine?", "category": "Remote Work & WFH"},
            {"id": 40, "question": "How often do you work in your PJs?", "category": "Remote Work & WFH"},
            {"id": 41, "question": "What's something we'd be surprised to find in your office?", "category": "Remote Work & WFH"},
            {"id": 42, "question": "What's one thing that's always on your desk?", "category": "Remote Work & WFH"},
            {"id": 43, "question": "Do you have any 'coworkers' (partners, roommates, siblings, parents, pets)?", "category": "Remote Work & WFH"},
            {"id": 44, "question": "What's your go-to music or background noise while working?", "category": "Remote Work & WFH"},
            {"id": 45, "question": "What's your favorite perk of remote work?", "category": "Remote Work & WFH"},
            {"id": 46, "question": "Where's the best spot you've ever worked remotely?", "category": "Remote Work & WFH"},
            {"id": 47, "question": "Do you prefer working remotely or in an office?", "category": "Remote Work & WFH"},
            {"id": 48, "question": "What's your favorite way to spend a break during the workday?", "category": "Remote Work & WFH"},
            {"id": 49, "question": "What's your favorite way to end or start the workday?", "category": "Remote Work & WFH"},
            {"id": 50, "question": "If you could have any upgrade to your WFH setup, what would it be?", "category": "Remote Work & WFH"},
            {"id": 51, "question": "If you were a condiment, what would you be and why?", "category": "Creative & Fun"},
            {"id": 52, "question": "If you had to eat a crayon, what color would you choose?", "category": "Creative & Fun"},
            {"id": 53, "question": "If you could only use one emoji for the rest of your life, what would it be?", "category": "Creative & Fun"},
            {"id": 54, "question": "What game show do you think you could win?", "category": "Creative & Fun"},
            {"id": 55, "question": "If you were an action figure, what two accessories would you come with?", "category": "Creative & Fun"},
            {"id": 56, "question": "What would the title of your autobiography be?", "category": "Creative & Fun"},
            {"id": 57, "question": "If people came with a warning tag, what would yours be?", "category": "Creative & Fun"},
            {"id": 58, "question": "What's your culture's most underrated food?", "category": "Creative & Fun"},
            {"id": 59, "question": "If you were a kitchen utensil, which one would you be and why?", "category": "Creative & Fun"},
            {"id": 60, "question": "What healthy food tastes just as good to you as unhealthy food?", "category": "Creative & Fun"},
            {"id": 61, "question": "What's something you are craving right now?", "category": "Creative & Fun"},
            {"id": 62, "question": "What current fact about your life would most impress your five-year-old self?", "category": "Creative & Fun"},
            {"id": 63, "question": "If you had to eat only one dish for the rest of time, what would it be?", "category": "Creative & Fun"},
            {"id": 64, "question": "What drink best describes you today?", "category": "Creative & Fun"},
            {"id": 65, "question": "What age do you wish you could be permanently?", "category": "Creative & Fun"},
            {"id": 66, "question": "What's something that always gives you child-like joy?", "category": "Creative & Fun"},
            {"id": 67, "question": "If you were coming out onto a stage, what would your entrance theme song be?", "category": "Creative & Fun"},
            {"id": 68, "question": "What fictional world or place would you like to visit?", "category": "Creative & Fun"},
            {"id": 69, "question": "If you were reincarnated as an animal, what would you choose and why?", "category": "Creative & Fun"},
            {"id": 70, "question": "What's one thing you are unbeatable at?", "category": "Creative & Fun"},
            {"id": 71, "question": "If you had to delete all but three apps from your smartphone, which ones would you keep?", "category": "Technology & Preferences"},
            {"id": 72, "question": "What's your favorite or most-used emoji?", "category": "Technology & Preferences"},
            {"id": 73, "question": "What's your computer wallpaper and why?", "category": "Technology & Preferences"},
            {"id": 74, "question": "What's your most-used app on your phone?", "category": "Technology & Preferences"},
            {"id": 75, "question": "What's your go-to movie?", "category": "Technology & Preferences"},
            {"id": 76, "question": "What's the last book you read?", "category": "Technology & Preferences"},
            {"id": 77, "question": "What song can you listen to over and over again?", "category": "Technology & Preferences"},
            {"id": 78, "question": "What was the last TV show you binge watched?", "category": "Technology & Preferences"},
            {"id": 79, "question": "What's your favorite board game?", "category": "Technology & Preferences"},
            {"id": 80, "question": "What's your favorite scent?", "category": "Technology & Preferences"},
            {"id": 81, "question": "Does your car have a name? If so, what is it?", "category": "Technology & Preferences"},
            {"id": 82, "question": "What movie made you laugh the hardest?", "category": "Technology & Preferences"},
            {"id": 83, "question": "What's your favorite healthy food or snack?", "category": "Technology & Preferences"},
            {"id": 84, "question": "What's your favorite breakfast cereal?", "category": "Technology & Preferences"},
            {"id": 85, "question": "What's your favorite sandwich and why?", "category": "Technology & Preferences"},
            {"id": 86, "question": "What's something about the next teammate you appreciate?", "category": "Team Building & Connection"},
            {"id": 87, "question": "Who has made a positive difference in your life recently?", "category": "Team Building & Connection"},
            {"id": 88, "question": "What's one thing that brings you energy and joy?", "category": "Team Building & Connection"},
            {"id": 89, "question": "What's something you admire about the people on our team?", "category": "Team Building & Connection"},
            {"id": 90, "question": "Which team member do you think is the most likely to be an undercover secret agent?", "category": "Team Building & Connection"},
            {"id": 91, "question": "What's one fun thing you'd love our team to try together?", "category": "Team Building & Connection"},
            {"id": 92, "question": "If our team could volunteer for any cause, what would it be?", "category": "Team Building & Connection"},
            {"id": 93, "question": "What's one thing you'd change about how our team works together?", "category": "Team Building & Connection"},
            {"id": 94, "question": "Describe your team in one word", "category": "Team Building & Connection"},
            {"id": 95, "question": "What is your favorite team memory?", "category": "Team Building & Connection"},
            {"id": 96, "question": "What makes your team unique?", "category": "Team Building & Connection"},
            {"id": 97, "question": "You're cooking for the whole team. What is your signature dish?", "category": "Team Building & Connection"},
            {"id": 98, "question": "What's something new you've learned about yourself in the last three months?", "category": "Team Building & Connection"},
            {"id": 99, "question": "How would you describe your communication style in three words?", "category": "Team Building & Connection"},
            {"id": 100, "question": "What made you smile today?", "category": "Team Building & Connection"}
        ];

        this.usedQuestions = [];
        this.currentQuestion = null;
        
        this.init();
    }

    init() {
        this.loadProgress();
        this.bindEvents();
        this.updateCounter();
    }

    loadProgress() {
        try {
            const saved = localStorage.getItem(this.STORAGE_KEY);
            if (saved) {
                const parsedData = JSON.parse(saved);
                // Validate the saved data
                if (Array.isArray(parsedData) && parsedData.every(id => typeof id === 'number')) {
                    this.usedQuestions = parsedData;
                    console.log(`Loaded ${this.usedQuestions.length} used questions from storage`);
                }
            }
        } catch (error) {
            console.error('Error loading progress from localStorage:', error);
            // Reset to empty if there's an error
            this.usedQuestions = [];
        }
    }

    saveProgress() {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.usedQuestions));
        } catch (error) {
            console.error('Error saving progress to localStorage:', error);
        }
    }

    clearProgress() {
        try {
            localStorage.removeItem(this.STORAGE_KEY);
        } catch (error) {
            console.error('Error clearing progress from localStorage:', error);
        }
    }

    bindEvents() {
        const generateBtn = document.getElementById('generateBtn');
        const anotherBtn = document.getElementById('anotherBtn');
        const resetBtn = document.getElementById('resetBtn');

        generateBtn.addEventListener('click', () => this.generateQuestion());
        anotherBtn.addEventListener('click', () => this.generateQuestion());
        resetBtn.addEventListener('click', () => this.resetApp());
    }

    async generateQuestion() {
        // Check if all questions have been used
        if (this.usedQuestions.length >= this.questions.length) {
            this.showCompletion();
            return;
        }

        // Show loading state
        this.showLoading();

        // Add delay for better UX
        await this.delay(1500);

        // Get random unused question
        const availableQuestions = this.questions.filter(q => 
            !this.usedQuestions.includes(q.id)
        );
        
        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        this.currentQuestion = availableQuestions[randomIndex];
        
        // Mark question as used
        this.usedQuestions.push(this.currentQuestion.id);
        
        // Save progress to localStorage
        this.saveProgress();

        // Show the question
        this.displayQuestion();
        this.updateCounter();
        this.triggerConfetti();
    }

    showLoading() {
        const generateBtn = document.getElementById('generateBtn');
        const btnSpinner = document.getElementById('btnSpinner');
        const btnText = generateBtn.querySelector('.btn-text');

        generateBtn.classList.add('loading');
        btnSpinner.classList.remove('hidden');
        btnText.style.opacity = '0';
    }

    displayQuestion() {
        const generateSection = document.getElementById('generateSection');
        const questionDisplay = document.getElementById('questionDisplay');
        const categoryBadge = document.getElementById('categoryBadge');
        const questionText = document.getElementById('questionText');

        // Hide generate section and show question display
        generateSection.classList.add('hidden');
        questionDisplay.classList.remove('hidden');

        // Set category badge
        categoryBadge.textContent = this.currentQuestion.category;
        categoryBadge.className = 'category-badge ' + this.getCategoryClass(this.currentQuestion.category);

        // Set question text
        questionText.textContent = this.currentQuestion.question;

        // Reset button state
        const generateBtn = document.getElementById('generateBtn');
        const btnSpinner = document.getElementById('btnSpinner');
        const btnText = generateBtn.querySelector('.btn-text');

        generateBtn.classList.remove('loading');
        btnSpinner.classList.add('hidden');
        btnText.style.opacity = '1';
    }

    getCategoryClass(category) {
        const categoryMap = {
            'Personal & Background': 'category-personal',
            'Work & Professional': 'category-work',
            'Remote Work & WFH': 'category-remote',
            'Creative & Fun': 'category-creative',
            'Technology & Preferences': 'category-technology',
            'Team Building & Connection': 'category-team'
        };
        return categoryMap[category] || 'category-personal';
    }

    updateCounter() {
        const questionCounter = document.getElementById('questionCounter');
        const usedCount = this.usedQuestions.length;
        const totalCount = this.questions.length;
        
        questionCounter.textContent = `Question ${usedCount} of ${totalCount}`;
    }

    showCompletion() {
        const questionArea = document.getElementById('questionArea');
        const completionCelebration = document.getElementById('completionCelebration');

        questionArea.classList.add('hidden');
        completionCelebration.classList.remove('hidden');

        // Trigger celebration confetti
        this.triggerCelebrationConfetti();
    }

    resetApp() {
        this.usedQuestions = [];
        this.currentQuestion = null;
        
        // Clear localStorage
        this.clearProgress();

        // Reset UI
        const generateSection = document.getElementById('generateSection');
        const questionDisplay = document.getElementById('questionDisplay');
        const questionArea = document.getElementById('questionArea');
        const completionCelebration = document.getElementById('completionCelebration');
        const questionCounter = document.getElementById('questionCounter');

        questionDisplay.classList.add('hidden');
        generateSection.classList.remove('hidden');
        questionArea.classList.remove('hidden');
        completionCelebration.classList.add('hidden');

        questionCounter.textContent = 'Ready to start!';

        // Clear any existing confetti
        this.clearConfetti();
    }

    triggerConfetti() {
        this.createConfetti(20);
    }

    triggerCelebrationConfetti() {
        this.createConfetti(50);
    }

    createConfetti(count) {
        const container = document.getElementById('confettiContainer');
        
        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            container.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 4000);
        }
    }

    clearConfetti() {
        const container = document.getElementById('confettiContainer');
        container.innerHTML = '';
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new IcebreakerRoulette();
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        const generateBtn = document.getElementById('generateBtn');
        const anotherBtn = document.getElementById('anotherBtn');
        const resetBtn = document.getElementById('resetBtn');
        
        if (!generateBtn.classList.contains('hidden') && !generateBtn.classList.contains('loading')) {
            e.preventDefault();
            generateBtn.click();
        } else if (!anotherBtn.classList.contains('hidden')) {
            e.preventDefault();
            anotherBtn.click();
        } else if (!resetBtn.classList.contains('hidden')) {
            e.preventDefault();
            resetBtn.click();
        }
    }
});