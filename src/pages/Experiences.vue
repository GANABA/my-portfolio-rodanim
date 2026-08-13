<template>
  <div class="bg-light text-dark font-sans min-h-screen">

    <!-- Hero -->
    <section class="py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-b border-grey-200">
      <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12 items-end">
        <div class="md:col-span-3">
          <span class="inline-block font-mono text-xs sm:text-sm tracking-widest text-grey-500">
            {{ t('experiences.label') }}
          </span>
        </div>
        <div class="md:col-span-9">
          <h1 class="text-4xl sm:text-5xl md:text-7xl font-sans font-bold leading-none mb-6">
            {{ t('experiences.titleLine1') }}<br />
            <span class="text-grey-400">{{ t('experiences.titleLine2') }}</span>
          </h1>
          <p class="text-base sm:text-lg text-grey-600 max-w-2xl">
            {{ t('experiences.intro') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Onglets -->
    <div class="sticky top-16 sm:top-20 z-20 bg-light/90 backdrop-blur-md border-b border-grey-200">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex">
          <button
            @click="activeTab = 'stages'"
            :class="activeTab === 'stages'
              ? 'border-b-2 border-accent text-accent'
              : 'text-grey-500 hover:text-dark'"
            class="font-mono text-xs tracking-widest py-4 px-4 sm:px-6 transition-colors duration-200"
          >
            {{ t('experiences.tabInternships') }}
          </button>
          <button
            @click="activeTab = 'formation'"
            :class="activeTab === 'formation'
              ? 'border-b-2 border-accent text-accent'
              : 'text-grey-500 hover:text-dark'"
            class="font-mono text-xs tracking-widest py-4 px-4 sm:px-6 transition-colors duration-200"
          >
            {{ t('experiences.tabEducation') }}
          </button>
        </div>
      </div>
    </div>

    <!-- ========================
         STAGES
    ========================= -->
    <section v-show="activeTab === 'stages'" class="py-16 sm:py-24 px-4 sm:px-6">
      <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12">
        <div class="md:col-span-3">
          <span class="font-mono text-xs tracking-widest text-grey-500">{{ t('experiences.sectionInternships') }}</span>
        </div>
        <div class="md:col-span-9 space-y-0">
          <div
            v-for="(exp, index) in experiences"
            :key="index"
            class="group border-t border-grey-200 py-10 sm:py-14"
          >
            <div class="flex items-start gap-4 sm:gap-6 mb-6">
              <span class="font-mono text-xs text-grey-400 mt-1 shrink-0">0{{ index + 1 }}</span>
              <div class="flex-1">
                <div class="flex flex-wrap items-center gap-3 mb-2">
                  <span
                    class="font-mono text-xs tracking-wider px-2 py-0.5 border"
                    :class="exp.current ? 'border-accent text-accent' : 'border-grey-300 text-grey-500'"
                  >
                    {{ exp.current ? t('experiences.current') : t('experiences.finished') }}
                  </span>
                  <span class="font-mono text-xs text-grey-400">{{ exp.period }}</span>
                </div>
                <h2 class="text-2xl sm:text-3xl font-sans font-bold group-hover:text-accent transition-colors">
                  {{ exp.title }}
                </h2>
                <div class="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-grey-600">
                  <span class="font-mono tracking-wide">{{ exp.institution }}</span>
                  <span v-if="exp.location" class="text-grey-400">{{ exp.location }}</span>
                </div>
              </div>
            </div>

            <div class="ml-10 space-y-6">
              <p class="text-grey-600 leading-relaxed">{{ exp.description }}</p>

              <div>
                <h4 class="font-mono text-xs tracking-widest text-grey-400 mb-4">{{ t('experiences.missions') }}</h4>
                <ul class="space-y-2">
                  <li
                    v-for="item in exp.highlights"
                    :key="item"
                    class="flex items-start gap-3 text-sm text-grey-700"
                  >
                    <span class="mt-2 w-4 h-px bg-accent shrink-0 inline-block"></span>
                    {{ item }}
                  </li>
                </ul>
              </div>

              <div v-if="exp.technologies">
                <h4 class="font-mono text-xs tracking-widest text-grey-400 mb-3">{{ t('experiences.technologies') }}</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in exp.technologies"
                    :key="tech"
                    class="px-3 py-1 border border-grey-300 text-dark font-mono text-xs hover:border-accent hover:text-accent transition-colors"
                  >{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="border-t border-grey-200"></div>
        </div>
      </div>
    </section>

    <!-- ========================
         FORMATION
    ========================= -->
    <section v-show="activeTab === 'formation'" class="py-16 sm:py-24 px-4 sm:px-6">
      <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12">
        <div class="md:col-span-3">
          <span class="font-mono text-xs tracking-widest text-grey-500">{{ t('experiences.sectionEducation') }}</span>
        </div>
        <div class="md:col-span-9 space-y-0">
          <div
            v-for="(edu, index) in education"
            :key="index"
            class="group border-t border-grey-200 py-10 sm:py-14"
          >
            <div class="flex items-start gap-4 sm:gap-6 mb-6">
              <span class="font-mono text-xs text-grey-400 mt-1 shrink-0">0{{ index + 1 }}</span>
              <div class="flex-1">
                <div class="flex flex-wrap items-center gap-3 mb-2">
                  <span
                    class="font-mono text-xs tracking-wider px-2 py-0.5 border"
                    :class="edu.current ? 'border-accent text-accent' : 'border-grey-300 text-grey-500'"
                  >
                    {{ edu.current ? t('experiences.current') : t('experiences.graduated') }}
                  </span>
                  <span class="font-mono text-xs text-grey-400">{{ edu.period }}</span>
                </div>
                <h2 class="text-2xl sm:text-3xl font-sans font-bold group-hover:text-accent transition-colors">
                  {{ edu.title }}
                </h2>
                <div class="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-grey-600">
                  <span class="font-mono tracking-wide">{{ edu.institution }}</span>
                  <span v-if="edu.location" class="text-grey-400">{{ edu.location }}</span>
                </div>
              </div>
            </div>

            <div class="ml-10 space-y-6">
              <p class="text-grey-600 leading-relaxed">{{ edu.description }}</p>

              <div>
                <h4 class="font-mono text-xs tracking-widest text-grey-400 mb-4">{{ t('experiences.competencies') }}</h4>
                <ul class="space-y-2">
                  <li
                    v-for="item in edu.highlights"
                    :key="item"
                    class="flex items-start gap-3 text-sm text-grey-700"
                  >
                    <span class="mt-2 w-4 h-px bg-accent shrink-0 inline-block"></span>
                    {{ item }}
                  </li>
                </ul>
              </div>

              <div v-if="edu.modules">
                <h4 class="font-mono text-xs tracking-widest text-grey-400 mb-3">{{ t('experiences.modules') }}</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="mod in edu.modules"
                    :key="mod"
                    class="px-3 py-1 border border-grey-300 text-dark font-mono text-xs hover:border-accent hover:text-accent transition-colors"
                  >{{ mod }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="border-t border-grey-200"></div>
        </div>
      </div>
    </section>

    <!-- Distinctions -->
    <section class="py-16 sm:py-24 px-4 sm:px-6 border-t border-grey-200">
      <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12">
        <div class="md:col-span-3">
          <span class="font-mono text-xs tracking-widest text-grey-500">{{ t('experiences.distinctions') }}</span>
        </div>
        <div class="md:col-span-9">
          <div class="group border-t border-grey-200 pt-10 sm:pt-14">
            <div class="flex items-start gap-4 sm:gap-6">
              <span class="font-mono text-xs text-grey-400 mt-1 shrink-0">01</span>
              <div class="flex-1">
                <div class="flex flex-wrap items-center gap-3 mb-2">
                  <span class="font-mono text-xs tracking-wider px-2 py-0.5 border border-accent text-accent">{{ datathon.badge }}</span>
                  <span class="font-mono text-xs text-grey-400">{{ datathon.meta }}</span>
                </div>
                <h2 class="text-2xl sm:text-3xl font-sans font-bold group-hover:text-accent transition-colors mb-2">
                  {{ datathon.title }}
                </h2>
                <div class="flex flex-wrap items-center gap-x-4 gap-y-1 mb-5 text-sm text-grey-600">
                  <span class="font-mono tracking-wide">{{ datathon.institution }}</span>
                  <span class="text-grey-400">{{ datathon.location }}</span>
                </div>

                <p class="text-grey-600 leading-relaxed max-w-2xl mb-6" v-html="datathon.description"></p>

                <div class="mb-6">
                  <h4 class="font-mono text-xs tracking-widest text-grey-400 mb-4">{{ t('experiences.missionsResults') }}</h4>
                  <ul class="space-y-2">
                    <li
                      v-for="item in datathon.highlights"
                      :key="item"
                      class="flex items-start gap-3 text-sm text-grey-700"
                    >
                      <span class="mt-2 w-4 h-px bg-accent shrink-0 inline-block"></span>
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 class="font-mono text-xs tracking-widest text-grey-400 mb-3">{{ t('experiences.technologies') }}</h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tech in datathon.technologies"
                      :key="tech"
                      class="px-3 py-1 border border-grey-300 text-dark font-mono text-xs hover:border-accent hover:text-accent transition-colors"
                    >{{ tech }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Soft Skills -->
    <section class="py-16 sm:py-24 px-4 sm:px-6 border-t border-grey-200 bg-grey-50">
      <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12">
        <div class="md:col-span-3">
          <span class="font-mono text-xs tracking-widest text-grey-500">{{ t('experiences.softSkillsLabel') }}</span>
        </div>
        <div class="md:col-span-9">
          <h2 class="text-3xl sm:text-4xl font-bold mb-10">{{ t('experiences.softSkillsTitle') }}</h2>
          <div class="grid sm:grid-cols-2 gap-6">
            <div
              v-for="skill in softSkills"
              :key="skill.label"
              class="flex items-start gap-4 group"
            >
              <div class="mt-1 w-8 h-8 border border-grey-300 flex items-center justify-center shrink-0 group-hover:border-accent group-hover:text-accent transition-colors">
                <span class="font-mono text-xs">{{ skill.icon }}</span>
              </div>
              <div>
                <h3 class="font-sans font-semibold text-dark group-hover:text-accent transition-colors mb-1">{{ skill.label }}</h3>
                <p class="text-sm text-grey-600 leading-relaxed">{{ skill.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 sm:py-24 px-4 sm:px-6 border-t border-grey-200">
      <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12 items-center">
        <div class="md:col-span-3">
          <span class="font-mono text-xs tracking-widest text-grey-500">{{ t('experiences.ctaLabel') }}</span>
        </div>
        <div class="md:col-span-9">
          <h2 class="text-3xl sm:text-4xl font-bold mb-6">{{ t('experiences.ctaTitle') }}</h2>
          <p class="text-grey-600 mb-8 max-w-xl" v-html="t('experiences.ctaText')"></p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              :href="t('nav.cvFile')"
              download
              class="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-dark text-light border-2 border-dark font-mono text-xs tracking-wider hover:bg-transparent hover:text-dark transition-all duration-300"
            >
              {{ t('experiences.ctaDownload') }}
              <svg class="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
            </a>
            <a
              href="mailto:ganabarodanimkm@gmail.com"
              class="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-dark text-dark font-mono text-xs tracking-wider hover:bg-dark hover:text-light transition-all duration-300"
            >
              {{ t('experiences.ctaContact') }}
            </a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()

const activeTab = ref('stages')

/*
  Le contenu (stages, formations, datathon, soft skills) vit dans les
  fichiers de locale. tm() résout les tableaux et objets de messages ;
  rt() résout chaque message individuel en chaîne.
*/
const resolveList = (key, stringFields, listFields = []) =>
  tm(key).map((entry) => {
    const out = { ...entry }
    stringFields.forEach((f) => {
      if (entry[f] !== undefined) out[f] = rt(entry[f])
    })
    listFields.forEach((f) => {
      if (entry[f] !== undefined) out[f] = entry[f].map((v) => rt(v))
    })
    return out
  })

const experiences = computed(() =>
  resolveList(
    'experiences.jobs',
    ['title', 'institution', 'location', 'period', 'description'],
    ['highlights', 'technologies']
  )
)

const education = computed(() =>
  resolveList(
    'experiences.education',
    ['title', 'institution', 'location', 'period', 'description'],
    ['highlights', 'modules']
  )
)

const softSkills = computed(() =>
  resolveList('experiences.softSkills', ['icon', 'label', 'description'])
)

const datathon = computed(() => {
  const raw = tm('experiences.datathon')
  return {
    badge: rt(raw.badge),
    meta: rt(raw.meta),
    title: rt(raw.title),
    institution: rt(raw.institution),
    location: rt(raw.location),
    description: rt(raw.description),
    highlights: raw.highlights.map((v) => rt(v)),
    technologies: raw.technologies.map((v) => rt(v)),
  }
})
</script>
