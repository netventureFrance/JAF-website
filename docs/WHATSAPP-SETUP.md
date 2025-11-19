# 📱 Configuration WhatsApp - JAF Website

## Vue d'ensemble

Le site JAF dispose d'une intégration WhatsApp complète pour créer et gérer une communauté de résidents.

---

## 🚀 Fonctionnalités Disponibles

✅ **Bouton flottant** - Contact direct avec l'administration
✅ **Groupe communautaire** - Rejoindre le groupe WhatsApp JAF
✅ **Boutons de partage** - Partager des infos sur WhatsApp
✅ **QR Code** - Scanner pour rejoindre le groupe

---

## ⚙️ Configuration

### Étape 1: Créer un compte WhatsApp Business

1. Téléchargez **WhatsApp Business** depuis l'App Store ou Google Play
2. Créez un compte avec un numéro dédié à l'administration JAF
3. Complétez le profil avec:
   - Nom: "Administration JAF" ou "Le Jardin aux Fontaines"
   - Description: "Gestion et support pour les résidents du JAF"
   - Adresse: Adresse du Jardin aux Fontaines
   - Horaires: Heures de disponibilité

### Étape 2: Créer le groupe WhatsApp

1. Dans WhatsApp, créez un nouveau groupe
2. Nom du groupe: "Communauté JAF - Le Jardin aux Fontaines"
3. Description du groupe:
   ```
   Groupe officiel des résidents du Jardin aux Fontaines

   📢 Annonces importantes
   🤝 Entraide entre résidents
   📅 Événements communautaires
   💬 Discussions et échanges

   Règles:
   - Respect mutuel
   - Pas de spam
   - Informations pertinentes uniquement
   ```
4. Ajoutez une photo de profil (logo JAF)
5. Créez un lien d'invitation:
   - Ouvrez le groupe
   - Menu (3 points) > "Inviter via un lien"
   - Copiez le lien (format: `https://chat.whatsapp.com/XXXXXXXXXXXXX`)

### Étape 3: Obtenir le QR Code du groupe

**Option A: Depuis WhatsApp**
1. Dans le groupe > Menu > "Inviter via un lien"
2. Appuyez sur "Code QR"
3. Prenez une capture d'écran
4. Sauvegardez comme `whatsapp-qr.png`

**Option B: Générer en ligne**
1. Allez sur https://qr-code-generator.com
2. Type: "URL"
3. Collez le lien du groupe
4. Téléchargez le QR code
5. Sauvegardez comme `whatsapp-qr.png`

### Étape 4: Configurer le site web

Modifiez le fichier `whatsapp-config.js` :

```javascript
const whatsappConfig = {
    // Votre numéro WhatsApp Business (sans + ni espaces)
    adminNumber: "33612345678", // Exemple: +33 6 12 34 56 78

    // Lien de votre groupe WhatsApp
    groupLink: "https://chat.whatsapp.com/XXXXXXXXXXXXX",

    // ... le reste reste identique
};
```

### Étape 5: Ajouter le QR Code

1. Placez `whatsapp-qr.png` dans le dossier racine du site
2. Le QR code s'affichera automatiquement sur la page

---

## 📋 Utilisation sur le Site

### Bouton Flottant

Le bouton vert WhatsApp apparaît automatiquement en bas à droite de **toutes les pages**.

**Fonctionnement:**
- Clic → Ouvre WhatsApp avec message pré-rempli
- Mobile → Ouvre l'app WhatsApp
- Desktop → Ouvre WhatsApp Web

### Section Groupe (à ajouter)

Ajoutez cette section sur n'importe quelle page:

```html
<section class="whatsapp-section">
    <h2>
        <i class="fab fa-whatsapp"></i>
        Rejoignez la Communauté JAF
    </h2>
    <p>
        Échangez avec vos voisins, restez informé des événements
        et participez à la vie de votre résidence.
    </p>

    <!-- Bouton rejoindre -->
    <a href="#" class="whatsapp-btn" data-whatsapp-group>
        <i class="fab fa-whatsapp"></i>
        Rejoindre le Groupe WhatsApp
    </a>

    <!-- QR Code (optionnel) -->
    <div class="whatsapp-qr">
        <img src="whatsapp-qr.png" alt="QR Code Groupe WhatsApp JAF">
        <p style="margin-top: 1rem; color: var(--gray-600);">
            Scannez pour rejoindre
        </p>
    </div>
</section>

<!-- Charger les scripts -->
<script src="whatsapp-config.js"></script>
<script src="whatsapp-widget.js"></script>
```

### Boutons de Partage

Sur n'importe quelle page, ajoutez:

```html
<button
    class="share-button"
    data-whatsapp-share
    data-share-text="Découvrez le Jardin aux Fontaines"
    data-share-url="https://jaf-website.netlify.app">
    <i class="fab fa-whatsapp"></i>
    Partager sur WhatsApp
</button>
```

---

## 🎨 Personnalisation

### Changer la position du bouton flottant

Dans `whatsapp-config.js`:
```javascript
floatingButton: {
    position: "bottom-left", // ou "bottom-right"
    // ...
}
```

### Désactiver certaines fonctionnalités

```javascript
features: {
    floatingButton: false,  // Désactiver le bouton flottant
    groupSection: true,
    shareButtons: true,
    qrCode: false           // Désactiver le QR code
}
```

### Personnaliser le message par défaut

```javascript
defaultMessage: "Bonjour, je suis résident au JAF et j'ai une question...",
```

---

## 📱 Gestion du Groupe

### Bonnes Pratiques

**✅ À FAIRE:**
- Épingler les messages importants
- Poster les annonces officielles
- Modérer les discussions
- Supprimer le spam
- Accueillir les nouveaux membres

**❌ À ÉVITER:**
- Messages trop fréquents
- Discussions politiques sensibles
- Informations personnelles sensibles
- Promotions commerciales non autorisées

### Admins Recommandés

- 1-2 membres du conseil syndical
- 1 représentant par bâtiment
- Gardien(ne) de la résidence (optionnel)

### Règles du Groupe (à épingler)

```
📋 Règles du Groupe JAF

1. ✅ Respect et courtoisie envers tous
2. 🏠 Discussions liées au JAF uniquement
3. 🚫 Pas de spam ni de publicité
4. 📸 Respecter la vie privée (pas de photos sans permission)
5. ⏰ Éviter les messages tardifs (après 22h)
6. 💬 Utiliser des messages clairs et concis
7. 🆘 Pour urgences: contacter directement l'administration

Merci de contribuer à une communauté agréable! 🌟
```

---

## 🔒 Sécurité et Confidentialité

### Protection du Numéro

- Utilisez un numéro dédié (pas personnel)
- Configurez les paramètres de confidentialité WhatsApp:
  - Photo de profil: Personne
  - Dernière connexion: Personne
  - Info: Mes contacts

### Modération

- Révisez régulièrement les membres
- Retirez les numéros inactifs
- Surveillez les activités suspectes
- Sauvegardez les discussions importantes

---

## 📊 Mesurer l'Engagement

### Indicateurs à Suivre

- Nombre de membres actifs
- Taux de participation aux sondages
- Fréquence des messages
- Retours sur les annonces

### Sondages Utiles

- "Quel événement communautaire souhaitez-vous?"
- "Quelle heure pour l'AG vous convient?"
- "Êtes-vous satisfait de la gestion?"

---

## 🆘 Support

### Problèmes Courants

**"Le bouton WhatsApp ne s'affiche pas"**
→ Vérifiez que `whatsapp-config.js` et `whatsapp-widget.js` sont bien chargés

**"Le lien du groupe ne fonctionne pas"**
→ Vérifiez que le lien dans `whatsapp-config.js` est correct

**"Le QR code ne s'affiche pas"**
→ Vérifiez que le fichier `whatsapp-qr.png` existe dans le dossier racine

---

## 📞 Contact

Pour toute question sur l'intégration WhatsApp:
- Documentation: `/docs/WHATSAPP-SETUP.md`
- Support technique: Via le repository GitHub

---

**Dernière mise à jour:** 2025-01-19
