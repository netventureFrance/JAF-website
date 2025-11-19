/**
 * JAF Website - Widget WhatsApp
 * Bouton flottant et fonctionnalités WhatsApp
 */

(function() {
    'use strict';

    function initWhatsAppWidget() {
        // Vérifier la configuration
        if (!whatsappConfig) {
            console.warn('WhatsApp config non chargée');
            return;
        }

        // Créer le bouton flottant si activé
        if (whatsappConfig.features.floatingButton && whatsappConfig.adminNumber) {
            createFloatingButton();
        }

        // Initialiser les boutons de partage
        if (whatsappConfig.features.shareButtons) {
            initShareButtons();
        }

        // Initialiser le bouton rejoindre le groupe
        if (whatsappConfig.features.groupSection && whatsappConfig.groupLink) {
            initGroupButton();
        }
    }

    function createFloatingButton() {
        const button = document.createElement('a');
        button.href = getWhatsAppChatURL(whatsappConfig.adminNumber);
        button.target = '_blank';
        button.rel = 'noopener noreferrer';
        button.className = 'whatsapp-float';
        button.setAttribute('aria-label', 'Contacter sur WhatsApp');
        button.innerHTML = `
            <svg viewBox="0 0 32 32" width="32" height="32">
                <path fill="currentColor" d="M16 0C7.163 0 0 7.163 0 16c0 2.825.737 5.575 2.137 7.963L.07 30.337c-.195.586.338 1.118.924.924l6.375-2.067A15.939 15.939 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333c-2.475 0-4.894-.688-7.013-1.987l-.488-.3-5.063 1.638 1.638-5.063-.3-.488A13.277 13.277 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.338-9.838c-.4-.2-2.363-1.163-2.725-1.3-.363-.137-.625-.2-.888.2-.263.4-1.012 1.3-1.237 1.562-.225.263-.45.3-.85.1-.4-.2-1.688-.625-3.213-2-.187-1.075-.763-1.912-1.188-2.187-.425-.275-.637-.3-1.037-.3-.4 0-.838.1-1.275.5-.438.4-1.663 1.625-1.663 3.95s1.7 4.575 1.938 4.888c.238.312 3.338 5.1 8.088 7.15 1.137.488 2.025.775 2.713.988.638.213 1.213.175 1.675.1.513-.075 2.363-1.088 2.688-2.138.325-1.05.325-1.95.225-2.138-.1-.187-.363-.287-.763-.487z"/>
            </svg>
            <span class="whatsapp-tooltip">${whatsappConfig.floatingButton.message}</span>
        `;

        document.body.appendChild(button);
    }

    function initShareButtons() {
        const shareButtons = document.querySelectorAll('[data-whatsapp-share]');
        shareButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const text = this.getAttribute('data-share-text') || 'Découvrez le Jardin aux Fontaines';
                const url = this.getAttribute('data-share-url') || window.location.href;
                const whatsappUrl = getWhatsAppShareURL(text, url);
                window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            });
        });
    }

    function initGroupButton() {
        const groupButtons = document.querySelectorAll('[data-whatsapp-group]');
        groupButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                window.open(whatsappConfig.groupLink, '_blank', 'noopener,noreferrer');
            });
        });
    }

    // Initialiser au chargement de la page
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWhatsAppWidget);
    } else {
        initWhatsAppWidget();
    }
})();
