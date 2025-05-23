// Animate count up for stats in "Trusted by thousands" section
document.addEventListener("DOMContentLoaded", () => {
  const stats = document.querySelectorAll(".stat");

  stats.forEach(stat => {
    const target = +stat.getAttribute("data-target");
    const duration = 2000; // 2 seconds
    let startTime = null;

    function animateCount(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min(
        Math.floor((progress / duration) * target),
        target
      );
      stat.textContent = formatNumber(current);
      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        stat.textContent = formatNumber(target);
      }
    }

    // Format large numbers with suffixes (e.g. 500K, 21M)
    function formatNumber(num) {
      if (num >= 1e6) return (num / 1e6).toFixed(1).replace(/\.0$/, '') + 'M+';
      if (num >= 1e3) return (num / 1e3).toFixed(1).replace(/\.0$/, '') + 'K+';
      return num;
    }

    requestAnimationFrame(animateCount);
  });
});
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach((slide, idx) => {
    slide.classList.remove("active");
  });

  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

setInterval(showSlides, 4000); // Change slide every 4 seconds


//chatbot
document.getElementById("chatbot-icon").addEventListener("click", toggleChat);

function toggleChat() {
  const chat = document.getElementById("chat-popup");
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

function handleKey(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const text = input.value.trim();
  if (!text) return;

  addMessage("user", text);
  input.value = "";

  // Simulate bot response
  setTimeout(() => {
    const response = getBotResponse(text);
    addMessage("bot", response);
  }, 500);
}

function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.innerHTML = text; // Required to render <a> tags
  const chatBody = document.getElementById("chat-body");
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}
function getBotResponse(input) {
  input = input.toLowerCase();

  // Greetings & Small Talk
  if (["hi", "hello", "hey", "good morning", "good evening"].some(word => input.includes(word))) {
    return "Hi there! 👋 I'm the WorkGenius Assistant. Need help with plans, features, or something else?";
  }
  if (input.includes("how are you")) {
    return "I'm great, thanks for asking! 😊 How can I help you today?";
  }

  // About WorkGenius
  if (input.includes("what is workgenius") || input.includes("about workgenius") || input.includes("who are you")) {
    return "WorkGenius is an intelligent time tracking and productivity management platform built for hybrid teams. Learn more on our <a href='features.html' target='_blank'>Features</a> page.";
  }

  // Why WorkGenius is better
  if (input.includes("why workgenius") || input.includes("better for managing employees")) {
    return "WorkGenius makes employee management effortless with real-time tracking, performance insights, and burnout alerts — all in one place.";
  }

  // Payment System
  if (input.includes("payment system") || input.includes("how do you take payment")) {
    return "We accept payments via major credit/debit cards and digital wallets. For enterprise clients, we also support invoice-based billing.";
  }

  // Payment Gateways
  if (input.includes("payment gateway") || input.includes("gateways") || input.includes("payment")) {
    return "We support Bank, Online payment like Bkash, and other major secure gateways for fast and reliable payments.";
  }

  // How to Use WorkGenius
  if (input.includes("how to use workgenius") || input.includes("how can i use this")) {
    return "Simply sign up, invite your team, and start tracking productivity instantly. Our intuitive dashboard makes it easy to get started!";
  }

  // Services Provided
  if (input.includes("what kind of services") || input.includes("what services do you provide")) {
    return "We provide time tracking, productivity insights, burnout alerts, employee performance dashboards, and seamless team collaboration tools.";
  }

  // Challenges in Managing Productivity
  if (input.includes("biggest challenge") || input.includes("employee productivity challenge")) {
    return "The biggest challenge is visibility — knowing how time is spent. WorkGenius solves this by providing real-time insights and automatic performance tracking.";
  }

  // Trustworthiness
  if (input.includes("is workgenius trusted") || input.includes("can i trust workgenius")) {
    return "Absolutely. WorkGenius is used by leading teams worldwide and complies with GDPR and enterprise security standards.";
  }

  // Feedback Frequency
  if (input.includes("feedback") && input.includes("employees")) {
    return "WorkGenius offers weekly performance feedback summaries and allows custom feedback cycles based on your team settings.";
  }

  // Unique Features
  if (input.includes("unique feature") || input.includes("what makes workgenius different")) {
    return "Our AI-driven burnout detection and productivity radar are features you won’t find in most platforms. We focus on both performance and well-being.";
  }

  // Ease of Employee Management
  if (input.includes("easy to manage") || input.includes("manage employees")) {
    return "Yes, our centralized dashboard lets you assign tasks, monitor time, and track performance — all from one place.";
  }

  // HR Benefits
  if (input.includes("why hr") || input.includes("hr should use")) {
    return "HR teams love WorkGenius for its automatic performance tracking, behavior trends, and actionable analytics for better decision-making.";
  }

  // User-Friendliness
  if (input.includes("user friendly") || input.includes("easy to use")) {
    return "Absolutely! Our UI is clean, modern, and intuitive — no training needed to get started.";
  }

  // Legal & Ethical Tracking
  if (input.includes("is it legal") || input.includes("ethical to track")) {
    return "Yes, it's legal and ethical as long as employees are informed. We support transparent policies and opt-in systems.";
  }

  // Employee Comfort
  if (input.includes("employee uncomfortable") || input.includes("will employees feel uncomfortable")) {
    return "We focus on transparency and privacy. Employees see what’s being tracked and how it's used to help them grow, not punish.";
  }

  // Bangla Language Support
  if (input.includes("bangla") || input.includes("bengali language")) {
    return "Currently, our primary language is English. Bangla support is in development and coming soon!";
  }

  // Manager Reports
  if (input.includes("manager report") || input.includes("reports for manager")) {
    return "Managers get weekly reports with team productivity, task completion rates, and burnout risk scores. Custom reports are also available.";
  }

  // Reliability
  if (input.includes("will it work") || input.includes("work properly") || input.includes("does it work")) {
    return "WorkGenius is built for performance and reliability. It's trusted by remote, hybrid, and in-office teams worldwide.";
  }

  // Contact / Support
  if (input.includes("contact") || input.includes("email") || input.includes("get in touch") || input.includes("support team")) {
    return "You can reach our support team via the <a href='help.html' target='_blank'>Help Center</a> or email us directly at <a href='mailto:support@workgenius.com'>support@workgenius.com</a>.";
  }

  // Pricing & Billing
  if (["price", "pricing", "cost", "bill", "subscription"].some(word => input.includes(word))) {
    return "You can view all plan options on our <a href='price.html' target='_blank'>Pricing</a> page. We offer flexible packages for teams of all sizes.";
  }

  // Refunds or Cancellation
  if (input.includes("refund") || input.includes("cancel") || input.includes("unsubscribe")) {
    return "We’re sorry to see you go! You can manage or cancel your subscription in your account settings. For refunds, please contact our support team.";
  }

  // Free Trial
  if (input.includes("free trial") || input.includes("trial") || input.includes("demo")) {
    return "Yes! We offer a 14-day free trial — no credit card needed. Get started on the <a href='account.html' target='_blank'>Free Trial</a> page.";
  }

  // Sign Up / Register
  if (input.includes("sign up") || input.includes("signup") || input.includes("register") || input.includes("create account")) {
    return "You can sign up for a new account on our <a href='account.html' target='_blank'>Create Account</a> page — it's quick and easy!";
  }

  // Sign In / Log In
  if (input.includes("sign in") || input.includes("login") || input.includes("log in") || input.includes("access my account")) {
    return "To access your account, please go to the <a href='login.html' target='_blank'>Sign In</a> page.";
  }

  // Getting Started
  if (input.includes("get started") || input.includes("start using") || input.includes("begin")) {
    return "To get started, just sign up through the <a href='account.html' target='_blank'>Create Account</a> page. You'll be up and running in minutes!";
  }

  // Features
  if (["feature", "tool", "capabilities", "functions"].some(word => input.includes(word))) {
    return "WorkGenius includes time tracking, performance analytics, burnout detection, and more. Explore them on our <a href='features.html' target='_blank'>Features</a> page.";
  }

  // Time Tracking
  if (input.includes("track time") || input.includes("time tracking") || input.includes("timer")) {
    return "We offer detailed time tracking with task categorization and visual timelines to boost productivity.";
  }

  // Productivity / Performance
  if (input.includes("productivity") || input.includes("performance")) {
    return "We give teams real-time insights into productivity, allowing better planning and efficiency across projects.";
  }

  // Burnout Monitoring
  if (input.includes("burnout")) {
    return "We track work patterns and stress indicators to help identify and prevent burnout before it happens.";
  }

  // AI & Automation
  if (input.includes("ai") || input.includes("artificial intelligence") || input.includes("automation")) {
    return "We use AI to analyze workflows, generate summaries, and offer smart suggestions for improved efficiency.";
  }

  // Reports & Analytics
  if (["report", "analytics", "data", "dashboard"].some(word => input.includes(word))) {
    return "Yes, you'll get customizable analytics dashboards, weekly reports, and performance trends.";
  }

  // Platform Compatibility
  if (["windows", "mac", "ios", "android", "mobile", "platform"].some(word => input.includes(word))) {
    return "WorkGenius is compatible with Windows, Mac, and mobile browsers. Our iOS/Android apps are coming soon!";
  }

  // Security & Privacy
  if (["secure", "security", "safe", "privacy", "gdpr"].some(word => input.includes(word))) {
    return "We take privacy seriously. Your data is protected with enterprise-level encryption and full GDPR compliance.";
  }

  // Integrations
  if (["integrate", "integration", "slack", "asana", "jira", "trello"].some(word => input.includes(word))) {
    return "WorkGenius integrates with tools like Slack, Asana, Trello, and Jira. Ask us about your preferred platform!";
  }

  // Team Collaboration
  if (input.includes("team") || input.includes("collaborate") || input.includes("members")) {
    return "You can add team members, assign roles, track their work, and collaborate efficiently with built-in chat and task tools.";
  }

  // Testimonials or Success Stories
  if (["testimonial", "review", "success story", "client feedback"].some(word => input.includes(word))) {
    return "Clients love WorkGenius! Example: “Since switching to WorkGenius, we've increased project velocity by 30%.” – TechNova Inc.";
  }

  // Scheduling a Demo
  if (input.includes("schedule") && input.includes("demo")) {
    return "We’d love to show you around! Reach out via the <a href='help.html' target='_blank'>Help Center</a> to schedule a live demo.";
  }

  // Account Problems
  if (["login issue", "account problem", "forgot password", "password reset"].some(word => input.includes(word))) {
    return "Please visit the <a href='help.html' target='_blank'>Help Center</a> or use “Forgot Password” on the login page to reset your credentials.";
  }

  // Careers / Jobs
  if (["career", "job", "hiring", "apply"].some(word => input.includes(word))) {
    return "We’re hiring! Visit our <a href='careers.html' target='_blank'>Careers</a> page to explore opportunities.";
  }

  // FAQ
  if (["faq", "frequently asked questions", "questions"].some(word => input.includes(word))) {
    return "Check our <a href='help.html' target='_blank'>FAQ</a> section — we’ve answered the most common questions there!";
  }

  // Business Partnership
  if (["partner", "reseller", "business inquiry"].some(word => input.includes(word))) {
    return "We're open to partnerships! Please reach out via <a href='mailto:partners@workgenius.com'>partners@workgenius.com</a>.";
  }

  // Fallback
  return "I'm here to help! You can ask me about <a href='features.html' target='_blank'>Features</a>, <a href='price.html' target='_blank'>Pricing</a>, <a href='account.html' target='_blank'>Free Trial</a>, or visit our <a href='help.html' target='_blank'>Help Center</a>.";
}
