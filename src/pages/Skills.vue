<template>
    <div class="min-h-screen bg-primary">

        <!-- Hero Section -->
        <section class="relative py-20 bg-secondary overflow-hidden">
            <div class="absolute top-10 right-20 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute bottom-10 left-20 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl animate-pulse"
                style="animation-delay: 1s;"></div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                    <div class="w-2 h-2 rounded-full bg-accent-blue animate-pulse"></div>
                    <span class="text-accent-blue text-sm font-semibold tracking-wider uppercase">Stack Technique</span>
                </div>

                <h1 class="text-5xl md:text-6xl font-bold text-text-primary mb-6 animate-slide-in">
                    Mes <span class="gradient-text">Compétences</span>
                </h1>

                <p class="text-text-secondary text-xl max-w-3xl mx-auto animate-slide-in"
                    style="animation-delay: 0.1s;">
                    Technologies, frameworks et outils que je maîtrise pour créer des solutions innovantes
                </p>
            </div>
        </section>

        <!-- Langages de Programmation -->
        <section class="py-20 bg-primary">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div class="mb-12 fade-in-section">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-1 h-10 bg-gradient-primary rounded-full"></div>
                        <h2 class="text-3xl font-bold text-text-primary">Langages de Programmation</h2>
                    </div>
                    <p class="text-text-secondary ml-7">Langages que j'utilise pour développer mes applications</p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 fade-in-section">
                    <div v-for="(lang, index) in languages" :key="lang.name"
                        class="group card-modern text-center p-8 cursor-pointer relative overflow-hidden"
                        :style="{ animationDelay: `${index * 50}ms` }">
                        <div class="relative z-10">
                            <div
                                class="mb-4 flex justify-center transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-300">
                                <img :src="lang.icon" :alt="lang.name" class="w-16 h-16" />
                            </div>
                            <span class="text-text-primary font-semibold block mb-2">{{ lang.name }}</span>
                            <span class="text-text-muted text-xs">{{ lang.level }}</span>
                        </div>

                        <!-- Hover gradient -->
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-accent-blue/0 to-accent-purple/0 group-hover:from-accent-blue/10 group-hover:to-accent-purple/10 transition-all duration-500">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Frameworks & Libraries -->
        <section class="py-20 bg-secondary">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div class="mb-12 fade-in-section">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-1 h-10 bg-gradient-primary rounded-full"></div>
                        <h2 class="text-3xl font-bold text-text-primary">Frameworks & Bibliothèques</h2>
                    </div>
                    <p class="text-text-secondary ml-7">Outils pour accélérer le développement et structurer mes projets
                    </p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 fade-in-section">
                    <div v-for="(framework, index) in frameworks" :key="framework.name"
                        class="group card-modern text-center p-6 cursor-pointer"
                        :style="{ animationDelay: `${index * 50}ms` }">
                        <div class="mb-4 flex justify-center transform group-hover:scale-125 transition-all">
                            <img :src="framework.icon" :alt="framework.name" class="w-14 h-14" />
                        </div>
                        <span class="text-text-primary font-medium text-sm">{{ framework.name }}</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Bases de Données & Data -->
        <section class="py-20 bg-primary">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div class="mb-12 fade-in-section">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-1 h-10 bg-gradient-primary rounded-full"></div>
                        <h2 class="text-3xl font-bold text-text-primary">Data & Bases de Données</h2>
                    </div>
                    <p class="text-text-secondary ml-7">Technologies pour la gestion et l'analyse de données</p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 fade-in-section">
                    <div v-for="(tool, index) in dataTools" :key="tool.name"
                        class="group card-modern text-center p-6 cursor-pointer"
                        :style="{ animationDelay: `${index * 50}ms` }">
                        <div class="mb-4 flex justify-center transform group-hover:scale-125 transition-all">
                            <img :src="tool.icon" :alt="tool.name" class="w-14 h-14" />
                        </div>
                        <span class="text-text-primary font-medium text-sm">{{ tool.name }}</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Outils de Développement -->
        <section class="py-20 bg-secondary">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div class="mb-12 fade-in-section">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-1 h-10 bg-gradient-primary rounded-full"></div>
                        <h2 class="text-3xl font-bold text-text-primary">Outils & Environnements</h2>
                    </div>
                    <p class="text-text-secondary ml-7">Outils quotidiens pour le développement et la collaboration</p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 fade-in-section">
                    <div v-for="(tool, index) in devTools" :key="tool.name"
                        class="group card-modern text-center p-6 cursor-pointer"
                        :style="{ animationDelay: `${index * 50}ms` }">
                        <div class="mb-4 flex justify-center transform group-hover:scale-125 transition-all">
                            <img :src="tool.icon" :alt="tool.name" class="w-14 h-14" />
                        </div>
                        <span class="text-text-primary font-medium text-sm">{{ tool.name }}</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Soft Skills -->
        <section class="py-20 bg-primary">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div class="mb-12 fade-in-section text-center">
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                        <span class="text-accent-blue text-sm font-semibold tracking-wider uppercase">Soft Skills</span>
                    </div>
                    <h2 class="text-3xl font-bold text-text-primary mb-4">Compétences Transversales</h2>
                    <p class="text-text-secondary">Au-delà du code, les qualités qui font la différence</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto fade-in-section">
                    <div v-for="(skill, index) in softSkills" :key="skill.title"
                        class="card-modern p-6 text-center group" :style="{ animationDelay: `${index * 100}ms` }">
                        <div
                            class="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg class="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="skill.icon" />
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold text-text-primary mb-2">{{ skill.title }}</h3>
                        <p class="text-text-secondary text-sm">{{ skill.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 bg-secondary">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section">
                <div class="card-modern p-12">
                    <h2 class="text-3xl font-bold text-text-primary mb-6">
                        Intéressé par mon profil ?
                    </h2>
                    <p class="text-text-secondary mb-8">
                        Découvrez mes projets ou contactez-moi pour discuter d'opportunités de collaboration
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <router-link to="/projects"
                            class="px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl hover:scale-105 transition-all hover:shadow-glow-lg">
                            Voir mes projets
                        </router-link>
                        <router-link to="/contact"
                            class="px-8 py-4 glass hover:glass-strong text-text-primary font-semibold rounded-xl border border-accent-blue/20 hover:border-accent-blue/40 transition-all">
                            Me contacter
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

const languages = [
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', level: 'Intermédiaire' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 'Intermédiaire' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 'Intermédiaire' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 'Intermédiaire' },
    { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 'Avancé' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 'Intermédiaire' },
]

const frameworks = [
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
]

const dataTools = [
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg' },
    { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg' },
]

const devTools = [
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'IntelliJ', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
    { name: 'Trello', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
]

const softSkills = [
    {
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
        title: 'Travail d\'équipe',
        description: 'Collaboration efficace en équipe avec méthodologies Agile'
    },
    {
        icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
        title: 'Résolution de problèmes',
        description: 'Analyse et résolution de problèmes complexes'
    },
    {
        icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
        title: 'Apprentissage continu',
        description: 'Veille technologique et formation autodidacte'
    },
    {
        icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
        title: 'Créativité',
        description: 'Approche innovante dans la conception de solutions'
    },
    {
        icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
        title: 'Communication',
        description: 'Capacité à expliquer des concepts techniques clairement'
    },
    {
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        title: 'Adaptabilité',
        description: 'Flexibilité face aux nouvelles technologies et méthodes'
    },
]

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                }
            })
        },
        { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el))
})
</script>