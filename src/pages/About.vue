<template>
    <div class="bg-dark">
        <!-- Hero Section avec formes géométriques -->
        <section class="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-dark">
            <!-- Formes géométriques animées en arrière-plan -->
            <div class="absolute top-10 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute bottom-10 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"
                style="animation-delay: 1s;"></div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
                <span class="text-accent font-semibold tracking-wider uppercase text-sm">Découvrez mon profil</span>
                <h1 class="text-5xl md:text-6xl font-bold text-white mt-4 mb-6 fade-in-up">
                    À propos de moi
                </h1>
                <p class="text-gray-400 text-xl max-w-2xl mx-auto fade-in-up" style="animation-delay: 0.2s;">
                    Mon parcours, mes compétences et ma vision du développement
                </p>
            </div>

            <!-- Scroll indicator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>

        <!-- Qui suis-je Section -->
        <section class="py-20 bg-gray-dark scroll-fade-in">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    class="relative backdrop-blur-lg bg-dark/50 border border-accent/20 rounded-2xl p-10 hover:border-accent/50 transition-all duration-500 group overflow-hidden">
                    <!-- Glow effect -->
                    <div
                        class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500">
                    </div>

                    <div class="relative z-10">
                        <h2 class="text-3xl md:text-4xl font-bold text-accent mb-8 flex items-center gap-3">
                            <span class="text-4xl">👋</span>
                            Qui suis-je ?
                        </h2>
                        <div class="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                Bonjour ! Je suis
                                <strong class="text-white font-bold">Rodanim Ganaba</strong>, étudiant en BUT
                                Informatique.
                                J'explore activement le développement informatique, le machine learning et la data
                                science à travers divers projets et formations.
                            </p>
                            <p>
                                J'aime relever de nouveaux défis techniques pour progresser constamment et créer des
                                solutions
                                utiles et innovantes.
                            </p>
                            <p>
                                En dehors du code, j'apprécie le travail d'équipe, les jeux d'équipe football
                                particulièrment, le partage de connaissances et la
                                résolution
                                de problèmes complexes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Compétences Section -->
        <section class="py-20 bg-dark scroll-fade-in">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <span class="text-accent font-semibold tracking-wider uppercase text-sm">Stack Technique</span>
                    <h2 class="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
                        Compétences techniques
                    </h2>
                </div>

                <div class="space-y-16">
                    <!-- Langages -->
                    <div class="scroll-fade-in">
                        <h3 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span class="w-2 h-8 bg-accent rounded-full"></span>
                            Langages de développement
                        </h3>
                        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            <div v-for="(lang, index) in languages" :key="lang.name"
                                class="group relative bg-gray-dark p-6 rounded-xl hover:bg-accent/10 transition-all hover:scale-110 hover:-translate-y-2 cursor-pointer border border-gray-dark hover:border-accent/50"
                                :style="{ animationDelay: `${index * 50}ms` }">
                                <div class="text-center">
                                    <div
                                        class="mb-3 group-hover:scale-125 transition-transform flex items-center justify-center">
                                        <img :src="lang.icon" :alt="lang.name" class="w-12 h-12" />
                                    </div>
                                    <span class="text-white font-semibold text-sm block mb-3">{{ lang.name }}</span>
                                </div>

                                <!-- Glow effect -->
                                <div
                                    class="absolute inset-0 rounded-xl bg-accent opacity-0 group-hover:opacity-10 blur-xl transition-opacity">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Frameworks -->
                    <div class="scroll-fade-in">
                        <h3 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span class="w-2 h-8 bg-accent rounded-full"></span>
                            Frameworks & Librairies
                        </h3>
                        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            <div v-for="(framework, index) in frameworks" :key="framework.name"
                                class="group relative bg-gray-dark p-6 rounded-xl hover:bg-accent/10 transition-all hover:scale-110 hover:-translate-y-2 cursor-pointer border border-gray-dark hover:border-accent/50"
                                :style="{ animationDelay: `${index * 50}ms` }">
                                <div class="text-center">
                                    <div
                                        class="mb-3 group-hover:scale-125 transition-transform flex items-center justify-center">
                                        <img :src="framework.icon" :alt="framework.name" class="w-12 h-12" />
                                    </div>
                                    <span class="text-white font-semibold text-sm">{{ framework.name }}</span>
                                </div>

                                <!-- Glow effect -->
                                <div
                                    class="absolute inset-0 rounded-xl bg-accent opacity-0 group-hover:opacity-10 blur-xl transition-opacity">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Outils -->
                    <div class="scroll-fade-in">
                        <h3 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span class="w-2 h-8 bg-accent rounded-full"></span>
                            Outils & Technologies
                        </h3>
                        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            <div v-for="(tool, index) in tools" :key="tool.name"
                                class="group relative bg-gray-dark p-6 rounded-xl hover:bg-accent/10 transition-all hover:scale-110 hover:-translate-y-2 cursor-pointer border border-gray-dark hover:border-accent/50"
                                :style="{ animationDelay: `${index * 50}ms` }">
                                <div class="text-center">
                                    <div
                                        class="mb-3 group-hover:scale-125 transition-transform flex items-center justify-center">
                                        <img :src="tool.icon" :alt="tool.name" class="w-12 h-12" />
                                    </div>
                                    <span class="text-white font-semibold text-sm">{{ tool.name }}</span>
                                </div>

                                <!-- Glow effect -->
                                <div
                                    class="absolute inset-0 rounded-xl bg-accent opacity-0 group-hover:opacity-10 blur-xl transition-opacity">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Data -->
                    <div class="scroll-fade-in">
                        <h3 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span class="w-2 h-8 bg-accent rounded-full"></span>
                            Bases de données
                        </h3>
                        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            <div v-for="(data, index) in dataTools" :key="data.name"
                                class="group relative bg-gray-dark p-6 rounded-xl hover:bg-accent/10 transition-all hover:scale-110 hover:-translate-y-2 cursor-pointer border border-gray-dark hover:border-accent/50"
                                :style="{ animationDelay: `${index * 50}ms` }">
                                <div class="text-center">
                                    <div
                                        class="mb-3 group-hover:scale-125 transition-transform flex items-center justify-center">
                                        <img :src="data.icon" :alt="data.name" class="w-12 h-12" />
                                    </div>
                                    <span class="text-white font-semibold text-sm">{{ data.name }}</span>
                                </div>

                                <!-- Glow effect -->
                                <div
                                    class="absolute inset-0 rounded-xl bg-accent opacity-0 group-hover:opacity-10 blur-xl transition-opacity">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Expériences Section -->
        <section class="py-20 bg-gray-dark scroll-fade-in">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <span class="text-accent font-semibold tracking-wider uppercase text-sm">Mon parcours</span>
                    <h2 class="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
                        Mes Expériences
                    </h2>
                </div>

                <div class="relative pl-8 md:pl-12">
                    <!-- Timeline line -->
                    <div
                        class="absolute left-3 md:left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/60 to-accent/20 rounded-full">
                    </div>

                    <div class="space-y-12">
                        <div v-for="(item, index) in timelineExpe" :key="index" class="relative scroll-fade-in"
                            :style="{ animationDelay: `${index * 200}ms` }">
                            <!-- Timeline dot -->
                            <div
                                class="absolute -left-5 md:-left-7 top-6 w-6 h-6 bg-accent rounded-full border-4 border-dark shadow-lg shadow-accent/50 z-10 animate-pulse">
                            </div>

                            <!-- Card -->
                            <div
                                class="group relative bg-dark border border-accent/20 rounded-2xl p-8 hover:border-accent/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-x-2 overflow-hidden">
                                <!-- Glow effect -->
                                <div
                                    class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500">
                                </div>

                                <div class="relative z-10">
                                    <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                        <h3
                                            class="text-2xl font-bold text-accent group-hover:text-white transition-colors">
                                            {{ item.title }}
                                        </h3>
                                        <span
                                            class="inline-flex items-center px-4 py-2 bg-accent/10 text-accent text-sm font-bold rounded-full border border-accent/30">
                                            {{ item.period }}
                                        </span>
                                    </div>

                                    <p class="text-white font-semibold text-lg mb-3">{{ item.institution }}</p>
                                    <p class="text-gray-300 leading-relaxed mb-4">{{ item.description }}</p>

                                    <ul v-if="item.highlights" class="space-y-2">
                                        <li v-for="(highlight, idx) in item.highlights" :key="idx"
                                            class="flex items-start text-gray-400 hover:text-accent transition-colors">
                                            <svg class="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0"
                                                fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            {{ highlight }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Formation/Etudes -->
        <section class="py-20 bg-gray-dark scroll-fade-in">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
                        Mes Formations
                    </h2>
                </div>

                <div class="relative pl-8 md:pl-12">
                    <!-- Timeline line -->
                    <div
                        class="absolute left-3 md:left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/60 to-accent/20 rounded-full">
                    </div>

                    <div class="space-y-12">
                        <div v-for="(item, index) in timeline" :key="index" class="relative scroll-fade-in"
                            :style="{ animationDelay: `${index * 200}ms` }">
                            <!-- Timeline dot -->
                            <div
                                class="absolute -left-5 md:-left-7 top-6 w-6 h-6 bg-accent rounded-full border-4 border-dark shadow-lg shadow-accent/50 z-10 animate-pulse">
                            </div>

                            <!-- Card -->
                            <div
                                class="group relative bg-dark border border-accent/20 rounded-2xl p-8 hover:border-accent/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-x-2 overflow-hidden">
                                <!-- Glow effect -->
                                <div
                                    class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500">
                                </div>

                                <div class="relative z-10">
                                    <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                        <h3
                                            class="text-2xl font-bold text-accent group-hover:text-white transition-colors">
                                            {{ item.title }}
                                        </h3>
                                        <span
                                            class="inline-flex items-center px-4 py-2 bg-accent/10 text-accent text-sm font-bold rounded-full border border-accent/30">
                                            {{ item.period }}
                                        </span>
                                    </div>

                                    <p class="text-white font-semibold text-lg mb-3">{{ item.institution }}</p>
                                    <p class="text-gray-300 leading-relaxed mb-4">{{ item.description }}</p>

                                    <ul v-if="item.highlights" class="space-y-2">
                                        <li v-for="(highlight, idx) in item.highlights" :key="idx"
                                            class="flex items-start text-gray-400 hover:text-accent transition-colors">
                                            <svg class="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0"
                                                fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            {{ highlight }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="py-20 bg-dark relative overflow-hidden scroll-fade-in">
            <!-- Formes décoratives -->
            <div class="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                    Intéressé par mon profil ?
                </h2>
                <p class="text-accent text-xl font-semibold mb-10">
                    N'hésitez pas à télécharger mon CV ou à me contacter
                </p>

                <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a href="/CV Rodanim Ganaba.pdf" download
                        class="group relative inline-flex items-center justify-center px-10 py-5 bg-accent text-dark font-bold rounded-lg overflow-hidden transition-all hover:scale-105 w-full sm:w-auto">
                        <span class="relative z-10 flex items-center">
                            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Télécharger mon CV
                        </span>
                    </a>

                    <router-link to="/contact"
                        class="inline-flex items-center justify-center px-10 py-5 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent hover:text-dark transition-all hover:scale-105 w-full sm:w-auto">
                        Me contacter
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

const languages = [
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'},
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'},
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'},
    { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'},
    { name: 'Javascript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
]

const frameworks = [
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
]

const tools = [
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'IntelliJ', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
    { name: 'SpringToolSuite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'Git/GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Jupyter Notebook', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Trello', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
]

const dataTools = [
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
]

const timelineExpe = [
    {
        title: 'Stage Développeur Web',
        institution: 'Light Innovation',
        period: 'Novembre 2024 - Février 2025',
        description: 'Développement d\'une application web de réservation de chambre d\'hôtel',
        highlights: [
            'Analyse des besoins clients',
            'Développement front-end avec HTML, CSS, Bootstrap, JavaScript',
            'Implémentation back-end avec PHP et MySQL',
        ]
    },
    {
        title: 'Stage académique - Développement',
        institution: 'CABRO GROUP SARL',
        period: 'Avril 2024 - Juillet 2024',
        description: 'Développement en binôme d\'une application web de gestion de projets de fin d\'étude',
        highlights: [
            'Rédaction du cahier des charges',
            'Modelisation de la base de données',
            'Implémentation back-end de l\'application'
        ]
    },
]

const timeline = [
    {
        title: 'BUT 3 Informatique - Développement d\'applications',
        institution: 'IUT Nord Franche-Comté',
        period: '2025 - Présent',
        description: 'Formation en développement d\'applications, méthodes agiles, réseaux et virtualisation, bases de données, IoT et technique d\'IA.',
        highlights: [
            'Développement front-end et back-end',
            'Gestion de projets agiles',
            'IoT et techniques d\'IA',
        ]
    },
    {
        title: 'Licence Professionnelle - Informatique de Gestion',
        institution: 'IUT de Parakou',
        period: '2021 - 2024',
        description: 'Formation axée sur le développement web/mobile, la gestion de bases de données et les systèmes d\'information.',
        highlights: [
            'Développement web et mobile',
            'Gestion de bases de données',
            'Systèmes d\'information',
        ]
    },
]

// Animation au scroll
onMounted(() => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible')
            }
        })
    }, observerOptions)

    document.querySelectorAll('.scroll-fade-in').forEach(el => {
        observer.observe(el)
    })
})
</script>

<style scoped>
/* Animations d'entrée */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
}

/* Animation au scroll */
.scroll-fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.scroll-fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Animation des barres de compétences */
.skill-bar {
    width: 0;
    transition: width 1.5s ease-out;
}

.visible .skill-bar {
    width: var(--skill-width) !important;
}
</style>