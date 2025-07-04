/* ═══════════════ PERSONA 5 ROYAL - ENHANCED INTERACTIONS ═══════════════ */

// Performance optimization: Use passive listeners where possible
const supportsPassive = (() => {
    let supportsPassive = false;
    try {
        const opts = Object.defineProperty({}, 'passive', {
            get() {
                supportsPassive = true;
            }
        });
        window.addEventListener('testPassive', null, opts);
        window.removeEventListener('testPassive', null, opts);
    } catch (e) {}
    return supportsPassive;
})();

// Throttle function for performance
const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
};

// Debounce function for performance
const debounce = (func, wait, immediate) => {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// Enhanced Phantom Thieves Interaction System
class PhantomThievesSystem {
    constructor() {
        this.isInitialized = false;
        this.animationFrameId = null;
        this.particleSystem = null;
        this.audioContext = null;
        this.performanceMetrics = {
            fps: 60,
            frameTime: 0,
            animationQuality: 'high'
        };
        this.init();
    }

    init() {
        if (this.isInitialized) return;
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeSystem());
        } else {
            this.initializeSystem();
        }
    }

    initializeSystem() {
        this.isInitialized = true;
        this.detectPerformanceCapabilities();
        this.setupEventListeners();
        this.initializeParticleSystem();
        this.setupAnimationOptimizations();
        this.initializeAudioSystem();
        this.startPerformanceMonitoring();
        
        console.log('🎭 Phantom Thieves System initialized - Welcome to the Metaverse!');
    }

    detectPerformanceCapabilities() {
        // Detect device capabilities for adaptive performance
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        
        this.capabilities = {
            webgl: !!gl,
            devicePixelRatio: window.devicePixelRatio || 1,
            hardwareConcurrency: navigator.hardwareConcurrency || 4,
            memory: navigator.deviceMemory || 4,
            touchDevice: 'ontouchstart' in window
        };

        // Adjust animation quality based on capabilities
        if (this.capabilities.memory < 4 || this.capabilities.hardwareConcurrency < 4) {
            this.performanceMetrics.animationQuality = 'medium';
            document.documentElement.style.setProperty('--timing-fast', '0.3s');
            document.documentElement.style.setProperty('--timing-medium', '0.8s');
        }
    }

    setupEventListeners() {
        // Enhanced All-Out Attack
        const allOutAttackBtn = document.querySelector('.all-out-attack-btn');
        if (allOutAttackBtn) {
            allOutAttackBtn.addEventListener('click', (e) => this.triggerAllOutAttackRoyal(e), { passive: false });
        }

        // Velvet Room Portal
        const velvetPortal = document.querySelector('.velvet-room-portal');
        if (velvetPortal) {
            velvetPortal.addEventListener('click', () => this.enterVelvetRoomRoyal());
            velvetPortal.addEventListener('mouseenter', () => this.portalHoverEffect(true));
            velvetPortal.addEventListener('mouseleave', () => this.portalHoverEffect(false));
        }

        // Enhanced badge interactions
        document.querySelectorAll('.phantom-badge').forEach(badge => {
            badge.addEventListener('mouseenter', (e) => this.badgeHoverEffect(e.target, true));
            badge.addEventListener('mouseleave', (e) => this.badgeHoverEffect(e.target, false));
            badge.addEventListener('click', (e) => this.badgeClickEffect(e.target));
        });

        // Scroll-based animations
        window.addEventListener('scroll', throttle(() => this.handleScrollAnimations(), 16), 
            supportsPassive ? { passive: true } : false);

        // Resize optimizations
        window.addEventListener('resize', debounce(() => this.handleResize(), 250));

        // Keyboard shortcuts for accessibility
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
    }

    initializeParticleSystem() {
        this.particleSystem = new RoyalParticleSystem();
        
        // Create particle container if it doesn't exist
        let particleContainer = document.querySelector('.red-particles-royal');
        if (!particleContainer) {
            particleContainer = document.createElement('div');
            particleContainer.className = 'red-particles-royal';
            document.body.appendChild(particleContainer);
        }
        
        this.particleSystem.initialize(particleContainer);
    }

    setupAnimationOptimizations() {
        // Preload critical animations
        const criticalElements = document.querySelectorAll('.phantom-header, .calling-card, .phantom-badge');
        criticalElements.forEach(element => {
            element.style.animationFillMode = 'both';
            element.style.backfaceVisibility = 'hidden';
            element.style.transform = 'translateZ(0)';
        });

        // Optimize for 60fps
        this.startAnimationLoop();
    }

    startAnimationLoop() {
        const animate = (timestamp) => {
            const frameTime = timestamp - this.performanceMetrics.frameTime;
            this.performanceMetrics.frameTime = timestamp;
            
            // Update particles
            if (this.particleSystem) {
                this.particleSystem.update(frameTime);
            }
            
            // Continue loop
            this.animationFrameId = requestAnimationFrame(animate);
        };
        
        this.animationFrameId = requestAnimationFrame(animate);
    }

    triggerAllOutAttackRoyal(event) {
        event.preventDefault();
        
        // Enhanced visual effect
        const body = document.body;
        const button = event.target;
        
        // Create screen flash effect
        const flash = document.createElement('div');
        flash.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: radial-gradient(circle, rgba(255,0,0,0.8) 0%, rgba(255,0,0,0.3) 50%, transparent 100%);
            pointer-events: none;
            z-index: 9999;
            animation: flash-effect 0.5s ease-out;
        `;
        
        // Add flash keyframes
        if (!document.querySelector('#flash-styles')) {
            const style = document.createElement('style');
            style.id = 'flash-styles';
            style.textContent = `
                @keyframes flash-effect {
                    0% { opacity: 0; transform: scale(0.5); }
                    50% { opacity: 1; transform: scale(1.2); }
                    100% { opacity: 0; transform: scale(2); }
                }
                @keyframes screen-shake {
                    0%, 100% { transform: translateX(0); }
                    10% { transform: translateX(-10px); }
                    20% { transform: translateX(10px); }
                    30% { transform: translateX(-8px); }
                    40% { transform: translateX(8px); }
                    50% { transform: translateX(-6px); }
                    60% { transform: translateX(6px); }
                    70% { transform: translateX(-4px); }
                    80% { transform: translateX(4px); }
                    90% { transform: translateX(-2px); }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(flash);
        
        // Screen shake effect
        body.style.animation = 'screen-shake 0.6s ease-in-out';
        
        // Enhanced particle burst
        this.createParticleBurst(button.getBoundingClientRect());
        
        // Play audio effect if available
        this.playPhantomSound('attack');
        
        // Clean up and show message
        setTimeout(() => {
            body.style.animation = '';
            flash.remove();
            this.showPhantomMessage('💥 ALL-OUT ATTACK! Your coding skills have been awakened! 💥', 'success');
        }, 1000);
    }

    createParticleBurst(rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                this.createBurstParticle(centerX, centerY);
            }, i * 20);
        }
    }

    createBurstParticle(x, y) {
        const particle = document.createElement('div');
        const angle = Math.random() * Math.PI * 2;
        const velocity = 100 + Math.random() * 200;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        particle.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: radial-gradient(circle, #FF1744, #FF0000);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            left: ${x}px;
            top: ${y}px;
        `;
        
        document.body.appendChild(particle);
        
        // Animate particle
        const duration = 1000 + Math.random() * 500;
        particle.animate([
            { 
                transform: 'translate(0, 0) scale(1)', 
                opacity: 1 
            },
            { 
                transform: `translate(${vx}px, ${vy}px) scale(0.3)`, 
                opacity: 0 
            }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => {
            particle.remove();
        };
    }

    enterVelvetRoomRoyal() {
        const portal = document.querySelector('.velvet-room-portal');
        
        // Enhanced portal animation
        portal.style.animation = 'phantom-pulse-royal 0.5s ease-in-out';
        
        // Create swirl effect
        this.createSwirlEffect(portal);
        
        // Play velvet room audio
        this.playPhantomSound('velvet');
        
        setTimeout(() => {
            portal.style.animation = 'phantom-pulse-royal 3s infinite';
            this.showPhantomMessage('🌀 Welcome to the Velvet Room... Your destiny as a developer awaits! 🌀', 'mystical');
        }, 500);
    }

    createSwirlEffect(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 12; i++) {
            const swirlParticle = document.createElement('div');
            const angle = (i / 12) * Math.PI * 2;
            const radius = 40;
            
            swirlParticle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: linear-gradient(45deg, #000080, #4A0E4E);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9997;
                left: ${centerX + Math.cos(angle) * radius}px;
                top: ${centerY + Math.sin(angle) * radius}px;
            `;
            
            document.body.appendChild(swirlParticle);
            
            // Spiral animation
            swirlParticle.animate([
                { 
                    transform: `translate(0, 0) rotate(0deg)`,
                    opacity: 1 
                },
                { 
                    transform: `translate(${Math.cos(angle) * -radius}px, ${Math.sin(angle) * -radius}px) rotate(720deg)`,
                    opacity: 0 
                }
            ], {
                duration: 1500,
                easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
            }).onfinish = () => {
                swirlParticle.remove();
            };
        }
    }

    badgeHoverEffect(badge, isEntering) {
        if (isEntering) {
            badge.style.transform = 'scale(1.08) translateZ(0)';
            badge.style.boxShadow = '0 12px 30px rgba(255, 0, 0, 0.6), 0 0 20px rgba(255, 0, 0, 0.4)';
            
            // Add shimmer effect
            const shimmer = document.createElement('div');
            shimmer.className = 'badge-shimmer';
            shimmer.style.cssText = `
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
                animation: shimmer-pass 0.6s ease-out;
            `;
            
            badge.style.position = 'relative';
            badge.appendChild(shimmer);
            
            setTimeout(() => shimmer.remove(), 600);
        } else {
            badge.style.transform = 'scale(1) translateZ(0)';
            badge.style.boxShadow = '0 6px 18px rgba(255, 0, 0, 0.4)';
        }
    }

    badgeClickEffect(badge) {
        // Ripple effect
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-effect 0.6s linear;
            left: 50%;
            top: 50%;
            width: 20px;
            height: 20px;
            margin-left: -10px;
            margin-top: -10px;
        `;
        
        badge.appendChild(ripple);
        
        // Play click sound
        this.playPhantomSound('select');
        
        setTimeout(() => ripple.remove(), 600);
    }

    portalHoverEffect(isEntering) {
        const portal = document.querySelector('.velvet-room-portal');
        if (isEntering) {
            portal.style.animation = 'phantom-pulse-royal 1s infinite';
            portal.style.filter = 'brightness(1.3) hue-rotate(15deg)';
        } else {
            portal.style.animation = 'phantom-pulse-royal 3s infinite';
            portal.style.filter = 'brightness(1) hue-rotate(0deg)';
        }
    }

    handleScrollAnimations() {
        const elements = document.querySelectorAll('.confidant-card, .treasure-item');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                if (!element.classList.contains('animated')) {
                    element.classList.add('animated');
                    element.style.animation = 'phantom-entrance-royal 1s ease-out both';
                }
            }
        });
    }

    handleResize() {
        // Recalculate particle system if needed
        if (this.particleSystem) {
            this.particleSystem.handleResize();
        }
        
        // Adjust performance based on viewport size
        const viewport = window.innerWidth * window.innerHeight;
        if (viewport < 500000) { // Small screens
            this.performanceMetrics.animationQuality = 'low';
        }
    }

    handleKeyboardShortcuts(event) {
        // Accessibility and easter eggs
        const key = event.key.toLowerCase();
        
        if (event.ctrlKey && event.shiftKey) {
            switch (key) {
                case 'p':
                    event.preventDefault();
                    this.triggerPhantomMode();
                    break;
                case 'v':
                    event.preventDefault();
                    this.enterVelvetRoomRoyal();
                    break;
            }
        }
    }

    triggerPhantomMode() {
        document.body.classList.add('phantom-mode');
        this.showPhantomMessage('🎭 Phantom Mode Activated! ', 'special');
        
        // Enhanced visual effects for phantom mode
        setTimeout(() => {
            document.body.classList.remove('phantom-mode');
        }, 5000);
    }

    initializeAudioSystem() {
        // Create audio context for sound effects (if user allows)
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Audio context not available');
        }
    }

    playPhantomSound(type) {
        if (!this.audioContext) return;
        
        // Create simple procedural sounds
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        switch (type) {
            case 'attack':
                oscillator.frequency.setValueAtTime(880, this.audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(220, this.audioContext.currentTime + 0.3);
                gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
                break;
            case 'velvet':
                oscillator.frequency.setValueAtTime(440, this.audioContext.currentTime);
                oscillator.frequency.linearRampToValueAtTime(660, this.audioContext.currentTime + 0.5);
                gainNode.gain.setValueAtTime(0.05, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
                break;
            case 'select':
                oscillator.frequency.setValueAtTime(1000, this.audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.03, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
                break;
        }
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.5);
    }

    showPhantomMessage(message, type = 'default') {
        const messageEl = document.createElement('div');
        messageEl.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.8);
            background: linear-gradient(45deg, #000000, #FF0000, #000000);
            color: #FFFFFF;
            padding: 20px 30px;
            border-radius: 15px;
            border: 3px solid #FF0000;
            font-family: 'Bebas Neue', cursive;
            font-size: 1.2rem;
            text-align: center;
            z-index: 10000;
            box-shadow: 0 10px 30px rgba(255, 0, 0, 0.5);
            animation: message-appear 0.5s ease-out both;
        `;
        
        messageEl.textContent = message;
        document.body.appendChild(messageEl);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            messageEl.style.animation = 'message-disappear 0.3s ease-in both';
            setTimeout(() => messageEl.remove(), 300);
        }, 3000);
    }

    startPerformanceMonitoring() {
        let frameCount = 0;
        let lastTime = performance.now();
        
        const monitor = () => {
            frameCount++;
            const currentTime = performance.now();
            
            if (currentTime >= lastTime + 1000) {
                this.performanceMetrics.fps = frameCount;
                frameCount = 0;
                lastTime = currentTime;
                
                // Adjust quality based on performance
                if (this.performanceMetrics.fps < 30) {
                    this.adjustPerformance('low');
                } else if (this.performanceMetrics.fps > 50) {
                    this.adjustPerformance('high');
                }
            }
            
            requestAnimationFrame(monitor);
        };
        
        requestAnimationFrame(monitor);
    }

    adjustPerformance(level) {
        const root = document.documentElement;
        
        switch (level) {
            case 'low':
                root.style.setProperty('--timing-fast', '0.1s');
                root.style.setProperty('--timing-medium', '0.3s');
                // Reduce particle count
                if (this.particleSystem) {
                    this.particleSystem.setQuality('low');
                }
                break;
            case 'high':
                root.style.setProperty('--timing-fast', '0.2s');
                root.style.setProperty('--timing-medium', '0.6s');
                if (this.particleSystem) {
                    this.particleSystem.setQuality('high');
                }
                break;
        }
    }

    destroy() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        
        if (this.audioContext) {
            this.audioContext.close();
        }
        
        if (this.particleSystem) {
            this.particleSystem.destroy();
        }
        
        console.log('🎭 Phantom Thieves System destroyed');
    }
}

// Enhanced Particle System
class RoyalParticleSystem {
    constructor() {
        this.particles = [];
        this.container = null;
        this.quality = 'high';
        this.maxParticles = 20;
    }

    initialize(container) {
        this.container = container;
        this.createInitialParticles();
    }

    createInitialParticles() {
        const particleCount = this.quality === 'high' ? this.maxParticles : Math.floor(this.maxParticles / 2);
        
        for (let i = 0; i < particleCount; i++) {
            this.createParticle(i);
        }
    }

    createParticle(index) {
        const particle = document.createElement('div');
        particle.className = 'particle-royal';
        particle.style.left = `${5 + (index * 90 / this.maxParticles)}%`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${8 + Math.random() * 4}s`;
        
        this.container.appendChild(particle);
        this.particles.push(particle);
    }

    update(deltaTime) {
        // Update particle positions or effects if needed
        // This is called every frame from the main animation loop
    }

    setQuality(quality) {
        this.quality = quality;
        
        // Adjust particle count based on quality
        const targetCount = quality === 'high' ? this.maxParticles : Math.floor(this.maxParticles / 2);
        
        while (this.particles.length > targetCount) {
            const particle = this.particles.pop();
            particle.remove();
        }
        
        while (this.particles.length < targetCount) {
            this.createParticle(this.particles.length);
        }
    }

    handleResize() {
        // Recalculate particle positions if needed
    }

    destroy() {
        this.particles.forEach(particle => particle.remove());
        this.particles = [];
    }
}

// Initialize the system when DOM is ready
const phantomSystem = new PhantomThievesSystem();

// Add additional styles for new animations
if (!document.querySelector('#phantom-enhancements')) {
    const style = document.createElement('style');
    style.id = 'phantom-enhancements';
    style.textContent = `
        @keyframes shimmer-pass {
            0% { left: -100%; }
            100% { left: 100%; }
        }
        
        @keyframes ripple-effect {
            to { transform: scale(4); opacity: 0; }
        }
        
        @keyframes message-appear {
            0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
            100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
        
        @keyframes message-disappear {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
        }
        
        .phantom-mode {
            filter: hue-rotate(45deg) brightness(1.2) contrast(1.1);
            animation: metaverse-glitch-royal 2s infinite;
        }
        
        .animated {
            animation-fill-mode: both;
        }
        
        .badge-shimmer {
            border-radius: inherit;
        }
    `;
    document.head.appendChild(style);
}

// Export for potential external use
window.PhantomThievesSystem = PhantomThievesSystem;