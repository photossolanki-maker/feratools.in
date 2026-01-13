// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon();

themeToggle?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
});

function updateThemeIcon() {
    const theme = document.documentElement.getAttribute('data-theme');
    if (themeToggle) {
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileMenuToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu?.contains(e.target) && !mobileMenuToggle?.contains(e.target)) {
        navMenu?.classList.remove('active');
    }
});

// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question?.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(faq => faq.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// Tools List
const toolsList = [
    // AI Tools (1-30)
    { name: 'AI Text Generator', category: 'AI Tools', file: 'ai-text-generator.html', desc: 'Generate creative text content using AI' },
    { name: 'AI Article Writer', category: 'AI Tools', file: 'ai-article-writer.html', desc: 'Create full-length articles with AI assistance' },
    { name: 'AI Blog Idea Generator', category: 'AI Tools', file: 'ai-blog-idea-generator.html', desc: 'Generate unique blog post ideas' },
    { name: 'AI Paraphraser', category: 'AI Tools', file: 'ai-paraphraser.html', desc: 'Rephrase text while keeping the meaning' },
    { name: 'AI Grammar Checker', category: 'AI Tools', file: 'ai-grammar-checker.html', desc: 'Check and correct grammar errors' },
    { name: 'AI Story Generator', category: 'AI Tools', file: 'ai-story-generator.html', desc: 'Generate creative stories automatically' },
    { name: 'AI Email Writer', category: 'AI Tools', file: 'ai-email-writer.html', desc: 'Write professional emails with AI' },
    { name: 'AI Resume Builder', category: 'AI Tools', file: 'ai-resume-builder.html', desc: 'Build professional resumes automatically' },
    { name: 'AI Cover Letter Generator', category: 'AI Tools', file: 'ai-cover-letter-generator.html', desc: 'Generate cover letters for job applications' },
    { name: 'AI Code Generator', category: 'AI Tools', file: 'ai-code-generator.html', desc: 'Generate code snippets from descriptions' },
    { name: 'AI Chatbot', category: 'AI Tools', file: 'ai-chatbot.html', desc: 'Interactive AI chatbot assistant' },
    { name: 'AI Keyword Generator', category: 'AI Tools', file: 'ai-keyword-generator.html', desc: 'Generate relevant keywords for SEO' },
    { name: 'AI Headline Generator', category: 'AI Tools', file: 'ai-headline-generator.html', desc: 'Create catchy headlines for content' },
    { name: 'AI Product Description Generator', category: 'AI Tools', file: 'ai-product-description-generator.html', desc: 'Generate product descriptions automatically' },
    { name: 'AI Ad Copy Generator', category: 'AI Tools', file: 'ai-ad-copy-generator.html', desc: 'Create compelling ad copy with AI' },
    { name: 'AI YouTube Script Generator', category: 'AI Tools', file: 'ai-youtube-script-generator.html', desc: 'Generate YouTube video scripts' },
    { name: 'AI Tweet Generator', category: 'AI Tools', file: 'ai-tweet-generator.html', desc: 'Create engaging Twitter posts' },
    { name: 'AI Instagram Caption Generator', category: 'AI Tools', file: 'ai-instagram-caption-generator.html', desc: 'Generate Instagram captions' },
    { name: 'AI LinkedIn Post Generator', category: 'AI Tools', file: 'ai-linkedin-post-generator.html', desc: 'Create professional LinkedIn posts' },
    { name: 'AI Summary Generator', category: 'AI Tools', file: 'ai-summary-generator.html', desc: 'Summarize long texts automatically' },
    { name: 'AI Text Improver', category: 'AI Tools', file: 'ai-text-improver.html', desc: 'Improve and enhance your text quality' },
    { name: 'AI Sentence Rewriter', category: 'AI Tools', file: 'ai-sentence-rewriter.html', desc: 'Rewrite sentences for better clarity' },
    { name: 'AI Question Generator', category: 'AI Tools', file: 'ai-question-generator.html', desc: 'Generate questions from any topic' },
    { name: 'AI Answer Generator', category: 'AI Tools', file: 'ai-answer-generator.html', desc: 'Generate answers to questions' },
    { name: 'AI Blog Outline Generator', category: 'AI Tools', file: 'ai-blog-outline-generator.html', desc: 'Create structured blog outlines' },
    { name: 'AI FAQ Generator', category: 'AI Tools', file: 'ai-faq-generator.html', desc: 'Generate FAQ sections automatically' },
    { name: 'AI Review Generator', category: 'AI Tools', file: 'ai-review-generator.html', desc: 'Generate product or service reviews' },
    { name: 'AI Story Plot Generator', category: 'AI Tools', file: 'ai-story-plot-generator.html', desc: 'Generate creative story plots' },
    { name: 'AI Email Subject Generator', category: 'AI Tools', file: 'ai-email-subject-generator.html', desc: 'Create compelling email subjects' },
    { name: 'AI Content Idea Generator', category: 'AI Tools', file: 'ai-content-idea-generator.html', desc: 'Generate content ideas for any niche' },
    
    // SEO Tools (31-60)
    { name: 'Keyword Research Tool', category: 'SEO Tools', file: 'keyword-research-tool.html', desc: 'Research and analyze keywords' },
    { name: 'SEO Analyzer', category: 'SEO Tools', file: 'seo-analyzer.html', desc: 'Analyze website SEO performance' },
    { name: 'Backlink Checker', category: 'SEO Tools', file: 'backlink-checker.html', desc: 'Check backlinks for any URL' },
    { name: 'Domain Authority Checker', category: 'SEO Tools', file: 'domain-authority-checker.html', desc: 'Check domain authority score' },
    { name: 'Plagiarism Checker', category: 'SEO Tools', file: 'plagiarism-checker.html', desc: 'Check content for plagiarism' },
    { name: 'Meta Tag Generator', category: 'SEO Tools', file: 'meta-tag-generator.html', desc: 'Generate meta tags for websites' },
    { name: 'Sitemap Generator', category: 'SEO Tools', file: 'sitemap-generator.html', desc: 'Generate XML sitemaps' },
    { name: 'Robots.txt Generator', category: 'SEO Tools', file: 'robots-txt-generator.html', desc: 'Generate robots.txt files' },
    { name: 'Google SERP Preview Tool', category: 'SEO Tools', file: 'google-serp-preview-tool.html', desc: 'Preview how your site appears in Google' },
    { name: 'Keyword Density Checker', category: 'SEO Tools', file: 'keyword-density-checker.html', desc: 'Check keyword density in text' },
    { name: 'Page Speed Checker', category: 'SEO Tools', file: 'page-speed-checker.html', desc: 'Check website loading speed' },
    { name: 'Mobile Friendly Test', category: 'SEO Tools', file: 'mobile-friendly-test.html', desc: 'Test mobile responsiveness' },
    { name: 'Broken Link Checker', category: 'SEO Tools', file: 'broken-link-checker.html', desc: 'Find broken links on your website' },
    { name: 'Redirect Checker', category: 'SEO Tools', file: 'redirect-checker.html', desc: 'Check HTTP redirects' },
    { name: 'XML Validator', category: 'SEO Tools', file: 'xml-validator.html', desc: 'Validate XML code' },
    { name: 'URL Shortener', category: 'SEO Tools', file: 'url-shortener.html', desc: 'Shorten long URLs' },
    { name: 'UTM Builder', category: 'SEO Tools', file: 'utm-builder.html', desc: 'Build UTM tracking URLs' },
    { name: 'Canonical Tag Generator', category: 'SEO Tools', file: 'canonical-tag-generator.html', desc: 'Generate canonical tags' },
    { name: 'Open Graph Generator', category: 'SEO Tools', file: 'open-graph-generator.html', desc: 'Generate Open Graph meta tags' },
    { name: 'Twitter Card Generator', category: 'SEO Tools', file: 'twitter-card-generator.html', desc: 'Generate Twitter card meta tags' },
    { name: 'SEO Title Generator', category: 'SEO Tools', file: 'seo-title-generator.html', desc: 'Generate SEO-optimized titles' },
    { name: 'SEO Description Generator', category: 'SEO Tools', file: 'seo-description-generator.html', desc: 'Generate SEO meta descriptions' },
    { name: 'Website Audit Tool', category: 'SEO Tools', file: 'website-audit-tool.html', desc: 'Audit website SEO issues' },
    { name: 'Index Checker', category: 'SEO Tools', file: 'index-checker.html', desc: 'Check if pages are indexed' },
    { name: 'Keyword Position Checker', category: 'SEO Tools', file: 'keyword-position-checker.html', desc: 'Check keyword rankings' },
    { name: 'Spam Score Checker', category: 'SEO Tools', file: 'spam-score-checker.html', desc: 'Check spam score of domains' },
    { name: 'Anchor Text Generator', category: 'SEO Tools', file: 'anchor-text-generator.html', desc: 'Generate anchor text variations' },
    { name: 'Domain Age Checker', category: 'SEO Tools', file: 'domain-age-checker.html', desc: 'Check domain registration age' },
    { name: 'Google Cache Checker', category: 'SEO Tools', file: 'google-cache-checker.html', desc: 'Check Google cache status' },
    { name: 'Website Screenshot Tool', category: 'SEO Tools', file: 'website-screenshot-tool.html', desc: 'Take website screenshots' },
    
    // Developer Tools (61-100)
    { name: 'HTML Formatter', category: 'Developer Tools', file: 'html-formatter.html', desc: 'Format and beautify HTML code' },
    { name: 'CSS Formatter', category: 'Developer Tools', file: 'css-formatter.html', desc: 'Format and beautify CSS code' },
    { name: 'JavaScript Formatter', category: 'Developer Tools', file: 'javascript-formatter.html', desc: 'Format and beautify JavaScript code' },
    { name: 'HTML Minifier', category: 'Developer Tools', file: 'html-minifier.html', desc: 'Minify HTML code' },
    { name: 'CSS Minifier', category: 'Developer Tools', file: 'css-minifier.html', desc: 'Minify CSS code' },
    { name: 'JS Minifier', category: 'Developer Tools', file: 'js-minifier.html', desc: 'Minify JavaScript code' },
    { name: 'JSON Formatter', category: 'Developer Tools', file: 'json-formatter.html', desc: 'Format and validate JSON' },
    { name: 'JSON Validator', category: 'Developer Tools', file: 'json-validator.html', desc: 'Validate JSON syntax' },
    { name: 'XML Formatter', category: 'Developer Tools', file: 'xml-formatter.html', desc: 'Format XML documents' },
    { name: 'Markdown to HTML', category: 'Developer Tools', file: 'markdown-to-html.html', desc: 'Convert Markdown to HTML' },
    { name: 'HTML to Markdown', category: 'Developer Tools', file: 'html-to-markdown.html', desc: 'Convert HTML to Markdown' },
    { name: 'Base64 Encoder', category: 'Developer Tools', file: 'base64-encoder.html', desc: 'Encode text to Base64' },
    { name: 'Base64 Decoder', category: 'Developer Tools', file: 'base64-decoder.html', desc: 'Decode Base64 to text' },
    { name: 'URL Encoder', category: 'Developer Tools', file: 'url-encoder.html', desc: 'Encode URLs' },
    { name: 'URL Decoder', category: 'Developer Tools', file: 'url-decoder.html', desc: 'Decode URLs' },
    { name: 'Regex Tester', category: 'Developer Tools', file: 'regex-tester.html', desc: 'Test regular expressions' },
    { name: 'UUID Generator', category: 'Developer Tools', file: 'uuid-generator.html', desc: 'Generate UUIDs' },
    { name: 'Random String Generator', category: 'Developer Tools', file: 'random-string-generator.html', desc: 'Generate random strings' },
    { name: 'API Tester', category: 'Developer Tools', file: 'api-tester.html', desc: 'Test API endpoints' },
    { name: 'HTTP Header Checker', category: 'Developer Tools', file: 'http-header-checker.html', desc: 'Check HTTP headers' },
    { name: 'IP Address Lookup', category: 'Developer Tools', file: 'ip-address-lookup.html', desc: 'Lookup IP address information' },
    { name: 'DNS Lookup', category: 'Developer Tools', file: 'dns-lookup.html', desc: 'Perform DNS lookups' },
    { name: 'WHOIS Lookup', category: 'Developer Tools', file: 'whois-lookup.html', desc: 'Lookup domain WHOIS information' },
    { name: 'SSL Checker', category: 'Developer Tools', file: 'ssl-checker.html', desc: 'Check SSL certificate status' },
    { name: 'Server Status Checker', category: 'Developer Tools', file: 'server-status-checker.html', desc: 'Check server status' },
    { name: 'Ping Tool', category: 'Developer Tools', file: 'ping-tool.html', desc: 'Ping any hostname or IP' },
    { name: 'Port Scanner', category: 'Developer Tools', file: 'port-scanner.html', desc: 'Scan open ports' },
    { name: 'JWT Decoder', category: 'Developer Tools', file: 'jwt-decoder.html', desc: 'Decode JWT tokens' },
    { name: 'Code Diff Checker', category: 'Developer Tools', file: 'code-diff-checker.html', desc: 'Compare code differences' },
    { name: 'Text Compare Tool', category: 'Developer Tools', file: 'text-compare-tool.html', desc: 'Compare two texts' },
    { name: 'CSV to JSON', category: 'Developer Tools', file: 'csv-to-json.html', desc: 'Convert CSV to JSON' },
    { name: 'JSON to CSV', category: 'Developer Tools', file: 'json-to-csv.html', desc: 'Convert JSON to CSV' },
    { name: 'SQL Formatter', category: 'Developer Tools', file: 'sql-formatter.html', desc: 'Format SQL queries' },
    { name: 'Cron Job Generator', category: 'Developer Tools', file: 'cron-job-generator.html', desc: 'Generate cron expressions' },
    { name: '.htaccess Generator', category: 'Developer Tools', file: 'htaccess-generator.html', desc: 'Generate .htaccess rules' },
    { name: 'Password Hash Generator', category: 'Developer Tools', file: 'password-hash-generator.html', desc: 'Generate password hashes' },
    { name: 'SHA256 Generator', category: 'Developer Tools', file: 'sha256-generator.html', desc: 'Generate SHA256 hashes' },
    { name: 'MD5 Generator', category: 'Developer Tools', file: 'md5-generator.html', desc: 'Generate MD5 hashes' },
    { name: 'Color Code Validator', category: 'Developer Tools', file: 'color-code-validator.html', desc: 'Validate color codes' },
    { name: 'File Size Converter', category: 'Developer Tools', file: 'file-size-converter.html', desc: 'Convert file sizes' },
    
    // Text Tools (101-130)
    { name: 'Word Counter', category: 'Text Tools', file: 'word-counter.html', desc: 'Count words, characters, and more' },
    { name: 'Character Counter', category: 'Text Tools', file: 'character-counter.html', desc: 'Count characters in text' },
    { name: 'Sentence Counter', category: 'Text Tools', file: 'sentence-counter.html', desc: 'Count sentences in text' },
    { name: 'Paragraph Counter', category: 'Text Tools', file: 'paragraph-counter.html', desc: 'Count paragraphs in text' },
    { name: 'Case Converter', category: 'Text Tools', file: 'case-converter.html', desc: 'Convert text case' },
    { name: 'Uppercase Converter', category: 'Text Tools', file: 'uppercase-converter.html', desc: 'Convert text to uppercase' },
    { name: 'Lowercase Converter', category: 'Text Tools', file: 'lowercase-converter.html', desc: 'Convert text to lowercase' },
    { name: 'Title Case Converter', category: 'Text Tools', file: 'title-case-converter.html', desc: 'Convert text to title case' },
    { name: 'Reverse Text', category: 'Text Tools', file: 'reverse-text.html', desc: 'Reverse text characters' },
    { name: 'Remove Duplicate Lines', category: 'Text Tools', file: 'remove-duplicate-lines.html', desc: 'Remove duplicate lines from text' },
    { name: 'Remove Extra Spaces', category: 'Text Tools', file: 'remove-extra-spaces.html', desc: 'Remove extra whitespace' },
    { name: 'Text Sorter', category: 'Text Tools', file: 'text-sorter.html', desc: 'Sort lines of text' },
    { name: 'Find and Replace', category: 'Text Tools', file: 'find-and-replace.html', desc: 'Find and replace text' },
    { name: 'Text to Speech', category: 'Text Tools', file: 'text-to-speech.html', desc: 'Convert text to speech' },
    { name: 'Speech to Text', category: 'Text Tools', file: 'speech-to-text.html', desc: 'Convert speech to text' },
    { name: 'Lorem Ipsum Generator', category: 'Text Tools', file: 'lorem-ipsum-generator.html', desc: 'Generate Lorem Ipsum text' },
    { name: 'Random Text Generator', category: 'Text Tools', file: 'random-text-generator.html', desc: 'Generate random text' },
    { name: 'Readability Checker', category: 'Text Tools', file: 'readability-checker.html', desc: 'Check text readability score' },
    { name: 'Grammar Checker', category: 'Text Tools', file: 'grammar-checker.html', desc: 'Check grammar errors' },
    { name: 'Spell Checker', category: 'Text Tools', file: 'spell-checker.html', desc: 'Check spelling errors' },
    { name: 'Text Encryption Tool', category: 'Text Tools', file: 'text-encryption-tool.html', desc: 'Encrypt text securely' },
    { name: 'Text Decryption Tool', category: 'Text Tools', file: 'text-decryption-tool.html', desc: 'Decrypt encrypted text' },
    { name: 'URL Extractor', category: 'Text Tools', file: 'url-extractor.html', desc: 'Extract URLs from text' },
    { name: 'Email Extractor', category: 'Text Tools', file: 'email-extractor.html', desc: 'Extract email addresses from text' },
    { name: 'Hashtag Generator', category: 'Text Tools', file: 'hashtag-generator.html', desc: 'Generate hashtags from text' },
    { name: 'Slug Generator', category: 'Text Tools', file: 'slug-generator.html', desc: 'Generate URL-friendly slugs' },
    { name: 'Keyword Extractor', category: 'Text Tools', file: 'keyword-extractor.html', desc: 'Extract keywords from text' },
    { name: 'Text Analyzer', category: 'Text Tools', file: 'text-analyzer.html', desc: 'Analyze text statistics' },
    { name: 'Stop Words Remover', category: 'Text Tools', file: 'stop-words-remover.html', desc: 'Remove stop words from text' },
    { name: 'Emoji Text Generator', category: 'Text Tools', file: 'emoji-text-generator.html', desc: 'Generate emoji text' },
    
    // Image & Media Tools (131-160)
    { name: 'Image Compressor', category: 'Image & Media Tools', file: 'image-compressor.html', desc: 'Compress image file size' },
    { name: 'Image Resizer', category: 'Image & Media Tools', file: 'image-resizer.html', desc: 'Resize images' },
    { name: 'Image Cropper', category: 'Image & Media Tools', file: 'image-cropper.html', desc: 'Crop images online' },
    { name: 'JPG to PNG', category: 'Image & Media Tools', file: 'jpg-to-png.html', desc: 'Convert JPG to PNG' },
    { name: 'PNG to JPG', category: 'Image & Media Tools', file: 'png-to-jpg.html', desc: 'Convert PNG to JPG' },
    { name: 'Image to WebP', category: 'Image & Media Tools', file: 'image-to-webp.html', desc: 'Convert images to WebP' },
    { name: 'WebP to Image', category: 'Image & Media Tools', file: 'webp-to-image.html', desc: 'Convert WebP to other formats' },
    { name: 'Image Metadata Viewer', category: 'Image & Media Tools', file: 'image-metadata-viewer.html', desc: 'View image EXIF data' },
    { name: 'Image Color Picker', category: 'Image & Media Tools', file: 'image-color-picker.html', desc: 'Pick colors from images' },
    { name: 'QR Code Generator', category: 'Image & Media Tools', file: 'qr-code-generator.html', desc: 'Generate QR codes' },
    { name: 'QR Code Scanner', category: 'Image & Media Tools', file: 'qr-code-scanner.html', desc: 'Scan QR codes' },
    { name: 'YouTube Thumbnail Downloader', category: 'Image & Media Tools', file: 'youtube-thumbnail-downloader.html', desc: 'Download YouTube thumbnails' },
    { name: 'YouTube Tag Generator', category: 'Image & Media Tools', file: 'youtube-tag-generator.html', desc: 'Generate YouTube tags' },
    { name: 'YouTube Title Generator', category: 'Image & Media Tools', file: 'youtube-title-generator.html', desc: 'Generate YouTube titles' },
    { name: 'Video Downloader', category: 'Image & Media Tools', file: 'video-downloader.html', desc: 'Download videos from URLs' },
    { name: 'Audio Converter', category: 'Image & Media Tools', file: 'audio-converter.html', desc: 'Convert audio formats' },
    { name: 'Video to MP3', category: 'Image & Media Tools', file: 'video-to-mp3.html', desc: 'Extract audio from video' },
    { name: 'Image Watermark Tool', category: 'Image & Media Tools', file: 'image-watermark-tool.html', desc: 'Add watermarks to images' },
    { name: 'Meme Generator', category: 'Image & Media Tools', file: 'meme-generator.html', desc: 'Create memes online' },
    { name: 'GIF Maker', category: 'Image & Media Tools', file: 'gif-maker.html', desc: 'Create animated GIFs' },
    { name: 'Screenshot Tool', category: 'Image & Media Tools', file: 'screenshot-tool.html', desc: 'Take screenshots' },
    { name: 'Favicon Generator', category: 'Image & Media Tools', file: 'favicon-generator.html', desc: 'Generate favicons' },
    { name: 'Social Media Image Resizer', category: 'Image & Media Tools', file: 'social-media-image-resizer.html', desc: 'Resize for social media' },
    { name: 'Image Blur Tool', category: 'Image & Media Tools', file: 'image-blur-tool.html', desc: 'Blur images' },
    { name: 'Image Flip Tool', category: 'Image & Media Tools', file: 'image-flip-tool.html', desc: 'Flip images horizontally/vertically' },
    { name: 'Image Rotate Tool', category: 'Image & Media Tools', file: 'image-rotate-tool.html', desc: 'Rotate images' },
    { name: 'Image Grayscale Converter', category: 'Image & Media Tools', file: 'image-grayscale-converter.html', desc: 'Convert images to grayscale' },
    { name: 'Image Border Tool', category: 'Image & Media Tools', file: 'image-border-tool.html', desc: 'Add borders to images' },
    { name: 'Image Aspect Ratio Tool', category: 'Image & Media Tools', file: 'image-aspect-ratio-tool.html', desc: 'Calculate aspect ratios' },
    { name: 'Image Background Remover', category: 'Image & Media Tools', file: 'image-background-remover.html', desc: 'Remove image backgrounds' },
    
    // Calculators & Utilities (161-200)
    { name: 'BMI Calculator', category: 'Calculators & Utilities', file: 'bmi-calculator.html', desc: 'Calculate Body Mass Index' },
    { name: 'Age Calculator', category: 'Calculators & Utilities', file: 'age-calculator.html', desc: 'Calculate age from birthdate' },
    { name: 'Percentage Calculator', category: 'Calculators & Utilities', file: 'percentage-calculator.html', desc: 'Calculate percentages' },
    { name: 'Loan Calculator', category: 'Calculators & Utilities', file: 'loan-calculator.html', desc: 'Calculate loan payments' },
    { name: 'EMI Calculator', category: 'Calculators & Utilities', file: 'emi-calculator.html', desc: 'Calculate EMI payments' },
    { name: 'Interest Calculator', category: 'Calculators & Utilities', file: 'interest-calculator.html', desc: 'Calculate interest rates' },
    { name: 'Currency Converter', category: 'Calculators & Utilities', file: 'currency-converter.html', desc: 'Convert currencies' },
    { name: 'Unit Converter', category: 'Calculators & Utilities', file: 'unit-converter.html', desc: 'Convert units of measurement' },
    { name: 'Time Zone Converter', category: 'Calculators & Utilities', file: 'time-zone-converter.html', desc: 'Convert between time zones' },
    { name: 'Date Difference Calculator', category: 'Calculators & Utilities', file: 'date-difference-calculator.html', desc: 'Calculate date differences' },
    { name: 'Tip Calculator', category: 'Calculators & Utilities', file: 'tip-calculator.html', desc: 'Calculate tips' },
    { name: 'GST Calculator', category: 'Calculators & Utilities', file: 'gst-calculator.html', desc: 'Calculate GST' },
    { name: 'Discount Calculator', category: 'Calculators & Utilities', file: 'discount-calculator.html', desc: 'Calculate discounts' },
    { name: 'Random Number Generator', category: 'Calculators & Utilities', file: 'random-number-generator.html', desc: 'Generate random numbers' },
    { name: 'Password Generator', category: 'Calculators & Utilities', file: 'password-generator.html', desc: 'Generate secure passwords' },
    { name: 'Password Strength Checker', category: 'Calculators & Utilities', file: 'password-strength-checker.html', desc: 'Check password strength' },
    { name: 'Dice Roller', category: 'Calculators & Utilities', file: 'dice-roller.html', desc: 'Roll dice online' },
    { name: 'Coin Flip Tool', category: 'Calculators & Utilities', file: 'coin-flip-tool.html', desc: 'Flip a coin' },
    { name: 'Stopwatch', category: 'Calculators & Utilities', file: 'stopwatch.html', desc: 'Online stopwatch' },
    { name: 'Countdown Timer', category: 'Calculators & Utilities', file: 'countdown-timer.html', desc: 'Create countdown timers' },
    { name: 'Alarm Clock', category: 'Calculators & Utilities', file: 'alarm-clock.html', desc: 'Set alarms' },
    { name: 'File Size Calculator', category: 'Calculators & Utilities', file: 'file-size-calculator.html', desc: 'Calculate file sizes' },
    { name: 'Download Speed Calculator', category: 'Calculators & Utilities', file: 'download-speed-calculator.html', desc: 'Calculate download speeds' },
    { name: 'Internet Speed Test', category: 'Calculators & Utilities', file: 'internet-speed-test.html', desc: 'Test internet speed' },
    { name: 'Color Picker', category: 'Calculators & Utilities', file: 'color-picker.html', desc: 'Pick colors' },
    { name: 'HEX to RGB', category: 'Calculators & Utilities', file: 'hex-to-rgb.html', desc: 'Convert HEX to RGB' },
    { name: 'RGB to HEX', category: 'Calculators & Utilities', file: 'rgb-to-hex.html', desc: 'Convert RGB to HEX' },
    { name: 'Gradient Generator', category: 'Calculators & Utilities', file: 'gradient-generator.html', desc: 'Generate CSS gradients' },
    { name: 'Font Pairing Tool', category: 'Calculators & Utilities', file: 'font-pairing-tool.html', desc: 'Find font pairings' },
    { name: 'Username Generator', category: 'Calculators & Utilities', file: 'username-generator.html', desc: 'Generate usernames' },
    { name: 'Fake Name Generator', category: 'Calculators & Utilities', file: 'fake-name-generator.html', desc: 'Generate fake names' },
    { name: 'Fake Email Generator', category: 'Calculators & Utilities', file: 'fake-email-generator.html', desc: 'Generate fake emails' },
    { name: 'Fake Address Generator', category: 'Calculators & Utilities', file: 'fake-address-generator.html', desc: 'Generate fake addresses' },
    { name: 'UUID Validator', category: 'Calculators & Utilities', file: 'uuid-validator.html', desc: 'Validate UUID format' },
    { name: 'Clipboard Manager', category: 'Calculators & Utilities', file: 'clipboard-manager.html', desc: 'Manage clipboard history' },
    { name: 'Text Notepad', category: 'Calculators & Utilities', file: 'text-notepad.html', desc: 'Online notepad' },
    { name: 'Online Calculator', category: 'Calculators & Utilities', file: 'online-calculator.html', desc: 'Basic calculator' },
    { name: 'Number Converter', category: 'Calculators & Utilities', file: 'number-converter.html', desc: 'Convert number bases' },
    { name: 'Binary to Decimal', category: 'Calculators & Utilities', file: 'binary-to-decimal.html', desc: 'Convert binary to decimal' },
    { name: 'Decimal to Binary', category: 'Calculators & Utilities', file: 'decimal-to-binary.html', desc: 'Convert decimal to binary' }
];

// Load tools on index page
let allToolCards = [];
if (document.getElementById('toolsGrid')) {
    const toolsGrid = document.getElementById('toolsGrid');
    const noResults = document.getElementById('noResults');
    
    // Create all tool cards
    toolsList.forEach(tool => {
        const card = document.createElement('a');
        card.href = `tools/${tool.file}`;
        card.className = 'tool-card';
        card.setAttribute('data-name', tool.name.toLowerCase());
        card.setAttribute('data-category', tool.category.toLowerCase());
        card.innerHTML = `
            <h3>${tool.name}</h3>
            <p>${tool.desc}</p>
            <small style="color: var(--primary-color);">${tool.category}</small>
        `;
        toolsGrid.appendChild(card);
        allToolCards.push(card);
    });

    // Search functionality
    const searchInput = document.getElementById('toolSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            filterTools(searchTerm);
        });

        // Clear search on Escape key
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchInput.value = '';
                filterTools('');
            }
        });
    }

    function filterTools(searchTerm) {
        let visibleCount = 0;
        const searchResults = document.getElementById('searchResults');
        
        allToolCards.forEach(card => {
            const toolName = card.getAttribute('data-name');
            const category = card.getAttribute('data-category');
            
            if (!searchTerm || toolName.includes(searchTerm) || category.includes(searchTerm)) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Update search results count
        if (searchTerm) {
            if (visibleCount > 0) {
                searchResults.textContent = `Found ${visibleCount} tool${visibleCount !== 1 ? 's' : ''}`;
                searchResults.style.display = 'block';
            } else {
                searchResults.style.display = 'none';
            }
        } else {
            searchResults.style.display = 'none';
        }

        // Show/hide "No results" message
        if (searchTerm && visibleCount === 0) {
            noResults.style.display = 'block';
            document.getElementById('toolsGrid').style.display = 'none';
        } else {
            noResults.style.display = 'none';
            document.getElementById('toolsGrid').style.display = 'grid';
        }
    }
}

// Contact Form Validation
if (document.getElementById('contactForm')) {
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let isValid = true;
        
        if (!name) {
            showError('name', 'Name is required');
            isValid = false;
        }
        
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError('email', 'Valid email is required');
            isValid = false;
        }
        
        if (!message) {
            showError('message', 'Message is required');
            isValid = false;
        }
        
        if (isValid) {
            document.getElementById('contactForm').innerHTML = '<div class="form-success">Thank you! Your message has been sent successfully.</div>';
        }
    });
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.textContent = message;
    field.parentElement.appendChild(errorDiv);
    setTimeout(() => errorDiv.remove(), 5000);
}
