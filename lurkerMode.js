// Copy this script into the browser console to delete all not needed elements

const elementIdentifiers = [
    'twilight-sticky-footer-root', // Footer when not signed in
]

const elementClasses = [
    '.Layout-sc-1xcs6mc-0.bGyiZe.chat-input', // Chat input
    '.Layout-sc-1xcs6mc-0.jBYVfx.stream-chat-header', // Chat header
    '.Layout-sc-1xcs6mc-0.jaGgya', // Gifted subs + bits
    '.Layout-sc-1xcs6mc-0.bYReYr', // Cookie message
    '.Layout-sc-1xcs6mc-0.kAIqwe', // Pinned message
    '.InjectLayout-sc-1i43xsx-0.kTZbIF.right-column__toggle-visibility.toggle-visibility__right-column.toggle-visibility__right-column--expanded', // Button
    '.InjectLayout-sc-1i43xsx-0.ghHeNF.top-nav', // Top navigation
    '.Layout-sc-1xcs6mc-0.bbPHvU.side-nav.side-nav--collapsed', // Side navigation,

]

function deleteElementById(identifier) {
    let element = document.getElementById(identifier);
    if (element) {
        element.remove();
    }
}

function deleteClass(className) {
    document.querySelectorAll(className).forEach(function(element) {
  element.remove();
});
}

elementIdentifiers.forEach(deleteElementById)
elementClasses.forEach(deleteClass)
