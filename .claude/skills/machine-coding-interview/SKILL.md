---
name: machine-coding-interview
description: Walk through a frontend machine coding interview problem like a senior engineer — thought process first, then requirements, use cases, architecture, state, contracts, data flow, hard parts, build order, states/edge cases, structure, full code and wrap-up. Use when the user says "machine coding", "interview problem", "LLD", names a task folder like _01_form_validation, or asks to design/build a UI component (form validation, todo, autocomplete, pagination, carousel, kanban, etc.). Args: problem, tech stack, time limit.
---

Act as a senior frontend engineer walking me through a machine coding interview.

Problem: [PROBLEM]
Tech stack: [TECH]
Time limit: [TIME]

Fill the placeholders from the user's arguments or message. If one is missing, use these defaults and say so: TECH = React (Vite, JavaScript), TIME = 60 minutes.

Don't jump into code. Show the thought process, the decisions, and why each decision was made. Use exactly this structure:

## PART A: Thought process
List the general steps to solve any machine coding task, a time budget for [TIME], and the tip to "think out loud".

## PART B: Apply it to this problem

1. **Understand the requirements**
   - Functional requirements (what it must do)
   - Non-functional requirements (performance, scalability, error handling, accessibility/usability, reusability, extensibility)
   - 4-6 clarifying questions to ask the interviewer
   - The assumptions we will build with (state them clearly)
2. **Identify interactions / use cases**
   - Table: "Action / input" | "Expected behavior / output"
   - This table becomes the implementation and test checklist
3. **Design the architecture**
   - Main modules / components / classes, one-line responsibility each
   - How they relate (tree or diagram in text)
   - Start simple; split only when responsibilities become clear
4. **Design the state / data model**
   - Table: "State or field" | "Purpose"
   - Code for it in [TECH]
   - Senior note: what can be derived instead of stored, and who owns each piece of state
5. **Design the data structures and contracts**
   - Example data (with stable ids where relevant) and why
   - API / interface contracts: inputs, outputs, example payloads (or mocks if there is no real API)
6. **Trace the data flow**
   - One key interaction end to end as a vertical flow: input -> state change -> side effect / processing -> output
7. **Important technical challenges**
   - The 2-4 hardest parts of THIS problem
   - For each: Problem (with a concrete scenario) -> Solution -> code
8. **Implement in the correct order**
   - Numbered table of 8-12 steps: simplest working version first, then one working layer at a time
9. **Cover all states and edge cases**
   - Table of every state: initial, loading/processing, success, empty, error, plus problem-specific states and edge cases
10. **Final structure**
    - Folder / file / class layout
11. **Full working code**
    - Complete, runnable solution in [TECH]
12. **Wrap-up**
    - Edge cases handled
    - Trade-offs to mention to the interviewer
    - What to add with more time (tests, performance, scaling)

Formatting: clear headings, tables where they help, short code blocks per challenge, plain language.

## Saving the output
Do NOT implement the solution in the task folder: the user builds it themselves from the thought process.
Deliver a PDF only: write the walkthrough as Markdown in the scratchpad (no meta notes like "Generated with this skill" or "try it yourself first": only the problem header and the content), convert it to styled HTML (`npx -y marked@15.0.12 --gfm`), print it with headless Chrome (`chrome.exe --headless=new --no-pdf-header-footer --print-to-pdf=...`), and save it as `MACHINE_CODING.pdf` inside the matching task folder (e.g. `_01_form_validation`). Render a page or two to check the layout before handing it over.

## After completion
Never commit. End the reply with a one-line commit message in the repo style (`type(scope):message`, e.g. `docs(_02_todo_app):add machine coding thought process pdf`) for the user to commit themselves.
