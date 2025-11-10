# STEM Helper — Plataforma de Análisis Educativo

![Banner](https://img.shields.io/badge/React-18-blue?logo=react)
![Java](https://img.shields.io/badge/Java-gray?style=flat&logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-gray?style=flat&logo=springboot)
![Database](https://img.shields.io/badge/MySQL-orange?logo=mysql)
![Status](https://img.shields.io/badge/Status-En%20Desarrollo-yellow)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

> **STEM Helper** es una plataforma interactiva desarrollada para analizar datos académicos, visualizar indicadores educativos y apoyar la toma de decisiones dentro de instituciones formativas STEM.  
> Su enfoque principal es reducir la **tasa de deserción estudiantil** mediante reportes inteligentes y visuales.

---

## 🚀 Tecnologías principales

| Área | Tecnología | Descripción |
|------|-------------|-------------|
| **Frontend** | ⚛️ React + TailwindCSS | Interfaz moderna, responsive y con gráficos interactivos. |
| **Backend** | Java + Spring Boot | API REST con controladores para reportes, autenticación y métricas. |
| **Base de datos** | 🐬 MySQL | Almacenamiento estructurado para estudiantes, cursos, causas de deserción y profesores. |
| **Infraestructura** | 🌐 Ngrok / Localhost | Permite pruebas tanto locales como remotas con `fetchWithFallback`. |

---

## 🧩 Arquitectura general

```plaintext
 ┌────────────────────┐
 │     Frontend       │
 │  (React + Vite)    │
 │                    │
 │  • Login           │
 │  • Reportes        │
 │  • Dashboard Admin │
 └────────┬───────────┘
          │
     fetchWithFallback()
          │
 ┌────────▼───────────┐
 │     Backend        │
 │ (Java + Spring)    │
 │                    │
 │  • /auth/login     │
 │  • /reports/...    │
 │  • /users/...      │
 └────────┬───────────┘
          │
   ┌──────▼───────┐
   │   MySQL      │
   │  Tablas:     │
   │  - users     │
   │  - courses   │
   │  - dropouts  │
   │  - cities    │
   │  - teachers  │
   └──────────────┘
```

---

## 🚀 Funcionalidades clave

- **Reportes dinámicos:** métricas sobre deserción por profesor, curso o nivel académico.  
- **Visualizaciones interactivas:** gráficas comparativas e indicadores clave.  
- **Integración full-stack:** comunicación entre React y Spring Boot a través de endpoints REST.  
- **Diseño adaptable:** interfaz optimizada para uso en escritorio y dispositivos móviles.

---

## ⚙️ Arquitectura general

El sistema sigue una arquitectura cliente-servidor:

```
[Frontend React] ⇄ [REST API Spring Boot] ⇄ [Base de datos MySQL]
```

Cada componente se comunica mediante peticiones HTTP con datos en formato **JSON**, priorizando eficiencia y mantenibilidad.

---

## 🧠 Propósito

El proyecto busca fortalecer la toma de decisiones educativas en entornos STEM, facilitando el acceso a información visual, confiable y procesable sobre rendimiento y permanencia estudiantil.

---

## 👥 Autores

Desarrollado con 💚 por Andrés Yate y Anderson Cardona :D


