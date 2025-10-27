export const projects = [
  {
    id: 1,
    title: "Analyse et Nettoyage de Données Bancaires - IA / Data",
    shortDescription:
      "Projet d'exploration, de nettoyage et d'analyse statistique d’un dataset bancaire fictif.",
    fullDescription:
      "Ce projet a été réalisé dans le cadre de mon autoapprentissage en Data Science et Intelligence Artificielle via des formations en ligne. Il consistait à importer un jeu de données contenant des relevés bancaires fictifs, puis à effectuer un nettoyage complet des données avant d’en analyser les variables par différentes approches statistiques. Le projet a couvert des notions clés telles que la représentation de distributions, les mesures de tendance centrale, de dispersion, d’asymétrie et de concentration, ainsi que des analyses bivariées (corrélations, régression linéaire, ANOVA, Chi-2). Ce travail a permis de me familiariser avec la manipulation de données réelles, leur structuration et l’interprétation statistique en vue d'une modélisation future.",
    context:
      "Projet réalisé en autoapprentissage dans le cadre de ma formation continue en Data Science et Machine Learning.",
    objectives: [
      "Apprendre à importer et structurer un jeu de données",
      "Nettoyer efficacement un dataset pour le rendre exploitable",
      "Explorer statistiquement les variables pour en extraire des insights",
      "Préparer les données à une utilisation en Machine Learning",
    ],
    features: [
      "Importation et inspection du dataset",
      "Nettoyage des données (valeurs manquantes, types, doublons)",
      "Analyse univariée (distribution, tendance centrale, dispersion, forme)",
      "Analyse bivariée (corrélation, régression, ANOVA, Chi-2)",
      "Visualisation des variables et résumés statistiques",
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
    ],
    image: "/images/6.png",
    githubLink:
      "https://github.com/GANABA/ai-learning-notebooks/tree/main/Collecte_Traitement/Traitement%20et%20nettoyage%20d'un%20jeu%20de%20donn%C3%A9es",
    liveLink: "#",
    featured: false,
  },
  {
    id: 2,
    title: "TINA HOTEL - Application de Réservation en Ligne",
    shortDescription:
      "Plateforme web complète de réservation de chambres d’hôtel avec gestion client et interface administrateur.",
    fullDescription:
      "TINA HOTEL est une application web professionnelle développée dans le cadre de mon stage en entreprise pour un hôtel local. Elle permet aux clients de consulter les chambres disponibles avec leurs caractéristiques, équipements et tarifs, puis d’effectuer une réservation en temps réel selon la disponibilité. Une fois connectés, les clients peuvent suivre l’ensemble de leurs réservations, télécharger leur reçu et laisser une note ou un avis. Côté administration, la plateforme offre un espace de gestion complet : configuration des chambres (images, caractéristiques, quantité), tableau de bord avec statistiques, gestion et validation des réservations, assignation des chambres, gestion des avis clients, configuration générale du site (coordonnées, mode maintenance), ainsi que gestion des utilisateurs. Le système garantit une expérience fluide et moderne tant pour les clients que pour le personnel de l’hôtel.",
    context:
      "Projet réalisé dans le cadre de mon stage professionnel à Light Innovation.",
    objectives: [
      "Digitaliser le processus de réservation de l'hôtel",
      "Permettre aux clients de réserver en toute autonomie et en temps réel",
      "Offrir aux administrateurs une interface centralisée pour la gestion des chambres et réservations",
    ],
    features: [
      "Consultation des chambres avec détails et équipements",
      "Authentification client et suivi des réservations",
      "Réservation avec vérification de disponibilité en temps réel",
      "Téléchargement de reçus et dépôt d’avis",
      "Dashboard administrateur avec statistiques",
      "Gestion des chambres (images, caractéristiques, quantité)",
      "Gestion des réservations (validation, annulation, assignation)",
      "Paramétrage global du site (coordonnées, iframe, mode maintenance)",
      "Gestion des utilisateurs et des avis clients",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
    image: "/images/5.png",
    githubLink: "https://github.com/GANABA/TINA-HOTEL/tree/main",
    liveLink: "#",
    featured: true,
  },
  {
    id: 3,
    title: "GPFE - Gestion des Projets de Fin d’Études",
    shortDescription:
      "Plateforme web permettant la gestion complète des binômes, des thèmes de PFE et de l’affectation des encadreurs.",
    fullDescription:
      "Le projet GPFE est une application web développée dans le cadre de ma soutenance de licence professionnelle ainsi que de mon stage académique. Elle permet d’automatiser et de digitaliser tout le processus de gestion des Projets de Fin d’Études au sein d’un établissement universitaire(spécifiquement selon le processus de gestion de l'IUT de Parakou). L’application prend en charge l’inscription des binômes, la proposition de sujets (avec validation), la gestion des encadreurs, ainsi que le suivi des affectations et échanges entre étudiants et enseignants.",
    context:
      "Réalisation dans le cadre de ma soutenance de licence professionnelle en Informatique de Gestion et de mon stage académique en ingénierie logicielle à Cabro Group.",
    objectives: [
      "Digitaliser le processus de gestion des PFE",
      "Faciliter la communication entre étudiants et encadreurs",
      "Automatiser l'affectation des encadreurs et le suivi des thèmes",
    ],
    features: [
      "Inscription et gestion des binômes",
      "Proposition et validation de thèmes",
      "Espace enseignant avec suivi des étudiants encadrés",
      "Tableau de bord administrateur (importation des étudiants admis, gestion des affectations)",
      "Système de commentaires sur les thèmes",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
    image: "/images/4.png",
    githubLink:
      "https://github.com/GANABA/GPFE---projet-de-fin-de-formation-licence",
    liveLink: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Prédiction des Ventes par Budget Publicitaire - Machine Learning",
    shortDescription:
      "Modèle de régression visant à prédire les ventes en fonction des investissements publicitaires.",
    fullDescription:
      "Projet de Data Science réalisé dans le cadre de mon autoapprentissage en Machine Learning. L’objectif était de prédire le volume de ventes à partir du budget publicitaire investi dans différents médias : télévision, radio et journaux. À partir d’un dataset classique composé de 200 échantillons, j’ai réalisé une analyse exploratoire des relations entre les variables, puis entraîné un modèle de régression linéaire afin d’évaluer l’impact de chaque canal publicitaire sur les ventes. Ce projet m’a permis de comprendre concrètement comment un modèle statistique peut être utilisé pour l’aide à la décision marketing.",
    context:
      "Projet réalisé en autoformation dans le cadre de ma montée en compétences en Data Science et IA.",
    objectives: [
      "Analyser la corrélation entre budget publicitaire et ventes",
      "Entraîner un modèle de régression pour prédire les ventes",
      "Évaluer la performance du modèle à l’aide de métriques appropriées",
    ],
    features: [
      "Exploration des données",
      "Analyse des corrélations entre variables",
      "Modélisation par régression linéaire multivariée",
      "Évaluation du modèle (RMSE, R², etc.)",
      "Visualisation des résultats et predictions",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    image: "/images/7.png",
    githubLink:
      "https://github.com/GANABA/ai-learning-notebooks/tree/main/Machine_Learning/prediction_ventes_f_budget_pub",
    liveLink: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Segmentation Client par Clustering K-Means",
    shortDescription:
      "Classification de clients d’un centre commercial selon leur revenu annuel et score de dépenses.",
    fullDescription:
      "Projet réalisé dans le cadre d’un TP académique sur l’apprentissage non supervisé. L’objectif était de segmenter des clients à partir de leurs données socio-économiques afin de révéler des profils marketing distincts. À partir du dataset public 'Mall Customers', j’ai appliqué l’algorithme K-Means pour regrouper automatiquement les clients selon leur revenu annuel et leur score de dépenses. Le choix du nombre optimal de clusters a été déterminé via la méthode du coude (Elbow Method). Une fois les segments générés, ils ont été analysés et visualisés afin d’identifier différents types de profils (clients premium, clients économes, gros dépensiers, etc.). Ce projet m’a permis de maîtriser les bases du clustering et de la segmentation client appliquée au marketing data-driven.",
    context:
      "Travail réalisé dans le cadre d’un TP académique en apprentissage non supervisé / Machine Learning.",
    objectives: [
      "Découvrir l’algorithme de clustering K-Means",
      "Segmenter un portefeuille client automatiquement",
      "Identifier des profils marketing distincts à partir des données",
    ],
    features: [
      "Exploration et préparation des données (Pandas)",
      "Visualisation des clients (AnnualIncome vs SpendingScore)",
      "Sélection du nombre de clusters via la méthode du coude",
      "Entraînement du modèle K-Means avec k optimal",
      "Analyse des segments et visualisation finale des clusters",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    image: "/images/9.png",
    githubLink:
      "https://github.com/GANABA/Technique-d-IA/tree/main/TP2ClusteringParK-Means",
    liveLink: "#",
    featured: false,
  },
  {
    id: 6,
    title:
      "Classification de Tumeurs avec Decision Tree, Random Forest et XGBoost",
    shortDescription:
      "Comparaison d’algorithmes de classification pour prédire si une tumeur est bénigne ou maligne.",
    fullDescription:
      "Projet réalisé dans le cadre d’un TP académique dédié aux algorithmes de classification supervisée. L’objectif était de comparer trois modèles phares du Machine Learning — Decision Tree, Random Forest et XGBoost — sur le dataset 'Breast Cancer Wisconsin'. Après exploration et préparation des données, le dataset a été divisé en train/test, puis chaque modèle a été entraîné et évalué selon plusieurs métriques (accuracy, precision, recall, f1-score). Les résultats ont été visualisés via matrices de confusion et analyses d’importances de variables, permettant d’identifier le modèle le plus performant et le plus robuste. Ce projet m’a permis de comprendre les forces et faiblesses de chaque algorithme, ainsi que l’impact du choix des hyperparamètres sur la qualité des prédictions.",
    context:
      "Travail réalisé dans le cadre d’un TP académique sur l’apprentissage supervisé et l’évaluation de modèles de classification.",
    objectives: [
      "Comprendre et implémenter plusieurs algorithmes de classification",
      "Préparer un dataset médical et le diviser en train/test",
      "Comparer les performances des modèles selon des métriques précises",
    ],
    features: [
      "Exploration et preprocessing du dataset Breast Cancer Wisconsin",
      "Entraînement de Decision Tree, Random Forest et XGBoost",
      "Évaluation via accuracy, precision, recall, f1-score",
      "Visualisation des matrices de confusion",
      "Analyse des importances de variables et comparaison finale",
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
      "XGBoost",
    ],
    image: "/images/8.png",
    githubLink:
      "https://github.com/GANABA/Technique-d-IA/tree/main/TPClassification%20en%20Machine%20Learning",
    liveLink: "#",
    featured: false,
  },
  {
    id: 7,
    title: "Portfolio - Rodanim.",
    shortDescription:
      "Site personnel moderne présentant mes projets, compétences et parcours en développement web.",
    fullDescription:
      "Ce portfolio a été conçu pour mettre en valeur mes projets académiques et professionnels, notamment le GPFE, TINA HOTEL, et d’autres réalisations techniques. Développé avec une approche moderne et responsive, il permet de présenter mes compétences en développement front-end et back-end, ainsi qu'en machine learning. L’interface a été construite avec Vue.js et Tailwind CSS pour un rendu fluide et élégant. Ce projet m’a permis de renforcer mes compétences en conception d’interface, en intégration responsive et en organisation de contenu dynamique à partir de données JSON.",
    context:
      "Projet personnel réalisé dans le but de présenter mes réalisations, mes services et mon parcours académique de manière professionnelle.",
    objectives: [
      "Créer une vitrine personnelle claire et interactive",
      "Mettre en valeur mes projets académiques et freelances",
      "Améliorer mes compétences en développement front-end moderne",
    ],
    features: [
      "Présentation détaillée des projets avec filtres et animations",
      "Design responsive et optimisé pour mobile",
      "Organisation dynamique des données de projets à partir d’un fichier JSON",
      "Intégration d’un formulaire de contact avec envoi d’emails via EmailJS",
    ],
    technologies: ["Vue.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    image: "/images/10.png",
    githubLink: "https://github.com/GANABA/my-portfolio-rodanim",
    liveLink: "https://ganaba-portfolio.vercel.app/",
    featured: true,
  },
];
