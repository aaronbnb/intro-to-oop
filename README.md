An abbreviation is a shortened form of a word or phrase.

The HTML `<abbr>` element is used to indicate an abbreviation.

In HTML5, the `<acronym>` element was deprecated. The `<abbr>` is now used for both abbreviations _and_ acronyms.

The `<abbr>` is used with a `title` attribute to associate a full description with the abbreviation. However, in practice, this approach to provide the expanded text presents numerous issues:

* The `title` attribute content is in practice only available to mouse users - hovering over the element. The content appears in a tooltip, defined by the browser, that is challenging for people with low-vision to perceive.

* JAWS and NVDA screen reader users _must_ enable an option to hear the title text rather than the visible text. __By default, `title` attribute content is ignored.__ And VoiceOver simply does not announce the `title` attribute content on `<abbr>`.

The use of CSS, JavaScript, or ARIA attributes such as `aria-label` does reliably fix the issue.

An abbreviation is a shortened form of a word or phrase.

The HTML `<abbr>` element is used to indicate an abbreviation.

In HTML5, the `<acronym>` element was deprecated. The `<abbr>` is now used for both abbreviations _and_ acronyms.

The `<abbr>` is used with a `title` attribute to associate a full description with the abbreviation. However, in practice, this approach to provide the expanded text presents numerous issues:

* The `title` attribute content is in practice only available to mouse users - hovering over the element. The content appears in a tooltip, defined by the browser, that is challenging for people with low-vision to perceive.

* JAWS and NVDA screen reader users _must_ enable an option to hear the title text rather than the visible text. By default, `title` attribute content is ignored. And VoiceOver simply does not announce the `title` attribute content on `<abbr>`.

The use of CSS, JavaScript, or ARIA attributes such as `aria-label` does reliably fix the issue.
