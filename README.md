# research-software-events-calendar

This repository powers a **public, curated calendar of research software community events**, published as a static website via GitHub Pages.

Events are submitted by the community, reviewed by maintainers, and published once approved.

🔗 **Live calendar:**  
[https://oscarseip.github.io/research-software-events-calendar/](https://oscarseip.github.io/research-software-events-calendar/)

## How the calendar works

- Each event lives in its **own YAML file** inside `_data/events/`  
- Events are submitted via **Pull Requests**  
- Automated checks make sure submissions are complete and well-formed  
- Maintainers review submissions before they are published  
- The public website is updated automatically via GitHub Pages

## 📢 Contributing

We welcome contributions from anyone in the community.  
For detailed instructions on submitting events, updating existing events, and how the review process works, please see our **[CONTRIBUTING.md](CONTRIBUTING.md)**.

> This file includes step-by-step guidance for new contributors, template usage, naming conventions, and information about automated validation.

## Validation & review

Submissions are automatically checked to ensure:

- All required fields are present  
- Dates follow the correct format  
- Signup links are valid URLs  
- No unexpected fields are included  

Maintainers also review submissions for clarity, relevance, and appropriateness before publishing.

## Maintainer notes

- Events live in `_data/events/`  
- Validation rules are in `schemas/event-v1.json`  
- Automated checks run on every Pull Request  
- The site is published via GitHub Pages  

## 🤝 Code of conduct

All contributors are expected to engage respectfully and constructively.  
Event submissions may be declined at the maintainers’ discretion.

## ❓ Questions or help

If you’re unsure about anything:

- Open a GitHub Issue  
- Or contact the maintainers listed in this repository  

Thank you for helping build and sustain this community resource 💛
