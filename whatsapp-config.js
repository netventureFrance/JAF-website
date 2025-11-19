/**
 * JAF Website - Configuration WhatsApp
 * Modifiez ces valeurs selon vos besoins
 */

const whatsappConfig = {
    // Numéro WhatsApp de l'administration (format international sans +)
    // Exemple: "33612345678" pour +33 6 12 34 56 78
    adminNumber: "", // À REMPLIR: Votre numéro WhatsApp Business

    // Message par défaut pour contacter l'administration
    defaultMessage: "Bonjour, je souhaite obtenir des informations sur le Jardin aux Fontaines.",

    // Lien d'invitation au groupe WhatsApp JAF
    // Exemple: "https://chat.whatsapp.com/XXXXXXXXXXXXX"
    groupLink: "", // À REMPLIR: Lien de votre groupe WhatsApp

    // Nom du groupe WhatsApp
    groupName: "Communauté JAF - Le Jardin aux Fontaines",

    // Activer/désactiver les fonctionnalités
    features: {
        floatingButton: true,    // Bouton flottant en bas à droite
        groupSection: true,       // Section rejoindre le groupe
        shareButtons: true,       // Boutons de partage
        qrCode: true             // QR Code pour rejoindre
    },

    // Personnalisation du bouton flottant
    floatingButton: {
        position: "bottom-right", // ou "bottom-left"
        message: "Besoin d'aide ?",
        backgroundColor: "#25D366", // Vert WhatsApp
        iconColor: "#fff"
    }
};

// Générer l'URL WhatsApp pour chat direct
function getWhatsAppChatURL(number, message) {
    if (!number) return null;
    const encodedMessage = encodeURIComponent(message || whatsappConfig.defaultMessage);
    return `https://wa.me/${number}?text=${encodedMessage}`;
}

// Générer l'URL de partage WhatsApp
function getWhatsAppShareURL(text, url) {
    const shareText = encodeURIComponent(`${text}\n${url}`);
    return `https://wa.me/?text=${shareText}`;
}

// Vérifier si WhatsApp est configuré
function isWhatsAppConfigured() {
    return {
        hasAdminNumber: !!whatsappConfig.adminNumber,
        hasGroupLink: !!whatsappConfig.groupLink,
        isFullyConfigured: !!(whatsappConfig.adminNumber && whatsappConfig.groupLink)
    };
}
