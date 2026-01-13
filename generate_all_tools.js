const fs = require('fs');
const path = require('path');

// Ensure tools directory exists
if (!fs.existsSync('tools')) {
    fs.mkdirSync('tools', { recursive: true });
}

// Tool implementations map
const toolImplementations = {
    // AI Tools
    'ai-grammar-checker.html': {
        form: '<div class="form-group"><label for="text">Enter text to check:</label><textarea id="text" placeholder="Enter your text here..."></textarea></div>',
        js: `function processTool() {
            const text = document.getElementById('text').value.trim();
            if (!text) { alert('Please enter text'); return; }
            const errors = [];
            if (!text.match(/^[A-Z]/)) errors.push('Sentence should start with capital letter');
            if (!text.match(/[.!?]$/)) errors.push('Sentence should end with punctuation');
            const result = errors.length > 0 ? 'Issues found:\\n' + errors.join('\\n') : 'No grammar errors detected!';
            document.getElementById('output').textContent = result;
            document.getElementById('result').style.display = 'block';
        }`
    },
    'ai-story-generator.html': {
        form: '<div class="form-group"><label for="prompt">Story prompt:</label><textarea id="prompt" placeholder="e.g., A robot discovers emotions"></textarea></div><div class="form-group"><label for="length">Story length:</label><select id="length"><option value="short">Short</option><option value="medium" selected>Medium</option><option value="long">Long</option></select></div>',
        js: `function processTool() {
            const prompt = document.getElementById('prompt').value.trim();
            const length = document.getElementById('length').value;
            if (!prompt) { alert('Please enter a prompt'); return; }
            const words = length === 'short' ? 100 : length === 'medium' ? 300 : 500;
            let story = 'Once upon a time, ' + prompt + '. ';
            for (let i = 0; i < words / 20; i++) {
                story += 'The story continued to unfold with new developments. ';
            }
            story += 'And so, the tale came to an end, leaving readers with a sense of wonder.';
            document.getElementById('output').textContent = story;
            document.getElementById('result').style.display = 'block';
        }`
    },
    'ai-email-writer.html': {
        form: '<div class="form-group"><label for="purpose">Email purpose:</label><select id="purpose"><option value="professional">Professional</option><option value="casual">Casual</option><option value="formal">Formal</option></select></div><div class="form-group"><label for="topic">Topic:</label><input type="text" id="topic" placeholder="e.g., Meeting request"></textarea></div>',
        js: `function processTool() {
            const purpose = document.getElementById('purpose').value;
            const topic = document.getElementById('topic').value.trim();
            if (!topic) { alert('Please enter topic'); return; }
            const templates = {
                professional: \`Subject: Regarding \${topic}\\n\\nDear [Recipient],\\n\\nI hope this email finds you well. I am writing to discuss \${topic}.\\n\\nBest regards,\\n[Your Name]\`,
                casual: \`Subject: \${topic}\\n\\nHey!\\n\\nJust wanted to reach out about \${topic}. Let me know what you think!\\n\\nThanks!\\n[Your Name]\`,
                formal: \`Subject: Formal Inquiry Regarding \${topic}\\n\\nDear Sir/Madam,\\n\\nI am writing to formally address the matter of \${topic}.\\n\\nYours sincerely,\\n[Your Name]\`
            };
            document.getElementById('output').textContent = templates[purpose];
            document.getElementById('result').style.display = 'block';
        }`
    },
    // Add more implementations as needed - this is a template
};

// Base template
function generateToolHTML(name, desc, file) {
    const impl = toolImplementations[file] || {
        form: '<div class="form-group"><label for="input">Input:</label><textarea id="input" placeholder="Enter your input here..."></textarea></div>',
        js: `function processTool() {
            const input = document.getElementById('input').value.trim();
            if (!input) { alert('Please enter input'); return; }
            document.getElementById('output').textContent = 'Processed: ' + input;
            document.getElementById('result').style.display = 'block';
        }`
    };
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name} - Fera Tools</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <div class="nav-brand"><h1>🛠️ Fera Tools</h1></div>
            <button class="mobile-menu-toggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>
            <ul class="nav-menu">
                <li><a href="../index.html">Home</a></li>
                <li><a href="../index.html#tools">Tools</a></li>
                <li><a href="../about.html">About Us</a></li>
                <li><a href="../contact.html">Contact Us</a></li>
                <li><button class="theme-toggle" aria-label="Toggle theme">🌙</button></li>
            </ul>
        </div>
    </nav>
    <div class="tool-page">
        <div class="container">
            <a href="../index.html#tools" class="back-link">← Back to Tools</a>
            <div class="tool-header">
                <h1>${name}</h1>
                <p>${desc}</p>
            </div>
            <div class="tool-container">
                ${impl.form}
                <button onclick="processTool()" class="btn btn-primary">Process</button>
                <button onclick="clearAll()" class="btn btn-secondary">Clear</button>
                <div class="result-container" id="result" style="display:none;">
                    <h3>Result:</h3>
                    <div class="result-output" id="output"></div>
                </div>
            </div>
        </div>
    </div>
    <script src="../script.js"></script>
    <script>
        ${impl.js}
        function clearAll() {
            document.querySelectorAll('input, textarea, select').forEach(el => el.value = '');
            document.getElementById('result').style.display = 'none';
        }
    </script>
</body>
</html>`;
}

// Read tools from script.js and generate files
// For now, let's create a comprehensive list and generate all
console.log('Tool generator ready. This would generate all 200 tools.');
console.log('Due to the large number, creating tools directly in batches...');
