import { useState } from 'react'
import {
  SiPython,
  SiTypescript,
  SiFastapi,
  SiR,
  SiLangchain,
  SiLanggraph,
  SiHuggingface,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiGooglecloud,
  SiDocker,
  SiMlflow,
  SiGit,
  SiGithub,
  SiJenkins,
  SiPrometheus,
  SiGrafana,
  SiGooglebigquery,
  SiApachespark,
  SiDatabricks,
  SiApacheairflow,
  SiSnowflake,
  SiPostgresql,
  SiMysql,
  SiMongodb,
} from 'react-icons/si'
import { DiJava } from 'react-icons/di'
import { FaAws } from 'react-icons/fa6'
import { TbBrandAzure, TbBrandOpenai } from 'react-icons/tb'
import { IoLogoTableau } from 'react-icons/io5'

const HEXAGON = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'

const skillCategories = [
  {
    id: 'languages',
    label: 'Languages & Backend',
    skills: [
      { name: 'Python', Icon: SiPython },
      { name: 'Java', Icon: DiJava },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'R', Icon: SiR },
      { name: 'FastAPI', Icon: SiFastapi },
    ],
  },
  {
    id: 'ai-ml',
    label: 'AI & Machine Learning',
    skills: [
      { name: 'OpenAI', Icon: TbBrandOpenai },
      { name: 'LangChain', Icon: SiLangchain },
      { name: 'LangGraph', Icon: SiLanggraph },
      { name: 'Hugging Face', Icon: SiHuggingface },
      { name: 'PyTorch', Icon: SiPytorch },
      { name: 'TensorFlow', Icon: SiTensorflow },
      { name: 'Scikit-learn', Icon: SiScikitlearn },
    ],
  },
  {
    id: 'cloud-mlops',
    label: 'Cloud & MLOps',
    skills: [
      { name: 'Google Cloud', Icon: SiGooglecloud },
      { name: 'Microsoft Azure', Icon: TbBrandAzure },
      { name: 'AWS', Icon: FaAws },
      { name: 'Docker', Icon: SiDocker },
      { name: 'MLflow', Icon: SiMlflow },
      { name: 'Git', Icon: SiGit },
      { name: 'GitHub', Icon: SiGithub },
      { name: 'Jenkins', Icon: SiJenkins },
      { name: 'Prometheus', Icon: SiPrometheus },
      { name: 'Grafana', Icon: SiGrafana },
    ],
  },
  {
    id: 'data',
    label: 'Data & Databases',
    skills: [
      { name: 'BigQuery', Icon: SiGooglebigquery },
      { name: 'Apache Spark', Icon: SiApachespark },
      { name: 'Databricks', Icon: SiDatabricks },
      { name: 'Apache Airflow', Icon: SiApacheairflow },
      { name: 'Snowflake', Icon: SiSnowflake },
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'MySQL', Icon: SiMysql },
      { name: 'MongoDB', Icon: SiMongodb },
      { name: 'Tableau', Icon: IoLogoTableau },
    ],
  },
]

function Skills() {
  const [activeCategory, setActiveCategory] = useState(null)

  function selectCategory(id) {
    setActiveCategory((prev) => (prev === id ? null : id))
  }

  const visibleSkills = (
    activeCategory
      ? skillCategories.filter(({ id }) => id === activeCategory)
      : skillCategories
  ).flatMap(({ skills }) => skills)

  return (
    <section className="px-6 py-16 text-left md:px-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl">Skills</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {skillCategories.map(({ id, label }) => {
            const isActive = activeCategory === id
            return (
              <button
                key={id}
                type="button"
                onClick={() => selectCategory(id)}
                aria-pressed={isActive}
                className={`rounded-full border px-5 py-2.5 text-sm transition ${
                  isActive
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-border text-text hover:border-accent/40 hover:text-text-h'
                }`}
              >
                {label}
              </button>
            )
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-5">
          {visibleSkills.map(({ name, Icon }) => (
            <div key={name} className="flex w-20 flex-col items-center gap-2">
              <div
                style={{ clipPath: HEXAGON }}
                className="flex h-16 w-16 items-center justify-center border border-border bg-surface text-text-h transition hover:border-accent hover:text-accent"
              >
                <Icon className="h-7 w-7" />
              </div>
              <span className="text-center text-xs text-text">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
