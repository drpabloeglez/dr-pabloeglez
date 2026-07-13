# ROADMAP — ginecologiamendoza.com.ar

Post-V1 roadmap, priorities, business triggers, and implementation phases.

---

# Guiding Principle

The goal of this project is not to build software.

The goal is to:

* Generate trust
* Increase appointment bookings
* Improve local SEO visibility
* Strengthen Dr. Pablo Eglez's professional brand
* Create a sustainable patient acquisition system

Always prioritize business impact over technical complexity.

---

# Phase V1.1 — Launch & Production Readiness

## Goal

Finalize the MVP and deploy to production.

| # | Item                                       | Priority | Effort | Notes                                          |
| - | ------------------------------------------ | -------- | ------ | ---------------------------------------------- |
| 1 | Mobile navigation menu                     | High     | 2h     | ✅ Responsive hamburger menu implemented.      |
| 2 | Replace Google Analytics placeholder ID    | High     | 5min   | Use real GA4 property.                         |
| 3 | Add doctor portrait                        | Medium   | 1h     | Replace placeholder graphics.                  |
| 4 | Production Lighthouse audit                | Medium   | 1h     | Verify all scores above 90.                    |
| 5 | Deploy to Vercel                           | High     | 30min  | Connect domain and enable HTTPS.               |
| 6 | Verify Search Console setup                | High     | 30min  | Submit sitemap and index homepage.             |
| 7 | Verify Google Business Profile consistency | High     | 30min  | Name, address and phone must match everywhere. |

## Go-Live Criteria

* Website deployed
* Domain connected
* HTTPS active
* Analytics active
* Search Console active
* Lighthouse > 90
* Mobile responsive

---

# Phase 2 — SEO & Content Expansion

## Goal

Increase organic traffic and local visibility.

This phase has higher business impact than building backend systems.

## Tasks

### Blog System

* Publish first 12 articles
* 1 article per week minimum
* Use MDX content structure

### Priority Topics

1. Control ginecológico anual
2. PAP
3. Consulta ginecológica
4. Anticoncepción
5. Salud hormonal
6. Fertilidad
7. Embarazo

### SEO Improvements

* Internal linking strategy
* Service page optimization
* FAQ expansion
* Additional schema markup
* Local keyword optimization

### Reputation Building

* Google review collection process
* Review request workflow
* Monthly review target

### Monitoring

* Search Console review
* Keyword tracking
* Top landing page tracking

## Success Criteria

* 12 published articles
* 100+ organic visits/month
* 10+ ranking keywords
* Consistent Google reviews

---

# Phase 3 — Lead Management System (Conditional)

## Trigger

Only start when:

* More than 30 inquiries per month
  OR
* Doctor reports manual management becoming difficult

## Goal

Replace Google Forms and Sheets with structured lead management.

## Tasks

| # | Item                           |
| - | ------------------------------ |
| 1 | Create Supabase project        |
| 2 | Create patients table          |
| 3 | Build intake form              |
| 4 | Connect Supabase               |
| 5 | Submission notifications       |
| 6 | Data validation                |
| 7 | Remove Google Forms dependency |

## Success Criteria

* Leads stored automatically
* Notifications delivered
* No manual spreadsheet management

---

# Phase 4 — Medical Dashboard (Conditional)

## Trigger

Only start when:

* More than 10 appointments per week
  OR
* Doctor requests centralized patient tracking

## Goal

Allow Dr. Eglez to manage incoming inquiries efficiently.

## Tasks

| # | Item                    |
| - | ----------------------- |
| 1 | Supabase Auth           |
| 2 | Dashboard layout        |
| 3 | Patient list            |
| 4 | Search and filtering    |
| 5 | Contact status tracking |
| 6 | Protected routes        |

## Success Criteria

* Doctor can log in
* View inquiries
* Track patient status

---

# Phase 5 — Appointment Automation (Conditional)

## Trigger

Only start when appointment volume creates administrative overhead.

## Goal

Reduce manual follow-up work.

## Tasks

| # | Item                         |
| - | ---------------------------- |
| 1 | Calendly webhook integration |
| 2 | Appointment database         |
| 3 | Reminder system              |
| 4 | Cancellation notifications   |
| 5 | Configurable reminder timing |

## Success Criteria

* Automated reminders active
* Reduced no-shows
* Reduced manual communication

---

# Phase 6 — Email Automation

## Goal

Improve patient communication and retention.

## Tasks

| # | Item                        |
| - | --------------------------- |
| 1 | Welcome email               |
| 2 | Post-consultation follow-up |
| 3 | Blog subscription           |
| 4 | Unsubscribe management      |
| 5 | Review request emails       |

## Success Criteria

* Automated email workflows operational
* Compliance with applicable regulations

---

# Phase 7 — Advanced Marketing & Analytics

## Goal

Understand which channels generate appointments.

## Tasks

| # | Item                         |
| - | ---------------------------- |
| 1 | CTA click tracking           |
| 2 | Traffic source attribution   |
| 3 | Monthly conversion reporting |
| 4 | UTM tracking                 |
| 5 | Referral source analysis     |
| 6 | Optional retargeting pixels  |

## Success Criteria

* Doctor can identify highest-performing channels
* Marketing decisions become data-driven

---

# Business Trigger Framework

## Trigger A

100+ organic visits/month

→ Continue SEO expansion

---

## Trigger B

30+ inquiries/month

→ Build Lead Management System

---

## Trigger C

10+ appointments/week

→ Build Dashboard

---

## Trigger D

Administrative workload increasing

→ Build Appointment Automation

---

## Trigger E

Marketing budget available

→ Implement Advanced Analytics

---

# Non-Goals

Do not implement unless explicitly requested:

* Patient portal
* Complex CRM
* Multi-user administration
* Billing systems
* Electronic medical records
* Telemedicine platform
* Mobile applications

---

# Long-Term Vision

Create the leading gynecology digital presence in Mendoza with:

* Strong local SEO
* Consistent appointment generation
* Excellent patient experience
* Minimal operational complexity
* Sustainable long-term growth

Last updated: 2026-06-15*
