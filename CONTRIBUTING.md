# Contributing to the Community Events Calendar

Thank you for your interest in contributing!  
This project exists to make community events visible and accessible, and we welcome submissions from across the community.

You do **not** need to be a programmer to contribute, but you **do** need a GitHub account.

## What you can contribute

You can contribute by:

- submitting a new event  
- updating details of an existing event  
- flagging an error or issue  
- suggesting improvements via GitHub Issues  

Most contributions take only a few minutes.

## How events are submitted

Events are submitted as **individual files**, one event per file.

Each event:

- is written in a simple text format (YAML)  
- lives in the `_data/events/` folder  
- is reviewed before being published  

Events are **not published automatically** — all submissions go through review.

## Submitting a new event

You do not need to know code, but you need a GitHub account.

### Step 1: Navigate to the events folder

Go to: _data/events/

### Step 2: Copy the event template

1. Open `event-template.yml`  
2. Click **Copy raw file** or **Edit**  
3. Copy the entire contents  

### Step 3: Create a new event file

1. Click **Add file → Create new file**  
2. Name your file using this format: YYYY-MM-DD-short-event-name.yml (**Example:** 2026-05-10-open-research-workshop.yml)

> Please use lowercase letters and hyphens instead of spaces.

### Step 4: Fill in the event details

Paste the template contents and replace the values.  

**Example:**

```yaml
title: "Open Research Workshop"
date: "2026-05-10"
time: "10:00–16:00"
timezone: "BST"
organiser: "Example University"
description: "A hands-on workshop introducing open research practices."
signup_url: "https://example.org/register"
location: "Oxford, UK"
```
### Tags

- Each event can have one or more tags.  
- Only predefined tags are allowed: `SSI Fellow`, `SSI Community`, `SSI Training`, `SSI Events`, `SSI Communications`, `SSI Research and Policy`.  
- List the tags in your event YAML under `tags:` as a YAML array.

### Step 5: Propose your changes

- Scroll to the bottom of the page
- Click Commit changes
- Select Create a new branch
- Click Propose changes
- GitHub will open a Pull Request automatically.

### Step 6: Automated checks and review

Once your Pull Request is opened:
- automated checks verify the event format
- you may see a ❌ if something needs fixing
- maintainers will review the submission

If changes are requested, you can:
- edit your file directly in the Pull Request
- push updates to the same PR

Once approved, your event will appear on the public calendar.

## Updating or correcting an event

To update an existing event:

1. Open the relevant event file
2. Click Edit
3. Make your changes
4. Open a Pull Request

Please do not create a new file for updates.

## Cancelling or removing an event

If an event is cancelled:
- update the description to clearly state this, or
- open an Issue asking maintainers to remove the event

## Validation rules (automatic checks)

Submissions are automatically checked to ensure:
- all required fields are present
- dates follow the correct format
- signup links are valid URLs
- no unexpected fields are included

If a check fails, GitHub will display an error message explaining why.

## Review criteria

Maintainers may decline submissions that are:
- incomplete or unclear
- out of scope for the calendar
- promotional without clear community relevance
- missing a valid signup or information link

If a submission is declined, maintainers will explain why.

## Need help?

If you’re unsure about anything:
- open a GitHub Issue
- or contact the maintainers listed in this repository

We’re happy to help and appreciate your contribution.
