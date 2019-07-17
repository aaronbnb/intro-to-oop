An abbreviation is a shortened form of a word or phrase.

The HTML `<abbr>` element is used to indicate an abbreviation.

In HTML5, the `<acronym>` element became deprecated. The `<abbr>` is now used for both abbreviations _and_ acronyms.

The `<abbr>` is used with a `title` attribute to associate a full description with the abbreviation. However, in practice, this approach to provide the expanded text presents numerous issues:

* The `title` attribute content is in practice only available to mouse users - hovering over the element. 

* The `title` attribute content appears in a tooltip, defined by the browser, that is challenging for people with low-vision to perceive.

* JAWS and NVDA screen reader users _must_ enable an option to hear the title text rather than the visible text. __By default, `title` attribute content is ignored.__

* VoiceOver simply does not announce the `title` attribute content on `<abbr>`.

* No combination of CSS generated content such as `::after`, ARIA attributes such as `aria-label`, or JavaScript, reliably fixes the issue.

To provide a full description of an abbreviation/acronym, with its first use, use an `<abbr>` to mark up the abbreviation, which provides a hint to user agents on how to announce/display the content. The `<abbr>` should be followed by its full description in plain text.

```html
<p><abbr>IMHO</abbr> (In my humble opinion) websites sometimes makes assumptions about how much their visitors know about a given topic or industry.</p>
<p>By providing a plain text expansion besides the acronyms, myself and probably others, are less confused by the jargon. Thus improving usability and <abbr>a11y</abbr> (accessibility).

```
