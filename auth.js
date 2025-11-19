/**
 * JAF Website - Authentication Module
 * Handles password modal for protected pages
 */

(function() {
    'use strict';

    // Simple hash function for password verification
    function hashCode(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash;
    }

    const EXPECTED_HASH = -1732802662; // Hash of 'jaf2025'

    function initPasswordModal() {
        const modal = document.getElementById('password-modal');
        const contactLink = document.getElementById('contact-link');
        const closeBtn = document.querySelector('.close-modal');
        const passwordInput = document.getElementById('password');
        const submitBtn = document.getElementById('submit-password');
        const errorMsg = document.getElementById('password-error');

        if (!modal || !contactLink) return;

        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'flex';
            if (passwordInput) passwordInput.focus();
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        if (submitBtn) {
            submitBtn.addEventListener('click', function(e) {
                e.preventDefault();
                checkPassword();
            });
        }

        if (passwordInput) {
            passwordInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    checkPassword();
                }
            });
        }

        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close modal on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                closeModal();
            }
        });

        function checkPassword() {
            if (!passwordInput) return;

            const password = passwordInput.value;
            if (hashCode(password) === EXPECTED_HASH) {
                window.location.href = 'contact.html';
            } else {
                if (errorMsg) errorMsg.style.display = 'block';
                passwordInput.setAttribute('aria-invalid', 'true');
            }
        }

        function closeModal() {
            modal.style.display = 'none';
            if (errorMsg) errorMsg.style.display = 'none';
            if (passwordInput) {
                passwordInput.value = '';
                passwordInput.removeAttribute('aria-invalid');
            }
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPasswordModal);
    } else {
        initPasswordModal();
    }
})();
