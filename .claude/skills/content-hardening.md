# Content Hardening, Accuracy & Style Alignment

<skill-invocation-trigger>
Run this skill when the user asks for:
- "defensibility hardening", "harden content", "defensibility pass"
- "style guide alignment", "economist style", "apply style guide"
- "content review", "content audit", "accuracy check"
- "sourcing audit", "citation check", "fact check"
- Any combination of the above
</skill-invocation-trigger>

## Overview

This skill performs a comprehensive content quality review:

1. **Defensibility Hardening** - Softens absolute claims to be legally and factually defensible
2. **Sourcing & Accuracy Audit** - Flags claims needing citations, outdated references, predictions
3. **Economist Style Guide Alignment** - Applies consistent editorial style

---

## Pass 1: Defensibility Hardening

### Search Terms

Use Grep to scan for these absolute terms across `docs/` directory:

```
cannot|will|ensure|guarantee|always|never|must|requires|proves|certain|definitely|impossible|perfectly|completely|absolutely|all cases|every case|no exceptions
```

### Replacement Rules

| Pattern | Replace With | Example |
|---------|--------------|---------|
| "cannot" | "cannot yet", "does not currently", "is not designed to" | "AI cannot explain itself" → "AI cannot yet reliably explain itself" |
| "will" (as certainty) | "is designed to", "aims to", "is expected to" | "This will prevent errors" → "This is designed to reduce errors" |
| "ensure" | "help ensure", "support", "contribute to" | "ensure compliance" → "help ensure compliance" |
| "guarantee" | "is designed to", "aims to provide", "supports" | "guarantees accuracy" → "is designed to support accuracy" |
| "always" | "as a rule", "in general", "typically", "in most cases" | "always works" → "typically works" |
| "never" | "avoid", "do not rely solely on", "as a rule, do not" | "never fails" → "is designed to minimise failures" |
| "must" (as absolute) | "should", "is recommended to", "is expected to" | "must be done" → "should be done" |
| "requires" (as absolute) | "typically requires", "generally requires", "may require" | "requires approval" → "typically requires approval" |
| "proves" | "indicates", "suggests", "demonstrates", "provides evidence that" | "proves effectiveness" → "demonstrates effectiveness" |
| "certain/definitely" | "likely", "expected", "anticipated" | "will certainly work" → "is expected to work" |
| "impossible" | "not currently feasible", "presents significant challenges" | "impossible to achieve" → "not currently feasible" |
| "perfectly/completely" | "largely", "substantially", "to a high degree" | "completely eliminates" → "substantially reduces" |

### Context-Sensitive Rules

**Time-scope claims:**
- Add "at present", "today", "as of [date]", "currently" to technology capability claims
- Example: "AI cannot do X" → "AI cannot yet do X" or "As of 2026, AI does not reliably do X"

**Convert guarantees to design intent:**
- "ensures X" → "is designed to X" or "aims to X"
- "guarantees X" → "supported by X" or "validated through regular testing"
- Add qualifiers like "when properly configured", "under normal conditions"

**Avoid implying universal capabilities:**
- Replace jargon that implies more than is available
- "internal states" → "available runtime telemetry" (unless discussing research instrumentation)
- "full transparency" → "transparency mechanisms" or "available transparency features"

**Label aspirations as aspirations:**
- Policy goals: "we recommend...", "should be required...", "best practice is..."
- Not: stating aspirations as facts about what's possible
- Example: "AI systems are transparent" → "AI systems should be transparent" or "transparency is a design goal"

### Exceptions (Do Not Soften)

- Direct quotes from legislation or standards
- Mathematical/logical certainties
- Definitions
- Content within `??? note` disclaimer blocks
- Explicit policy statements that are meant to be absolute

---

## Pass 2: Sourcing & Accuracy Audit

### What to Flag

#### 1. Unsourced Statistical/Numerical Claims

Search for patterns like:
```
[0-9]+%|[0-9]+x|[0-9]+ times|studies show|research shows|data shows|according to|statistics|survey
```

**Flag if:**
- Specific numbers without citation (e.g., "70% of projects fail")
- "Research shows..." without naming the research
- Comparative claims (e.g., "7x more likely") without source

**Fix options:**
- Add citation with verifiable URL
- Add "illustrative" disclaimer (e.g., "illustrative example based on typical market ranges")
- Soften to general statement (e.g., "research consistently shows" → no specific number)

#### 2. Predictions vs Scenarios

Search for:
```
will be|will become|will happen|will require|by 2030|by 2027|in the future|soon|eventually|inevitable
```

**Flag if:**
- Stated as fact rather than scenario/possibility
- No attribution to a source making the prediction

**Fix options:**
- Reframe as scenario: "One possible scenario is..."
- Add attribution: "According to [source], X may..."
- Add uncertainty: "X is anticipated" → "X may occur" or "some analysts expect X"

#### 3. Outdated Organisational References

**High-risk items to check:**
- Government programs (grants, initiatives) - status changes frequently
- Regulatory bodies - may be renamed, restructured, or abolished
- Legislation - may be amended, replaced, or repealed
- Policies and standards - may be updated or superseded
- Technology products/services - may be discontinued

**Search for:**
- Program names with dates
- "announced", "launched", "established" + year
- References to specific funding amounts
- Government department names

**Fix options:**
- Verify current status via web search
- Add "last verified: [date]" or "as of [date]"
- Add warning note about status changes
- Update or remove if obsolete

#### 4. Time-Sensitive Content

**Check for:**
- Dates in frontmatter (`last-reviewed`, `review-cycle`)
- Explicit dates in content
- References to "current", "recent", "new", "latest"
- Regulatory timelines and effective dates

**Ensure:**
- `last-reviewed` frontmatter is current
- `review-cycle` is set (quarterly for fast-changing, annually for stable)
- Content matches the claimed review date

### Audit Report Format

For each issue, document:

| Field | Description |
|-------|-------------|
| **Page** | File path or URL |
| **Quote** | Exact text (keep brief) |
| **Issue Type** | Unsourced claim / Prediction / Outdated reference / Time-sensitive |
| **Risk Level** | High / Medium / Low |
| **Recommended Edit** | Specific suggested wording |
| **Source/Fix** | Citation URL or alternative wording |

**Risk Levels:**
- **High**: Legal/reputational risk if wrong; specific numerical claims; regulatory info
- **Medium**: Could mislead but lower stakes; general claims; program references
- **Low**: Minor accuracy issues; stylistic concerns

---

## Pass 3: Economist Style Guide Alignment

### Oxford Comma

**Remove Oxford commas** (serial commas before "and"/"or" in lists):
- "privacy, security, and compliance" → "privacy, security and compliance"
- "risk, governance, or assurance" → "risk, governance or assurance"

**Exception:** Keep the comma if removing it creates ambiguity.

### Word Substitutions

| Avoid | Prefer |
|-------|--------|
| "utilise" | "use" |
| "implement" | "put in place", "carry out", "apply" |
| "leverage" | "use", "draw on", "build on" |
| "facilitate" | "help", "enable", "allow" |
| "impact" (as verb) | "affect", "influence", "have an effect on" |
| "key" (as adjective) | "important", "main", "chief", "central" |
| "significant" | "large", "important", "notable" (be specific) |
| "robust" | "strong", "sound", "resilient" (be specific) |
| "stakeholders" | name them: "employees", "customers", "investors" |
| "going forward" | "from now on", "in future", or delete |
| "in order to" | "to" |
| "prior to" | "before" |
| "subsequent to" | "after" |
| "at this point in time" | "now" |
| "due to the fact that" | "because" |
| "in the event that" | "if" |

### Capitalisation

**Use sentence case for headings** (capitalise only first word and proper nouns):
- "Key Laws That Apply Today" → "Key laws that apply today"
- Exception: If existing headings are consistently title case, maintain consistency within document

**Do not capitalise:**
- "government" (unless part of proper noun like "Australian Government")
- "federal", "state" (unless part of proper name)
- job titles when not before a name: "the chief executive said" not "the Chief Executive said"
- "board" (unless part of proper name like "the Reserve Bank Board")

**Do capitalise:**
- Proper nouns and names of specific acts, bodies, frameworks
- "Privacy Act 1988", "EU AI Act", "NIST AI RMF"

### Numbers

- Spell out one to nine; use figures for 10 and above
- Use figures for percentages: "5%" not "five per cent"
- Use figures with units: "3km", "5MB", "$2 million"

### Punctuation

- Use single quotes for quotations (Economist style), or maintain existing convention if consistent
- Avoid exclamation marks in body text
- Use en-dashes (–) for ranges, em-dashes (—) sparingly for parenthetical statements

### Tone

- Prefer active voice over passive
- Be direct and concise
- Avoid jargon where plain English works
- Write with confidence but not arrogance

---

## Workflow

### Quick Review (Single Page)
1. Read the specified page
2. Apply all three passes
3. Make edits directly
4. Summarise changes

### Full Site Audit
1. **Scope:** Confirm with user (all docs, specific section, or specific pages)

2. **Scan for absolutes:**
   ```
   Grep pattern="cannot|ensure|guarantee|always|never|must" path="docs/" output_mode="files_with_matches"
   ```

3. **Scan for unsourced claims:**
   ```
   Grep pattern="[0-9]+%|[0-9]+x|research shows|studies show" path="docs/" output_mode="content"
   ```

4. **Scan for predictions:**
   ```
   Grep pattern="will be|will become|by 20[2-3][0-9]|inevitable" path="docs/" output_mode="content"
   ```

5. **Check time-sensitive pages:**
   - `docs/safety-standards/` (legislation, regulations)
   - `docs/business-resources/` (grants, programs)
   - Any page with `last-reviewed` in frontmatter

6. **Generate audit report** with issues categorised by risk level

7. **Apply fixes** (with user approval for High-risk changes)

8. **Commit:**
   ```
   docs: Content hardening and style alignment

   Defensibility:
   - [summary]

   Sourcing/Accuracy:
   - [summary]

   Style:
   - [summary]

   Files updated: [count]

   Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
   ```

---

## Example Transformations

### Defensibility

**Before:**
> This framework ensures complete compliance with all Australian privacy requirements and will never expose personal data.

**After:**
> This framework is designed to support compliance with Australian privacy requirements and aims to minimise the risk of personal data exposure.

### Sourcing

**Before:**
> Organisations with effective change management are seven times more likely to meet AI project objectives.

**After (Option A - Add citation):**
> Organisations with effective change management are seven times more likely to meet AI project objectives ([Prosci, 2023](https://www.prosci.com/research)).

**After (Option B - Soften):**
> Research consistently shows that effective change management significantly improves project success rates.

### Style

**Before:**
> We utilize robust methodologies to leverage key insights, facilitating impactful outcomes for all stakeholders.

**After:**
> We use sound methods to draw on important insights, helping to deliver meaningful outcomes for employees, customers and partners.

---

## Maintenance Notes

- Review this skill quarterly to update examples and patterns
- Add new problematic patterns as they're discovered
- Keep word substitution list aligned with current Economist style guide
