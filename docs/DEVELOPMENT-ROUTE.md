GINECOLOGIAMENDOZA.COM.AR

MASTER IMPLEMENTATION SPECIFICATION

AI DEVELOPMENT BIBLE

Version: 1.0

Purpose:
This document defines the complete business, technical, UX, SEO and architectural requirements for the implementation of ginecologiamendoza.com.ar.

The AI developer must use this document as the single source of truth.

If there is any ambiguity, prioritize:

1. Patient trust
2. Simplicity
3. Conversion to appointment booking
4. SEO
5. Performance
6. Scalability

---

PROJECT OVERVIEW

The project is not a medical website.

The project is a digital patient acquisition ecosystem.

The website exists to:

- Generate trust
- Educate patients
- Facilitate appointment booking
- Improve local search rankings
- Strengthen the professional image of Dr. Pablo Eglez

The website should feel:

- Professional
- Modern
- Human
- Discreet
- Fast
- Trustworthy

The website must NOT feel:

- Corporate
- Cold
- Hospital-like
- Sales-focused
- Aggressive

---

MEDICAL PROFILE

Doctor Name:
Dr. Pablo Eglez

Specialty:
Gynecology

Medical License:
13539

Clinic:
Centro Diagnóstico Mendoza

Phone:
2616575596

Address:
Av. Belgrano 1484
Mendoza
Argentina

Website:
ginecologiamendoza.com.ar

---

BUSINESS GOALS

Priority 1

General Gynecological Consultation

Primary acquisition channel.

---

Priority 2

Annual Gynecological Checkup

Primary recurring service.

---

Priority 3

Urgent Consultations

Secondary acquisition service.

Must never become the central marketing message.

---

PRIMARY USER PROFILE

Women seeking:

- Annual checkups
- Preventive care
- Hormonal health
- Contraception
- Fertility consultation
- Pregnancy follow-up
- Gynecological symptoms

Typical emotional state:

- Anxiety
- Doubt
- Uncertainty
- Need for privacy

Every design decision must reduce friction and increase confidence.

---

TECHNOLOGY STACK

Frontend

- React
- TypeScript
- Vite

---

UI

- TailwindCSS
- shadcn/ui
- Lucide Icons

---

Deployment

- Vercel

---

Repository

- GitHub

---

Analytics

- Google Analytics
- Google Search Console

---

Forms

Initial Phase:

Google Forms

No database required.

---

Scheduling

Calendly

Google Calendar Integration

---

Communication

WhatsApp Business

---

IMPORTANT ARCHITECTURAL RULE

DO NOT IMPLEMENT:

- Backend
- Authentication
- CRM
- Dashboard
- Admin Panel
- Supabase
- User Accounts

These systems are intentionally excluded from V1.

The objective is to maximize business value with minimum complexity.

---

WEBSITE ARCHITECTURE

ROUTES

/

Homepage

/about

About Dr. Pablo Eglez

/services

Services Overview

/blog

Blog Index

/contact

Contact

---

SEO LANDING PAGES

Must exist independently.

---

/consulta-ginecologica-mendoza

---

/control-ginecologico-mendoza

---

/salud-hormonal-mendoza

---

/fertilidad-mendoza

---

/anticoncepcion-mendoza

---

Each page must be SEO optimized individually.

---

HOMEPAGE STRUCTURE

Priority:

Conversion.

The homepage should answer:

Who is the doctor?

Can I trust him?

How do I book?

---

Section 1

Hero

Content:

Professional portrait.

Headline.

Subheadline.

Primary CTA.

Secondary CTA.

---

Primary CTA:

Solicitar Turno

---

Secondary CTA:

Contactar por WhatsApp

---

Section 2

Trust Indicators

Examples:

- Atención personalizada
- Consultas presenciales y virtuales
- Atención confidencial
- Turnos online

---

Section 3

About Doctor

Photo

Biography

Medical License

Experience

---

Section 4

Services

Card Grid

Each card links to service page.

---

Section 5

Booking Process

Explain:

1. Select appointment type
2. Select date
3. Complete information
4. Receive confirmation

---

Section 6

FAQ

SEO optimized.

---

Section 7

Contact

Map

Phone

Address

Calendly CTA

---

DESIGN SYSTEM

Design philosophy:

Premium healthcare.

Not luxury.

Not corporate.

Not feminine cliché.

---

Colors

Background:

#FAF8F5

White:

#FFFFFF

Primary:

#2E4057

Secondary:

#64748B

---

Typography

Clean

Modern

Accessible

Readable

---

Spacing

Generous whitespace.

Minimal visual noise.

---

Animations

Subtle only.

Use Framer Motion sparingly.

No distracting effects.

---

SEO REQUIREMENTS

Mandatory.

---

Technical SEO

Implement:

- sitemap.xml
- robots.txt
- canonical tags
- open graph tags
- twitter cards

---

Schema.org

Implement:

- Physician
- MedicalClinic
- LocalBusiness
- FAQPage

---

Performance Goals

Mobile First

Lighthouse

Performance > 90

SEO > 90

Accessibility > 90

Best Practices > 90

---

BLOG SYSTEM

Implementation:

MDX

No CMS

No WordPress

No database

---

Folder Structure

/content/blog

---

Each article:

Frontmatter

Title

Description

Date

Author

Slug

---

Target:

1 article per week

Minimum.

---

INITIAL CONTENT STRATEGY

Create placeholders for future articles.

Topics:

- PAP
- Annual Checkups
- Contraception
- Fertility
- Hormonal Health
- Pregnancy
- Gynecological Prevention

---

APPOINTMENT SYSTEM

Calendly Integration

Mandatory.

---

Capabilities:

- In-person
- Virtual
- Google Meet
- Phone Consultation

---

Must support:

Embedded widget

External booking page

---

FORMS

Use Google Forms.

---

Collect:

Name

Last Name

Age

Phone

Email

Insurance Provider

Membership Number

Consultation Reason

Preferred Contact Method

---

WHATSAPP INTEGRATION

Floating button.

Visible at all times.

---

Mobile optimized.

---

Pre-filled message.

Example:

Hola Dr. Eglez, quisiera solicitar información sobre una consulta.

---

GOOGLE BUSINESS PROFILE

Business data must remain consistent across:

Website

Google Business

Calendly

Google Workspace

Social Media

---

NAP Consistency

Name

Address

Phone

Must always match.

---

ANALYTICS

Install:

Google Analytics

Google Search Console

---

Track:

CTA Clicks

Calendly Clicks

WhatsApp Clicks

Form Submissions

Page Views

Traffic Sources

---

FUTURE SCALABILITY

DO NOT IMPLEMENT NOW.

Document only.

Future phases:

Phase 2

Supabase

Patient CRM

---

Phase 3

Medical Dashboard

---

Phase 4

Appointment Reminders

---

Phase 5

Email Automation

---

Phase 6

Advanced Marketing Automation

---

DEVELOPMENT ORDER

TASK 01

Project setup

React

TypeScript

Vite

Tailwind

shadcn

---

TASK 02

Routing structure

---

TASK 03

Global layout

---

TASK 04

Design system

---

TASK 05

Homepage

---

TASK 06

About Page

---

TASK 07

Services Pages

---

TASK 08

Contact Page

---

TASK 09

Calendly Integration

---

TASK 10

WhatsApp Integration

---

TASK 11

Blog System

---

TASK 12

SEO Foundations

---

TASK 13

Schema.org

---

TASK 14

Analytics

---

TASK 15

Performance Optimization

---

TASK 16

Mobile Optimization

---

TASK 17

Accessibility Review

---

TASK 18

Final QA

---

SUCCESS CRITERIA

The final product must:

- Load quickly
- Rank locally
- Build trust
- Generate appointments
- Be easy to maintain
- Have near-zero infrastructure cost
- Be scalable without major rewrites

The website is not a brochure.

The website is the foundation of a long-term patient acquisition system for Dr. Pablo Eglez.

